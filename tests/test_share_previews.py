"""Verify card titles are available to link-preview crawlers without JavaScript."""
from html.parser import HTMLParser
from pathlib import Path
import struct
import sys
import unittest
from urllib.parse import parse_qs, urlsplit

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_share_previews as previews


class Metadata(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.meta, self.links = {}, {}
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'meta':
            self.meta[attrs.get('property', attrs.get('name'))] = attrs.get('content')
        if tag == 'a':
            self.links[attrs.get('id')] = attrs.get('href')


class CardShareTests(unittest.TestCase):
    def test_every_card_has_its_own_title_description_and_correct_destination(self):
        pages = previews.outputs()
        cards = previews.load_cards()
        self.assertEqual(len(pages), len(cards))
        for card in cards:
            with self.subTest(card=card['id']):
                page = Metadata(pages[card['id'] + '.html'])
                self.assertEqual(page.meta['og:title'], 'AI-200 · ' + card['title'])
                self.assertEqual(page.meta['og:description'], card['question'])
                self.assertEqual(page.meta['twitter:title'], page.meta['og:title'])
                self.assertEqual(page.meta['twitter:description'], card['question'])
                self.assertTrue(page.meta['og:url'].endswith('/share/cards/' + card['id'] + '.html'))
                target = urlsplit(page.links['open-card'])
                self.assertEqual(target.path, '../../flashcards.html')
                self.assertEqual(parse_qs(target.query), {'card': [card['id']]})
                self.assertEqual(target.fragment, 'card')

    def test_titles_are_escaped_and_card_ids_cannot_escape_the_generated_directory(self):
        card = {'id': 'test-card', 'title': '<script>"&</script>', 'question': 'A "quoted" value & <tag>?'}
        rendered = previews.render(card)
        self.assertNotIn('<script>"&</script>', rendered)
        self.assertEqual(Metadata(rendered).meta['og:title'], 'AI-200 · ' + card['title'])
        for identifier in ['../outside', '/absolute', 'a/b', 'a\\b', '.hidden']:
            with self.assertRaises(ValueError):
                previews.render({**card, 'id': identifier})

    def test_shared_preview_image_and_redirect_script_are_present(self):
        image = (ROOT / 'share-preview.png').read_bytes()
        self.assertTrue(image.startswith(b'\x89PNG\r\n\x1a\n'))
        self.assertEqual(struct.unpack('>II', image[16:24]), (1200, 630))
        self.assertTrue((ROOT / 'share-redirect.js').is_file())
        self.assertTrue((ROOT / 'share-preview.svg').is_file())

    def test_each_score_has_a_preview_and_the_payload_is_left_to_the_browser(self):
        for percent in range(101):
            rendered = previews.render_result(percent)
            page = Metadata(rendered)
            self.assertEqual(page.meta['og:title'], f'AI-200 practice exam: {percent}%')
            self.assertEqual(page.links['open-result'], '../../practice-exam-results.html')
            self.assertNotIn('og:url', page.meta)
            self.assertNotIn('rel="canonical"', rendered)
        for percent in [-1, 101, '50', 0.5, True]:
            with self.assertRaises(ValueError):
                previews.render_result(percent)


if __name__ == '__main__':
    unittest.main()
