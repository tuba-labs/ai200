"""Generate lightweight card and score HTML for social link previews."""
import argparse
from html import escape
import json
from pathlib import Path
import re
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_BASE = 'https://www.tubalabs.org/ai200/'


def load_cards():
    source = (ROOT / 'flashcards-data.js').read_text(encoding='utf-8')
    return json.loads(source.split('window.AI200_FLASHCARDS = ', 1)[1].strip().removesuffix(';'))['cards']


def render(card):
    identifier = card['id']
    if not re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9_-]*', identifier):
        raise ValueError('Invalid flashcard ID: ' + identifier)
    title = 'AI-200 · ' + card['title']
    question = card['question']
    canonical = PUBLIC_BASE + 'share/cards/' + quote(identifier, safe='') + '.html'
    target = '../../flashcards.html?card=' + quote(identifier, safe='') + '#card'
    return page(title, question, canonical, target, 'card', 'Open flashcard →')


def render_result(percent):
    if type(percent) is not int or not 0 <= percent <= 100:
        raise ValueError('Invalid result percentage.')
    return page(f'AI-200 practice exam: {percent}%', 'View scores, learning objective results and selected answers.',
                PUBLIC_BASE + f'share/results/{percent}.html', '../../practice-exam-results.html', 'result', 'Open exam results →')


def page(title, description, canonical, target, kind, label):
    title = escape(title, quote=True)
    question = escape(description, quote=True)
    # A result's fragment identifies the attempt. Do not offer social clients a
    # fragmentless canonical URL that would discard the shared answers.
    canonical_tags = '' if kind == 'result' else (
        f'  <link rel="canonical" href="{canonical}">\n'
        f'  <meta property="og:url" content="{canonical}">\n'
    )
    return f'''<!doctype html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{question}">
{canonical_tags}  <meta property="og:type" content="website">
  <meta property="og:site_name" content="AI-200 Study group">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{question}">
  <meta property="og:image" content="{PUBLIC_BASE}share-preview.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="AI-200 Study group">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{question}">
  <meta name="twitter:image" content="{PUBLIC_BASE}share-preview.png">
  <style>body{{font:16px/1.6 system-ui,sans-serif;max-width:70ch;margin:48px auto;padding:0 20px;color:#17243b}}a{{color:#1265bd}}</style>
  <script src="../../share-redirect.js" defer></script>
</head>
<body><h1>{title}</h1><p>{question}</p><p><a id="open-{kind}" data-share-target="{kind}" href="{target}">{label}</a></p></body>
</html>
'''


def outputs():
    return {card['id'] + '.html': render(card) for card in load_cards()}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    stale = []
    groups = {'cards': outputs(), 'results': {f'{percent}.html': render_result(percent) for percent in range(101)}}
    for group, expected in groups.items():
        destination = ROOT / 'share' / group
        if destination.parent.resolve() != ROOT / 'share' or destination.resolve() != ROOT / 'share' / group:
            raise ValueError('Refusing to write previews through a redirected directory.')
        for name, content in expected.items():
            path = destination / name
            if args.check:
                if not path.is_file() or path.read_text(encoding='utf-8') != content:
                    stale.append(group + '/' + name)
            else:
                destination.mkdir(parents=True, exist_ok=True)
                path.write_text(content, encoding='utf-8', newline='\n')
        # These directories contain only generated pages.
        for path in destination.glob('*.html'):
            if path.name not in expected:
                if args.check:
                    stale.append(group + '/' + path.name)
                else:
                    path.unlink()
    if stale:
        parser.exit(1, 'Run python scripts/build.py to refresh share previews.\n')
    print(f'{sum(len(pages) for pages in groups.values())} card and score share previews checked.')


if __name__ == '__main__':
    main()
