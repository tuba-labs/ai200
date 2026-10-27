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

Start med **[Kom i gang](getting-started.html)** for verktøy og Azure-konto før første samling. Begge kontovalgene bruker samme workshops, med lokal utvikling og testing som forberedelse til Azure-øvelsene. Praktisk konto- og verktøyoppsett er klargjøring; workshopenes læringsmål følger AI-200. Se [valgfri kostnadsveiledning](getting-started.html#kostnader) ved behov.

På Free Trial beholder du utgiftsgrensen. Hvis en tjeneste krever oppgradering, eller kreditten/prøveperioden utløper, stopper du den skyøvelsen og vurderer kontovalget i startguiden før du eventuelt endrer abonnementet. Pay as you go har ingen innebygd hard utgiftsgrense; budsjettvarsler stopper ikke ressursene. Du kan også følge en demonstrasjon eller jobbe sammen ved en annen deltakers maskin uten å dele innloggingsopplysninger.

Løpet består av 22 avgrensede workshops som kan tas i eget tempo. Hver side angir forkunnskaper, eventuell provisjonering før økten, forventede resultater og opprydding. Workshopene er gruppert etter de fire domenene og følger [Microsofts studieveiledning](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-200). Alle Python-øvelser bruker én `.venv` i prosjektroten.

Forsiden viser pensum først og workshopene i fire faner. Velg mellom de 22 korte øktene og fire samlede domeneworkshops. Hver samlet side kan vise alle delene eller bare samling 1/2, med tilpasset ressursplan. Gjennomføringstiden er ikke målt. Delingen i samlinger er tematisk; tidsbruk avhenger av forkunnskaper, egne forsøk, diskusjon og klargjøring. Pensumsidene kobler hvert delmål til aktuelle økter. [Studiedekning](studiedekning.html) skiller mellom grunnøvelse og delvis dekning. Oppgavedekningen er den samme i begge formater.

De korte HTML-sidene er kilden til oppgavene. Samlede sider bygges fra dem og bruker samme fremdriftsnøkler. Åpne nettstedet via lokal HTTP-server eller den publiserte siden for å dele fremdrift mellom formatene i samme nettleser; separate file-URL-er kan ha adskilt lagring. Etter endringer i korte workshops, kjør fra prosjektroten:

```powershell
python scripts/build_domain_workshops.py
```

Dette oppdaterer de fire statiske samlede sidene. Nettstedet krever fortsatt ingen bygging for å åpnes eller publiseres. Generatoren tilpasser rydding mellom delene; ressursplanen ligger i skriptets domenedefinisjoner.

## Kjør nettstedet lokalt

Hent prosjektet fra [GitHub](https://github.com/tuba-labs/ai200) med **Code → Download ZIP**, og pakk ut, eller klon med `git clone https://github.com/tuba-labs/ai200.git`. Labfilene ligger i `labs/`.

Fra rotmappen med Python installert:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Åpne <http://localhost:8000>. Stopp serveren med `Ctrl+C`. Ingen pakkeinstallasjon eller byggesteg er nødvendig for nettstedet. Verktøy og avhengigheter for selve labøvelsene er beskrevet på workshopsidene.

Workshopinnholdet kan leses uten JavaScript; da vises alle fire workshopgruppene. JavaScript legger til faner med tastaturnavigasjon, kopiering av kode og avhuking med fremdrift i nettleserens `localStorage`. Lenker til `index.html#workshops-domene-1` til `-4` åpner riktig fane. Siden har ingen innlogging, serverlagret fremdrift eller påmeldingsskjema. Fremdriften deles ikke mellom enheter eller nettlesere; blokkert nettleserlagring hindrer ikke lesing av øvelsene.

## Kontroller labkoden lokalt

Med prosjektets `.venv` aktivert, fra prosjektroten:

```powershell
python -m pip install -r labs/requirements.txt
python tests/test_workshop_labs.py -v
```

Testene kontrollerer HTTP-funksjoner, webhook-validering, bindingenes kode og trace-kontekst mellom to lokale prosesser. De bruker ingen Azure-konto. Ressursoppretting og de faktiske Azure-integrasjonene verifiseres i workshopene.

## Publiser med GitHub Pages

1. Legg filene i et GitHub-repository. For et offentlig repository kan GitHub Pages brukes med GitHub Free; private repositories krever en plan som støtter Pages.
2. Åpne **Settings → Pages → Build and deployment**.
3. Velg **Deploy from a branch**, deretter **main** og **/(root)**. Velg grenen filene faktisk ligger på dersom dere bruker et annet navn.
4. Trykk **Save** og følg utrullingen under **Actions**. Finn nettadressen via **Settings → Pages → Visit site** når den er ferdig.

Vanlig adresse er `https://<brukernavn>.github.io/<repository>/`. Relative lenker sørger for at sidene og labfilene fungerer også under repository-stien. Nye endringer publiseres når de pushes til den valgte grenen. Se [GitHubs veiledning for publiseringskilde](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Kostnader og vedlikehold

Azure-forbruk utover gjeldende gratiskvoter bruker tilgjengelig prøvekreditt eller faktureres på Pay as you go. Kontroller kostnader, eventuell gjenværende kreditt og tjenestevilkår før hver økt. Samlet labforbruk er ikke målt, så det gis ingen garanti for at prøvekreditten dekker alle øvelsene. Slett workshopressursene etter bruk. På Free Trial avslutter du skyarbeidet før prøveperioden eller kreditten er brukt opp; på Pay as you go følger du med på forbruket og rydder opp manuelt. Se [startguidens kostnadskontroll](getting-started.html#kostnader).

Kildelenker og dato står på workshopsidene. Kontroller priser, kvoter og pensum på nytt før en ny workshoprunde. Felles utseende og funksjonalitet ligger i `workshops.css` og `workshops.js`; tekst og kodeeksempler ligger i hver HTML-side, med tilhørende filer under `labs/`.
