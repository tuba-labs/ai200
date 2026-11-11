"""Locate separate app checkouts; cloning runs only when explicitly requested."""
import argparse
import json
import os
from pathlib import Path
import subprocess

WORKSHOP = Path(__file__).resolve().parents[1]


def repositories():
    return json.loads((WORKSHOP / 'repositories.json').read_text(encoding='utf-8'))


def application_dir(name, *, require=True):
    entry = repositories()[name]
    parent = Path(os.environ.get('AI200_APPS_DIR', WORKSHOP.parent.parent)).expanduser().resolve()
    path = parent / entry['directory']
    if require and not (path / '.git').exists():
        raise RuntimeError(f'Missing {entry["name"]} checkout: {path}. Run bash workshop/scripts/get-apps.sh.')
    return path


def git(path, *args):
    result = subprocess.run(['git', '-c', 'safe.directory=' + path.as_posix(), '-C', str(path), *args], text=True, capture_output=True, timeout=180)
    if result.returncode:
        raise RuntimeError(f'Git failed for {path.name}: {result.stderr[-1200:]}')
    return result.stdout.strip()


def clone():
    for name, entry in repositories().items():
        path = application_dir(name, require=False)
        if path.exists():
            if not (path / '.git').exists():
                raise RuntimeError(f'Refusing to overwrite existing non-repository directory: {path}')
            if git(path, 'remote', 'get-url', 'origin').removesuffix('.git') != entry['url'].removesuffix('.git'):
                raise RuntimeError(f'Origin differs for {path}; keep your checkout and choose AI200_APPS_DIR explicitly.')
            head = git(path, 'rev-parse', 'HEAD')
            if entry['ref'] != 'main' and head != entry['ref']:
                raise RuntimeError(f'{path} is at {head}, expected {entry["ref"]}. Commit local work and select the workshop revision explicitly.')
            print(f'Reusing {path}; local work is preserved.')
            continue
        path.parent.mkdir(parents=True, exist_ok=True)
        result = subprocess.run(['git','clone','--no-checkout',entry['url'],str(path)], timeout=180)
        if result.returncode:
            raise RuntimeError(f'Clone failed for {entry["url"]}; check access/network and retry.')
        git(path, 'checkout', '--detach', entry['ref'])
        print(f'Prepared {path}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('action', choices=['clone','path'])
    parser.add_argument('name', nargs='?', choices=['products','embedder','chat'])
    args = parser.parse_args()
    try:
        if args.action == 'clone':
            clone()
        elif args.name:
            print(application_dir(args.name))
        else:
            parser.error('path requires an application name')
    except (OSError, RuntimeError, subprocess.TimeoutExpired) as error:
        parser.exit(1, str(error) + '\n')
