"""Build one jargon catalog and its searchable pages; add shared site assets.

Run after changing term cards, jargon_catalog.py or jargon_relations.py. Archived snapshots in old/
are intentionally outside the set of current study pages.
"""
import argparse
from html import escape
import json
from pathlib import Path
import re
import unicodedata

from jargon_catalog import ALIASES, DEFINITIONS, EXTRA, PRIMARY
from jargon_examples import EXAMPLES, inline
from jargon_relations import EXTRA_TERMS, PLATFORMS, RELATION_KINDS, RELATIONS
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
    for name, aliases, definition, url, *full in [*EXTRA, *EXTRA_TERMS]:
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
    by_id = {term['id']: term for term in terms}
    for term_id, relations in RELATIONS.items():
        assert term_id in by_id, term_id
        seen = set()
        for row in relations:
            assert row['platform'] in PLATFORMS, row
            assert row['kind'] in RELATION_KINDS, row
            assert row['name'].strip() and row['note'].strip(), row
            assert row['url'].startswith('https://'), row
            assert not row.get('term') or row['term'] in by_id, row
            identity = (row['platform'], row['name'].casefold())
            assert identity not in seen, (term_id, identity)
            seen.add(identity)
        by_id[term_id]['related'] = relations
    for identifier, example in EXAMPLES.items():
        assert re.fullmatch(r'[a-z0-9-]+', identifier), identifier
        assert example['code'].strip() and example['language'] and example['summary']
        for term_id in example['terms']:
            assert term_id in by_id, term_id
            assert 'example' not in by_id[term_id], term_id
            info = dict(id=identifier, language=example['language'], summary=example['summary'])
            if inline(example):
                info.update(mode='inline', code=example['code'].rstrip())
            else:
                assert example['filename'] and '/' not in example['filename'] and '\\' not in example['filename']
                info.update(mode='page', url=f'jargon-examples/{identifier}.html')
            by_id[term_id]['example'] = info
    # Explicit card examples are edited alongside the answer. Reuse them in the
    # glossary and popovers so the same term never has competing examples.
    by_card = {term['sourceCard']: term for term in terms if term.get('sourceCard')}
    for card in cards:
        if card.get('kind') == 'term' and card.get('example'):
            by_card[card['id']]['example'] = dict(id='card-'+card['id'], **card['example'])
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


def render_example(example, prefix):
    if not example:
        return ''
    if example['mode'] == 'inline':
        body = f'<pre><code>{escape(example["code"])}</code></pre>'
    elif example['mode'] == 'page':
        body = (f'<a href="{prefix}{escape(example["url"], quote=True)}" target="_blank" rel="noopener noreferrer">'
                f'Se hele eksemplet i {escape(example["language"])} (ny fane) ↗</a>')
    else:
        body = ''
    return (f'<section class="jargon-example" data-no-jargon><h3>Eksempel · {escape(example["language"])}</h3>'
            + body + f'<p lang="en">{escape(example["summary"])}</p></section>')


def render_relations(relations):
    if not relations:
        return ''
    rows = []
    for row in relations:
        name = escape(row['name'])
        if row.get('term'):
            name = f'<a href="#{escape(row["term"], quote=True)}">{name}</a>'
        rows.append(f'<div class="jargon-relation"><dt><span class="jargon-relation-meta">'
                    f'{escape(PLATFORMS[row["platform"]])} · {escape(RELATION_KINDS[row["kind"]])}</span>'
                    f'{name}</dt><dd><p lang="en">{escape(row["note"])}</p>'
                    f'<a class="jargon-relation-source" href="{escape(row["url"], quote=True)}" '
                    'target="_blank" rel="noopener noreferrer">Dokumentasjon (ny fane) ↗</a></dd></div>')
    return ('<section class="jargon-related" data-no-jargon><h3>Liknende begreper og viktige forskjeller</h3>'
            '<dl class="jargon-relations-list">' + ''.join(rows) + '</dl></section>')


def render_page(prefix='./', terms=None):
    terms = terms if terms is not None else load_catalog()
    entries = []
    for term in terms:
        aliases = ', '.join(term['aliases']) or 'Ingen andre navn registrert.'
        full = f'<p class="jargon-full-name" data-no-jargon>{escape(term["fullName"])}</p>' if term['fullName'] and term['fullName'] != term['primary'] else ''
        docs = ' · '.join(f'<a href="{escape(url, quote=True)}">Offisiell kilde {i}</a>' for i, url in enumerate(term['sources'], 1))
        card = f' · <a href="{prefix}flashcards.html?card={term["sourceCard"]}">Begrepskort</a>' if term.get('sourceCard') else ''
        comparisons = ' '.join(' '.join([row['platform'], PLATFORMS[row['platform']], row['name'], row['note']])
                               for row in term.get('related', []))
        search = ' '.join([term['primary'], term['fullName'], aliases, term['definition'], comparisons])
        domains = ' '.join(map(str, term['domains']))
        entries.append(f'''<article class="jargon-entry" id="{term['id']}" data-jargon-entry data-search="{escape(search, quote=True)}" data-domains="{domains}" data-jargon-exclude="{term['id']}">
<h2 data-no-jargon><a href="#{term['id']}">{escape(term['primary'])}</a></h2>{full}
<p class="jargon-aliases" data-no-jargon><strong>Andre navn og former:</strong> {escape(aliases)}</p>
<p lang="en">{escape(term['definition'])}</p>{render_example(term.get('example'), prefix)}{render_relations(term.get('related', []))}<p class="jargon-entry-sources" data-no-jargon>{docs}{card}</p></article>''')
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
<p>Sammenligningene viser hvordan begreper i Azure, Kubernetes, AWS, Google Cloud og andre verktøy henger sammen. «Samme teknologi eller standard» betyr et felles teknisk grunnlag; «Liknende funksjon» og «Delvis overlapp» forklarer beslektede bruksområder og forskjeller. «Annen mekanisme» hjelper deg å skille begreper som lett forveksles. Sammenligningene er faglige vurderinger basert på de lenkede produktkildene. Andre navn og forkortelser står separat.</p>
<form class="filters" data-jargon-search><label>Søk i begreper, andre navn og sammenligninger<input type="search" name="term" placeholder="For eksempel AKS, EKS, Kafka, ActiveMQ eller event bus" autocomplete="off"></label><label>Domene<select name="domain"><option value="all">Alle begreper</option>{options}<option value="shared">Felles begreper</option></select></label></form>
<p data-jargon-count role="status">{len(terms)} begreper</p><p data-jargon-empty hidden>Ingen begreper matcher søket.</p></section>
<div class="jargon-entries">{''.join(entries)}</div></main>
<footer><div class="wrap"><p>AI-200 studiegruppe · <a href="{prefix}flashcards.html?source=terms">Øv med begrepskort</a> · <a href="{prefix}index.html">Til oversikten</a></p></div></footer></body></html>
'''
    return attach_assets(html, prefix)


def render_example_page(identifier, example, terms):
    related = [term for term in terms if term['id'] in example['terms']]
    back_links = ' · '.join(f'<a href="../jargon.html#{term["id"]}">{escape(term["primary"])}</a>' for term in related)
    notes = ''.join(f'<li>{escape(note)}</li>' for note in example['notes'])
    urls = list(dict.fromkeys(url for term in related for url in term['sources']))
    sources = ' · '.join(f'<a href="{escape(url, quote=True)}">Offisiell kilde {i}</a>' for i, url in enumerate(urls, 1))
    html = f'''<!doctype html>
<html lang="nb"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{escape(example['summary'], quote=True)}"><title>{escape(example['language'])}: eksempel | AI-200</title>
<link rel="stylesheet" href="../workshops/course.css"></head>
<body><a class="skip" href="#innhold">Hopp til eksemplet</a>
<header><div class="wrap header-inner"><a class="brand" href="../index.html">AI-200 <span>Studiegruppe</span></a><nav aria-label="Hovednavigasjon"><a href="../index.html">Oversikt</a><a href="../workshops/index.html">Workshops</a><a href="../flashcards.html">Flashcards</a></nav></div></header>
<div class="hero"><div class="wrap"><p class="eyebrow">Se hvordan det ser ut</p><h1>{escape(example['language'])}: eksempel</h1><p class="lead" lang="en">{escape(example['summary'])}</p></div></div>
<main id="innhold" class="wrap jargon-example-page" data-jargon-exclude="{' '.join(example['terms'])}">
<section class="panel"><h2><code>{escape(example['filename'])}</code></h2>
<pre data-language="{escape(example['language'], quote=True)}"><code>{escape(example['code'].rstrip())}</code></pre>
<p><a href="./{identifier}/{escape(example['filename'], quote=True)}" download>Last ned {escape(example['filename'])}</a></p>
<h2>Hva viser eksemplet?</h2><ul lang="en">{notes}</ul><p>Til begrepene: {back_links}</p><p>{sources}</p></section></main>
<footer><div class="wrap"><p>AI-200 studiegruppe · <a href="../jargon.html">Alle begreper og eksempler</a></p></div></footer></body></html>
'''
    return attach_assets(html, '../')


def outputs():
    terms = load_catalog()
    rendered = {
        'jargon-data.js': '// Generated by scripts/build_jargon.py from term cards, jargon_catalog.py and jargon_relations.py.\nwindow.AI200_JARGON = '
                          + json.dumps(dict(version=1, terms=terms, platforms=PLATFORMS, relationKinds=RELATION_KINDS), ensure_ascii=False, indent=2) + ';\n',
        'jargon.html': render_page(terms=terms),
    }
    for identifier, example in EXAMPLES.items():
        if not inline(example):
            rendered[f'jargon-examples/{identifier}.html'] = render_example_page(identifier, example, terms)
            rendered[f'jargon-examples/{identifier}/{example["filename"]}'] = example['code'].rstrip() + '\n'
    return rendered


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    rendered = outputs()
    # Add loading and the glossary link to every current page, including legacy
    # pages still reachable directly. The old/ archive stays byte-for-byte intact.
    for path in sorted(list(ROOT.glob('*.html')) + list((ROOT / 'workshops').glob('*.html')) + list((ROOT / 'jargon-examples').glob('*.html'))):
        name = path.relative_to(ROOT).as_posix()
        if name not in rendered:
            prefix = '../' * len(path.parent.relative_to(ROOT).parts) or './'
            rendered[name] = attach_assets(path.read_text(encoding='utf-8'), prefix)
    stale = []
    for name, content in rendered.items():
        path = ROOT / name
        if args.check:
            if not path.exists() or path.read_text(encoding='utf-8') != content:
                stale.append(name)
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content, encoding='utf-8', newline='\n')
    if stale:
        raise SystemExit('Regenerate jargon: ' + ', '.join(stale))
    terms = load_catalog()
    print(f'{len(terms)} primary terms; {sum(len(t["aliases"]) for t in terms)} aliases; {sum(name.endswith(".html") for name in rendered)} current HTML pages.')


if __name__ == '__main__':
    main()
