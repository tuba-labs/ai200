"""Generate ARM parameters from one validated config; secrets stay ephemeral."""
import json
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
config = json.loads((ROOT / '.state/config.json').read_text())
stage = sys.argv[1]
keys = {
    'models': ['location', 'chatModel', 'chatVersion', 'chatCapacity', 'embeddingModel', 'embeddingVersion', 'embeddingCapacity', 'modelSku'],
    'foundation': ['location', 'stem'],
    'database': ['location', 'stem', 'postgresSku'],
    'compute': ['location', 'stem', 'aksVmSize', 'aksNodes'],
}[stage]
values = {key: {'value': config[key]} for key in keys}
if stage == 'models':
    values['name'] = {'value': config['stem'] + '-ai'}
if stage in ('models', 'foundation'):
    values['operatorId'] = {'value': sys.argv[2]}
if stage == 'database':
    secret = subprocess.check_output(['az', 'keyvault', 'secret', 'show', '--subscription', config['subscription'],
              '--vault-name', config['stem'] + '-kv', '--name', 'postgres-password', '--query', 'value', '-o', 'tsv'], text=True).strip()
    values['pgPassword'] = {'value': secret}
path = ROOT / f'.state/{stage}.parameters.json'
path.write_text(json.dumps({'$schema': 'https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#',
                            'contentVersion': '1.0.0.0', 'parameters': values}))
path.chmod(0o600)
