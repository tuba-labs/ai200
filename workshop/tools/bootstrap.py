"""Write validated NON-SECRET workshop configuration; no Azure mutation."""
import argparse
import hashlib
import ipaddress
import json
from pathlib import Path
import subprocess
import urllib.request
from uuid import UUID

ROOT = Path(__file__).resolve().parents[1]


def validate(config):
    UUID(config['subscription'])
    import re
    if not re.fullmatch(r'[a-z][a-z0-9]{2,7}', config['prefix']):
        raise ValueError('Prefix must be 3..8 lowercase letters/digits, beginning with a letter')
    if not re.fullmatch(r'[a-z0-9]+', config['location']):
        raise ValueError('Use an Azure location name such as swedencentral')
    network = ipaddress.ip_network(config['allowedCidr'], strict=True)
    if network.version != 4 or network.prefixlen != 32 or not network.network_address.is_global:
        raise ValueError('The core workshop requires your public IPv4 /32, never 0.0.0.0/0')
    if config['aksNodes'] != 1:
        raise ValueError('The core demonstration is sized for one node; review resources before changing it')
    suffix = hashlib.sha256((config['subscription'] + ':' + config['prefix']).encode()).hexdigest()[:6]
    config['stem'] = config['prefix'] + suffix
    config['group'] = config['stem'] + '-rg'
    config['workshopId'] = 'products-rag-' + suffix
    return config


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--subscription')
    parser.add_argument('--location')
    parser.add_argument('--prefix')
    parser.add_argument('--allowed-cidr')
    parser.add_argument('--config', type=Path, default=ROOT / 'config.example.json')
    args = parser.parse_args()
    destination = ROOT / '.state/config.json'
    if destination.exists():
        print(f'Reusing {destination}. Delete it only after cleanup to start a different workshop.')
        print(json.dumps(validate(json.loads(destination.read_text())), indent=2))
        return
    config = json.loads(args.config.read_text())
    config['subscription'] = args.subscription or config['subscription'] or subprocess.check_output(
        ['az', 'account', 'show', '--query', 'id', '-o', 'tsv'], text=True).strip()
    for name in ('location', 'prefix'):
        if getattr(args, name):
            config[name] = getattr(args, name)
    config['allowedCidr'] = args.allowed_cidr or config['allowedCidr']
    if not config['allowedCidr']:
        with urllib.request.urlopen('https://api.ipify.org', timeout=20) as response:
            config['allowedCidr'] = response.read().decode().strip() + '/32'
    validate(config)
    destination.parent.mkdir(exist_ok=True)
    destination.write_text(json.dumps(config, indent=2) + '\n')
    destination.chmod(0o600)
    print(json.dumps(config, indent=2))
    print('Review the subscription, region and source IP before running the paid setup stages.')


if __name__ == '__main__':
    main()
