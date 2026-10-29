"""Keep glossary meanings, aliases and every current page in sync offline."""
import json
from html import unescape
from pathlib import Path
import re
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
        cls.pages = list(ROOT.glob('*.html')) + list((ROOT / 'workshops').glob('*.html')) + list((ROOT / 'jargon-examples').glob('*.html'))

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
                prefix = '../' * len(path.parent.relative_to(ROOT).parts) or './'
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

    def test_examples_use_short_snippets_or_complete_linked_files(self):
        terms = {term['id']: term for term in self.terms}
        for identifier, example in jargon.EXAMPLES.items():
            with self.subTest(example=identifier):
                for term_id in example['terms']:
                    data = terms[term_id]['example']
                    self.assertEqual(data['id'], identifier)
                    if jargon.inline(example):
                        self.assertEqual(data['mode'], 'inline')
                        self.assertLessEqual(len(data['code'].splitlines()), 10 if example.get('inline') else 2)
                        self.assertEqual(data['code'], example['code'].rstrip())
                    else:
                        self.assertEqual(data['mode'], 'page')
                        self.assertTrue((ROOT / data['url']).is_file())
                        source = ROOT / 'jargon-examples' / identifier / example['filename']
                        self.assertEqual(source.read_text(encoding='utf-8'), example['code'].rstrip() + '\n')
                for prefix in ['./', '../']:
                    html = jargon.render_example(terms[example['terms'][0]]['example'], prefix)
                    if not jargon.inline(example):
                        self.assertIn('target="_blank"', html)
                        self.assertIn('rel="noopener noreferrer"', html)

    def test_comparisons_link_to_real_terms_and_official_product_sources(self):
        terms = {term['id']: term for term in self.terms}
        official_hosts = {'learn.microsoft.com', 'docs.aws.amazon.com', 'docs.cloud.google.com',
                          'kubernetes.io', 'kafka.apache.org', 'activemq.apache.org',
                          'artemis.apache.org', 'www.rabbitmq.com', 'jakarta.ee',
                          'developer.hashicorp.com'}
        for term in self.terms:
            for row in term.get('related', []):
                with self.subTest(term=term['id'], related=row['name']):
                    self.assertIn(row['platform'], jargon.PLATFORMS)
                    self.assertIn(row['kind'], jargon.RELATION_KINDS)
                    self.assertTrue(row['name'].strip())
                    self.assertTrue(row['note'].strip())
                    self.assertEqual(urlsplit(row['url']).scheme, 'https')
                    self.assertIn(urlsplit(row['url']).hostname, official_hosts)
                    if row.get('term'):
                        self.assertIn(row['term'], terms)
                        self.assertNotEqual(row['term'], term['id'])
        # Guard the differences that prompted this feature, not just its schema.
        kafka_endpoint = next(row for row in terms['event-hubs']['related'] if row.get('term') == 'apache-kafka')
        self.assertEqual(kafka_endpoint['kind'], 'partial')
        self.assertIn('Kafka-compatible endpoint', kafka_endpoint['note'])
        self.assertIn('Classic', terms['apache-artemis']['definition'])
        self.assertIn('streams', terms['rabbitmq']['definition'])
        self.assertIn('different wire protocols', terms['amqp']['related'][0]['note'])

    def test_related_names_are_searchable_without_becoming_synonyms(self):
        names = {name.casefold(): term['id'] for term in self.terms
                 for name in [term['primary'], *term['aliases']]}
        self.assertEqual(names['activemq'], 'activemq-classic')
        self.assertEqual(names['activemq artemis'], 'apache-artemis')
        self.assertEqual(names['eventbus'], 'event-bus')
        for first, second in [('AKS', 'EKS'), ('Event Hubs', 'Kafka'),
                              ('Service Bus', 'SQS'), ('Pub/Sub', 'Cloud Pub/Sub'),
                              ('ActiveMQ', 'Artemis')]:
            self.assertNotEqual(names[first.casefold()], names[second.casefold()])
        html = jargon.render_page(terms=self.terms)
        for identifier, query in [('aks', 'amazon eks'), ('event-hubs', 'kafka'),
                                  ('service-bus', 'activemq'), ('event-grid', 'eventbridge')]:
            article = re.search(r'<article[^>]*id="' + identifier + r'"[^>]*>', html)[0]
            search = unescape(re.search(r'data-search="([^"]*)"', article)[1]).casefold()
            self.assertIn(query, search)
        related = jargon.render_relations(next(t for t in self.terms if t['id'] == 'service-bus')['related'])
        self.assertIn('data-no-jargon', related)
        self.assertIn('href="#activemq-classic"', related)
        self.assertIn('target="_blank" rel="noopener noreferrer"', related)

    def test_example_pages_have_working_navigation_downloads_and_sources(self):
        rendered = jargon.outputs()
        for name, html in rendered.items():
            if not name.startswith('jargon-examples/') or not name.endswith('.html'):
                continue
            page = Page(html)
            path = ROOT / name
            with self.subTest(page=name):
                self.assertEqual(len(page.ids), len(set(page.ids)))
                self.assertEqual(len(page.code), 1)
                for href in page.links:
                    url = urlsplit(href)
                    if not url.scheme and url.path:
                        self.assertTrue((path.parent / url.path).resolve().exists(), href)
        self.assertEqual(json.loads(jargon.EXAMPLES['json']['code']), {'service': 'orders', 'replicas': 2})
        command = next(line for line in jargon.EXAMPLES['dockerfile']['code'].splitlines() if line.startswith('CMD '))
        self.assertEqual(json.loads(command[4:])[:3], ['python', '-m', 'http.server'])

    def test_functions_file_examples_are_inline_and_demonstrate_distinct_scopes(self):
        terms = {term.get('sourceCard'): term for term in self.terms if term.get('sourceCard')}
        local = terms['m-50-2-1']['example']
        host = terms['prep-func-010']['example']
        self.assertEqual(local['mode'], 'inline')
        self.assertEqual(host['mode'], 'inline')
        settings = json.loads(local['code'])
        self.assertFalse(settings['IsEncrypted'])
        self.assertEqual(settings['Values']['FUNCTIONS_WORKER_RUNTIME'], 'python')
        self.assertEqual(settings['Values']['AzureWebJobsStorage'], 'UseDevelopmentStorage=true')
        self.assertTrue(all(isinstance(value, str) for value in settings['Values'].values()))
        host_settings = json.loads(host['code'])
        self.assertEqual(host_settings['version'], '2.0')
        self.assertIn('functionTimeout', host_settings)
        self.assertIn('logLevel', host_settings['logging'])
        self.assertNotIn('Values', host_settings)


if __name__ == '__main__':
    unittest.main()
