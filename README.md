# AI-200 studiegruppe

Studieside med norsk og engelsk grensesnitt for **Developing AI Cloud Solutions on Azure**, med pensumoversikt, flashcards og praktiske workshops. Nettstedet består av statiske HTML-, CSS- og JavaScript-filer og kan publiseres direkte med GitHub Pages.

## Workshops

[workshops/index.html](workshops/index.html) samler 408 aktive kort i to workshops per domene, med emnekategorier som kapitler. Hvert kort er koblet til en konkret praktisk oppgave eller analyseoppgave der en slik finnes. Kort uten egen oppgave vises som repetisjon i [dekningsoversikten](workshops/coverage.html), og teller ikke som oppgavedekning. Flashcardsiden viser typen som et klikkbart merke og kan filtrere på dekning eller workshop.

Labkildene ligger i `workshops/labs/`. Praktisk/analytisk dekning beskriver opplegget; den bekrefter ikke gjennomføring eller full eksamensdekning. Azure-øvelsene krever egen konto og kontrolleres ved gjennomføring.

Rediger innhold og kortkoblinger i `scripts/workshop_curriculum.py`, og kjør `python scripts/build.py`. Dette tømmer `.tmp/` og genererer begreper, workshopsider, kortdekning, delmål for prøveeksamen og felles hovedmeny. Tilpasninger av begreper og eksempler vedlikeholdes i `scripts/jargon_catalog.py`, `scripts/jargon_examples.py` og `scripts/jargon_relations.py`.

| Side | Innhold |
| --- | --- |
| [Oversikt](index.html) | Alle 27 delmål i fire domener |
| [Lærestoff](laerestoff.html) | Teori, pensumsider og øving |
| [Eksamen](eksamen.html) | Eksamensformat, oppmelding og gjennomføring |
| [Kom i gang](getting-started.html) | Verktøy, Python-miljø og Azure-konto |
| [Felles workshopoppsett](workshops/setup.html) | Pakker, variabler, labfiler og opprydding |
| [Workshopoversikt](workshops/index.html) | To workshops per domene |
| [D1A · Fra kildekode til en driftet container](workshops/d1a.html) | Domene 1 |
| [D1B · Hendelsesstyrt skalering og Kubernetes-drift](workshops/d1b.html) | Domene 1 |
| [D2A · Hent riktige dokumenter med PostgreSQL og Redis](workshops/d2a.html) | Domene 2 |
| [D2B · Cosmos DB fra partisjon til endringsflyt](workshops/d2b.html) | Domene 2 |
| [D3A · Fra HTTP-kall til bakgrunnsarbeid og hendelser](workshops/d3a.html) | Domene 3 |
| [D3B · Pålitelig køarbeid og gjenlesbare hendelsesstrømmer](workshops/d3b.html) | Domene 3 |
| [D4A · Identitet, hemmeligheter og dynamisk konfigurasjon](workshops/d4a.html) | Domene 4 |
| [D4B · Finn en distribuert feil med OpenTelemetry og KQL](workshops/d4b.html) | Domene 4 |
| [Kortdekning](workshops/coverage.html) | Sporbare koblinger fra kort til oppgaver |
| [Flashcards](flashcards.html) | Spørsmål, kategorier og lokal fremdrift |
| [Prøveeksamen](practice-exam.html) | Prøve direkte på nettstedet med kildens «Real Exam»-merkede spørsmål |
| [Prøveresultater](practice-exam-results.html) | Poeng, svaroversikt og deling av en fullført prøve |

Start med [Kom i gang](getting-started.html#for-du-starter) og [felles workshopoppsett](workshops/setup.html). Bruk én `.venv` i prosjektroten. Opprett ressursene fra ressursplanen i hver workshop og følg oppryddingen etterpå. Standardregionen er Norway East (`norwayeast`) der tjeneste og SKU støttes.

Forsiden viser alle 27 delmål, gruppert etter fire domener. Kryss av delmålene for å følge fremdriften; avkryssingene lagres i denne nettleseren og beholdes ved språkbytte og oppdatering. Fjern avkryssingen for å markere et delmål som uferdig. Lærestoff og eksamensinformasjon har egne sider. Alle nåværende sider har samme hovedmeny med Oversikt, Lærestoff, Flashcards, Prøveeksamen, Begreper og Eksamen. Eldre domenelenker på forsiden peker til delmålsoversikten.

Hovedmenyen vedlikeholdes i [fragments/site-header.html](fragments/site-header.html), med felles utseende i `site-navigation.css`. Kjør `python scripts/build.py` etter endringer i fragmentet. `--check` oppdager sider som ikke er oppdatert, uten å tømme `.tmp/` eller skrive filer. Menyen bygges inn i HTML med riktige relative lenker og aktiv side, så den fungerer uten JavaScript og ved åpning fra fil. Innholdsgeneratorene bruker samme fragment, og publiseringsworkflowen oppdaterer menyen før kontroll og publisering. `study.css` deles av forsiden, lærestoff og eksamenssiden.

Språk og tema byttes med flagg- og sol/måneknappene i den felles hovedmenyen. Uten et lagret språkvalg brukes norsk når nettleserens foretrukne språk er norsk (`nb`, `nn` eller `no`), ellers engelsk. Et manuelt språkvalg har prioritet og huskes mellom sidene. Norsk/engelsk gjelder hovedsidene og grensesnittet; de lengre workshoptekstene beholdes som skrevet. Spørsmål, svaralternativer, forklaringer og selve flashcardene er alltid på engelsk. Språkbytte oppdaterer teksten på stedet og bevarer pågående eksamen, svar, filtervalg og kortvurderinger. Valgene lagres lokalt i nettleseren. Uten et lagret temavalg velges lyst eller mørkt fra systeminnstillingen ved sidelasting; et manuelt valg huskes og brukes før siden tegnes. Et tidligere lagret «system»-valg behandles som automatisk valg ved sidelasting. Uten nettleserlagring virker begge knappene i den åpne fanen.

Oversettelser vedlikeholdes i `data/site-translations.json`; `python scripts/build_navigation.py` lager nettleserfilen `site-translations.js`. `site.js` håndterer innstillinger og oversettelse av tekst og tilgjengelighetsetiketter. Merk innhold som skal beholde engelsk med `data-keep-english`, `lang="en"` og `translate="no"`. Kode og brukerens notater oversettes ikke. Fargene ligger i `site-theme.css`. Kontroller endringer med `node --test tests/site.test.cjs` og `python -m unittest discover -s tests -p test_navigation.py -v`.

## Bygg nettstedet

Workshopinnholdet vedlikeholdes i `scripts/workshop_curriculum.py`, mens kodeeksemplene ligger i `workshops/labs/`. Bygg hele nettstedet etter endringer:

```powershell
# Tøm .tmp og generer begreper, workshops, kortdekning og hovedmeny.
python scripts/build.py

# Kontroller genererte filer uten å tømme .tmp eller skrive endringer.
python scripts/build.py --check
```

Vanlige bygg tømmer `.tmp/` først og beholder en tom mappe som lokale tester kan bruke. Byggekommandoen kan kjøres fra en annen arbeidsmappe også; oppryddingen gjelder alltid prosjektets egen `.tmp/`. GitHub Pages bruker samme byggekommando. Filpanelene viser de tilsvarende labkildene med kommentarer og har nedlastingslenker. Notater, avkryssinger og eksport håndteres av `workshops/course.js`. Git-ignorerte resultater ligger i `artifacts/`, og lokale innstillingsfiler skal fortsatt være ignorert.

## Google Analytics

Alle 28 nåværende sider bruker `site-analytics.js` med GA4-måle-ID **G-T4V86T1NFD**. Den felles byggingen legger inn skriptet også på genererte workshop- og begrepssider. Åpning fra fil, localhost og loopback-adresser laster ikke Google-taggen og sender ingen hendelser.

| Hendelse | Når | Parametere |
| --- | --- | --- |
| `page_view` | Standard sidevisning fra Google-taggen, konfigurert én gang per dokument. | Sidens adresse og henviser uten spørringsstreng eller fragment. |
| `question_answered` | Første gang et besvart spørsmål sjekkes, forlates eller leveres i et forsøk. Utløpt tid og lukking av siden tas med. | `question_id`, `question_type`, `question_bank`, `domain`, `correct` (0/1), `method`. |
| `flashcard_view` | Minst halvparten av kortets overskrift er synlig i en aktiv fane. | `card_id`, `card_number`, `domain`, `category`. |

Svarhendelsen teller første svarvurdering per spørsmål og forsøk; endring av svar eller gjentatt «Sjekk svar» øker ikke antallet. Markeringen lagres med forsøket slik at oppdatering og gjenopptakelse ikke teller samme svar på nytt. Ubesvarte spørsmål telles ikke. Delvis besvarte spørsmål følger prøvens vanlige definisjon av «besvart» og gir `correct: 0`. Flashcards som bare er lastet utenfor skjermen, telles ikke. Å snu et kort eller endre språk/tema teller ikke en ny visning; å gå til et annet kort og tilbake teller en ny visning. Spørsmålstekst, valgte svar, fullstendige resultater og lokale notater legges ikke i våre hendelsesparametere. Studien fungerer også dersom Google-taggen blokkeres.

Hendelser kan kontrolleres i GA4s [Realtime/DebugView](https://developers.google.com/analytics/devguides/collection/ga4/events). For rapporter gruppert per spørsmål eller kort registreres blant annet `question_id` og `card_id` som hendelsesbaserte egendefinerte dimensjoner i GA4. Hvis sidevisninger bare skal telle dokumentlasting, slå av **Page changes based on browser history events** i datastrømmens Enhanced Measurement-innstillinger; Google kan ellers også telle endringer i kortenes URL-er. Dette er en [innstilling i GA4-egenskapen](https://developers.google.com/analytics/devguides/collection/ga4/views#disable_page_changes_based_on_browser_history_events), uavhengig av nettstedets egen hendelsestelling.

## Kjør nettstedet lokalt

### Prøveeksamen

Åpne [Prøveeksamen](practice-exam.html) fra forsiden og start en prøve direkte. Spørsmålene følger med nettstedet i `practice-exam-data.js` og lastes automatisk både fra fil, localhost og den publiserte siden.

**Spørsmålsbanker** støtter flere valg. Velg AI-200 Prep, Interaktiv øving eller begge; begge gir 335 tilgjengelige spørsmål før domenefiltrering (326 + 9). «Bruk alle inkluderte spørsmål» bruker hele det valgte utvalget. Uten valgt bank er startknappen deaktivert. Blandede forsøk beholder de enkelte bankenes kildehenvisninger, duplikatutelatelser og oppgavetyper, og kan lagres og deles med samme resultatlenkeformat. Eksisterende forsøk og lenker fra én bank beholder identiteten sin.

**Ikke ta med spørsmål som allerede er besvart riktig** er et valgfritt filter i oppsettet. Riktige svar huskes lokalt på tvers av prøver og spørsmålsbanker, også før levering. Et senere feil svar eller tømt svar gjør spørsmålet tilgjengelig igjen. Filteret beholder feil, delvis besvarte og ubesvarte spørsmål. Antall per domene, tilgjengelig utvalg og «Bruk alle valgte spørsmål» følger filteret; du velger fortsatt antall, rekkefølge og tidsgrense selv. Dersom ingen spørsmål gjenstår, er startknappen deaktivert og oppsettet forklarer hvordan filteret kan fjernes. Avkryssingen huskes i nettleseren. Åpning av andres delte resultater endrer ikke denne fremdriften. En ny prøve starter med tomme svar og gjennomgangsmerker.

Det siste forsøket lagres bare i nettleseren. Tiden fortsetter ved lukking eller oppdatering av siden. Du kan velge antall spørsmål, domener og tidsgrense; 0 minutter slår av tidtakingen. **Sjekk svar / Check answer** viser straks om det valgte svaret er riktig, markerer riktige alternativer og viser forklaringen uten å avslutte prøven. Feil svar merkes automatisk for gjennomgang, også når bare noen av de riktige alternativene er valgt. Merket lagres sammen med forsøket og kan fjernes manuelt; et senere riktig svar fjerner det ikke automatisk. Tilbakemeldingen huskes når du går tilbake eller oppdaterer siden; endrer eller tømmer du svaret, må du sjekke det på nytt. **Forhåndsvis resultat / Preview score** beregner prosent, riktige og feil svar og resultat per domene bare fra spørsmål med minst ett valgt svar. Har du svart på 100 av 359 spørsmål, beregnes forhåndsvisningen som en prøve med 100 spørsmål; de 259 ubesvarte holdes utenfor. Forhåndsvisning endrer ikke forsøket, og tiden fortsetter å gå. Ved levering vises full svaroversikt og resultat per domene, med alle spørsmål i forsøket med i poengberegningen. Prøven endrer ikke flashcard-vurderinger.

Fullførte prøver åpnes på `practice-exam-results.html`. **Del resultat / Share results** lager en lenke med resultatet i URL-fragmentet `#r=…`, uten serverlagring. Mottakeren ser poeng, alle 27 delmål og svaroversikten, inkludert feilvalg, ubesvarte spørsmål og gjennomgangsmerker. Spørsmålsrekkefølgen beholdes. Delte resultater endrer ikke mottakerens lagrede prøve eller avkryssinger. Overføringen til resultatsiden fungerer også når nettleserlagring er blokkert.

Lenken bruker et versjonert binærformat med Base64URL som tekstformat. Tilfeldige prøver lagrer et 32-bits frø som gjenskaper rekkefølgen; det valgte spørsmålsutvalget kodes som én kombinasjonsrang. Ubesvarte spørsmål, gjennomgangsmerker og svaravvik velger automatisk mellom tomt/komplett sett, bitfelt og en kort liste over den minste gruppen. Riktige svar hentes fra bankens fasit. Eksplisitte indekser brukes når de gir en kortere beskrivelse av rekkefølgen. Begge banker og alle interaktive formater støttes. For et tilfeldig forsøk med 335 spørsmål gir målinger 129 tegn ved alt riktig, 205 ved 20 feil og 363 ved bare feil, inkludert adressen `https://tuba-labs.github.io/ai200/practice-exam-results.html#r=`; lengden varierer med svarene. En kontrollsum oppdager skadde lenker, og et bankfingeravtrykk avviser lenker som ellers ville blitt tolket mot andre spørsmål. Nye duplikatutelatelser bryter ikke eksisterende lenker. Resultater er selvrapporterte; kontrollsummen er ikke en digital signatur.

På et publisert nettsted bruker delingslenken samme adresse som siden. Ved lokal åpning fra fil kan **Adresse til publisert nettsted** endres i delingsdialogen; standarden vedlikeholdes i `ai200-share-base`-metafeltet i resultatsiden. Kopier lenken, eller bruk enhetens delingsmeny hvis nettleseren tilbyr den.

**Sjekk svar** viser hvilke av forsidens 27 delmål spørsmålet dekker. Delmålene har de samme numrene fra 1 til 27 og korte navn på forsiden, i tilbakemeldingen og i resultatene. Hold pekeren over eller fokuser et delmål for å se hele teksten; på berøringsskjerm trykker du på delmålet eller informasjonsknappen. Spørsmål uten kobling viser ingen delmål i tilbakemeldingen. Etter levering vises alle delmål med prosent og antall riktige, for eksempel **75% · 3/4 spørsmål riktige**. Ubesvarte spørsmål regnes som feil; delmål uten spørsmål i forsøket vises som «Ikke testet». Spørsmål som dekker flere delmål, teller én gang for hvert av dem. Støttestoff teller bare i samlet eksamensresultat. Forsidens manuelle avkryssinger endres ikke av prøven.

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

Hent [labprosjektet](getting-started.html#prosjekt), og åpne PowerShell i prosjektmappen. Kildefilene ligger i `workshops/labs/`.

Følg [oppsettet for kildefiler og resultater](getting-started.html#arbeidsfiler). Rediger og kjør kildefilene direkte i `workshops/labs/`. Bruk `git restore --source=HEAD -- FIL` til å forkaste lokale øvingsendringer og hente siste committede versjon av den angitte filen. Notater, spørringer, sikkerhetskopier, logger og eksporter lagres under den Git-ignorerte mappen `artifacts/`. Lokale `local.settings.json`- og `.env`-filer med labnøkler er også ignorert. Prosjektets felles Python-miljø ligger i `.venv/`.

Fra rotmappen med Python installert:

```powershell
# Start nettstedet lokalt på port 8000, bare tilgjengelig på denne maskinen.
python -m http.server 8000 --bind 127.0.0.1
```

Åpne <http://localhost:8000>. Stopp serveren med `Ctrl+C`. Ingen pakkeinstallasjon eller byggesteg er nødvendig for nettstedet. Verktøy og avhengigheter for selve labøvelsene installeres i Kom i gang.

Workshopinnholdet kan leses uten JavaScript. Workshopene bruker JavaScript til notater, avkryssing og eksport. Domenene finnes på `workshops/index.html#domain-1` til `#domain-4`. Siden har ingen innlogging, serverlagret fremdrift eller påmeldingsskjema. Fremdriften deles ikke mellom enheter eller nettlesere; blokkert nettleserlagring hindrer ikke lesing av øvelsene.

## Kontroller labkoden lokalt

Kontroller lenker, filstier, kodevisninger og felles oppsett uten ekstrapakker:

```powershell
# Kjør dokumentasjonskontrollene og vis resultatet for hver test.
python -m unittest discover -s tests -p test_workshop_docs.py -v
```

Publiseringsworkflowen kjører disse kontrollene før nettstedet publiseres.

Med [felles Python-oppsett](getting-started.html#python-pakker) klart og prosjektets `.venv` aktivert, fra prosjektroten:

```powershell
# Kjør labtestene lokalt og vis resultatet for hver test.
python -m unittest discover -s tests -p 'test_*workshop_labs.py' -v
```

Testene kontrollerer HTTP-funksjoner, webhook-validering, bindingenes kode og trace-kontekst mellom to lokale prosesser. De bruker ingen Azure-konto. Ressursoppretting og de faktiske Azure-integrasjonene verifiseres i workshopene.

## Publiser med GitHub Pages

Engangsoppsett for repositoryet:

1. Åpne **Settings → Pages → Build and deployment** på GitHub. For dette repositoryet finner du innstillingen under [Pages settings](https://github.com/tuba-labs/ai200/settings/pages). Du må ha rett til å endre Pages-oppsettet.
2. Sett **Source** til **GitHub Actions**. [Workflowen ligger allerede i prosjektet](.github/workflows/pages.yml); du trenger ikke opprette en fra en mal.
3. Commit og push endringene, inkludert workflow-filen, til `main`.
4. Åpne **Actions → Publiser AI-200** og kontroller at kjøringen lykkes. Finn nettadressen via **Settings → Pages → Visit site** når publiseringen er ferdig.

Deretter holder det å pushe til `main`: GitHub henter koden, setter opp Python 3.12, genererer workshopene, kortdekningen og begrepssidene, oppdaterer hovedmenyen og publiserer nettstedet. Generatoren krever ingen pakkeinstallasjon. Hvis genereringen feiler, stopper kjøringen før publisering. Du kan også starte den manuelt under **Actions → Publiser AI-200 → Run workflow**, med `main` valgt.

Vanlig adresse er `https://<brukernavn>.github.io/<repository>/`. Relative lenker sørger for at sidene og labfilene fungerer også under repository-stien. Se [GitHubs veiledning for publiseringskilde](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) og [egne Pages-workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). For et offentlig repository kan GitHub Pages brukes med GitHub Free; private repositories krever en plan som støtter Pages.

## Kostnader og vedlikehold

Azure-forbruk utover gjeldende gratiskvoter bruker tilgjengelig prøvekreditt eller faktureres på Pay as you go. Kontroller kostnader, eventuell gjenværende kreditt og tjenestevilkår før hver økt. Samlet labforbruk er ikke målt, så det gis ingen garanti for at prøvekreditten dekker alle øvelsene. Slett workshopressursene etter bruk. På Free Trial avslutter du skyarbeidet før prøveperioden eller kreditten er brukt opp; på Pay as you go følger du med på forbruket og rydder opp manuelt. Se [startguidens kostnadskontroll](getting-started.html#kostnader).

Kildelenker og dato står på workshopsidene. Kontroller priser, kvoter og pensum på nytt før en ny workshoprunde. Workshopene bruker `workshops/course.css` og `workshops/course.js`; tekst og oppgaver vedlikeholdes i `scripts/workshop_curriculum.py`, med tilhørende filer under `workshops/labs/`.

## Flashcards

[flashcards.html](flashcards.html) viser 523 kort: 324 fra de oppdelte eldre kortene og 199 nye, bearbeidede kort fra AI-200 Prep. Spørsmål og svar er på engelsk. Hvert kort i [flashcards-data.js](flashcards-data.js) har stabil ID, ett spørsmål, svar, fagdomene, emnekategori og kildehenvisninger. Like læringspunkter er slått sammen. Kort med lignende ordlyd beholdes når de tester ulike regler, for eksempel readiness mot liveness eller senderrolle mot mottakerrolle.

Filtrene kombinerer domene, kategori, kortsett, status og fritekstsøk. Gamle fremdriftsmarkeringer migreres til delkortene; ved motstridende markeringer på et sammenslått kort prioriteres «Må repetere». Nye kort starter uten markering. Dataene lastes som et vanlig skript, så siden fungerer både fra fil og via HTTP uten et byggesteg.

Kontroller kortdataene uten ekstrapakker:

```powershell
python -m unittest discover -s tests -p test_flashcards.py -v
```
