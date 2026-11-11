"""Create missing random secrets in Key Vault; never print their values."""
import json
import os
from pathlib import Path
import secrets
import subprocess
import tempfile
import time

ROOT = Path(__file__).resolve().parents[1]
config = json.loads((ROOT / '.state/config.json').read_text())
base = ['az', 'keyvault', 'secret']
target = ['--subscription', config['subscription'], '--vault-name', config['stem'] + '-kv', '--only-show-errors']
for attempt in range(36):
    result = subprocess.run(base + ['list', *target, '--query', '[].name', '-o', 'json'], capture_output=True, text=True)
    if result.returncode == 0:
        names = json.loads(result.stdout)
        break
    if attempt == 35:
        raise SystemExit('Key Vault access timed out. Check Secrets Officer RBAC and soft-deleted name collisions.')
    time.sleep(5)
for name in ['postgres-password', 'products-password']:
    if name in names:
        print('Reusing Key Vault secret ' + name)
        continue
    handle, filename = tempfile.mkstemp(dir=ROOT / '.state', prefix='secret-', suffix='.tmp')
    try:
        with os.fdopen(handle, 'w') as file:
            file.write(secrets.token_urlsafe(36))
        os.chmod(filename, 0o600)
        subprocess.run(base + ['set', *target, '--name', name, '--file', filename, '-o', 'none'], check=True)
    finally:
        Path(filename).unlink(missing_ok=True)
    print('Created Key Vault secret ' + name + ' (value not displayed)')
