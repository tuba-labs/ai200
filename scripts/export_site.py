"""Export a clean publishable tree; never include local workshop credentials."""
import argparse
from pathlib import Path
import shutil

from serve import ROOT, public_files

DESTINATION = ROOT / '.site'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    root = ROOT.resolve(strict=True)
    destination = DESTINATION
    if destination.is_symlink() or destination.is_junction() or destination.resolve().parent != root:
        raise SystemExit('Refusing a redirected export directory')
    files = public_files()
    relative = {path.relative_to(root) for path in files}
    if args.check:
        existing = {path.relative_to(destination) for path in destination.rglob('*') if path.is_file()}
        if existing != relative or any((destination / name).read_bytes() != (root / name).read_bytes() for name in relative):
            raise SystemExit('Regenerate the public .site export with python scripts/build.py')
    else:
        # The resolved fixed target is checked above, before recursive removal.
        if destination.exists():
            shutil.rmtree(destination)
        destination.mkdir()
        for path in files:
            target = destination / path.relative_to(root)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(path, target)
    print(f'Public export: {len(files)} files; runtime state/tooling/build caches excluded.')


if __name__ == '__main__':
    main()
