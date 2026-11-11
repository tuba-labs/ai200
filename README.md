# AI-200 studiegruppe

## Ny selvstyrt RAG-workshop

Den komplette [Azure RAG-workshopen](workshop/index.html) har ti kapitler, tre referanseapplikasjoner, trinnvise infrastrukturskript, eksempelmanualer og verifikasjonsverktøy. Se [workshop/README.md](workshop/README.md), [versjoner](workshop/VERSIONS.md) og [valideringsrapporten](workshop/VALIDATION.md). Kjernen er estimert til omtrent fire timer etter at verktøy og Azure-tilgang er klare; tidsbruken er ikke bekreftet av en deltaker.

Start hele dokumentasjonsnettstedet fra prosjektroten, uten Azure-pålogging:

```bash
python3 scripts/build.py
python3 scripts/serve.py --port 8000
```

Åpne **http://127.0.0.1:8000/workshop/**. På Windows kan `python` brukes hvis `python3` ikke er tilgjengelig. Selve Azure-øvelsen bruker Bash, fortrinnsvis Ubuntu i WSL2 med Docker Desktop-integrasjon.

Studieside med norsk og engelsk grensesnitt for **Developing AI Cloud Solutions on Azure**, med pensumoversikt, flashcards, begreper og prøveeksamener. Nettstedet består av statiske HTML-, CSS- og JavaScript-filer og kan publiseres direkte med GitHub Pages.

Alle publiserte sider, nettleserskript og kodeeksempler skal kunne nås fra forsiden eller en aktiv funksjon. Det inkluderer begrepenes kodeeksempler og deling av kort og resultater. `tests/test_site_reachability.py` oppdager foreldreløse filer og manglende lokale mål. Byggeskript, datakilder og tester er vedlikeholdsfiler.

## Innhold

Tilpasninger av begreper, forkortelser og eksempler vedlikeholdes i `scripts/jargon_catalog.py`, `scripts/jargon_examples.py` og `scripts/jargon_relations.py`. Kjør `python scripts/build.py` etter endringer. Begrepssidene bruker `jargon-page.css` for sideoppsett og `jargon.css` for begrepshjelp.

| Side | Innhold |
| --- | --- |
| [Oversikt](index.html) | Alle 27 delmål i fire domener |
| [Lærestoff](laerestoff.html) | Offisielle kilder, flashcards og prøveeksamener |
| [Eksamen](eksamen.html) | Eksamensformat, oppmelding og gjennomføring |
| [Flashcards](flashcards.html) | Spørsmål, kategorier og lokal fremdrift |
| [Prøveeksamen](practice-exam.html) | Prøve direkte på nettstedet med kildens «Real Exam»-merkede spørsmål |
| [Prøveresultater](practice-exam-results.html) | Poeng, svaroversikt og deling av en fullført prøve |

Forsiden viser alle 27 delmål, gruppert etter fire domener. Kryss av delmålene for å følge fremdriften; avkryssingene lagres i denne nettleseren og beholdes ved språkbytte og oppdatering. Fjern avkryssingen for å markere et delmål som uferdig. Hovedmenyen er Flashcards, Workshops, Prøveeksamen, Lærestoff og Eksamen. Logoen åpner oversikten. Begrepslisten åpnes fra lenken i Begrepshjelp-popupen; bruk mus eller pil ned fra bryteren.

Hovedmenyen vedlikeholdes i [fragments/site-header.html](fragments/site-header.html), med felles utseende i `site-navigation.css`. Kjør `python scripts/build.py` etter endringer i fragmentet. `--check` oppdager sider som ikke er oppdatert, uten å tømme `.tmp/` eller skrive filer. Menyen bygges inn i HTML med riktige relative lenker og aktiv side, så den fungerer uten JavaScript og ved åpning fra fil. Innholdsgeneratorene bruker samme fragment, og publiseringsworkflowen oppdaterer menyen før kontroll og publisering. `study.css` deles av forsiden, lærestoff og eksamenssiden.

Språk og tema byttes med flagg- og sol/måneknappene i den felles hovedmenyen. Uten et lagret språkvalg brukes norsk når nettleserens foretrukne språk er norsk (`nb`, `nn` eller `no`), ellers engelsk. Et manuelt språkvalg har prioritet og huskes mellom sidene. Norsk/engelsk gjelder hovedsidene og grensesnittet. Spørsmål, svaralternativer, forklaringer og selve flashcardene er alltid på engelsk. Språkbytte oppdaterer teksten på stedet og bevarer pågående eksamen, svar, filtervalg og kortvurderinger. Valgene lagres lokalt i nettleseren. Uten et lagret temavalg velges lyst eller mørkt fra systeminnstillingen ved sidelasting; et manuelt valg huskes og brukes før siden tegnes. Et tidligere lagret «system»-valg behandles som automatisk valg ved sidelasting. Uten nettleserlagring virker begge knappene i den åpne fanen.

Oversettelser vedlikeholdes i `data/site-translations.json`; `python scripts/build_navigation.py` lager nettleserfilen `site-translations.js`. `site.js` håndterer innstillinger og oversettelse av tekst og tilgjengelighetsetiketter. Ved sidelasting vises teksten først når språkfilen har oversatt den ferdig innleste siden; store spørsmåls- og begrepsfiler trenger ikke være ferdige. Uten JavaScript vises innholdet som skrevet, og en manglende språkfil hindrer ikke at siden åpnes. Merk innhold som skal beholde engelsk med `data-keep-english`, `lang="en"` og `translate="no"`. Kode og brukerens notater oversettes ikke. Fargene ligger i `site-theme.css`. Kontroller endringer med `node --test tests/site.test.cjs` og `python -m unittest discover -s tests -p test_navigation.py -v`.

## Bygg nettstedet

Bygg hele nettstedet etter endringer i generatorer, datakilder eller felles meny:

```powershell
# Tøm .tmp og generer begreper, delmål, hovedmeny og delingsforhåndsvisninger.
python scripts/build.py

# Kontroller genererte filer uten å tømme .tmp eller skrive endringer.
python scripts/build.py --check
```

Vanlige bygg tømmer `.tmp/` først og beholder en tom mappe som lokale tester kan bruke. Byggekommandoen kan kjøres fra en annen arbeidsmappe også; oppryddingen gjelder alltid prosjektets egen `.tmp/`. GitHub Pages bruker samme byggekommando. Git-ignorerte kildecacher, rapporter og eksporter ligger i `artifacts/`.

## Google Analytics

Alle 11 nåværende studiesider bruker `site-analytics.js` med GA4-måle-ID **G-T4V86T1NFD**. Den felles byggingen legger inn skriptet også på genererte begrepssider. Åpning fra fil, localhost og loopback-adresser laster ikke Google-taggen og sender ingen hendelser.

| Hendelse | Når | Parametere |
| --- | --- | --- |
| `page_view` | Standard sidevisning fra Google-taggen, konfigurert én gang per dokument. | Sidens adresse og henviser uten spørringsstreng eller fragment. |
| `question_answered` | Første gang et besvart spørsmål sjekkes, forlates eller leveres i et forsøk. Utløpt tid og lukking av siden tas med. | `question_id`, `question_type`, `question_bank`, `domain`, `correct` (0/1), `method`. |
| `flashcard_view` | Minst halvparten av kortets overskrift er synlig i en aktiv fane. | `card_id`, `card_number`, `domain`, `category`. |
| `flashcard_interaction` | Neste/Forrige og Vis svar/Vis spørsmål, også ved tastaturnavigasjon. | Kortets ID, nummer, domene og kategori, samt `action` og `from_card_id` ved navigasjon. |
| `question_view` | Et spørsmål vises eller besøkes på nytt. Språkbytte og ny tegning av samme spørsmål teller ikke en ekstra visning. | Spørsmålets ID, type, bank og domene, samt `question_number` og `total_questions`. |
| `question_interaction` | Neste/Forrige, spørsmålsnavigatoren, endret/tømt svar og hver Sjekk svar. | Samme spørsmålsmetadata, `action`, `answered` (0/1), `from_question_id` ved navigasjon og `correct` ved Sjekk svar. |

Svarhendelsen teller første svarvurdering per spørsmål og forsøk; endring av svar eller gjentatt «Sjekk svar» øker ikke antallet. Markeringen lagres med forsøket slik at oppdatering og gjenopptakelse ikke teller samme svar på nytt. Ubesvarte spørsmål telles ikke. Delvis besvarte spørsmål følger prøvens vanlige definisjon av «besvart» og gir `correct: 0`. Handlingshendelsene registrerer navigasjon, svarendringer og gjentatte sjekker hver gang. De sendes også når kortoverskriften er utenfor skjermen. Flashcards som bare er lastet utenfor skjermen, telles ikke som visninger. Å snu et kort eller endre språk/tema teller ikke en ny visning; å gå til et annet kort og tilbake teller en ny visning. Snuing har en egen handlingshendelse. Spørsmålstekst, valgte svar, fullstendige resultater og lokale notater legges ikke i våre hendelsesparametere. Studien fungerer også dersom Google-taggen blokkeres.

Hendelser kan kontrolleres i GA4s [Realtime/DebugView](https://developers.google.com/analytics/devguides/collection/ga4/events). For rapporter gruppert per handling, spørsmål eller kort registreres blant annet `action`, `question_id` og `card_id` som hendelsesbaserte egendefinerte dimensjoner i GA4. Hvis sidevisninger bare skal telle dokumentlasting, slå av **Page changes based on browser history events** i datastrømmens Enhanced Measurement-innstillinger; Google kan ellers også telle endringer i kortenes URL-er. Dette er en [innstilling i GA4-egenskapen](https://developers.google.com/analytics/devguides/collection/ga4/views#disable_page_changes_based_on_browser_history_events), uavhengig av nettstedets egen hendelsestelling.

## Kjør nettstedet lokalt

### Prøveeksamen

Åpne [Prøveeksamen](practice-exam.html) fra forsiden og start en prøve direkte. Spørsmålene følger med nettstedet i `practice-exam-data.js` og lastes automatisk både fra fil, localhost og den publiserte siden.

**Spørsmålsbanker** støtter flere valg. Velg AI-200 Prep, Interaktiv øving eller begge; begge gir 335 tilgjengelige spørsmål før domenefiltrering (326 + 9). «Bruk alle inkluderte spørsmål» bruker hele det valgte utvalget. Uten valgt bank er startknappen deaktivert. Blandede forsøk beholder de enkelte bankenes kildehenvisninger, duplikatutelatelser og oppgavetyper, og kan lagres og deles med samme resultatlenkeformat. Eksisterende forsøk og lenker fra én bank beholder identiteten sin.

**Ikke ta med spørsmål som allerede er besvart riktig** er et valgfritt filter i oppsettet. Riktige svar huskes lokalt på tvers av prøver og spørsmålsbanker, også før levering. Et senere feil svar eller tømt svar gjør spørsmålet tilgjengelig igjen. Filteret beholder feil, delvis besvarte og ubesvarte spørsmål. Antall per domene, tilgjengelig utvalg og «Bruk alle valgte spørsmål» følger filteret; du velger fortsatt antall, rekkefølge og tidsgrense selv. Dersom ingen spørsmål gjenstår, er startknappen deaktivert og oppsettet forklarer hvordan filteret kan fjernes. Avkryssingen huskes i nettleseren. Åpning av andres delte resultater endrer ikke denne fremdriften. En ny prøve starter med tomme svar og gjennomgangsmerker.

Det siste forsøket lagres bare i nettleseren. Tiden fortsetter ved lukking eller oppdatering av siden. Du kan velge antall spørsmål, domener og tidsgrense; 0 minutter slår av tidtakingen. **Sjekk svar / Check answer** viser straks om det valgte svaret er riktig, markerer riktige alternativer og viser forklaringen uten å avslutte prøven. Feil svar merkes automatisk for gjennomgang, også når bare noen av de riktige alternativene er valgt. Merket lagres sammen med forsøket og kan fjernes manuelt; et senere riktig svar fjerner det ikke automatisk. Tilbakemeldingen huskes når du går tilbake eller oppdaterer siden; endrer eller tømmer du svaret, må du sjekke det på nytt. **Forhåndsvis resultat / Preview score** beregner prosent, riktige og feil svar og resultat per domene bare fra spørsmål med minst ett valgt svar. Har du svart på 100 av 359 spørsmål, beregnes forhåndsvisningen som en prøve med 100 spørsmål; de 259 ubesvarte holdes utenfor. Forhåndsvisning endrer ikke forsøket, og tiden fortsetter å gå. Ved levering vises full svaroversikt og resultat per domene, med alle spørsmål i forsøket med i poengberegningen. Prøven endrer ikke flashcard-vurderinger.

Fullførte prøver åpnes på `practice-exam-results.html`. **Del resultat / Share results** lager en lenke med resultatet i URL-fragmentet `#r=…`, uten serverlagring. Mottakeren ser poeng, alle 27 delmål og svaroversikten, inkludert feilvalg, ubesvarte spørsmål og gjennomgangsmerker. Spørsmålsrekkefølgen beholdes. Delte resultater endrer ikke mottakerens lagrede prøve eller avkryssinger. Overføringen til resultatsiden fungerer også når nettleserlagring er blokkert.

Lenken bruker et versjonert binærformat med Base64URL som tekstformat. Tilfeldige prøver lagrer et 32-bits frø som gjenskaper rekkefølgen; det valgte spørsmålsutvalget kodes som én kombinasjonsrang. Ubesvarte spørsmål, gjennomgangsmerker og svaravvik velger automatisk mellom tomt/komplett sett, bitfelt og en kort liste over den minste gruppen. Riktige svar hentes fra bankens fasit. Eksplisitte indekser brukes når de gir en kortere beskrivelse av rekkefølgen. Begge banker og alle interaktive formater støttes. For et tilfeldig forsøk med 335 spørsmål gir målinger 129 tegn ved alt riktig, 205 ved 20 feil og 363 ved bare feil, inkludert adressen `https://tuba-labs.github.io/ai200/practice-exam-results.html#r=`; lengden varierer med svarene. En kontrollsum oppdager skadde lenker, og et bankfingeravtrykk avviser lenker som ellers ville blitt tolket mot andre spørsmål. Nye duplikatutelatelser bryter ikke eksisterende lenker. Resultater er selvrapporterte; kontrollsummen er ikke en digital signatur.

På et publisert nettsted bruker delingslenken samme adresse som siden. Ved lokal åpning fra fil kan **Adresse til publisert nettsted** endres i delingsdialogen; standarden vedlikeholdes i `ai200-share-base`-metafeltet i resultatsiden. Kopier lenken, eller bruk enhetens delingsmeny hvis nettleseren tilbyr den.

**Sjekk svar** viser hvilke av forsidens 27 delmål spørsmålet dekker. Delmålene har de samme numrene fra 1 til 27 og korte navn på forsiden, i tilbakemeldingen og i resultatene. Hold pekeren over delmålsteksten eller fokuser delmålet for å se hele teksten; på forsiden vises hjelpen også når avkryssingen får tastaturfokus. På berøringsskjerm trykker du på delmålet. Spørsmål uten kobling viser ingen delmål i tilbakemeldingen. Etter levering vises alle delmål med prosent og antall riktige, for eksempel **75% · 3/4 spørsmål riktige**. Ubesvarte spørsmål regnes som feil; delmål uten spørsmål i forsøket vises som «Ikke testet». Spørsmål som dekker flere delmål, teller én gang for hvert av dem. Støttestoff teller bare i samlet eksamensresultat. Forsidens manuelle avkryssinger endres ikke av prøven.

Numre, korte navn og fullstendige tekster vedlikeholdes i `data/learning-objectives.json`; ID-ene er uavhengige av nummer og språk, slik at avkryssinger beholdes. Koblingene for alle 368 spørsmål i begge banker vedlikeholdes i `data/practice-exam-objectives.json`. Bygget lager etikettene på forsiden, `learning-objectives-data.js` og `practice-exam-objectives.js` fra samme katalog. Endres spørsmålsbankene, må koblingene gjennomgås og kontrollsummene oppdateres før bygget godtas. Dette er nettstedets studiekoblinger, ikke offisielle Microsoft-klassifiseringer.

Vedlikeholdere kan oppdatere den medfølgende spørsmålsbanken fra prosjektroten:

```powershell
# Lagre oppgavesettene og oppdater nettstedets spørsmål merket «Real Exam».
python scripts/download_practice_exam.py
```

Nedlastingen 30. oktober 2026 fant 359 slike spørsmål i 16 sett, med fire caser og 20 spørsmål med flere riktige svar. «Real Exam» er kildens merking; den bekrefter ikke at Microsoft har brukt spørsmålene. Fasit og forklaringer beholdes fra kilden.

Den utvidede gjennomgangen 1. november 2026 utelukker 33 gjentatte varianter fra nye forsøk, inkludert 15 ekstra etter kontroll av spørsmål der en mer fullstendig oppgave allerede tester de samme svarfaktaene. Nye prøver bruker dermed 326 spørsmål, hvorav 19 har flere riktige svar. [data/practice-exam-review.json](data/practice-exam-review.json) dokumenterer beholdte og utelatte spørsmål, begrunnelser og kontrollsummer. Beslektede spørsmål beholdes når produktkonfigurasjon, operasjon, regel eller vesentlige vilkår endrer svaret.

Ved gjenåpning av en aktiv prøve beholdes én variant av hver duplikatgruppe som finnes i forsøket. En allerede besvart variant foretrekkes, og svaralternativene kopieres ikke mellom ulike spørsmåls-ID-er. Gjennomgangsmerker beholdes, og svar på utelatte varianter arkiveres i det lagrede forsøket. Antall spørsmål oppdateres, mens starttid og absolutt frist beholdes. En enkelt variant uten en annen kopi i forsøket beholdes. Alle opprinnelige spørsmål og bankens identitet beholdes, og innleverte resultater endres ikke.

Skriptet oppdaterer `practice-exam-data.js`, som sjekkes inn sammen med nettstedet. Kilde-HTML, kontrollsummer, duplikatnotat og lesbare eksportfiler beholdes under Git-ignorerte `artifacts/ai200prep/`. `--from-cache` bygger spørsmålsbanken på nytt fra lagret HTML uten nettverk. Gjennomgåtte duplikater utelukkes ved ny generering også; endret spørsmål, fasit eller case krever ny vurdering av kontrollsummen. Nærtreff basert på både spørsmål og riktige svar rapporteres for manuell gjennomgang og fjernes ikke automatisk. Kildehenvisninger, fasit, forklaringer og caser følger med spørsmålene.

Rekkefølgeoppgaver viser ett eget, nummerert slippfelt per trinn fra starten. Fyll feltene i valgfri rekkefølge ved å dra en handling, eller velg handlingen og deretter et trinn med mus, berøring eller tastatur. Flytting mellom fylte felt bytter handlingene. «Fjern trinn» tømmer bare det aktuelle feltet. Tomme felt beholder posisjonen ved lagring, poengberegning og deling av resultatet.

Kort og prøveresultater har samme delingsvalg: e-post, LinkedIn, WhatsApp, Telegram, X og enhetens delingsmeny, samt kopiering av lenke eller tekst med lenke. Kortets tittel brukes i dialogen, nettleserfanen og delingsmeldingene; resultater viser prosent og antall riktige. Sperret utklippstavle gir markert tekst som kan kopieres manuelt. Avbrutt deling viser ingen feilmelding.

Bygget lager lette forhåndsvisningssider i `share/cards/` for hvert kort og `share/results/` for hver prosent fra 0 til 100. De har Open Graph- og Twitter-metadata som kan leses uten JavaScript. Nettleseren sendes videre til riktig kort eller resultatside; hele resultatet beholdes i URL-fragmentet. Disse genererte mappene er ignorert av Git, men opprettes av `python scripts/build.py` før publisering og kontrolleres av `--check`. Domenet i forhåndsvisningsmetadata vedlikeholdes i `PUBLIC_BASE` i `scripts/build_share_previews.py`; det følger kortdelingens eksisterende lokale standard `https://www.tubalabs.org/ai200/`. `share-preview.svg` er kilden til det felles forhåndsvisningsbildet `share-preview.png`.

### Lokal server

Fra rotmappen med Python installert:

```powershell
# Start nettstedet lokalt på port 8000, bare tilgjengelig på denne maskinen.
python scripts/serve.py --port 8000
```

Åpne <http://localhost:8000>. Stopp serveren med `Ctrl+C`. Ingen pakkeinstallasjon eller byggesteg er nødvendig for nettstedet.

## Publiser med GitHub Pages

Engangsoppsett for repositoryet:

1. Åpne **Settings → Pages → Build and deployment** på GitHub. For dette repositoryet finner du innstillingen under [Pages settings](https://github.com/tuba-labs/ai200/settings/pages). Du må ha rett til å endre Pages-oppsettet.
2. Sett **Source** til **GitHub Actions**. [Workflowen ligger allerede i prosjektet](.github/workflows/pages.yml); du trenger ikke opprette en fra en mal.
3. Commit og push endringene, inkludert workflow-filen, til `main`.
4. Åpne **Actions → Publiser AI-200** og kontroller at kjøringen lykkes. Finn nettadressen via **Settings → Pages → Visit site** når publiseringen er ferdig.

Deretter holder det å pushe til `main`: GitHub henter koden, setter opp Python 3.12, genererer begrepssider, delmål og delingsforhåndsvisninger, oppdaterer hovedmenyen og publiserer nettstedet. Generatoren krever ingen pakkeinstallasjon. Hvis genereringen feiler, stopper kjøringen før publisering. Du kan også starte den manuelt under **Actions → Publiser AI-200 → Run workflow**, med `main` valgt.

Vanlig adresse er `https://<brukernavn>.github.io/<repository>/`. Relative lenker sørger for at sidene og kodeeksemplene fungerer også under repository-stien. Se [GitHubs veiledning for publiseringskilde](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) og [egne Pages-workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). For et offentlig repository kan GitHub Pages brukes med GitHub Free; private repositories krever en plan som støtter Pages.

## Flashcards

[flashcards.html](flashcards.html) viser 523 kort: 324 fra de oppdelte eldre kortene og 199 nye, bearbeidede kort fra AI-200 Prep. Spørsmål og svar er på engelsk. Hvert kort i [flashcards-data.js](flashcards-data.js) har stabil ID, ett spørsmål, svar, fagdomene, emnekategori og kildehenvisninger. Like læringspunkter er slått sammen. Kort med lignende ordlyd beholdes når de tester ulike regler, for eksempel readiness mot liveness eller senderrolle mot mottakerrolle.

Filtrene kombinerer domene, kategori, kortsett, status og fritekstsøk. Gamle fremdriftsmarkeringer migreres til delkortene; ved motstridende markeringer på et sammenslått kort prioriteres «Må repetere». Nye kort starter uten markering. Dataene lastes som et vanlig skript, så siden fungerer både fra fil og via HTTP uten et byggesteg.

Kontroller kortdataene uten ekstrapakker:

```powershell
python -m unittest discover -s tests -p test_flashcards.py -v
```
