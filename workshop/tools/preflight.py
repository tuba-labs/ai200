"""Read-only checks. Unknown critical quota/permission results fail closed."""
import argparse
import fnmatch
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
PROVIDERS = ['Microsoft.Compute', 'Microsoft.ContainerService', 'Microsoft.ContainerRegistry', 'Microsoft.Network',
             'Microsoft.Storage', 'Microsoft.DBforPostgreSQL', 'Microsoft.ServiceBus', 'Microsoft.EventGrid',
             'Microsoft.Web', 'Microsoft.App', 'Microsoft.ManagedIdentity', 'Microsoft.KeyVault',
             'Microsoft.AppConfiguration', 'Microsoft.CognitiveServices', 'Microsoft.OperationalInsights', 'Microsoft.Insights']


def run(*args, raw=False):
    result = subprocess.run(args, capture_output=True, text=True, timeout=120)
    if result.returncode:
        raise RuntimeError('Command failed: ' + ' '.join(args[:3]) + '. Check sign-in, permissions, network and CLI version.\n' + result.stderr[-800:])
    return result.stdout.strip() if raw else json.loads(result.stdout)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--local-only', action='store_true', help='Check local tools/Docker without Azure sign-in or bootstrap state')
    args = parser.parse_args()
    problems = []

    def check(label, action):
        try:
            action()
            print('PASS ' + label)
        except Exception as error:
            problems.append(label)
            print('FAIL ' + label + ': ' + str(error))

    def tools():
        for tool in ['bash', 'python3', 'az', 'docker', 'kubectl', 'java', 'jq', 'openssl', 'curl', 'git', 'zip', 'unzip']:
            if not shutil.which(tool):
                raise RuntimeError(f'Missing {tool}; see prerequisite chapter. Use Bash in WSL2 on Windows.')
        if sys.version_info < (3, 12):
            raise RuntimeError('Python 3.12 or newer is required for local tooling')
        java = subprocess.run(['java', '-version'], capture_output=True, text=True)
        if not re.search(r'version "21\.', java.stderr + java.stdout):
            raise RuntimeError('Set JAVA_HOME to Java 21 for the workshop')
        cli = tuple(int(x) for x in run('az', 'version')['azure-cli'].split('.')[:2])
        if cli < (2, 91):
            raise RuntimeError('Upgrade Azure CLI to 2.91 or newer; this baseline checks the supplied Flex and Event Grid flags')
        run('az', 'bicep', 'version', raw=True)
        version = run('kubectl', 'version', '--client', '-o', 'json')['clientVersion']
        if int(version['major']) != 1 or int(re.sub(r'\D', '', version['minor'])) < 32:
            raise RuntimeError('Use kubectl 1.32+ and stay within one minor of the AKS server version')
        engine = run('docker', 'info', '--format', '{{json .ServerVersion}}')
        require(int(engine.split('.')[0]) >= 24, 'Use Docker Engine/Desktop with Engine 24 or newer')
        require(run('docker', 'info', '--format', '{{json .OSType}}') == 'linux',
                'Switch Docker Desktop to Linux containers and enable integration for your WSL distribution')
        run('docker', 'buildx', 'version', raw=True)
        shell = run('bash', '--version', raw=True)
        require(int(re.search(r'version (\d+)', shell)[1]) >= 4, 'Use Bash 4+; on macOS install a recent Bash')
        openssl = run('openssl', 'version', raw=True)
        require(openssl.startswith('OpenSSL ') and int(openssl.split()[1].split('.')[0]) >= 3,
                'Use OpenSSL 3 for the supplied TLS certificate commands')
        jq = run('jq', '--version', raw=True)
        require(tuple(int(part) for part in jq.removeprefix('jq-').split('.')[:2]) >= (1, 6), 'Use jq 1.6 or newer')
    check('Local tools, versions and Docker daemon', tools)
    if args.local_only:
        if problems:
            raise SystemExit('Local prerequisites failed. Fix the reported tools or Docker WSL integration and rerun.')
        print('All local gates passed. Azure account, permissions, regional capacity and quotas still need the full checker.')
        return
    config = json.loads((ROOT / '.state/config.json').read_text())
    from bootstrap import validate
    validate(config)
    subscription, location = config['subscription'], config['location']

    def az(*args):
        return run('az', *args, '--subscription', subscription, '--only-show-errors', '-o', 'json')

    check('Azure sign-in and enabled subscription', lambda: require(az('account', 'show')['state'] == 'Enabled', 'Run az login and select an enabled subscription'))

    def providers():
        items = {item['namespace']: item['registrationState'] for item in az('provider', 'list')}
        missing = [name for name in PROVIDERS if items.get(name) != 'Registered']
        require(not missing, 'Register these providers using bash workshop/scripts/00-check.sh --register: ' + ', '.join(missing))
    check('Resource providers', providers)

    def permissions():
        url = f'https://management.azure.com/subscriptions/{subscription}/providers/Microsoft.Authorization/permissions?api-version=2022-04-01'
        items = az('rest', '--url', url)['value']
        required = ['Microsoft.Resources/subscriptions/resourceGroups/write',
                    'Microsoft.Resources/deployments/write', 'Microsoft.Authorization/roleAssignments/write']
        for action in required:
            allowed = any(any(fnmatch.fnmatchcase(action.lower(), pattern.lower()) for pattern in item.get('actions', []))
                          and not any(fnmatch.fnmatchcase(action.lower(), pattern.lower()) for pattern in item.get('notActions', [])) for item in items)
            require(allowed, f'Cannot prove permission {action}. Use Contributor plus Role Based Access Control Administrator, or Owner, at subscription scope; policy/deny assignments can still block deployment.')
    check('Resource creation and role-assignment permissions', permissions)

    def compute():
        skus = az('vm', 'list-skus', '--location', location, '--size', config['aksVmSize'], '--all')
        sku = next((s for s in skus if s['name'] == config['aksVmSize']), None)
        restricted = sku is None or any(item.get('type') == 'Location' for item in sku.get('restrictions', []))
        require(not restricted, 'The chosen node VM is unavailable to this subscription/region. Pick a supported 4-vCPU, 16-GiB VM and rerun bootstrap with a reviewed config.')
        cores = int(next(c['value'] for c in sku['capabilities'] if c['name'] == 'vCPUs'))
        usages = az('vm', 'list-usage', '--location', location)
        require(bool(usages), 'VM quota API returned no data. Check Compute quotas in the portal or ask the subscription owner; do not start paid provisioning yet.')
        indexed = {u['name']['value'].lower(): u for u in usages}
        for key in ['cores', sku['family'].lower()]:
            quota = indexed.get(key)
            require(quota is not None and quota['limit'] - quota['currentValue'] >= cores * 2,
                    f'Need {cores * 2} free regional and {sku["family"]} vCPUs (node plus upgrade surge). Request quota or change region/VM.')
    check('AKS VM availability and quota including surge', compute)

    def services():
        regions = az('functionapp', 'list-flexconsumption-locations')
        require(any(item['name'] == location for item in regions), 'Flex Consumption is unavailable in this region')
        for namespace, resource_type in [('Microsoft.DBforPostgreSQL', 'flexibleServers'), ('Microsoft.ServiceBus', 'namespaces'), ('Microsoft.AppConfiguration', 'configurationStores')]:
            provider = az('provider', 'show', '--namespace', namespace)
            resource = next(item for item in provider['resourceTypes'] if item['resourceType'] == resource_type)
            require(any(re.sub(r'\W', '', value).lower() == location for value in resource['locations']), f'{namespace}/{resource_type} unavailable in {location}')
    check('Regional service support', services)

    def models():
        available = az('cognitiveservices', 'model', 'list', '--location', location)
        usage = az('cognitiveservices', 'usage', 'list', '--location', location)
        require(bool(usage), 'Model quota API returned no data. Confirm Azure OpenAI model/deployment quota with the owner before creating AKS.')
        for kind in ['chat', 'embedding']:
            matches = [item for item in available if item.get('model', {}).get('name') == config[kind + 'Model']
                       and item['model'].get('version') == config[kind + 'Version']]
            require(bool(matches), f'{kind} model/version is not offered in {location}')
            candidates = [item for item in usage if config[kind + 'Model'].lower() in item['name']['value'].lower()
                          and config['modelSku'].lower() in item['name']['value'].lower()]
            require(any(item['limit'] - item['currentValue'] >= config[kind + 'Capacity'] for item in candidates),
                    f'Insufficient/unrecognized {kind} quota for {config["modelSku"]}. Inspect az cognitiveservices usage list; capacity units vary by model. The model-only probe is the final access gate.')
    check('Chat and embedding model offers and quota', models)
    if problems:
        raise SystemExit(f'{len(problems)} prerequisite check(s) failed. Fix these before provisioning.')
    print('All read-only gates passed. Next: model-only deployment and actual token-based inference probes.')


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


if __name__ == '__main__':
    main()
