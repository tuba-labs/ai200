"""Keep glossary meanings, aliases and every current page in sync offline."""
import json
from pathlib import Path
import sys
import unittest
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_jargon as jargon
from test_workshop_docs import Page


class JargonTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.terms = jargon.load_catalog()
        cls.pages = list(ROOT.glob('*.html')) + list((ROOT / 'workshops').glob('*.html'))

    def test_each_reviewed_term_has_one_matching_glossary_entry(self):
        deck = json.loads((ROOT / 'flashcards-data.js').read_text(encoding='utf-8')
                          .split('window.AI200_FLASHCARDS = ', 1)[1].strip().removesuffix(';'))
        cards = {c['id']: c for c in deck['cards'] if c.get('kind') == 'term'}
        mapped = {term['sourceCard']: term for term in self.terms if term.get('sourceCard')}
        self.assertEqual(set(mapped), set(cards))
        for identifier, term in mapped.items():
            expected = jargon.DEFINITIONS.get(identifier, cards[identifier]['answers'][0])
            if term['fullName'] and expected.startswith(term['fullName'] + '. '):
                expected = expected[len(term['fullName']) + 2:]
            self.assertEqual(term['definition'], expected)
            self.assertEqual(term['sources'], cards[identifier]['review']['sources'])

    def test_aliases_resolve_to_one_primary_term_and_sources_are_public(self):
        names, ids = {}, set()
        for term in self.terms:
            with self.subTest(term=term['primary']):
                self.assertNotIn(term['id'], ids)
                ids.add(term['id'])
                self.assertTrue(term['definition'].strip())
                self.assertTrue(term['sources'])
                for url in term['sources']:
                    parsed = urlsplit(url)
                    self.assertEqual(parsed.scheme, 'https')
                    self.assertTrue(parsed.hostname)
                for name in [term['primary']] + term['aliases']:
                    self.assertNotIn(name.casefold(), names)
                    names[name.casefold()] = term['id']
        for short, expanded in [('AKS', 'Azure Kubernetes Service'),
                                ('HPA', 'Horizontal Pod Autoscaler'),
                                ('CPU', 'Central Processing Unit'),
                                ('K8s', 'Kubernetes')]:
            self.assertEqual(names[short.casefold()], names[expanded.casefold()])
        self.assertNotEqual(names['container'], names['docker container'])
        self.assertNotEqual(names['subscription'], names['topic subscription'])
        self.assertNotEqual(names['ingress'], names['kubernetes ingress'])

    def test_all_current_pages_load_the_shared_assets_once(self):
        for path in self.pages:
            with self.subTest(page=path.relative_to(ROOT)):
                html = path.read_text(encoding='utf-8')
                prefix = '../' if path.parent.name == 'workshops' else './'
                for name in ['jargon.css', 'jargon-data.js', 'jargon.js']:
                    self.assertEqual(html.count(f'"{prefix}{name}"'), 1)
                    self.assertTrue((path.parent / (prefix + name)).resolve().is_file())
                self.assertIn(f'class="jargon-nav-link" href="{prefix}jargon.html"', html)
                self.assertEqual(jargon.attach_assets(html, prefix), html)

    def test_glossary_renders_every_primary_alias_and_stable_link(self):
        for name, expected in jargon.outputs().items():
            self.assertEqual((ROOT / name).read_text(encoding='utf-8'), expected, name)
        for path in [ROOT / 'jargon.html', ROOT / 'workshops/glossary.html']:
            html = path.read_text(encoding='utf-8')
            page = Page(html)
            self.assertEqual(len(page.ids), len(set(page.ids)))
            self.assertTrue({term['id'] for term in self.terms}.issubset(page.ids))
            for term in self.terms:
                self.assertIn(f'#{term["id"]}', html)
            for href in page.links:
                url = urlsplit(href)
                if not url.scheme and url.path:
                    self.assertTrue((path.parent / url.path).resolve().exists(), href)


if __name__ == '__main__':
    unittest.main()
