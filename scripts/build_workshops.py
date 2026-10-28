"""Generate the new eight-workshop course and traceable flashcard coverage.

Only files under workshops/ are generated. Root workshop pages and old/ are inputs
to neither the content nor the renderer and are never modified.
"""
import argparse
from collections import Counter
from fnmatch import fnmatchcase
from hashlib import sha256
from html import escape
import json
from pathlib import Path

from workshop_curriculum import WORKSHOPS, GLOSSARY, CATEGORY_DOCS
from build_jargon import attach_assets, render_page as render_jargon_page
from flashcard_scope import load_review

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "workshops"
DOMAIN_NAMES = {1: "Containere", 2: "AI-data", 3: "Integrasjoner", 4: "Sikkerhet og observasjon"}
KINDS = {"practical": "Praktisk oppgave", "analysis": "Analyseoppgave", "review": "Repetisjon"}
PRIORITY = {"review": 0, "analysis": 1, "practical": 2}
EXTRA_TERMS = {
    "acr": ["Docker"], "app-service": ["App Service"], "container-apps": ["Container Apps", "Dapr"],
    "aks": ["Kubernetes"], "postgresql": ["PostgreSQL", "pgvector"], "redis": ["Redis", "RDB", "AOF"],
    "cosmos": ["Cosmos DB", "DiskANN"], "functions": ["Functions"], "event-grid": ["Event Grid"],
    "service-bus": ["Service Bus"], "event-hubs": ["Event Hubs"], "key-vault": ["Key Vault", "CSI"],
    "app-configuration": ["App Configuration"], "monitor": ["Azure Monitor"], "identity-rbac": ["NSG"],
}
WORKSHOPS = sorted(WORKSHOPS, key=lambda item: item["id"])


def load_deck():
    source = (ROOT / "flashcards-data.js").read_text(encoding="utf-8")
    return json.loads(source.split("window.AI200_FLASHCARDS = ", 1)[1].strip().removesuffix(";"))


def course_deck(deck):
    """Keep exercise mappings stable when an existing definition moves to Terms.

    New vocabulary cards are prerequisites, not evidence of exercise coverage.
    Reused definitions retain their original workshop category through metadata.
    """
    cards = [
        dict(card, category=card.get("coverageCategory", card["category"]))
        for card in deck["cards"]
        if card.get("kind") != "term" or card.get("coverageCategory")
    ]
    return dict(deck, cards=cards,
                categories=[category for category in deck["categories"] if category.get("kind") != "term"])


def compile_coverage(deck):
    deck = course_deck(deck)
    retired = load_review()['removed']
    categories = {category["id"]: category for category in deck["categories"]}
    seen_categories, seen_activities, coverage = set(), set(), {}
    for workshop in WORKSHOPS:
        for chapter in workshop["chapters"]:
            category = chapter["category"]
            if category in seen_categories or categories[category]["domain"] != workshop["domain"]:
                raise ValueError(f"Invalid or repeated category: {category}")
            seen_categories.add(category)
            cards = [card for card in deck["cards"] if card["category"] == category]
            for card in cards:
                coverage[card["id"]] = dict(workshop=workshop["id"], workshopTitle=workshop["title"],
                    domain=workshop["domain"], category=category, kind="review", activity=None,
                    activityTitle="Kontrollspørsmål uten egen øvingsoppgave",
                    url=f"workshops/{workshop['id']}.html#review-{category}")
            for activity in chapter["activities"]:
                if activity["id"] in seen_activities or activity["kind"] not in {"practical", "analysis"}:
                    raise ValueError(f"Invalid activity: {activity['id']}")
                seen_activities.add(activity["id"])
                for pattern in activity["cards"]:
                    matches = [card for card in cards if fnmatchcase(card["id"], pattern)]
                    # Existing lessons remain intact when cards are retired.
                    # An unmatched pattern must point to an explicitly reviewed
                    # retirement; misspellings and unknown patterns still fail.
                    was_retired = any(card['category'] == category and fnmatchcase(card['id'], pattern) for card in retired)
                    if not matches and not was_retired:
                        raise ValueError(f"No card matches {category}/{activity['id']}: {pattern}")
                    for card in matches:
                        entry = coverage[card["id"]]
                        if PRIORITY[activity["kind"]] > PRIORITY[entry["kind"]]:
                            entry.update(kind=activity["kind"], activity=activity["id"],
                                activityTitle=activity["title"], url=f"workshops/{workshop['id']}.html#{activity['id']}")
    if seen_categories != set(categories) or set(coverage) != {card["id"] for card in deck["cards"]}:
        raise ValueError("Every category and card must have exactly one workshop home")
    return coverage


def page(title, intro, body, current="", toc=""):
    return attach_assets(f'''<!doctype html>
<html lang="nb"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{escape(intro, quote=True)}"><title>{escape(title)} | AI-200</title>
<link rel="stylesheet" href="./course.css"><script src="./course.js" defer></script></head>
<body><a class="skip" href="#innhold">Hopp til innhold</a>
<header><div class="wrap header-inner"><a class="brand" href="./index.html">AI-200 <span>Nye workshops</span></a><nav aria-label="Hovednavigasjon"><a href="./index.html"{' aria-current="page"' if current=='home' else ''}>Domener</a><a href="./coverage.html"{' aria-current="page"' if current=='coverage' else ''}>Kortdekning</a><a href="../flashcards.html">Flashcards</a><a href="./setup.html">Felles oppsett</a><a href="../old/index.html">Tidligere workshops</a></nav></div></header>
<div class="hero"><div class="wrap"><p class="eyebrow">Domene → workshop → kategori → oppgave</p><h1>{escape(title)}</h1><p class="lead">{escape(intro)}</p></div></div>
<main id="innhold" class="wrap {'layout' if toc else ''}">{('<aside class="toc"><h2>På denne siden</h2><nav aria-label="Innhold">'+toc+'</nav></aside>') if toc else ''}<div class="content">{body}</div></main>
<footer><div class="wrap"><p>AI-200 studiegruppe · Nytt løp · <a href="./glossary.html">Forkortelser og begreper</a> · <a href="../index.html">Hele studiesiden</a></p></div></footer></body></html>
''', '../')


def kind_badge(kind):
    return f'<span class="badge {kind}">{KINDS[kind]}</span>'


def stats(cards, coverage):
    counts = Counter(coverage[card["id"]]["kind"] for card in cards)
    return ('<div class="stats" aria-label="Planlagt kortdekning">'
        f'<div><strong>{len(cards)}</strong><span>Kort i utvalget</span></div>'
        + ''.join(f'<div class="{kind}"><strong>{counts[kind]}</strong><span>{label}</span></div>' for kind, label in KINDS.items()) + '</div>')


def code_block(source, language="PowerShell"):
    return f'<pre data-language="{language}"><code>{escape(source)}</code></pre>'


def file_panel(relative):
    path = OUTPUT / "labs" / relative
    if not path.resolve().is_relative_to((OUTPUT / "labs").resolve()) or not path.is_file():
        raise ValueError(f"Missing new lab source: {relative}")
    content = path.read_text(encoding="utf-8")
    return (f'<details class="source"><summary>Vis kildefil: {escape(relative)}</summary>'
            f'<p><a href="./labs/{escape(relative, quote=True)}" download>Last ned filen</a>. Rediger bare kopien under <code>workshops/labs/</code>.</p>'
            f'<pre data-source="labs/{escape(relative, quote=True)}"><code>{escape(content)}</code></pre></details>')


def render_workshop(workshop, deck, coverage):
    categories = {category["id"]: category for category in deck["categories"]}
    cards = [card for card in deck["cards"] if coverage[card["id"]]["workshop"] == workshop["id"]]
    key = workshop["id"]
    toc = '<a href="#start">Start og dekning</a><a href="#begreper">Dette lærer vi om nå</a><a href="#ressurser">Ressurser</a>'
    toc += ''.join(f'<a href="#category-{chapter["category"]}">{escape(categories[chapter["category"]]["label"])}</a>' for chapter in workshop["chapters"])
    toc += '<a href="#avslutning">Avslutt og rydd opp</a>'
    terms = list(dict.fromkeys(term for chapter in workshop["chapters"] for term in EXTRA_TERMS.get(chapter["category"], []) + chapter["terms"]))
    keyword_rows = ''
    for term in terms:
        expansion, explanation, url = GLOSSARY[term]
        keyword_rows += f'<tr><th scope="row"><label><input type="checkbox" data-progress="{key}-term-{escape(term, quote=True)}" data-kind="term">{escape(term)}</label></th><td><strong>{escape(expansion)}</strong>. {escape(explanation)}</td><td><a href="{escape(url, quote=True)}">Les mer</a></td></tr>'
    body = f'''<section class="panel" id="start"><p class="eyebrow">Domene {workshop['domain']} · Workshop {key.upper()}</p><h2>Oppdrag og forventet leveranse</h2><p>{escape(workshop['scenario'])}</p>{stats(cards, coverage)}
<p>Praktisk betyr at kortets tema undersøkes i kode, konfigurasjon eller en kjørende tjeneste. Analyse krever en begrunnet løsning, tabell eller skisse. Repetisjonskort har foreløpig ingen egen oppgave og teller ikke som oppgavedekning. Tallene beskriver opplegget; de bekrefter ikke at du har gjennomført det.</p>
<p>{escape(workshop['preparation'])}</p><p>Dette er omfattende workshops med flere kapitler. Gjennomføringstid er ikke målt; ta pauser mellom kategoriene og lagre observasjonene før ressurser slettes.</p>
<div class="study-tools"><button data-export="{key}" type="button">Eksporter notater</button><span data-progress-summary aria-live="polite"></span></div><p class="small" data-storage-note>Notater og avkryssing lagres lokalt i denne nettleseren. Flashcardenes «kan/må repetere» vurderes separat.</p></section>
<section class="panel" id="begreper"><h2>Dette lærer vi om nå</h2><p>Kryss av når du kan forklare begrepet og koble det til en observasjon eller et begrunnet valg.</p><div class="table-wrap"><table><caption>Begreper, fulle navn og leselenker</caption><thead><tr><th scope="col">Begrep</th><th scope="col">Forklaring</th><th scope="col">Les mer</th></tr></thead><tbody>{keyword_rows}</tbody></table></div><p><a href="./glossary.html">Hele begrepslisten</a></p></section>
<section class="panel" id="ressurser"><h2>Ressurser og klargjøring</h2><p><a href="./setup.html">Gjør fellesoppsettet først</a>. Opprett ressursene i den nye labgruppen fra oppdraget. Bruk egne unike navn og kontroller abonnementet før oppretting.</p><div class="table-wrap"><table><caption>Oppsett i Azure Portal eller egne IaC-filer</caption><thead><tr><th scope="col">Ressurs</th><th scope="col">Valg som øvelsen forutsetter</th></tr></thead><tbody>{''.join(f'<tr><th scope="row">{escape(name)}</th><td>{escape(settings)}</td></tr>' for name, settings in workshop['resources'])}</tbody></table></div><p>Oppsett, rollepropagering og tjenestestøtte må kontrolleres i din konto. Analyseoppgavene krever ikke at alle avanserte eller dyrere tjenestevalg opprettes.</p></section>'''
    for chapter in workshop["chapters"]:
        category = chapter["category"]
        category_cards = [card for card in cards if card["category"] == category]
        body += f'<section class="category" id="category-{category}"><h2>{escape(categories[category]["label"])}</h2><p>{escape(chapter["description"])}</p><p><a href="{CATEGORY_DOCS[category]}">Offisiell dokumentasjon</a> · <a href="../flashcards.html?domain={workshop["domain"]}&amp;category={category}">Øv på kategoriens kort</a></p>'
        for activity in chapter["activities"]:
            selected = [card for card in category_cards if coverage[card["id"]]["activity"] == activity["id"]]
            body += f'<section class="panel activity" id="{activity["id"]}"><div class="activity-meta">{kind_badge(activity["kind"])}<span>{len(selected)} tilknyttede kort</span></div><h3>{escape(activity["title"])}</h3><ol>'
            body += ''.join(f'<li>{step}</li>' for step in activity["steps"]) + '</ol>'
            if activity["code"]:
                body += code_block(activity["code"])
            body += ''.join(file_panel(relative) for relative in activity["files"])
            body += f'<details class="expected"><summary>Forventet resultat og forklaring</summary><p>{escape(activity["expected"])}</p></details>'
            body += f'<label class="note-label">Mine observasjoner og begrunnelse<textarea rows="4" data-note="{activity["id"]}" placeholder="Forventning → observasjon → forklaring. Ikke skriv hemmeligheter her."></textarea></label><label class="task-check"><input type="checkbox" data-progress="{activity["id"]}" data-kind="task">Jeg har dokumentert resultatet og kan forklare valget.</label>'
            body += card_questions(selected, coverage, workshop["domain"], category) + '</section>'
        reviews = [card for card in category_cards if coverage[card["id"]]["kind"] == "review"]
        body += f'<section class="panel review-section" id="review-{category}"><h3>Repetisjon og gjenstående øvingshull</h3><p>{len(reviews)} kort i denne kategorien har ingen egen oppgave. De er tilgjengelige til repetisjon, men er ikke merket som dekket av en praktisk eller analytisk oppgave.</p>'
        body += card_questions(reviews, coverage, workshop["domain"], category) + '</section></section>'
    other = [item for item in WORKSHOPS if item["domain"] == workshop["domain"] and item["id"] != key][0]
    body += f'<section class="panel" id="avslutning"><h2>Avslutt og rydd opp</h2><p>{escape(workshop["cleanup"])}</p><p>Forklar dataflyten og ett feilsøkingstilfelle uten oppskriften. Gå deretter til <a href="../flashcards.html?domain={workshop["domain"]}&amp;workshop={key}">workshopens kort</a> og vurder dem selv.</p><p><a href="./{other["id"]}.html">Den andre workshopen i domene {workshop["domain"]}: {escape(other["title"])}</a> · <a href="./coverage.html?domain={workshop["domain"]}">Se oppgavedekning for domenet</a></p></section>'
    return page(workshop["title"], workshop["scenario"], body, toc=toc)


def card_questions(cards, coverage, domain, category):
    if not cards:
        return ''
    result = f'<details class="questions"><summary>Kontrollspørsmål ({len(cards)}) – svar før du åpner fasiten</summary><p>Skriv et kort svar og pek på en observasjon eller et begrunnet valg. Les så fasiten; en avkryssing alene dokumenterer ikke forståelse.</p>'
    for card in cards:
        flashcard_category = f'terms-{domain}' if card.get("kind") == "term" else category
        result += (f'<details class="recall" id="card-{card["id"]}"><summary>{escape(card["question"])}</summary>'
            f'<p class="recall-answer">{escape(card["answers"][0])}</p><p class="small"><code>{card["id"]}</code> · '
            f'<a href="../flashcards.html?domain={domain}&amp;category={flashcard_category}&amp;card={card["id"]}">Åpne dette flashcardet</a></p></details>')
    return result + '</details>'


def render_index(deck, coverage):
    body = '<section class="panel"><h2>To workshops per domene</h2><p>De åtte workshopene samler kategoriene i gjennomgående oppdrag. Velg domene først, deretter workshop og kategori. Hvert kontrollspørsmål har stabil kort-ID og en sporbar kobling til en oppgave der det finnes.</p>'
    body += stats(deck["cards"], coverage)
    body += '<p><a href="../flashcards.html?source=terms">Begynn med begrepskortene</a> hvis ord som node, slot eller provision er nye. Nye orddefinisjoner øver ordforrådet og er ikke tatt med som ekstra oppgavedekning.</p>'
    body += '<p>Praktiske oppgaver og analyseoppgaver teller som oppgavedekning. Ren repetisjon vises som et gjenstående øvingshull. Dette er en planlagt kobling til kortene, ikke en garanti for eksamensdekning eller et bevis på gjennomført læring.</p><div class="actions"><a class="button" href="./coverage.html">Se alle kort og oppgaver</a><a href="./setup.html">Felles oppsett</a><a href="../old/index.html">Åpne tidligere workshops</a></div></section>'
    for domain, name in DOMAIN_NAMES.items():
        body += f'<section class="domain" id="domain-{domain}"><p class="eyebrow">Domene {domain}</p><h2>{escape(name)}</h2><p><a href="../flashcards.html?domain={domain}&amp;category=terms-{domain}">Lær domenets begreper først →</a></p><div class="workshop-grid">'
        for workshop in [item for item in WORKSHOPS if item["domain"] == domain]:
            cards = [card for card in deck["cards"] if coverage[card["id"]]["workshop"] == workshop["id"]]
            categories = {item["id"]: item["label"] for item in deck["categories"]}
            counts = Counter(coverage[card["id"]]["kind"] for card in cards)
            body += f'<article class="panel workshop-card"><span class="badge">{workshop["id"].upper()} · {len(cards)} kort</span><h3><a href="./{workshop["id"]}.html">{escape(workshop["title"])}</a></h3><p>{escape(workshop["scenario"])}</p><ul>'
            body += ''.join(f'<li><a href="./{workshop["id"]}.html#category-{chapter["category"]}">{escape(categories[chapter["category"]])}</a></li>' for chapter in workshop["chapters"])
            body += f'</ul><p class="small">{counts["practical"]} praktisk · {counts["analysis"]} analyse · {counts["review"]} repetisjon</p><a class="button" href="./{workshop["id"]}.html">Åpne workshop {workshop["id"].upper()} →</a></article>'
        body += '</div></section>'
    body += '<section class="panel"><h2>Hva som er bevart</h2><p><a href="../old/index.html">old/</a> inneholder en kopi av nettstedet og labkildene før dette løpet ble laget. De eksisterende workshopfilene i prosjektroten ligger også urørt. Nye oppgaver og eventuelle øvingsendringer ligger under workshops/.</p><p><a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200">Microsofts studieguide</a> er referansen for kompetansemålene. Flashcardene er avgrenset etter en <a href="../reports/ai200-card-review.txt">pensumkontroll</a>. Eksisterende fordypningsoppgaver er bevart; korttall og dekningsmerker viser bare de aktive kortene.</p></section>'
    return page("Åtte workshops, fire domener", "Arbeid praktisk og analytisk med flashcard-temaene, samlet i to workshops per domene og kategorier som kapitler.", body, current="home")


def render_coverage(deck, coverage):
    domains = ''.join(f'<option value="{number}">{number} · {escape(name)}</option>' for number, name in DOMAIN_NAMES.items())
    categories = ''.join(f'<option value="{item["id"]}">{escape(item["label"])}</option>' for item in deck["categories"])
    rows = ''
    for card in deck["cards"]:
        entry = coverage[card["id"]]
        rows += (f'<tr data-coverage-row data-domain="{entry["domain"]}" data-category="{entry["category"]}" data-kind="{entry["kind"]}">'
            f'<td>{entry["domain"]}</td><td>{escape(next(item["label"] for item in deck["categories"] if item["id"]==entry["category"]))}</td>'
            f'<th scope="row">{escape(card["question"])}<small>{card["id"]}</small></th><td>{kind_badge(entry["kind"])}</td>'
            f'<td><a href="../{entry["url"]}">{entry["workshop"].upper()} · {escape(entry["activityTitle"])}</a></td></tr>')
    body = f'''<section class="panel"><h2>Hva betyr dekningen?</h2>{stats(deck['cards'], coverage)}<p>Praktisk: temaet inngår i en konkret kode-, konfigurasjons- eller tjenesteøvelse. Analyse: en begrunnet løsning, tabell eller skisse. Repetisjon: kontrollspørsmål uten egen øvingsoppgave, og dermed et synlig øvingshull. Kategorien alene gir aldri merket «dekket».</p><p><a href="../flashcards.html?source=terms">Begrepskort</a> forklarer ordforrådet. Nye definisjoner er ikke lagt til som oppgavedekning; tidligere kort som er flyttet til Terms beholder sin konkrete oppgavekobling.</p><p>Dekningen er en faglig plan for oppgavene. Azure-øvelsene må gjennomføres i din konto; siden fører ikke bevis på at en tjenestetest har kjørt.</p>
<form class="filters" data-coverage-filters><label>Domene<select name="domain"><option value="all">Alle domener</option>{domains}</select></label><label>Kategori<select name="category"><option value="all">Alle kategorier</option>{categories}</select></label><label>Dekning<select name="kind"><option value="all">Alle typer</option><option value="practical">Praktisk oppgave</option><option value="analysis">Analyseoppgave</option><option value="review">Kun repetisjon</option></select></label><label>Søk<input name="search" type="search" placeholder="Spørsmål, kort-ID eller oppgave"></label></form><p data-coverage-count aria-live="polite">{len(deck['cards'])} kort</p>
<div class="table-wrap"><table class="coverage-table"><caption>Alle kort med kategori og konkret oppgavekobling</caption><thead><tr><th scope="col">Domene</th><th scope="col">Kategori</th><th scope="col">Spørsmål</th><th scope="col">Dekning</th><th scope="col">Oppgave eller repetisjon</th></tr></thead><tbody>{rows}</tbody></table></div></section>'''
    return page("Flashcards og workshopdekning", "Se nøyaktig hvor hvert kort øves, og hvilke kort som foreløpig bare har repetisjon.", body, current="coverage")


def render_glossary():
    return render_jargon_page('../')


def render_setup():
    body = '''<section class="panel"><h2>Arbeid i det nye løpet</h2><p>Alle kommandoer kjøres fra prosjektroten C:\\java\\ai200 med mindre en oppgave sier noe annet. Rediger bare filer under workshops/labs/. Dagens øvrige workshops og old/ endres ikke av dette løpet.</p><ol><li>Bruk verktøy-, Python- og CLI-oppsettet fra <a href="../getting-started.html#for-du-starter">Kom i gang</a>. Behold prosjektets ene .venv.</li><li>Installer det nye løpets pakker i det aktive miljøet med kommandoen under. Det inkluderer Event Hubs, Blob-checkpoints og App Configuration-provider.</li><li>Opprett den nye ressursgruppen og ressursene fra hver workshop i din egen konto. Portalen er et fullverdig alternativ til egne IaC-filer. Bruk Norway East der tjeneste og SKU støttes; velg en støttet region når den aktuelle kombinasjonen ikke finnes der.</li><li>Fyll lokale miljøvariabler og ignorerte local.settings.json før skript/host startes. Variabler arves ikke automatisk til en ny terminal; sett dem der også.</li></ol>'''
    body += code_block('''# Installer bare i prosjektets aktiverte Python-miljø.
python -m pip install -r workshops/labs/requirements.txt
# Start selve studiesiden fra prosjektroten.
python -m http.server 8000 --bind 127.0.0.1''')
    body += '''<p>Åpne <a href="http://localhost:8000/workshops/">http://localhost:8000/workshops/</a>. Nettlesernotater og avkryssing bruker en egen lagringsnøkkel for det nye løpet. Eksporter notatene før lagring tømmes.</p></section>
<section class="panel"><h2>Variabler og kildefiler</h2><p>Verdier skrevet i STORE BOKSTAVER eller med DITT-navn er plassholdere. Kopier endpoint/navn fra din egen ressurs. Nøkler og passord skal bare brukes lokalt i terminalen eller ignorert innstillingsfil, ikke i eksporterte notater.</p><p>En filvisning viser hele kildefilen og har nedlastingslenke. JSON må forbli gyldig: IsEncrypted beskriver lokal innstillingskryptering, Values inneholder hostens miljøinnstillinger, FUNCTIONS_WORKER_RUNTIME velger Python og AzureWebJobsStorage er Functions-hostens Storage-forbindelse. CosmosConnection og ServiceBusConnection er navngitte bindingstilkoblinger, ikke funksjonsnavn.</p><p>Kjør én langvarig prosess per terminal. Kommandoer merket «annen terminal» kjøres mens serveren eller hosten fortsatt kjører. HTTP 400/404/500 i en fremprovosert feiltest er et resultat du skal forklare.</p></section>
<section class="panel"><h2>Kostnader og opprydding</h2><p>Azure-ressurser kan faktureres mens du leser eller tar pause. Følg <a href="../getting-started.html#kostnader">kostnadsveiledningen</a> og oppryddingen på hver workshopside. Analyseoppgaver gir bredde uten å kreve at alle dyre eller irreversible tjenestevalg prøves live. Slett bare dine egne nye labressurser etter å ha kontrollert gruppe og innhold.</p><p>Dette løpet er to omfattende workshops per domene, med flere naturlige pauser. «To workshops» er en organisering av innholdet, ikke et løfte om to korte møter.</p></section>'''
    return page("Felles oppsett for de nye workshopene", "Gjør verktøyoppsettet én gang, og opprett bare ressursene oppgaven faktisk trenger.", body)


def outputs():
    deck = course_deck(load_deck())
    coverage = compile_coverage(deck)
    # Universal-newline reading keeps generated metadata stable across Git checkouts.
    metadata = dict(version=1, deckSha256=sha256((ROOT / "flashcards-data.js").read_text(encoding="utf-8").encode("utf-8")).hexdigest(),
        kinds=KINDS, cards=coverage, workshops={item["id"]: dict(title=item["title"], domain=item["domain"]) for item in WORKSHOPS})
    result = {"index.html": render_index(deck, coverage), "coverage.html": render_coverage(deck, coverage),
        "glossary.html": render_glossary(), "setup.html": render_setup(),
        "coverage.json": json.dumps(metadata, ensure_ascii=False, indent=2) + "\n",
        "flashcard-coverage.js": "// Generated by scripts/build_workshops.py; edit curriculum and card mappings there.\nwindow.AI200_WORKSHOP_COVERAGE = " + json.dumps(metadata, ensure_ascii=False, separators=(',', ':')) + ";\n"}
    result.update({item["id"]+".html": render_workshop(item, deck, coverage) for item in WORKSHOPS})
    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Verify generated outputs without writing")
    args = parser.parse_args()
    rendered = outputs()
    stale = []
    for name, text in rendered.items():
        path = OUTPUT / name
        if args.check:
            if not path.exists() or path.read_text(encoding="utf-8") != text:
                stale.append(name)
        else:
            OUTPUT.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding="utf-8", newline="\n")
    if stale:
        raise SystemExit("Regenerate new workshops: " + ", ".join(stale))
    deck = course_deck(load_deck())
    counts = Counter(entry["kind"] for entry in compile_coverage(deck).values())
    print(f"8 workshops, {len(deck['categories'])} categories, {len(deck['cards'])} cards: {dict(counts)}")


if __name__ == "__main__":
    main()
