"""Check recall-card content and metadata without browser dependencies."""
from collections import Counter
import json
from pathlib import Path
import re
import sys
import unicodedata
import unittest
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
from flashcard_scope import load_review, validate_deck


def normalize(question):
    return re.sub(r"[^\w]+", " ", unicodedata.normalize("NFKC", question).casefold()).strip()


class FlashcardContentTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        source = (ROOT / "flashcards-data.js").read_text(encoding="utf-8")
        cls.deck = json.loads(source.split("window.AI200_FLASHCARDS = ", 1)[1].strip().removesuffix(";"))
        cls.cards = cls.deck["cards"]
        cls.categories = {category["id"]: category for category in cls.deck["categories"]}

    def test_one_standalone_question_per_card(self):
        for card in self.cards:
            with self.subTest(card=card["id"]):
                question = card["question"]
                self.assertEqual(question.count("?"), 1)
                self.assertTrue(question.endswith("?"))
                self.assertLessEqual(len(question), 250)
                self.assertNotRegex(question.lower(), r"\b(?:case study|answer area|following statements)\b")
                self.assertEqual(len(card["answers"]), 1)
                self.assertTrue(card["answers"][0].strip())
                self.assertLessEqual(len(card["answers"][0].split()), 160)

    def test_no_duplicate_questions(self):
        groups = {}
        for card in self.cards:
            groups.setdefault(normalize(card["question"]), []).append(card["id"])
        self.assertFalse({question: ids for question, ids in groups.items() if len(ids) > 1})

    def test_unique_ids_and_valid_categories(self):
        self.assertEqual(len({card["id"] for card in self.cards}), len(self.cards))
        self.assertEqual(len(self.categories), len(self.deck["categories"]))
        self.assertEqual({card["domain"] for card in self.cards}, {1, 2, 3, 4})
        self.assertEqual({card["origin"] for card in self.cards}, {"original", "prep", "terms"})
        for card in self.cards:
            with self.subTest(card=card["id"]):
                self.assertIn(card["category"], self.categories)
                self.assertEqual(card["domain"], self.categories[card["category"]]["domain"])
                self.assertRegex(card["id"], r"^[a-z0-9][a-z0-9-]+$")

    def test_legacy_progress_has_complete_mapping(self):
        retired = load_review()['removed']
        self.assertEqual({old for card in [*self.cards, *retired] for old in card["legacyIds"]}, set(range(1, 69)))
        for card in self.cards:
            if card["origin"] in {"prep", "terms"}:
                self.assertEqual(card["legacyIds"], [], card["id"])

    def test_all_remaining_cards_have_a_reviewed_skill_or_prerequisite(self):
        review = validate_deck(self.deck)
        self.assertEqual(review['guideEffective'], '2026-10-07')
        self.assertEqual(review['source'], 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200')
        self.assertEqual(len(review['objectives']), 27)
        self.assertEqual({card['id'] for card in self.cards}, set(review['retained']))
        self.assertNotIn('m-06-2-1', review['retained'])
        self.assertIn('m-25-5-1', review['retained'])  # Python change feed remains relevant.
        for identifier in ['term-d1-dapr', 'prep-ca-007', 'prep-eh-001', 'prep-p-fn-006', 'm-45-1-1']:
            self.assertNotIn(identifier, review['retained'])
        # A destination name is not a separate topic: collecting platform logs
        # still supports KQL, and generic Kubernetes probes support deployment.
        for identifier in ['prep-p-mon-009', 'm-11-1-1', 'term-d1-daemonset']:
            self.assertIn(identifier, review['retained'])

    def test_removed_cards_are_documented_and_absent_from_the_pool(self):
        review = load_review()
        report = (ROOT / 'reports/ai200-card-review.txt').read_text(encoding='utf-8')
        active = {card['id'] for card in self.cards}
        retired = review['removed']
        self.assertEqual(len({card['id'] for card in retired}), len(retired))
        self.assertEqual(len({card['previousNumber'] for card in retired}), len(retired))
        self.assertEqual(len(active) + len(retired), review['sourceDeckSize'])
        for card in retired:
            self.assertNotIn(card['id'], active)
            self.assertIn(card['id'], report)
            self.assertTrue(card['reason'].strip())
        for identifier in ['prep-sb-007', 'prep-sb-017']:
            card = next(card for card in self.cards if card['id'] == identifier)
            self.assertNotIn('.NET', card['answers'][0])

    def test_every_card_has_traceable_sources(self):
        for card in self.cards:
            with self.subTest(card=card["id"]):
                self.assertTrue(card["references"])
                for reference in card["references"]:
                    self.assertTrue(reference["label"].strip())
                    url = urlsplit(reference["url"])
                    self.assertEqual(url.scheme, "https")
                    self.assertIn(url.hostname, {"www.mightybs.com", "ai200prep.com", "learn.microsoft.com", "kubernetes.io", "opentelemetry.io", "github.com", "redis.io", "www.postgresql.org", "www.psycopg.org", "keda.sh", "docs.dapr.io", "www.w3.org", "docs.docker.com"})

    def test_displayed_counts_match_card_data(self):
        html = (ROOT / "flashcards.html").read_text(encoding="utf-8")
        index = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertEqual(int(re.search(r'id="total">(\d+)<', html)[1]), len(self.cards))
        self.assertEqual(int(re.search(r'<strong>(\d+)</strong><span>Interaktive flashcards</span>', index)[1]), len(self.cards))
        domains = Counter(card["domain"] for card in self.cards)
        for number, count in domains.items():
            self.assertRegex(html, rf'<option value="{number}">{number} · [^<]+ \({count}\)</option>')
        self.assertIn('src="./flashcards-data.js"', html)

    def test_every_card_has_completed_primary_source_review(self):
        for card in self.cards:
            with self.subTest(card=card["id"]):
                review = card["review"]
                self.assertRegex(review["date"], r"^\d{4}-\d{2}-\d{2}$")
                self.assertIn(review["status"], {"confirmed", "clarified", "corrected"})
                self.assertTrue(review["note"].strip())
                self.assertTrue(review["sources"])
                primary = {
                    reference["url"] for reference in card["references"]
                    if reference.get("kind") == "primary"
                }
                self.assertEqual(set(review["sources"]), primary)
                for url in primary:
                    self.assertNotIn(urlsplit(url).hostname, {"ai200prep.com", "www.mightybs.com"})

    def test_terms_start_each_domain_and_reuse_existing_definitions(self):
        terms = [card for card in self.cards if card.get("kind") == "term"]
        self.assertTrue(terms)
        self.assertEqual(len({normalize(card["term"]) for card in terms}), len(terms))
        self.assertEqual([card["domain"] for card in self.cards],
                         sorted(card["domain"] for card in self.cards))
        for domain in range(1, 5):
            with self.subTest(domain=domain):
                category = self.categories[f"terms-{domain}"]
                self.assertEqual(category["kind"], "term")
                cards = [card for card in self.cards if card["domain"] == domain]
                self.assertEqual(cards[0]["kind"], "term")
                kinds = [card.get("kind") == "term" for card in cards]
                self.assertEqual(kinds, sorted(kinds, reverse=True))
                for card in cards:
                    self.assertEqual(card["category"] == category["id"], card.get("kind") == "term")
        for card in terms:
            with self.subTest(card=card["id"]):
                self.assertTrue(card["term"].strip())
                if card["origin"] == "terms":
                    self.assertNotIn("coverageCategory", card)
                else:
                    self.assertIn(card["coverageCategory"], self.categories)
                    self.assertNotEqual(card["coverageCategory"], card["category"])

    def test_each_card_has_a_study_group_tied_to_a_reviewed_objective(self):
        review = load_review()
        priorities = self.deck['importanceReview']
        self.assertEqual(priorities['source'], review['source'])
        self.assertEqual(priorities['guideEffective'], review['guideEffective'])
        self.assertEqual(set(priorities['levels']), {'terms', 'critical', 'important', 'esoteric'})
        self.assertEqual([item['label'] for item in priorities['levels'].values()],
                         ['Terms', 'Critical', 'Important', 'Esoteric'])
        for card in self.cards:
            with self.subTest(card=card['id']):
                importance = card['importance']
                self.assertIn(importance['level'], priorities['levels'])
                self.assertEqual(importance['objective'], review['retained'][card['id']]['objective'])
                self.assertTrue(importance['reason'].strip())
                self.assertEqual(importance['level'] == 'terms', card.get('kind') == 'term')
        # Question intent matters: core vocabulary and KQL are foundations,
        # command syntax is practical, while an exact port/size is lower priority.
        cards = {card['id']: card for card in self.cards}
        examples = {
            'term-d1-acr': 'terms',
            'term-d4-authentication': 'terms',
            'm-62-1-1': 'critical',
            'm-15-2-1': 'important',
            'm-27-1-1': 'esoteric',
            'm-26-5-1': 'esoteric',
            'term-d1-gpu': 'terms',
        }
        for identifier, expected in examples.items():
            self.assertEqual(cards[identifier]['importance']['level'], expected)


if __name__ == "__main__":
    unittest.main()
