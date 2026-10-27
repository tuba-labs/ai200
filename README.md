# AI-200 studiegruppe

Norsk studieside for **Developing AI Cloud Solutions on Azure**, med pensumoversikt, flashcards og praktiske workshops. Nettstedet består av statiske HTML-, CSS- og JavaScript-filer og kan publiseres direkte med GitHub Pages.

## Sider

| Side | Innhold |
| --- | --- |
| [Oversikt](index.html) | Pensum, 22 workshops, studieløp og eksamensressurser |
| [Kom i gang](getting-started.html) | Felles verktøy, én Python-interpreter og Azure-konto |
| [Studiedekning](studiedekning.html) | Kartlegging av 27 delmål, begrensninger og videre studier |
| [Pensum 1: Containere](pensum-containere.html) | Kompetansemål og workshop 1–6 |
| [Pensum 2: AI-data](pensum-data.html) | Kompetansemål og workshop 7–13 |
| [Pensum 3: Integrasjoner](pensum-integrasjoner.html) | Kompetansemål og workshop 14–18 |
| [Pensum 4: Sikkerhet og drift](pensum-sikkerhet.html) | Kompetansemål og workshop 19–22 |
| [Samlet: Containere](workshop-domene-containere.html) | Del 1–6 samlet, eller samling 1: del 1–3 / samling 2: del 4–6 |
| [Samlet: AI-data](workshop-domene-data.html) | Del 7–13 samlet, eller samling 1: del 7–9 / samling 2: del 10–13 |
| [Samlet: Integrasjoner](workshop-domene-integrasjoner.html) | Del 14–18 samlet, eller samling 1: del 14–16 / samling 2: del 17–18 |
| [Samlet: Sikkerhet og drift](workshop-domene-sikkerhet.html) | Del 19–22 samlet, eller samling 1: del 19–20 / samling 2: del 21–22 |
| [1. Bygg og feilsøk et container-image](workshop-containers.html) | Domene 1 |
| [2. Lagre images og bygg med ACR Tasks](workshop-acr.html) | Domene 1 |
| [3. Kjør en container i App Service](workshop-app-service.html) | Domene 1 |
| [4. Miljøer og revisjoner i Container Apps](workshop-container-apps.html) | Domene 1 |
| [5. Hendelsesstyrt skalering med KEDA](workshop-keda.html) | Domene 1 |
| [6. Utrulling og feilsøking i AKS](workshop-aks.html) | Domene 1 |
| [7. PostgreSQL: vektorsøk og indekser](workshop-data.html) | Domene 2 |
| [8. PostgreSQL i Azure: SDK og forbindelser](workshop-postgresql.html) | Domene 2 |
| [9. Cosmos DB: SDK, indekser og RU](workshop-cosmos.html) | Domene 2 |
| [10. Vektorsøk i Cosmos DB](workshop-cosmos-vectors.html) | Domene 2 |
| [11. Behandle endringer fra Cosmos DB](workshop-change-feed.html) | Domene 2 |
| [12. Caching og invalidering med Managed Redis](workshop-redis.html) | Domene 2 |
| [13. Vektorindeks i Managed Redis](workshop-redis-vectors.html) | Domene 2 |
| [14. Bygg og publiser en HTTP Function](workshop-integrations.html) | Domene 3 |
| [15. Behandle kømeldinger og DLQ i kode](workshop-service-bus.html) | Domene 3 |
| [16. Service Bus: topics og subscriptions](workshop-topics.html) | Domene 3 |
| [17. Functions: triggere og output-binding](workshop-bindings.html) | Domene 3 |
| [18. Event Grid: filtre, egne hendelser og retries](workshop-event-grid.html) | Domene 3 |
| [19. Key Vault: oppslag, identitet og rotasjon](workshop-security.html) | Domene 4 |
| [20. Les appkonfigurasjon med etiketter](workshop-app-configuration.html) | Domene 4 |
| [21. Spor et kall mellom to tjenester](workshop-tracing.html) | Domene 4 |
| [22. Finn feil og målinger med KQL](workshop-kql.html) | Domene 4 |
| [Flashcards](flashcards.html) | 68 kort med filtrering og lokal fremdrift |

Start med **[Før første workshop](getting-started.html#for-du-starter)**. Derfra følger du [oppskriften for å hente og åpne prosjektet i IntelliJ](getting-started.html#prosjekt), installerer verktøyene og klargjør Azure-kontoen. Begge kontovalgene bruker samme workshops, med lokal utvikling og testing som forberedelse til Azure-øvelsene. Praktisk konto- og verktøyoppsett er klargjøring; workshopenes læringsmål følger AI-200. Se [valgfri kostnadsveiledning](getting-started.html#kostnader) ved behov.

På Free Trial beholder du utgiftsgrensen. Hvis en tjeneste krever oppgradering, eller kreditten/prøveperioden utløper, stopper du den skyøvelsen og vurderer kontovalget i startguiden før du eventuelt endrer abonnementet. Pay as you go har ingen innebygd hard utgiftsgrense; budsjettvarsler stopper ikke ressursene. Du kan også følge en demonstrasjon eller jobbe sammen ved en annen deltakers maskin uten å dele innloggingsopplysninger.

Løpet består av 22 avgrensede workshops som kan tas i eget tempo. Hver side angir forkunnskaper, eventuell provisjonering før økten, forventede resultater og opprydding. Workshopene er gruppert etter de fire domenene og følger [Microsofts studieveiledning](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200). Alle Python-øvelser bruker én `.venv` i prosjektroten.

Domene 1 har [oppsett steg for steg](workshop-domene-containere.html#forberedelser) for Docker, ACR, App Service, Container Apps, Storage-kø og AKS. [CLI-installasjon, innlogging og rettigheter](getting-started.html#azure-cli) forklares i Kom i gang. Ressursene opprettes i delene der de brukes; en ferdig AKS-klynge er ikke nødvendig før del 1. Veiledningene er med i både korte og samlede workshops.

Forsiden viser pensum først og workshopene i fire faner. Velg mellom de 22 korte øktene og fire samlede domeneworkshops. Hver samlet side kan vise alle delene eller bare samling 1/2, med tilpasset ressursplan. Gjennomføringstiden er ikke målt. Delingen i samlinger er tematisk; tidsbruk avhenger av forkunnskaper, egne forsøk, diskusjon og klargjøring. Pensumsidene kobler hvert delmål til aktuelle økter. [Studiedekning](studiedekning.html) skiller mellom grunnøvelse og delvis dekning. Oppgavedekningen er den samme i begge formater.

De korte HTML-sidene er kilden til oppgavene. Samlede sider bygges fra dem og bruker samme fremdriftsnøkler. Ved push til `main` kjører [publiseringsworkflowen](.github/workflows/pages.yml) generatoren automatisk før GitHub Pages publiserer nettstedet. Fullfør engangsoppsettet under [Publiser med GitHub Pages](#publiser-med-github-pages) for å aktivere dette.

Åpne nettstedet via lokal HTTP-server eller den publiserte siden for å dele fremdrift mellom formatene i samme nettleser; separate file-URL-er kan ha adskilt lagring. Vil du se endringer i de samlede sidene lokalt før du pusher, kjører du fra prosjektroten:

```powershell
python scripts/build_domain_workshops.py
```

Dette oppdaterer de fire statiske samlede sidene. Generatoren bruker bare Pythons standardbibliotek og tilpasser rydding mellom delene; ressursplanen ligger i skriptets domenedefinisjoner. De ferdige HTML-filene kan åpnes direkte. Publiseringen kjører genereringen på nytt fra de aktuelle kildefilene på GitHub.

Filpaneler med `data-source-file` viser hele den tilsvarende kildefilen fra `labs/`, med kommentarer, og er lukket som standard. JSON beholdes gyldig og har feltforklaringer i samme panel. Rediger kildefilen; generatoren oppdaterer både den korte og den samlede siden med samme filinnhold og beholder JSON-forklaringene.

## Kjør nettstedet lokalt

Hent [labprosjektet](getting-started.html#prosjekt), og åpne PowerShell i prosjektmappen. Kildefilene ligger i `labs/`.

Følg [oppsettet for kildefiler og resultater](getting-started.html#arbeidsfiler). Rediger og kjør kildefilene direkte i `labs/`. Workshopene bruker `git restore --source=HEAD -- FIL` til å forkaste lokale øvingsendringer og hente siste committede versjon av den angitte filen. Notater, spørringer, sikkerhetskopier, logger og eksporter lagres under den Git-ignorerte mappen `artifacts/`. Lokale `local.settings.json`- og `.env`-filer med labnøkler er også ignorert. Prosjektets felles Python-miljø ligger i `.venv/`.

Fra rotmappen med Python installert:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Åpne <http://localhost:8000>. Stopp serveren med `Ctrl+C`. Ingen pakkeinstallasjon eller byggesteg er nødvendig for nettstedet. Verktøy og avhengigheter for selve labøvelsene er beskrevet på workshopsidene.

Workshopinnholdet kan leses uten JavaScript; da vises alle fire workshopgruppene. JavaScript legger til faner med tastaturnavigasjon, kopiering av kode og avhuking med fremdrift i nettleserens `localStorage`. Lenker til `index.html#workshops-domene-1` til `-4` åpner riktig fane. Siden har ingen innlogging, serverlagret fremdrift eller påmeldingsskjema. Fremdriften deles ikke mellom enheter eller nettlesere; blokkert nettleserlagring hindrer ikke lesing av øvelsene.

## Kontroller labkoden lokalt

Kontroller sidene, filstiene og Git-tilbakestillingen uten ekstrapakker:

```powershell
python -m unittest discover -s tests -p test_workshop_docs.py -v
```

Publiseringsworkflowen kjører disse kontrollene før nettstedet publiseres.

Med prosjektets `.venv` aktivert, fra prosjektroten:

```powershell
python -m pip install -r labs/requirements.txt
python tests/test_workshop_labs.py -v
```

Testene kontrollerer HTTP-funksjoner, webhook-validering, bindingenes kode og trace-kontekst mellom to lokale prosesser. De bruker ingen Azure-konto. Ressursoppretting og de faktiske Azure-integrasjonene verifiseres i workshopene.

## Publiser med GitHub Pages

Engangsoppsett for repositoryet:

1. Åpne **Settings → Pages → Build and deployment** på GitHub. For dette repositoryet finner du innstillingen under [Pages settings](https://github.com/tuba-labs/ai200/settings/pages). Du må ha rett til å endre Pages-oppsettet.
2. Sett **Source** til **GitHub Actions**. [Workflowen ligger allerede i prosjektet](.github/workflows/pages.yml); du trenger ikke opprette en fra en mal.
3. Commit og push endringene, inkludert workflow-filen, til `main`.
4. Åpne **Actions → Publiser AI-200** og kontroller at kjøringen lykkes. Finn nettadressen via **Settings → Pages → Visit site** når publiseringen er ferdig.

Deretter holder det å pushe til `main`: GitHub henter koden, setter opp Python 3.12, genererer de fire samlede workshopene fra de korte og publiserer nettstedet. Generatoren krever ingen pakkeinstallasjon. Hvis genereringen feiler, stopper kjøringen før publisering. Du kan også starte den manuelt under **Actions → Publiser AI-200 → Run workflow**, med `main` valgt.

Vanlig adresse er `https://<brukernavn>.github.io/<repository>/`. Relative lenker sørger for at sidene og labfilene fungerer også under repository-stien. Se [GitHubs veiledning for publiseringskilde](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) og [egne Pages-workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). For et offentlig repository kan GitHub Pages brukes med GitHub Free; private repositories krever en plan som støtter Pages.

## Kostnader og vedlikehold

Azure-forbruk utover gjeldende gratiskvoter bruker tilgjengelig prøvekreditt eller faktureres på Pay as you go. Kontroller kostnader, eventuell gjenværende kreditt og tjenestevilkår før hver økt. Samlet labforbruk er ikke målt, så det gis ingen garanti for at prøvekreditten dekker alle øvelsene. Slett workshopressursene etter bruk. På Free Trial avslutter du skyarbeidet før prøveperioden eller kreditten er brukt opp; på Pay as you go følger du med på forbruket og rydder opp manuelt. Se [startguidens kostnadskontroll](getting-started.html#kostnader).

Kildelenker og dato står på workshopsidene. Kontroller priser, kvoter og pensum på nytt før en ny workshoprunde. Felles utseende og funksjonalitet ligger i `workshops.css` og `workshops.js`; tekst og kodeeksempler ligger i hver HTML-side, med tilhørende filer under `labs/`.
