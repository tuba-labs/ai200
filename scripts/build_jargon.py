"""Build one jargon catalog and its searchable pages; add shared site assets.

Run after changing term cards or jargon_catalog.py. Archived snapshots in old/
are intentionally outside the set of current study pages.
"""
import argparse
from html import escape
import json
from pathlib import Path
import re
import unicodedata

from jargon_catalog import ALIASES, DEFINITIONS, EXTRA, PRIMARY
from workshop_curriculum import GLOSSARY

ROOT = Path(__file__).resolve().parents[1]
DOMAINS = {1: 'Containere', 2: 'AI-data', 3: 'Integrasjoner', 4: 'Sikkerhet og observabilitet'}


def load_catalog():
    source = (ROOT / 'flashcards-data.js').read_text(encoding='utf-8')
    cards = json.loads(source.split('window.AI200_FLASHCARDS = ', 1)[1].strip().removesuffix(';'))['cards']
    terms = []
    for card in cards:
        if card.get('kind') != 'term':
            continue
        original = card['term']
        name = PRIMARY.get(card['id'], re.sub(r'\s*\([^()]+\)$', '', original).split(' · ')[0])
        aliases = ALIASES.get(card['id'], '').split('|')
        match = re.search(r'\(([^()]+)\)$', original)
        if match:
            aliases.append(match[1])
        full = ''
        abbreviation = name if name in GLOSSARY else (match[1] if match else '')
        if abbreviation in GLOSSARY and (abbreviation.isupper() or abbreviation in {'Dapr', 'VNet', 'IaC', 'IVFFlat', 'DiskANN', 'OTel'}):
            full = GLOSSARY[abbreviation][0]
            if full.casefold() != name.casefold():
                aliases.append(full)
            else:
                full = ''
        if ' · ' in original:
            full = original.split(' · ', 1)[1]
            aliases.append(full)
        definition = DEFINITIONS.get(card['id'], card['answers'][0])
        if full and definition.startswith(full + '. '):
            definition = definition[len(full) + 2:]
        terms.append(dict(primary=name, fullName=full, aliases=aliases,
                          definition=definition, domains=[card['domain']],
                          sourceCard=card['id'], sources=card['review']['sources']))
    for name, aliases, definition, url, *full in EXTRA:
        terms.append(dict(primary=name, fullName=full[0] if full else '',
                          aliases=aliases.split('|'), definition=definition,
                          domains=[], sources=[url]))
    ids, names = set(), {}
    for term in terms:
        slug = unicodedata.normalize('NFKD', term['primary']).encode('ascii', 'ignore').decode()
        term['id'] = re.sub(r'[^a-z0-9]+', '-', slug.casefold()).strip('-')
        assert term['id'] not in ids, term['id']
        ids.add(term['id'])
        forms = [term['primary']] + term['aliases']
        seen, term['aliases'] = set(), []
        for form in forms:
            form = form.strip()
            if not form or form.casefold() in seen:
                continue
            key = form.casefold()
            assert key not in names or names[key] == term['id'], (form, names.get(key), term['id'])
            names[key] = term['id']
            seen.add(key)
            if form != term['primary']:
                term['aliases'].append(form)
        assert term['definition'].strip() and term['sources']
    return sorted(terms, key=lambda t: t['primary'].casefold())


def attach_assets(html, prefix='./'):
    if 'data-ai200-jargon' not in html:
        assets = (f'\n  <link rel="stylesheet" href="{prefix}jargon.css" data-ai200-jargon>\n'
                  f'  <script src="{prefix}jargon-data.js" defer></script>\n'
                  f'  <script src="{prefix}jargon.js" defer></script>\n')
        html = html.replace('</head>', assets + '</head>', 1)
    if 'class="jargon-nav-link"' not in html:
        link = f'<a class="jargon-nav-link" href="{prefix}jargon.html">Begreper</a>'
        html = html.replace('</nav>', link + '</nav>', 1)
    return html


def render_page(prefix='./', terms=None):
    terms = terms if terms is not None else load_catalog()
    entries = []
    for term in terms:
        aliases = ', '.join(term['aliases']) or 'Ingen andre navn registrert.'
        full = f'<p class="jargon-full-name" data-no-jargon>{escape(term["fullName"])}</p>' if term['fullName'] and term['fullName'] != term['primary'] else ''
        docs = ' · '.join(f'<a href="{escape(url, quote=True)}">Offisiell kilde {i}</a>' for i, url in enumerate(term['sources'], 1))
        card = f' · <a href="{prefix}flashcards.html?card={term["sourceCard"]}">Begrepskort</a>' if term.get('sourceCard') else ''
        search = ' '.join([term['primary'], term['fullName'], aliases, term['definition']])
        domains = ' '.join(map(str, term['domains']))
        entries.append(f'''<article class="jargon-entry" id="{term['id']}" data-jargon-entry data-search="{escape(search, quote=True)}" data-domains="{domains}" data-jargon-exclude="{term['id']}">
<h2 data-no-jargon><a href="#{term['id']}">{escape(term['primary'])}</a></h2>{full}
<p class="jargon-aliases" data-no-jargon><strong>Andre navn og former:</strong> {escape(aliases)}</p>
<p lang="en">{escape(term['definition'])}</p><p class="jargon-entry-sources" data-no-jargon>{docs}{card}</p></article>''')
    options = ''.join(f'<option value="{d}">{d} · {name}</option>' for d, name in DOMAINS.items())
    html = f'''<!doctype html>
<html lang="nb"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Alle fagbegreper med forklaringer, forkortelser, andre navn og offisielle kilder."><title>Begreper og forkortelser | AI-200</title>
<link rel="stylesheet" href="{prefix}workshops/course.css"></head>
<body><a class="skip" href="#innhold">Hopp til begrepene</a>
<header><div class="wrap header-inner"><a class="brand" href="{prefix}index.html">AI-200 <span>Studiegruppe</span></a><nav aria-label="Hovednavigasjon"><a href="{prefix}index.html">Oversikt</a><a href="{prefix}workshops/index.html">Workshops</a><a href="{prefix}flashcards.html">Flashcards</a></nav></div></header>
<div class="hero"><div class="wrap"><p class="eyebrow">Ordforrådet i alle fire domener</p><h1>Begreper og forkortelser</h1><p class="lead">Slå opp et primærbegrep, en forkortelse eller et annet navn. Prikkede understrekinger på studiesidene gir samme forklaring.</p></div></div>
<main class="wrap" id="innhold"><section class="panel jargon-directory" data-no-jargon>
<p>Hold pekeren over et markert begrep eller bruk Tab for å lese forklaringen. Klikk, trykk eller bruk Enter for å åpne forklaringsboksen med lenke hit. Escape lukker boksen. Forklaringene er på engelsk, som flashcardene.</p>
<form class="filters" data-jargon-search><label>Søk i begreper og andre navn<input type="search" name="term" placeholder="For eksempel AKS, HPA, CPU eller autoskalering" autocomplete="off"></label><label>Domene<select name="domain"><option value="all">Alle begreper</option>{options}<option value="shared">Felles begreper</option></select></label></form>
<p data-jargon-count role="status">{len(terms)} begreper</p><p data-jargon-empty hidden>Ingen begreper matcher søket.</p></section>
<div class="jargon-entries">{''.join(entries)}</div></main>
<footer><div class="wrap"><p>AI-200 studiegruppe · <a href="{prefix}flashcards.html?source=terms">Øv med begrepskort</a> · <a href="{prefix}index.html">Til oversikten</a></p></div></footer></body></html>
'''
    return attach_assets(html, prefix)


def outputs():
    terms = load_catalog()
    return {
        'jargon-data.js': '// Generated by scripts/build_jargon.py from reviewed term cards and jargon_catalog.py.\nwindow.AI200_JARGON = '
                          + json.dumps(dict(version=1, terms=terms), ensure_ascii=False, indent=2) + ';\n',
        'jargon.html': render_page(terms=terms),
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    rendered = outputs()
    # Add loading and the glossary link to every current page, including legacy
    # pages still reachable directly. The old/ archive stays byte-for-byte intact.
    for path in sorted(list(ROOT.glob('*.html')) + list((ROOT / 'workshops').glob('*.html'))):
        name = path.relative_to(ROOT).as_posix()
        if name not in rendered:
            rendered[name] = attach_assets(path.read_text(encoding='utf-8'), '../' if path.parent.name == 'workshops' else './')
    stale = []
    for name, content in rendered.items():
        path = ROOT / name
        if args.check:
            if not path.exists() or path.read_text(encoding='utf-8') != content:
                stale.append(name)
        else:
            path.write_text(content, encoding='utf-8', newline='\n')
    if stale:
        raise SystemExit('Regenerate jargon: ' + ', '.join(stale))
    terms = load_catalog()
    print(f'{len(terms)} primary terms; {sum(len(t["aliases"]) for t in terms)} aliases; {len(rendered)-1} current HTML pages.')


if __name__ == '__main__':
    main()
