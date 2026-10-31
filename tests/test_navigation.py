"""Check the actual main menu and its destinations on every current page."""
from html.parser import HTMLParser
from pathlib import Path
import sys
import unittest
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import build_navigation as navigation


class Menu(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.headers, self.links = 0, []
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


class NavigationTests(unittest.TestCase):
    def test_every_current_page_has_the_same_complete_working_main_menu(self):
        expected = [("Oversikt", "index.html"), ("Lærestoff", "laerestoff.html"),
                    ("Flashcards", "flashcards.html"), ("Prøveeksamen", "practice-exam.html"),
                    ("Begreper", "jargon.html"), ("Eksamen", "eksamen.html")]
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
                current = [link for link in menu.links if link.get("aria-current") == "page"]
                self.assertEqual(len(current), 1)
                self.assertEqual(Path(urlsplit(current[0]["href"]).path).name,
                                 navigation.current_section(path.relative_to(ROOT)))
                self.assertEqual(html.count("data-site-navigation"), 1)


if __name__ == "__main__":
    unittest.main()
