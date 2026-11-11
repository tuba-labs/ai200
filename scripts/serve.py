"""Serve only public study-site files; exclude runtime state and tool caches."""
import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


def public_files():
    from build_workshop import source_files
    files = {path for path in ROOT.iterdir() if path.is_file() and path.suffix in {'.html', '.css', '.js', '.png', '.svg'}}
    files.add(ROOT / '.nojekyll')
    for folder in ['jargon-examples', 'reports', 'share/cards', 'share/results']:
        files.update(path for path in (ROOT / folder).rglob('*') if path.is_file() and path.suffix in {'.html', '.js', '.css', '.txt', '.json', '.yaml', '.yml', '.bicep'} or path.is_file() and path.name == 'Dockerfile')
    files.update((ROOT / 'workshop').glob('*.html'))
    files.update(ROOT / 'workshop' / name for name in ['search-index.json', 'source-index.json'])
    files.update(path for path in (ROOT / 'workshop/assets').glob('*') if path.is_file())
    files.update(source_files())
    return {path.resolve() for path in files if path.is_file() and path.resolve().is_relative_to(ROOT.resolve())}


class StudyHandler(SimpleHTTPRequestHandler):
    public = None
    base_path = ''

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        self._guarded(super().do_GET)

    def do_HEAD(self):
        self._guarded(super().do_HEAD)

    def _guarded(self, action):
        requested = unquote(urlsplit(self.path).path)
        if self.base_path:
            if not requested.startswith(self.base_path + '/'):
                self.send_error(404)
                return
            requested = requested[len(self.base_path):]
        if requested.endswith('/'):
            requested += 'index.html'
        target = (ROOT / requested.lstrip('/')).resolve()
        allowed = self.public if self.public is not None else public_files()
        if target not in allowed or not target.is_relative_to(ROOT.resolve()):
            self.send_error(404, 'Not a public website file')
            return
        self.path = '/' + target.relative_to(ROOT).as_posix()
        action()

    def list_directory(self, path):
        self.send_error(404)
        return None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8000)
    parser.add_argument('--base-path', default='', help='Optional repository base, for example /ai200')
    args = parser.parse_args()
    StudyHandler.public = public_files()
    StudyHandler.base_path = args.base_path.rstrip('/')
    server = ThreadingHTTPServer(('127.0.0.1', args.port), StudyHandler)
    print(f'Public study site: http://127.0.0.1:{args.port}{StudyHandler.base_path}/workshop/', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
