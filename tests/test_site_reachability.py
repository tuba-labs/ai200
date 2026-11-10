"""Keep published pages, browser code and downloadable examples reachable."""
from collections import deque
from pathlib import Path
import re
import sys
import unittest
from urllib.parse import unquote, urlsplit

from site_html import Page

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_share_previews as previews
from build_navigation import current_pages


def reachable_files():
    # These destinations are constructed by the card/result sharing controls.
    roots = [ROOT / 'index.html',
             *(ROOT / 'share/cards' / name for name in previews.outputs()),
             *(ROOT / f'share/results/{percent}.html' for percent in range(101))]
    pending, visited = deque(roots), set()
    while pending:
        path = pending.popleft().resolve()
        if path in visited:
            continue
        if not path.is_relative_to(ROOT) or not path.is_file():
            raise AssertionError(f'Missing local destination: {path}')
        visited.add(path)
        if path.suffix not in {'.html', '.js', '.css'}:
            continue
        source = path.read_text(encoding='utf-8')
        values = (Page(source).links if path.suffix == '.html' else
                  re.findall(r'''["']([A-Za-z0-9_./-]+\.(?:html|js|css)(?:[?#][^"'\s<>]*)?)["']''', source))
        for value in values:
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path:
                continue
            # Generated catalog URLs are resolved against the site root by the UI.
            base = ROOT if path.name == 'jargon-data.js' else path.parent
            pending.append(base / unquote(url.path))
    return visited


class SiteReachabilityTests(unittest.TestCase):
    def test_local_links_and_ids(self):
        pages = {path.resolve(): Page(path.read_text(encoding='utf-8')) for path in current_pages()}
        for path, page in pages.items():
            with self.subTest(page=path.relative_to(ROOT)):
                self.assertEqual(len(page.ids), len(set(page.ids)), 'Duplicate HTML IDs')
                for href in page.links:
                    url = urlsplit(href)
                    if url.scheme or url.netloc or not url.path and not url.fragment:
                        continue
                    target = (path.parent / unquote(url.path)).resolve() if url.path else path
                    self.assertTrue(target.is_relative_to(ROOT), href)
                    self.assertTrue(target.is_file(), href)
                    if url.fragment and target in pages:
                        self.assertIn(unquote(url.fragment), pages[target].ids, href)

    def test_every_published_page_script_and_stylesheet_is_used_by_a_site_flow(self):
        reachable = reachable_files()
        public = [*ROOT.glob('*.html'), *ROOT.glob('*.js'), *ROOT.glob('*.css'),
                  *(ROOT / 'jargon-examples').glob('*.html'),
                  *(ROOT / 'share/cards').glob('*.html'), *(ROOT / 'share/results').glob('*.html')]
        unreachable = {path.relative_to(ROOT).as_posix() for path in public
                       if path.resolve() not in reachable}
        self.assertEqual(unreachable, set(), 'Remove orphaned site files or connect an actual user flow.')

    def test_glossary_code_examples_have_a_user_visible_link(self):
        reachable = reachable_files()
        snippets = []
        for directory in (ROOT / 'jargon-examples').iterdir():
            if directory.is_dir():
                snippets.extend(path for path in directory.iterdir() if path.is_file())
        self.assertFalse({path.relative_to(ROOT).as_posix() for path in snippets if path.resolve() not in reachable})


if __name__ == '__main__':
    unittest.main()
