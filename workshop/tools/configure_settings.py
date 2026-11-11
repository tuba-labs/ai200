"""Write ordinary settings through the App Configuration data plane."""
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
config = json.loads((ROOT / '.state/config.json').read_text())
stem = config['stem']
database = json.loads((ROOT / '.state/database.outputs.json').read_text())
values = {
    'pg-host': database['host']['value'], 'pg-database': 'products', 'pg-user': 'workshopadmin',
    'blob-endpoint': f'https://{stem}st.blob.core.windows.net',
    'servicebus-host': f'{stem}-bus.servicebus.windows.net',
    'key-vault-uri': f'https://{stem}-kv.vault.azure.net',
    'model-endpoint': f'https://{stem}-ai.openai.azure.com',
    'embedding-deployment': 'embedding', 'chat-deployment': 'chat',
    'embedding-dimensions': '1536', 'retrieval-count': '3', 'chunk-size': '900', 'min-similarity': '0.35',
}
for key, value in values.items():
    subprocess.run(['az', 'appconfig', 'kv', 'set', '--subscription', config['subscription'],
                    '--name', stem + '-cfg', '--auth-mode', 'login', '--key', 'rag:' + key,
                    '--label', 'workshop', '--value', value, '--yes', '-o', 'none', '--only-show-errors'], check=True)
    print('Configured rag:' + key)
