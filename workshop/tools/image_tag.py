"""Version both images from the actual separate application build inputs."""
import hashlib
import json
from pathlib import Path
from repositories import application_dir

ROOT = Path(__file__).resolve().parents[1]
digest = hashlib.sha256()
for name in ['products', 'chat']:
    app = application_dir(name)
    for path in sorted(app.rglob('*')):
        if not path.is_file() or {'.git','target','__pycache__','.pytest_cache','.venv','dist'}.intersection(path.relative_to(app).parts):
            continue
        if path.name.startswith('.env') or path.name == 'local.settings.json' or path.suffix in {'.log','.pyc','.pem','.key'}:
            continue
        digest.update((name + '/' + path.relative_to(app).as_posix()).encode() + b'\0' + path.read_bytes())
tag = 'w1-' + digest.hexdigest()[:12]
(ROOT / '.state').mkdir(exist_ok=True)
(ROOT / '.state/images.json').write_text(json.dumps({'tag': tag}) + '\n')
print(tag)
