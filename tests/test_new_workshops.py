"""Validate the new course, archived sources and exact card-to-task links offline."""
from collections import Counter
from hashlib import sha256
import ast
import json
from pathlib import Path
import sys
import unittest
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import build_workshops as builder
from test_workshop_docs import Page


class NewWorkshopTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.full_deck = builder.load_deck()
        cls.deck = builder.course_deck(cls.full_deck)
        cls.metadata = json.loads((ROOT / "workshops/coverage.json").read_text(encoding="utf-8"))
        cls.pages = {path.resolve(): Page(path.read_text(encoding="utf-8")) for path in (ROOT / "workshops").glob("*.html")}

    def test_exactly_two_workshops_per_domain_and_one_home_per_category(self):
        self.assertEqual(Counter(item["domain"] for item in builder.WORKSHOPS), {1: 2, 2: 2, 3: 2, 4: 2})
        self.assertEqual(len({item["id"] for item in builder.WORKSHOPS}), 8)
        categories = [chapter["category"] for item in builder.WORKSHOPS for chapter in item["chapters"]]
        self.assertEqual(len(categories), len(set(categories)))
        self.assertEqual(set(categories), {item["id"] for item in self.deck["categories"]})

    def test_every_card_has_valid_and_honest_coverage(self):
        cards = self.metadata["cards"]
        self.assertEqual(set(cards), {card["id"] for card in self.deck["cards"]})
        self.assertEqual(cards, builder.compile_coverage(self.deck))
        for card in self.deck["cards"]:
            with self.subTest(card=card["id"]):
                assignment = cards[card["id"]]
                self.assertEqual(assignment["category"], card["category"])
                self.assertEqual(assignment["domain"], card["domain"])
                if assignment["kind"] == "review":
                    self.assertIsNone(assignment["activity"])
                    self.assertIn("#review-", assignment["url"])
                else:
                    self.assertIn(assignment["kind"], {"practical", "analysis"})
                    self.assertTrue(assignment["activity"])
                    self.assertTrue(assignment["url"].endswith("#" + assignment["activity"]))

    def test_all_cards_appear_once_in_the_new_workshops(self):
        occurrences = Counter(identifier.removeprefix("card-") for path, page in self.pages.items()
                              if path.stem in self.metadata["workshops"] for identifier in page.ids if identifier.startswith("card-"))
        self.assertEqual(set(occurrences), set(self.metadata["cards"]))
        self.assertTrue(all(count == 1 for count in occurrences.values()))

    def test_new_terms_do_not_inflate_workshop_coverage(self):
        coverage = self.metadata["cards"]
        self.assertEqual(coverage, builder.compile_coverage(self.full_deck))
        for card in self.full_deck["cards"]:
            with self.subTest(card=card["id"]):
                if card["origin"] == "terms":
                    self.assertNotIn(card["id"], coverage)
                elif card.get("kind") == "term":
                    self.assertEqual(coverage[card["id"]]["category"], card["coverageCategory"])
                else:
                    self.assertIn(card["id"], coverage)

    def test_generated_files_and_inline_sources_are_current(self):
        for name, content in builder.outputs().items():
            self.assertEqual((ROOT / "workshops" / name).read_text(encoding="utf-8"), content, name)
        self.assertEqual(self.metadata["deckSha256"], sha256((ROOT / "flashcards-data.js").read_text(encoding="utf-8").encode("utf-8")).hexdigest())
        for path, page in self.pages.items():
            for block in page.code:
                if block["source"]:
                    source = (path.parent / block["source"]).resolve()
                    self.assertTrue(source.is_relative_to(ROOT / "workshops/labs"))
                    self.assertEqual(block["text"], source.read_text(encoding="utf-8"))

    def test_local_links_and_fragments_target_the_right_file(self):
        parsed = dict(self.pages)
        for path, page in self.pages.items():
            self.assertEqual(len(page.ids), len(set(page.ids)), path.name)
            for href in page.links:
                url = urlsplit(href)
                if url.scheme or url.netloc or not url.path and not url.fragment:
                    continue
                target = (path.parent / unquote(url.path)).resolve() if url.path else path
                with self.subTest(page=path.name, link=href):
                    self.assertTrue(target.exists())
                    self.assertTrue(target.is_relative_to(ROOT))
                    if url.fragment and target.suffix == ".html":
                        if target not in parsed:
                            parsed[target] = Page(target.read_text(encoding="utf-8"))
                        self.assertIn(unquote(url.fragment), parsed[target].ids)

    def test_preserved_archive_matches_its_original_checksums(self):
        manifest = json.loads((ROOT / "old/manifest.json").read_text(encoding="utf-8"))
        self.assertTrue(manifest["files"])
        for relative, expected in manifest["files"].items():
            with self.subTest(file=relative):
                path = (ROOT / "old" / relative).resolve()
                self.assertTrue(path.is_relative_to(ROOT / "old"))
                self.assertEqual(sha256(path.read_bytes()).hexdigest(), expected)

    def test_new_lab_sources_are_valid_python_and_json(self):
        for path in (ROOT / "workshops/labs").rglob("*"):
            if path.suffix == ".py":
                ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
            if path.suffix == ".json":
                json.loads(path.read_text(encoding="utf-8"))

    def test_flashcard_page_loads_coverage_and_exposes_filters(self):
        html = (ROOT / "flashcards.html").read_text(encoding="utf-8")
        self.assertIn('src="./workshops/flashcard-coverage.js"', html)
        self.assertIn('id="workshop-filter"', html)
        self.assertIn('id="workshop-tag"', html)
        self.assertIn("matchesWorkshop(c,workshop)", html)
        script = (ROOT / "workshops/flashcard-coverage.js").read_text(encoding="utf-8")
        actual = json.loads(script.split("window.AI200_WORKSHOP_COVERAGE = ", 1)[1].strip().removesuffix(";"))
        self.assertEqual(actual, self.metadata)


if __name__ == "__main__":
    unittest.main()
