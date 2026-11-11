"""Render only known non-secret manifest substitutions from saved ARM outputs."""
import argparse
import json
from pathlib import Path
import re
from string import Template

ROOT = Path(__file__).resolve().parents[1]


def values():
    config = json.loads((ROOT / '.state/config.json').read_text())
    foundation = json.loads((ROOT / '.state/foundation.outputs.json').read_text())
    identities = {item['name']: item for item in foundation['identities']['value']}
    return {
        'PRODUCTS_CLIENT_ID': identities['products']['clientId'],
        'CHAT_CLIENT_ID': identities['chat']['clientId'],
        'APP_CONFIG_ENDPOINT': foundation['configEndpoint']['value'],
        'ACR_HOST': config['stem'] + 'acr.azurecr.io',
        'IMAGE_TAG': json.loads((ROOT / '.state/images.json').read_text())['tag'],
        'ALLOWED_CIDR': config['allowedCidr'],
    }


def render(source, substitutions):
    required = set(re.findall(r'\$\{([A-Z_]+)\}', source))
    if required - substitutions.keys():
        raise ValueError('Missing manifest values: ' + ', '.join(sorted(required - substitutions.keys())))
    return Template(source).substitute(substitutions)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('name', choices=['products', 'service', 'chat', 'inspect'])
    args = parser.parse_args()
    print(render((ROOT / f'k8s/{args.name}.yaml').read_text(), values()), end='')
