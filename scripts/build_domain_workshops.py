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
                      ("Cosmos DB, notes og leases", "Del 9–11", "Etter del 11; behold notes mellom samlingene eller opprett på nytt"),
                      ("Managed Redis", "Del 12–13", "Etter del 13")],
    },
    {
        "number": 3, "slug": "integrasjoner", "title": "Integrasjoner og Functions",
        "syllabus": "pensum-integrasjoner.html", "first": 14, "last": 18,
        "parts": [("HTTP, køer og topics", [14, 15, 16]), ("Bindings og Event Grid", [17, 18])],
        "resources": [("HTTP Function App", "Del 14 og 18, eventuelt domene 4", "Etter siste øvelse som bruker appen, eller publiser på nytt senere"),
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

CARRY = {
    7: "Avslutt psql og slett den lokale ai200-pg-containeren med volumene når du har tatt vare på egne SQL-notater. Neste del bruker Azure PostgreSQL.",
    8: "Fjern PGCONNINFO fra terminalen. Slett den dedikerte PostgreSQL-serveren; de øvrige delene bruker andre tjenester.",
    9: "Behold Cosmos-kontoen, databasen og notes til del 10–11. Ved to samlinger må disse være tilgjengelige ved starten av samling 2, eller opprettes på nytt med setup-steget.",
    10: "Vectors-containeren kan slettes etter testen. Behold notes, databasen og kontoen til change feed-øvelsen i neste del.",
    11: "Stopp Functions-host og slett labs/cosmos/local.settings.json med labnøkler. Cosmos-konto og dedikert Storage kan slettes når change feed-testen er ferdig.",
    12: "Behold Managed Redis og RediSearch-oppsettet til vektorøvelsen i neste del. Sett miljøvariablene på nytt hvis du bytter terminal.",
    13: "Kjør cleanup i Redis-skriptet for å fjerne labindeksen og dens dokumenter. Fjern REDIS_KEY og slett den dedikerte instansen.",
    14: "Stopp lokal host, men behold den publiserte HTTP Function App-en til Event Grid i del 18. Den kan også brukes i domene 4.",
    15: "Kontroller at labmeldingene er håndtert. Behold Service Bus-namespace og documents-kø til del 16–17.",
    16: "Fullfør labmeldingene og slett topic/subscriptions når testen er ferdig. Behold documents-kø og namespace til bindingene i neste del.",
    17: "Stopp bindingenes Functions-host, håndter DLQ-meldingen og slett labs/bindings/local.settings.json. Service Bus kan slettes nå. Behold HTTP Function App-en til Event Grid.",
    18: "Slett Event Grid-abonnement og topic, fjern FAIL_EVENTS og EVENTGRID_KEY. Behold Function App-en bare hvis Key Vault-øvelsen i domene 4 skal bruke den.",
    19: "Fjern appens DEMO_SECRET-setting og rydd labhvelv/Function App når de er ferdig brukt. App Configuration-øvelsen i neste del trenger ikke Key Vault-oppslaget.",
    20: "Fjern APP_CONFIG_ENDPOINT og slett den dedikerte App Configuration-ressursen. Neste del bruker de lokale sporingsprogrammene.",
    22: "Stopp begge tjenester, fjern APPLICATIONINSIGHTS_CONNECTION_STRING og slett dedikerte overvåkingsressurser etter at du har undersøkt telemetrien.",
}

SESSION_PREPARATION = {
    1: ["Samling 1: Følg Docker-oppsettet i del 1 og CLI-innloggingen i Kom i gang. Opprett ACR i del 2 og App Service i del 3 med kommandoene der. Container Apps og AKS trengs ikke ennå.",
        "Samling 2: Bruk ACR-imaget fra samling 1. Opprett Container Apps i del 4, Storage-køen i del 5 og AKS i del 6 med stegene der. App Service trengs ikke her."],
    2: ["Samling 1: Docker/pgvector, Azure PostgreSQL og Cosmos DB med notes-containeren. Redis og change feed-host trengs først i samling 2.",
        "Samling 2: Behold eller opprett Cosmos notes fra del 9, aktiver vektorsøk og klargjør Functions Core Tools, lab-Storage og Managed Redis med RediSearch. Azure PostgreSQL trengs ikke her."],
    3: ["Samling 1: Functions Core Tools, en publiserbar HTTP Function App og et Standard Service Bus-namespace med kø, topic og subscriptions.",
        "Samling 2: Ha documents-køen, lab-Storage og den publiserte HTTP Function App-en fra samling 1 tilgjengelig. Klargjør Event Grid-topic og webhook; bruk bindingenes separate lokale app."],
    4: ["Samling 1: Function App fra workshop 14, Key Vault, App Configuration, Azure CLI og relevante dataroller.",
        "Samling 2: Prosjektets Python-miljø og en Application Insights-ressurs med tilknyttet workspace. Function App, Key Vault og App Configuration trengs ikke til sporings- og KQL-delene."],
}


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
        "extensionBundle.id": "La Functions-hosten laste bindingene fra Microsofts utvidelsespakke.",
        "extensionBundle.version": "Bruk bundle 4.x; øvre grense 5.0.0 er ikke inkludert.",
        "IsEncrypted": "false betyr at de lokale innstillingene er lagret som vanlig tekst.",
        "Values.FUNCTIONS_WORKER_RUNTIME": "Velg Python som worker for denne Function App-en.",
        "Values.AzureWebJobsStorage": "Tilkobling til labens Storage-konto som Functions-hosten og triggerne kan bruke.",
        "Values.ServiceBusConnection": "Labtilkoblingen som Service Bus-bindingene refererer til med connection-navnet.",
        "Values.CosmosConnection": "Labtilkoblingen som Cosmos-triggeren refererer til med connection-navnet.",
        "Values.COSMOS_DATABASE": "Databasenavnet som settes inn i triggerens %COSMOS_DATABASE%-uttrykk.",
    }

    def fields(value, prefix=''):
        for key, item in value.items():
            name = prefix + key
            if name in notes:
                yield f'<dt><code>{escape(name)}</code></dt><dd>{escape(notes[name])}</dd>'
            if isinstance(item, dict):
                yield from fields(item, name + '.')

    entries = ''.join(fields(json.loads(content)))
    return '<p class="small">Forklaring av feltene (JSON-filen kan kopieres som den er):</p><dl class="source-notes">' + entries + '</dl>' if entries else ''


def source_panel(relative, panel_id=None):
    source = lab_source(relative)
    relative = source.relative_to(ROOT).as_posix()
    content = source.read_text(encoding="utf-8")
    language = {".py": "Python", ".sql": "SQL", ".yaml": "YAML", ".json": "JSON"}.get(source.suffix, "Tekst")
    if source.name == "Dockerfile":
        language = "Dockerfile"
    panel_id = panel_id or 'fil-' + re.sub(r'[^a-z0-9]+', '-', relative.lower()).strip('-')
    return (f'<details class="source-file" id="{escape(panel_id)}" data-source-file="{escape(relative)}">'
            f'<summary><code>{escape(source.name)}</code><span class="small"> — vis fil og forklaring</span></summary>'
            f'<p class="small">Kildefil: <code>{escape(relative)}</code></p>'
            f'<pre data-language="{language}" data-source="{escape(relative)}"><code>{escape(content)}</code></pre>'
            f'{json_explanations(source, content)}</details>')


def inline_sources(text):
    text = re.sub(r'<details class="source-file" id="([^"]+)" data-source-file="([^"]+)">[\s\S]*?</details>',
                  lambda match: source_panel(unescape(match[2]), unescape(match[1])), text)

    def embed(match):
        source = lab_source(match[2])
        return match[1] + escape(source.read_text(encoding="utf-8")) + match[3]

    return re.sub(r'(<pre\b[^>]*\bdata-source="([^"]+)"[^>]*><code>)[\s\S]*?(</code></pre>)',
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
            if number in CARRY:
                cleanup_commands = ''.join(re.findall(r'<pre\b[\s\S]*?</pre>', body))
                body = f'<p>{escape(CARRY[number])}</p>' + cleanup_commands
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
    preparation_notes = ''.join(f'<p data-domain-session-note data-session="{i}">{escape(note)}</p>'
                                for i, note in enumerate(SESSION_PREPARATION[domain["number"]], 1))
    python_activation = ''
    if domain["number"] != 1:
        python_activation = '<p>Aktiver <a href="./getting-started.html#intellij">prosjektets Python-miljø</a> før Python-øvelsene:</p><pre data-language="PowerShell"><code>.\\.venv\\Scripts\\Activate.ps1</code></pre>'
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
      <section class="panel" id="forberedelser"><h2>Før du starter</h2><p>Fullfør <a href="./getting-started.html#for-du-starter">felles oppsett</a> og <a href="./getting-started.html#arbeidsfiler">oppsettet for kildefiler og resultater</a> før første workshop.</p><p>Start hver del med en PowerShell-terminal i prosjektmappen. Rediger kildefilene i <code>labs/</code>. Lagre notater, logger og eksporter under <code>artifacts/</code>, som er ignorert av Git. Åpne filpanelene i delene for å lese kildefilene med kommentarer.</p>{python_activation}{preparation_notes}</section>
      <section class="panel" id="ressurser"><h2>Behold ressursene til de er ferdig brukt</h2><p>Ressursplanen under gjelder denne samlede gjennomføringen. Ryddingen i delene er tilpasset overgangen til neste del. Slett bare dedikerte labressurser; en gruppe som også inneholder ressurser til senere deler må beholdes eller ryddes ressurs for ressurs.</p><div class="table-wrap"><table><caption>Overganger mellom deler og samlinger</caption><thead><tr><th scope="col">Ressurs</th><th scope="col">Brukes i</th><th scope="col">Rydding</th></tr></thead><tbody>{resources}</tbody></table></div><p><a href="./getting-started.html#kostnader">Kostnadsveiledning (valgfritt)</a>. Hvis du ikke vil beholde ressurser mellom samlingene, noter oppsettet og klargjør dem på nytt før neste samling.</p></section>
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
