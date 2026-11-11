"""A version tag from build inputs, independent of uncommitted Git changes."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
paths = [ROOT / 'requirements.txt', ROOT / 'constraints.txt', ROOT / 'tools/inspect_db.py']
for directory in ['apps/products', 'apps/products-chat', 'apps/shared/rag_core']:
    paths.extend(path for path in (ROOT / directory).rglob('*') if path.is_file()
                 and not {'target', '__pycache__', '.pytest_cache'}.intersection(path.parts)
                 and path.suffix not in {'.log', '.pyc'})
digest = hashlib.sha256()
for path in sorted(paths):
    digest.update(path.relative_to(ROOT).as_posix().encode() + b'\0' + path.read_bytes())
tag = 'w1-' + digest.hexdigest()[:12]
(ROOT / '.state/images.json').write_text(json.dumps({'tag': tag}) + '\n')
print(tag)
