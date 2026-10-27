"""Build static domain workshops from the canonical short workshop pages."""
from html import escape, unescape
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DOMAINS = [
    {
        "number": 1, "slug": "containere", "title": "Containere på Azure",
        "syllabus": "pensum-containere.html", "first": 1, "last": 6,
        "parts": [("Images og hosting", [1, 2, 3]), ("Revisjoner, skalering og AKS", [4, 5, 6])],
        "resources": [("ACR og images", "Samling 1 og 2", "Etter del 6"),
                      ("App Service-app, plan og pull-identitet", "Del 3", "Når del 3 er ferdig"),
                      ("Container App, miljø og pull-identitet", "Del 4–5", "Når del 5 er ferdig"),
                      ("Storage-konto og scale-demo-kø", "Del 5", "Når del 5 er ferdig"),
                      ("AKS-namespace/klynge", "Del 6", "Etter økten; eieren rydder en delt klynge")],
    },
    {
        "number": 2, "slug": "data", "title": "Datatjenester for AI",
        "syllabus": "pensum-data.html", "first": 7, "last": 13,
        "parts": [("PostgreSQL og Cosmos SDK", [7, 8, 9]), ("Vektorer, endringsflyt og Redis", [10, 11, 12, 13])],
        "resources": [("Lokal PostgreSQL-container", "Del 7", "Etter del 7"),
                      ("Azure PostgreSQL", "Del 8", "Etter del 8"),
                      ("Cosmos DB, notes og leases", "Del 9–11", "Etter del 11; behold kontoen og notes mellom samlingene"),
                      ("Storage for change feed", "Del 11", "Etter del 11"),
                      ("Managed Redis", "Del 12–13", "Etter del 13")],
    },
    {
        "number": 3, "slug": "integrasjoner", "title": "Integrasjoner og Functions",
        "syllabus": "pensum-integrasjoner.html", "first": 14, "last": 18,
        "parts": [("HTTP, køer og topics", [14, 15, 16]), ("Bindings og Event Grid", [17, 18])],
        "resources": [("HTTP Function App og Storage", "Del 14 og 17–19", "Etter Key Vault-øvelsen i del 19"),
                      ("Service Bus-namespace og documents-kø", "Del 15–17", "Etter del 17"),
                      ("Topic og subscriptions", "Del 16", "Etter del 16"),
                      ("Event Grid-topic og abonnement", "Del 18", "Etter at retry-testen er avsluttet")],
    },
    {
        "number": 4, "slug": "sikkerhet", "title": "Sikkerhet, sporing og KQL",
        "syllabus": "pensum-sikkerhet.html", "first": 19, "last": 22,
        "parts": [("Hemmeligheter og appkonfigurasjon", [19, 20]), ("Distribuert sporing og KQL", [21, 22])],
        "resources": [("Function App og Key Vault", "Del 19", "Når Key Vault-øvelsen er avsluttet"),
                      ("App Configuration", "Del 20", "Etter del 20"),
                      ("To lokale tjenester og Application Insights", "Del 21–22", "Etter KQL-øvelsen; behold telemetrien mellom delene")],
    },
]

def lab_source(relative):
    source = (ROOT / unescape(relative)).resolve()
    if not source.is_relative_to((ROOT / "labs").resolve()) or not source.is_file():
        raise ValueError(f"Invalid inline lab source: {relative}")
    return source


def json_explanations(source, content):
    if source.suffix != ".json":
        return ''
    notes = {
        "version": "Versjon 2.0 av Functions-hostens konfigurasjonsskjema; dette er ikke runtime-versjonen.",
        "extensionBundle": "Last Functions-bindinger fra Microsofts utvidelsespakke, versjon 4.x.",
        "IsEncrypted": "false betyr at de lokale innstillingene er lagret som vanlig tekst.",
        "Values": "Start appens lokale miljøvariabler.",
        "FUNCTIONS_WORKER_RUNTIME": "Velg Python som worker for denne Function App-en.",
        "AzureWebJobsStorage": "Tilkobling til labens Storage-konto for Functions-hosten.",
        "ServiceBusConnection": "Tilkoblingsstrengen som Service Bus-bindingene bruker.",
        "CosmosConnection": "Tilkoblingsstrengen som Cosmos-triggeren bruker.",
        "COSMOS_DATABASE": "Databasenavnet som erstatter %COSMOS_DATABASE% i triggeren.",
    }
    json.loads(content)
    explanations = []
    for line in content.splitlines():
        key = re.match(r'\s*"([^"]+)"\s*:', line)
        if key:
            explanation = notes[key[1]]
        elif line.strip() == '{':
            explanation = "Start JSON-objektet."
        elif line.strip() in ('}', '},'):
            explanation = "Avslutt miljøvariablene." if line.startswith(' ') else "Avslutt JSON-objektet."
        elif not line.strip():
            explanation = ''
        else:
            raise ValueError(f"Missing JSON line explanation in {source}: {line}")
        explanations.append('# ' + explanation if explanation else '')
    return '<span class="code-line-notes" aria-label="Forklaring av hver JSON-linje">' + escape('\n'.join(explanations)) + '</span>'


def source_panel(relative, panel_id=None):
    source = lab_source(relative)
    relative = source.relative_to(ROOT).as_posix()
    content = source.read_text(encoding="utf-8")
    language = {".py": "Python", ".sql": "SQL", ".yaml": "YAML", ".json": "JSON"}.get(source.suffix, "Tekst")
    if source.name == "Dockerfile":
        language = "Dockerfile"
    panel_id = panel_id or 'fil-' + re.sub(r'[^a-z0-9]+', '-', relative.lower()).strip('-')
    notes = json_explanations(source, content)
    annotated = ' class="code-with-notes"' if notes else ''
    return (f'<details class="source-file" id="{escape(panel_id)}" data-source-file="{escape(relative)}">'
            f'<summary><code>{escape(source.name)}</code><span class="small"> — vis fil og forklaring</span></summary>'
            f'<p class="small">Kildefil: <code>{escape(relative)}</code></p>'
            f'<pre data-language="{language}" data-source="{escape(relative)}"{annotated}><code>{escape(content)}</code>{notes}</pre>'
            f'</details>')


def inline_sources(text):
    text = re.sub(r'<details class="source-file" id="([^"]+)" data-source-file="([^"]+)">[\s\S]*?</details>',
                  lambda match: source_panel(unescape(match[2]), unescape(match[1])), text)

    def embed(match):
        source = lab_source(match[2])
        return match[1] + escape(source.read_text(encoding="utf-8")) + match[3]

    return re.sub(r'(<pre\b[^>]*\bdata-source="([^"]+)"[^>]*><code>)[\s\S]*?(</code>)',
                  embed, text)


def read_workshops():
    result = {}
    for path in ROOT.glob("workshop-*.html"):
        text = path.read_text(encoding="utf-8")
        title = re.search(r"<title>Workshop (\d+): (.*?) \| AI-200</title>", text)
        if not title:
            continue
        number = int(title[1])
        text = inline_sources(text)
        sections = re.findall(r'<section class="panel" id="([^"]+)"><h2>(.*?)</h2>\s*([\s\S]*?)</section>', text)
        if not sections:
            raise ValueError(f"No exercise sections in {path.name}")
        result[number] = {"title": unescape(title[2]), "file": path.name, "sections": sections}
    if sorted(result) != list(range(1, 23)):
        raise ValueError("Expected the 22 canonical short workshops")
    return result


def chapter(number, session, workshop):
    steps = []
    for section_id, title, body in workshop["sections"]:
        if section_id == "opprydding":
            title = "Rydding og overgang til neste del"
        body = re.sub(r'\bid="([^"]+)"', lambda m: f'id="w{number}-{m[1]}"', body)
        body = re.sub(r'href="#([^"]+)"', lambda m: f'href="#w{number}-{m[1]}"', body)
        body = re.sub(r'(<input\b[^>]*data-check="[^"]+")',
                      lambda m: m[1] + f' data-progress-source="./{workshop["file"]}"', body)
        body = re.sub(r"<(\/?)h3\b", r"<\1h5", body)
        steps.append(f'<section class="chapter-step" id="w{number}-{section_id}"><h4>{title}</h4>{body}</section>')
    return f'''<details class="panel domain-chapter" id="module-{number}" data-domain-chapter data-session="{session}" open>
<summary><span class="chapter-number">Del {number}</span><h3>{escape(workshop["title"])}</h3></summary>
<p class="small"><a href="./{workshop["file"]}">Åpne som kort workshop →</a></p>
{"".join(steps)}
</details>'''


def render(domain, workshops):
    first, last = domain["first"], domain["last"]
    sessions = domain["parts"]
    choices = f'<label><input type="radio" name="domain-session" value="all" checked><span>Én samlet økt<small>Alle {last - first + 1} deler</small></span></label>'
    for i, (name, numbers) in enumerate(sessions, 1):
        choices += f'<label><input type="radio" name="domain-session" value="{i}"><span>Samling {i}<small>Del {numbers[0]}–{numbers[-1]}</small></span></label>'
    agenda = ''.join(f'<tr><th scope="row">Samling {i}: {escape(name)}</th><td>' +
                     ' · '.join(f'<a href="#module-{n}" aria-label="Del {n}: {escape(workshops[n]["title"])}">Del {n}</a>' for n in numbers) + '</td></tr>'
                     for i, (name, numbers) in enumerate(sessions, 1))
    resources = ''.join(f'<tr><th scope="row">{escape(item)}</th><td>{escape(keep)}</td><td>{escape(cleanup)}</td></tr>'
                        for item, keep, cleanup in domain["resources"])
    chapters = ''.join(chapter(n, i, workshops[n]) for i, (_, numbers) in enumerate(sessions, 1) for n in numbers)
    links = ''.join(f'<a href="./workshop-domene-{d["slug"]}.html"' + (' aria-current="page"' if d==domain else '') +
                    f'>{d["number"]}. {escape(d["title"])}</a>' for d in DOMAINS)
    return f'''<!doctype html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Samlet workshop i {escape(domain['title'])}, som én økt eller to samlinger. Samme øvelser og fremdrift som de korte workshopene.">
  <title>Samlet workshop: {escape(domain['title'])} | AI-200</title>
  <link rel="stylesheet" href="./workshops.css">
  <link rel="stylesheet" href="./workshop-formats.css">
  <script src="./workshops.js" defer></script>
</head>
<body>
  <a class="skip" href="#innhold">Hopp til innhold</a>
  <header class="header"><div class="wrap header-inner"><a class="brand" href="./index.html"><span class="brand-mark">200</span><span>AI-200 Studiegruppe</span></a><nav aria-label="Hovednavigasjon"><a href="./index.html#domener">Pensum</a><a href="./index.html?format=domain#workshops-domene-{domain['number']}">Workshopformat</a><a href="./studiedekning.html">Studiedekning</a></nav></div></header>
  <div class="hero"><div class="wrap"><p class="eyebrow">Samlet workshop / Domene {domain['number']}</p><h1>{escape(domain['title'])}</h1><p class="lead">Gjennomfør del {first}–{last} som én sammenhengende workshop eller to samlinger. Du bruker de samme oppgavene som i de korte øktene.</p><div class="meta"><span class="tag">{last - first + 1} deler</span><span class="tag">Én eller to samlinger</span></div></div></div>
  <nav class="workshop-nav" aria-label="Samlede workshops"><div class="wrap">{links}</div></nav>
  <main id="innhold" class="wrap workshop-layout">
    <aside class="toc"><h2>På denne siden</h2><nav aria-label="Innhold"><a href="#agenda">Velg gjennomføring</a><a href="#forberedelser">Klargjøring</a><a href="#ressurser">Ressursplan</a><a href="#gjennomforing">Øvelsene</a><a href="#avslutning">Avslutt og studer videre</a></nav></aside>
    <article class="content" data-domain-workshop>
      <section class="panel" id="agenda"><h2>Én økt eller to samlinger</h2><p>Én samlet økt omfatter hele domenet. Delingen i to samlinger er tematisk. Gjennomføringstiden er ikke målt; den avhenger av forkunnskaper, egne forsøk, diskusjon og klargjøring.</p><fieldset class="format-options session-options" data-domain-session-options hidden><legend>Vis øvelser for</legend>{choices}</fieldset><p data-progress aria-live="polite"></p><p class="small">Fremdrift deles mellom formatene på samme nettsted i denne nettleseren. Ved lokal bruk åpner du nettstedet via en lokal HTTP-server. Bytte av format gir samme oppgavedekning. <a href="./index.html?format=short#workshops-domene-{domain['number']}">Velg korte økter i stedet →</a></p><div class="table-wrap"><table><caption>Forslag til deling</caption><thead><tr><th scope="col">Samling</th><th scope="col">Deler</th></tr></thead><tbody>{agenda}</tbody></table></div></section>
      <section class="panel" id="forberedelser"><h2>Felles oppsett</h2><p><a href="./getting-started.html#for-du-starter">Kom i gang</a> gjøres én gang. Ved ny terminal bruker du <a href="./getting-started.html#terminal">terminaloppsettet</a>. Ressursene opprettes i den delen som bruker dem først; følg delene i rekkefølge.</p></section>
      <section class="panel" id="ressurser"><h2>Behold ressursene til de er ferdig brukt</h2><p>Tabellen viser hva som brukes videre mellom deler og samlinger. Oppryddingen i hver del er den samme i begge workshopformater.</p><div class="table-wrap"><table><caption>Overganger mellom deler og samlinger</caption><thead><tr><th scope="col">Ressurs</th><th scope="col">Brukes i</th><th scope="col">Rydding</th></tr></thead><tbody>{resources}</tbody></table></div><p><a href="./getting-started.html#kostnader">Kostnadsveiledning (valgfritt)</a>. Avslutter du løpet før siste avhengige del, sletter du også ressursene som ellers skulle vært brukt videre.</p></section>
      <section id="gjennomforing" class="domain-exercises"><h2>Gjennomfør øvelsene</h2><p>Åpne eller lukk hver del etter behov. Ved valg av samling 1 eller 2 viser fremdriftstelleren bare oppgavene i den samlingen.</p>{chapters}</section>
      <section class="panel" id="avslutning"><h2>Avslutt og studer videre</h2><p>Kontroller at ressursene som er ferdig brukt er ryddet. Forklar de viktigste valgene uten å lese oppskriften, og bruk <a href="./{domain['syllabus']}">pensumsiden for domenet</a> til å se kompetansemål og videre studier. <a href="./studiedekning.html">Studiedekning og begrensninger</a> er den samme for begge formater.</p></section>
      <nav class="page-nav" aria-label="Andre formater"><a href="./index.html?format=short#workshops-domene-{domain['number']}">Korte workshops →</a><a href="./index.html?format=domain#workshops-domene-{domain['number']}">Samlede workshops →</a></nav>
    </article>
  </main>
  <footer><div class="wrap footer-inner"><span>AI-200 · Samlet domene {domain['number']}</span><a href="./{domain['syllabus']}">Pensum og videre studier</a></div></footer>
</body>
</html>
'''


def main():
    workshops = read_workshops()
    for workshop in workshops.values():
        path = ROOT / workshop["file"]
        original = path.read_text(encoding="utf-8")
        updated = inline_sources(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8", newline="\n")
            print(path.name)
    for domain in DOMAINS:
        path = ROOT / f'workshop-domene-{domain["slug"]}.html'
        path.write_text(render(domain, workshops), encoding="utf-8", newline="\n")
        print(path.name)


if __name__ == "__main__":
    main()
