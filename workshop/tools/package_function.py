"""Create a portable source ZIP; Azure remotely installs Linux dependencies."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parents[1]
destination = ROOT / '.state/embedder.zip'
destination.parent.mkdir(exist_ok=True)
with ZipFile(destination, 'w', ZIP_DEFLATED) as archive:
    for name in ['function_app.py', 'host.json']:
        archive.write(ROOT / 'apps/products-embedder' / name, name)
    for path in (ROOT / 'apps/shared/rag_core').glob('*.py'):
        archive.write(path, 'rag_core/' + path.name)
    archive.writestr('requirements.txt', (ROOT / 'requirements.txt').read_text() + '\nazure-functions==1.24.0\n')
    archive.write(ROOT / 'constraints.txt', 'constraints.txt')
print(destination)
