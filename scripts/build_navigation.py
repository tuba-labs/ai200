"""Embed the shared header in all study pages."""
import argparse
import json
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
FRAGMENT = ROOT / "fragments/site-header.html"
HEADER = re.compile(r"<header\b[^>]*>.*?</header>|<!-- site-header -->", re.S)


def current_section(relative):
    name = Path(relative).as_posix()
    if name == 'practice-exam-results.html':
        return 'practice-exam.html'
    if name in {"index.html", "laerestoff.html", "flashcards.html", "practice-exam.html", "jargon.html", "eksamen.html"}:
        return name
    if name.startswith("jargon-examples/") or name == "workshops/glossary.html":
        return "jargon.html"
    return "laerestoff.html"


def attach_navigation(html, prefix="./", current=None):
    # Preserve the active section when another generator refreshes shared assets.
    if current is None:
        saved = re.search(r'data-site-current="([a-z.-]+)"', html)
        current = saved[1] if saved else "laerestoff.html"
    header = FRAGMENT.read_text(encoding="utf-8").strip()
    header = header.replace("{{root}}", prefix).replace("{{current}}", current)
    header = re.sub(r"\{\{active:([a-z.-]+)\}\}",
                    lambda match: ' aria-current="page"' if match[1] == current else "", header)
    if not HEADER.search(html):
        raise ValueError("Page has no site header or header placeholder")
    html = HEADER.sub(lambda _: header, html, count=1)
    if "data-site-navigation" not in html:
        html = html.replace("</head>", f'  <link rel="stylesheet" href="{prefix}site-navigation.css" data-site-navigation>\n</head>', 1)
    if "data-site-preferences" not in html:
        # Read the saved theme before styles render to avoid a light-theme flash.
        html = re.sub(r'(<meta charset="utf-8">)',
                      lambda match: match[0] + f'\n  <script src="{prefix}site.js" data-site-preferences></script>' +
                      f'\n  <script src="{prefix}site-translations.js" defer></script>', html, count=1)
    if "data-site-theme" not in html:
        html = html.replace("</head>", f'  <link rel="stylesheet" href="{prefix}site-theme.css" data-site-theme>\n</head>', 1)
    if "data-site-analytics" not in html:
        html = html.replace("</head>", f'  <script src="{prefix}site-analytics.js" data-site-analytics></script>\n</head>', 1)
    html = html.replace('<meta name="color-scheme" content="light">', '<meta name="color-scheme" content="light dark">')
    return html


def current_pages():
    return sorted([*ROOT.glob("*.html"), *(ROOT / "workshops").glob("*.html"),
                   *(ROOT / "jargon-examples").glob("*.html")])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check the embedded headers without writing")
    args = parser.parse_args()
    stale = []
    catalog = json.loads((ROOT / "data/site-translations.json").read_text(encoding="utf-8"))
    translations = ("// Generated from data/site-translations.json by scripts/build_navigation.py.\nwindow.AI200_TRANSLATIONS = "
                    + json.dumps(catalog, ensure_ascii=False, separators=(",", ":"))
                    + ";\ndocument.dispatchEvent(new Event('site:translationsready'));\n")
    destination = ROOT / "site-translations.js"
    if args.check:
        if not destination.exists() or destination.read_text(encoding="utf-8") != translations:
            stale.append("site-translations.js")
    else:
        destination.write_text(translations, encoding="utf-8", newline="\n")
    for path in current_pages():
        relative = path.relative_to(ROOT)
        prefix = "../" * len(relative.parent.parts) or "./"
        original = path.read_text(encoding="utf-8")
        rendered = attach_navigation(original, prefix, current_section(relative))
        if rendered != original:
            if args.check:
                stale.append(relative.as_posix())
            else:
                path.write_text(rendered, encoding="utf-8", newline="\n")
    if stale:
        raise SystemExit("Regenerate navigation: " + ", ".join(stale))
    print(f"Shared navigation checked in {len(current_pages())} current pages.")


if __name__ == "__main__":
    main()
