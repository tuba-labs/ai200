"""Check the actual main menu and its destinations on every current page."""
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import subprocess
import sys
import unittest
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import build_navigation as navigation


class Menu(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.headers, self.links, self.brand = 0, [], None
        self.in_header = self.in_nav = False
        self.link = None
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == "header" and "data-site-header" in attrs:
            self.headers += 1
            self.in_header = True
        if tag == "nav" and self.in_header:
            self.in_nav = True
        if tag == "a" and self.in_nav:
            self.link = dict(attrs, text="")
            self.links.append(self.link)
        elif tag == "a" and self.in_header and 'site-brand' in attrs.get('class', '').split():
            self.brand = attrs

    def handle_data(self, text):
        if self.link is not None:
            self.link["text"] += text

    def handle_endtag(self, tag):
        if tag == "a":
            self.link = None
        if tag == "nav":
            self.in_nav = False
        if tag == "header":
            self.in_header = False


class InterfaceText(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.stack, self.text = [], set()
        self.feed(html)

    def add(self, value):
        value = re.sub(r"\s+", " ", value).strip()
        if re.search(r"[a-zA-Z]", value):
            self.text.add(value)

    def handle_starttag(self, tag, items):
        attrs = dict(items)
        blocked = bool(self.stack and self.stack[-1][1]) or tag in {"script", "style", "pre", "code", "kbd", "samp", "textarea"} or attrs.get("translate") == "no" or "data-keep-english" in attrs
        if not blocked:
            for name in ("aria-label", "title", "placeholder", "alt"):
                if name in attrs:
                    self.add(attrs[name])
        if tag not in {"meta", "link", "input", "img", "br", "hr", "wbr", "source"}:
            self.stack.append((tag, blocked))

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                del self.stack[index:]
                return

    def handle_data(self, value):
        if not self.stack or not self.stack[-1][1]:
            self.add(value)


class NavigationTests(unittest.TestCase):
    def test_every_current_page_has_the_same_complete_working_main_menu(self):
        expected = [("Flashcards", "flashcards.html"), ("Workshops", "workshop/index.html"),
                    ("Prøveeksamen", "practice-exam.html"), ("Lærestoff", "laerestoff.html"),
                    ("Eksamen", "eksamen.html")]
        for path in navigation.current_pages():
            with self.subTest(page=path.relative_to(ROOT)):
                html = path.read_text(encoding="utf-8")
                menu = Menu(html)
                self.assertEqual(menu.headers, 1)
                actual = []
                for link in menu.links:
                    url = urlsplit(link["href"])
                    self.assertFalse(url.scheme or url.netloc or url.fragment or url.query)
                    target = (path.parent / url.path).resolve()
                    self.assertTrue(target.is_file(), link["href"])
                    actual.append((link["text"], target.relative_to(ROOT).as_posix()))
                self.assertEqual(actual, expected)
                self.assertEqual((path.parent / menu.brand['href']).resolve(), ROOT / 'index.html')
                section = navigation.current_section(path.relative_to(ROOT))
                self.assertEqual(menu.brand.get('aria-current') == 'page', section == 'index.html')
                current = [link for link in menu.links if link.get("aria-current") == "page"]
                self.assertEqual(len(current), 0 if section in {'index.html', 'jargon.html'} else 1)
                if current:
                    self.assertEqual((path.parent / current[0]['href']).resolve().relative_to(ROOT).as_posix(), section)
                self.assertEqual(html.count("data-site-navigation"), 1)

    def test_preferences_and_theme_assets_are_available_on_root_and_nested_pages(self):
        for path in navigation.current_pages():
            with self.subTest(page=path.relative_to(ROOT)):
                html = path.read_text(encoding="utf-8")
                for identifier in ("site-language", "site-theme"):
                    self.assertEqual(html.count(f'id="{identifier}"'), 1)
                prefix = "../" * len(path.parent.relative_to(ROOT).parts) or "./"
                for filename in ("site.js", "site-translations.js", "site-theme.css", "site-analytics.js"):
                    self.assertEqual(html.count(f'"{prefix}{filename}"'), 1)
                    self.assertTrue((path.parent / (prefix + filename)).resolve().is_file())
                self.assertEqual(html.count('data-site-analytics'), 1)
                styles = [match.start() for match in re.finditer(r'<style\b|<link rel="stylesheet"', html)]
                self.assertLess(html.index('data-site-preferences'), min(styles))

    def test_main_page_text_and_accessibility_labels_have_both_languages(self):
        pages = {name: sorted(InterfaceText((ROOT / name).read_text(encoding="utf-8")).text)
                 for name in ("index.html", "laerestoff.html", "eksamen.html", "flashcards.html", "practice-exam.html", "practice-exam-results.html")}
        script = """const dictionary = require('./site.js').translator(require('./data/site-translations.json'));
let input = ''; process.stdin.setEncoding('utf8'); process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => { const missing = Object.fromEntries(Object.entries(JSON.parse(input))
.map(([name, values]) => [name, values.filter(value => !dictionary.has(value))]).filter(([, values]) => values.length));
process.stdout.write(JSON.stringify(missing)); });"""
        result = subprocess.run(["node", "-e", script], cwd=ROOT, input=json.dumps(pages), encoding="utf-8",
                                capture_output=True, check=True)
        self.assertEqual(json.loads(result.stdout), {})

    def test_question_and_flashcard_content_is_explicitly_kept_in_english(self):
        for name, identifiers in {
            "flashcards.html": ("card-title", "card-content", "card-example", "card-share-question"),
            "practice-exam.html": ("question-fieldset", "case-context", "feedback-correct-options", "feedback-explanation"),
        }.items():
            html = (ROOT / name).read_text(encoding="utf-8")
            for identifier in identifiers:
                with self.subTest(page=name, content=identifier):
                    element = re.search(r'<[^>]+\bid="' + identifier + r'"[^>]*>', html)[0]
                    self.assertIn("data-keep-english", element)
                    self.assertIn('lang="en"', element)
                    self.assertIn('translate="no"', element)


if __name__ == "__main__":
    unittest.main()
