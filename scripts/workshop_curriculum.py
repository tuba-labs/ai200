"""New workshop curriculum. Existing root workshops and old/ are never rewritten."""


def activity(key, title, kind, cards, steps, expected, code="", files=()):
    return dict(id=key, title=title, kind=kind, cards=cards.split(), steps=steps,
                expected=expected, code=code.strip(), files=list(files))


def chapter(category, description, terms, activities):
    return dict(category=category, description=description, terms=terms, activities=activities)


def workshop(key, domain, title, scenario, preparation, resources, chapters, cleanup):
    return dict(id=key, domain=domain, title=title, scenario=scenario, preparation=preparation,
                resources=resources, chapters=chapters, cleanup=cleanup)


DOC = "https://learn.microsoft.com/en-us/azure/"
GLOSSARY = {
    "Docker": ("Containerplattform", "Bygger og kjører images med app og avhengigheter.", "https://docs.docker.com/get-started/docker-overview/"),
    "Kubernetes": ("Containerorkestrering", "Deployment og Service beskriver ønsket tilstand og trafikk.", "https://kubernetes.io/docs/concepts/overview/"),
    "App Service": ("Azure App Service", "Driftet plattform for webapper, inkludert egne container-images.", DOC+"app-service/overview"),
    "Container Apps": ("Azure Container Apps", "Containerplattform med revisjoner, ingress og skalering.", DOC+"container-apps/overview"),
    "Cosmos DB": ("Azure Cosmos DB", "Distribuert database; her brukes API-et for NoSQL og JSON-dokumenter.", DOC+"cosmos-db/nosql/introduction"),
    "PostgreSQL": ("Relasjonsdatabase", "Åpen database med SQL og utvidelser som pgvector.", "https://www.postgresql.org/docs/current/intro-whatis.html"),
    "pgvector": ("PostgreSQL-utvidelse for vektorer", "Vektortyper, avstandsoperatorer og indekser for vektorsøk.", "https://github.com/pgvector/pgvector"),
    "Redis": ("Datastrukturlager i minnet", "Brukes her til caching, levetid, invalidering og vektorsøk.", DOC+"redis/overview"),
    "Functions": ("Azure Functions", "Kjører funksjonskode med én trigger per funksjon.", DOC+"azure-functions/functions-overview"),
    "Event Grid": ("Azure Event Grid", "Ruter hendelser til abonnementer med filtre og leveringsregler.", DOC+"event-grid/overview"),
    "Service Bus": ("Azure Service Bus", "Meldingsmegler med køer, topics, subscriptions og behandlingstilstand.", DOC+"service-bus-messaging/service-bus-messaging-overview"),
    "Event Hubs": ("Azure Event Hubs", "Partisjonert strøm med retention og uavhengige konsumentgrupper.", DOC+"event-hubs/event-hubs-about"),
    "Key Vault": ("Azure Key Vault", "Lagrer hemmeligheter, kryptografiske nøkler og sertifikater.", DOC+"key-vault/general/overview"),
    "App Configuration": ("Azure App Configuration", "Konfigurasjonslager med nøkkel, label og refresh-providere.", DOC+"azure-app-configuration/overview"),
    "Azure Monitor": ("Azure Monitor", "Analyse av målinger og logger, inkludert Application Insights.", DOC+"azure-monitor/overview"),
    "Dapr": ("Distributed Application Runtime", "Byggeklosser for tjenestekall og vedvarende tilstand.", "https://docs.dapr.io/concepts/overview/"),
    "CSI": ("Container Storage Interface", "Secrets Store CSI Driver kan montere Key Vault-objekter i podder.", DOC+"aks/csi-secrets-store-driver"),
    "NSG": ("Network Security Group", "Filtrerer nettverkstrafikk med Azure-regler.", DOC+"virtual-network/network-security-groups-overview"),
    "RDB": ("Redis Database snapshot", "Punktvise øyeblikksbilder av Redis-data for persistens.", "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/"),
    "AOF": ("Append Only File", "Persistens som registrerer skriveoperasjoner.", "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/"),
    "DiskANN": ("Disk-based Approximate Nearest Neighbor", "Tilnærmet vektorsøk med en diskbasert grafindeks.", DOC+"cosmos-db/nosql/vector-search"),
    "ACR": ("Azure Container Registry", "Register for container-images og tilhørende artefakter.", DOC+"container-registry/container-registry-intro"),
    "AKS": ("Azure Kubernetes Service", "Administrert Kubernetes; du styrer arbeidslastene og tilhørende nodepooler.", DOC+"aks/what-is-aks"),
    "KEDA": ("Kubernetes Event-driven Autoscaling", "Skalerer ut fra hendelser og eksterne målinger, for eksempel kølengde.", "https://keda.sh/docs/latest/concepts/"),
    "RBAC": ("Role-Based Access Control", "Tilgang gis til en identitet gjennom en rolle på et bestemt omfang.", DOC+"role-based-access-control/overview"),
    "ABAC": ("Attribute-Based Access Control", "Attributtbetingelser kan begrense støttede rolletildelinger.", DOC+"role-based-access-control/conditions-overview"),
    "SDK": ("Software Development Kit", "Biblioteker som gir programkode tilgang til en tjeneste.", "https://learn.microsoft.com/en-us/azure/developer/python/sdk/azure-sdk-overview"),
    "CLI": ("Command-Line Interface", "Kommandolinjegrensesnitt, som az og kubectl.", "https://learn.microsoft.com/en-us/cli/azure/"),
    "API": ("Application Programming Interface", "Et grensesnitt et program kan kalle.", "https://www.rfc-editor.org/rfc/rfc9110.html"),
    "HTTP": ("Hypertext Transfer Protocol", "Forespørsler og svar med metoder, headere og statuskoder.", "https://www.rfc-editor.org/rfc/rfc9110.html"),
    "HTTPS": ("HTTP over TLS", "HTTP med kryptert transport og kontroll av serveridentitet.", "https://www.rfc-editor.org/rfc/rfc9110.html"),
    "TLS": ("Transport Layer Security", "Protokoll for beskyttet transport mellom klient og server.", "https://www.rfc-editor.org/rfc/rfc8446.html"),
    "DNS": ("Domain Name System", "Oversetter navn til adresser; private endepunkter krever riktig navneoppslag.", DOC+"private-link/private-endpoint-dns"),
    "URL": ("Uniform Resource Locator", "En ressursadresse, som en HTTP-adresse til et endepunkt.", "https://www.rfc-editor.org/rfc/rfc3986.html"),
    "URI": ("Uniform Resource Identifier", "En identifikator for en ressurs; en URL er en type URI.", "https://www.rfc-editor.org/rfc/rfc3986.html"),
    "JSON": ("JavaScript Object Notation", "Tekstformat for strukturerte data.", "https://www.rfc-editor.org/rfc/rfc8259.html"),
    "YAML": ("YAML Ain't Markup Language", "Dataformat som blant annet brukes i Kubernetes-manifester.", "https://yaml.org/spec/1.2.2/"),
    "CI/CD": ("Continuous Integration / Continuous Delivery or Deployment", "Automatisert bygging, kontroll og levering av endringer.", DOC+"devops/deliver/what-is-continuous-delivery"),
    "IaC": ("Infrastructure as Code", "Ressursoppsett uttrykt som versjonert kode, for eksempel Bicep.", DOC+"azure-resource-manager/bicep/overview"),
    "HPA": ("Horizontal Pod Autoscaler", "Endrer antall pod-replikaer ut fra målinger.", "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/"),
    "VPA": ("Vertical Pod Autoscaler", "Anbefaler eller justerer ressursforespørsler for podder.", DOC+"aks/vertical-pod-autoscaler"),
    "CPU": ("Central Processing Unit", "Prosessorressurs; Kubernetes uttrykker ofte behovet i millicores.", "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"),
    "GPU": ("Graphics Processing Unit", "Akselerator for blant annet modellberegning; krever egnede noder og plassering.", DOC+"aks/gpu-cluster"),
    "PDB": ("PodDisruptionBudget", "Begrenser utilgjengelighet ved frivillige pod-avbrudd.", "https://kubernetes.io/docs/tasks/run-application/configure-pdb/"),
    "CNI": ("Container Network Interface", "Grensesnitt for containernettverk; Azure CNI Overlay er et AKS-nettverksvalg.", DOC+"aks/azure-cni-overlay"),
    "VNet": ("Virtual Network", "Et logisk privat nettverk i Azure.", DOC+"virtual-network/virtual-networks-overview"),
    "OIDC": ("OpenID Connect", "Identitetsprotokoll brukt ved blant annet workload identity-føderasjon.", "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation"),
    "WAF": ("Web Application Firewall", "Filtrerer HTTP-trafikk etter applikasjonsregler.", DOC+"web-application-firewall/overview"),
    "SQL": ("Structured Query Language", "Spørringsspråk for blant annet PostgreSQL og Cosmos DB for NoSQL.", "https://www.postgresql.org/docs/current/tutorial-sql.html"),
    "RAG": ("Retrieval-Augmented Generation", "Hent relevante dokumenter og bruk dem som kontekst til en språkmodell.", DOC+"search/retrieval-augmented-generation-overview"),
    "KNN": ("K-Nearest Neighbors", "Henter de k nærmeste vektorene etter valgt avstandsmål.", "https://github.com/pgvector/pgvector"),
    "HNSW": ("Hierarchical Navigable Small World", "Grafbasert tilnærmet nærmeste-nabo-indeks.", "https://github.com/pgvector/pgvector#hnsw"),
    "IVFFlat": ("Inverted File Flat", "Vektorindeks som deler data i lister og søker i et utvalg av dem.", "https://github.com/pgvector/pgvector#ivfflat"),
    "GIN": ("Generalized Inverted Index", "PostgreSQL-indekstype som blant annet støtter JSONB-innholdssøk.", "https://www.postgresql.org/docs/current/gin.html"),
    "RU/s": ("Request Units per second", "Cosmos DB-kapasitet per sekund; én operasjon bruker et antall RU.", DOC+"cosmos-db/request-units"),
    "TTL": ("Time to Live", "Levetid før en oppføring kan utløpe; er forskjellig fra eviction.", DOC+"cosmos-db/nosql/time-to-live"),
    "LRU": ("Least Recently Used", "Utkastingsstrategi basert på hvor nylig en nøkkel ble brukt.", "https://redis.io/docs/latest/develop/reference/eviction/"),
    "LFU": ("Least Frequently Used", "Utkastingsstrategi basert på hvor ofte en nøkkel brukes.", "https://redis.io/docs/latest/develop/reference/eviction/"),
    "DLQ": ("Dead-Letter Queue", "Underkø for meldinger som ikke kan behandles eller leveres som forventet.", DOC+"service-bus-messaging/service-bus-dead-letter-queues"),
    "AMQP": ("Advanced Message Queuing Protocol", "Meldingsprotokoll brukt av blant annet Service Bus og Event Hubs.", DOC+"service-bus-messaging/service-bus-amqp-overview"),
    "MQTT": ("Message Queuing Telemetry Transport", "Publiser/abonner-protokoll for blant annet enheter.", DOC+"event-grid/mqtt-overview"),
    "TU": ("Throughput Unit", "Kapasitetsenhet i Event Hubs Standard.", DOC+"event-hubs/event-hubs-scalability"),
    "KQL": ("Kusto Query Language", "Spørringsspråk for blant annet Azure Monitor Logs.", "https://learn.microsoft.com/en-us/kusto/query/"),
    "OTel": ("OpenTelemetry", "Åpne API-er og SDK-er for spor, målinger og logger.", "https://opentelemetry.io/docs/"),
    "W3C": ("World Wide Web Consortium", "Standardiseringsorganisasjonen bak Trace Context-standarden.", "https://www.w3.org/TR/trace-context/"),
    "DEK": ("Data Encryption Key", "Nøkkel som krypterer selve dataene.", DOC+"security/fundamentals/encryption-atrest"),
    "KEK": ("Key Encryption Key", "Nøkkel som beskytter en annen krypteringsnøkkel.", DOC+"security/fundamentals/encryption-atrest"),
    "HSM": ("Hardware Security Module", "Maskinvare som beskytter kryptografiske nøkler og operasjoner.", DOC+"key-vault/managed-hsm/overview"),
    "PIM": ("Privileged Identity Management", "Tidsavgrenset aktivering og oppfølging av privilegerte roller.", "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure"),
    "MFA": ("Multifactor Authentication", "Autentisering med mer enn én faktor.", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks"),
}

WORKSHOPS = [
    workshop("d1a", 1, "Fra kildekode til en driftet container",
        "Studiegruppen skal levere et lite dokument-API. Bygg ett image, spor hvilken versjon som kjører, og sammenlign App Service med Container Apps.",
        "Docker og felles Azure CLI-oppsett må være klart. Kjør fra prosjektroten. Bruk én ny ressursgruppe ai200-v2-d1a. Velg egne globalt unike navn for register og apper; gjenbruk ikke gruppene fra de gamle workshopene.",
        [("ACR", "Basic er nok til hovedøvelsen. Velg RBAC Registry Permissions; administratorbruker skal være av."),
         ("App Service", "Linux-plan med støtte for container; opprett app fra ACR-imaget. Aktiver system-assigned identity, gi AcrPull på registeret, sett containerport 8080 og kontroller loggene."),
         ("Container Apps", "Ett miljø og én app med ekstern HTTP-ingress til port 8080. Bruk autorisert pull-identitet til det private registeret.")],
        [chapter("acr", "Bygg, identifiser og lever et image før du velger plattform.", ["ACR", "CLI", "RBAC", "ABAC", "DNS", "CI/CD"], [
            activity("acr-build", "Bygg to versjoner og påvis hva en tag peker på", "practical",
                "m-03-1-1 m-04-1-1 m-04-2-1 m-04-3-1 m-04-4-1 m-04-5-1 prep-acr-004 prep-acr-017",
                ["Opprett registeret i den nye gruppen. Sett <code>$acr</code> til registernavnet og <code>$login</code> til login server fra Overview. La <code>$rg</code> være ai200-v2-d1a.",
                 "Kjør et lokalt image med APP_VERSION=v1 og push det med Docker. Bygg deretter v2 med ACR Tasks og build-argumentet. Samme appkode får ulike image-konfigurasjoner; versjonen kan også overstyres ved oppstart.",
                 "Noter tag, manifest-digest og /health-resultat. Importer eller bygg en annen versjon til en gjenbrukt test-tag og sammenlign digestene. Forklar hva som faktisk fryser innholdet."],
                "Et lokalt HTTP 200-svar, en ACR-tagliste og to registrerte digester. Samme tag kan flyttes; en digest identifiserer innhold.",
                '''# Bygg imaget fra den nye labmappen.
docker build -t ai200-v2-api:v1 workshops/labs/containers
# Kjør imaget lokalt med en synlig versjon.
docker run --rm --name ai200-v2-api -d -p 127.0.0.1:8080:8080 -e APP_VERSION=v1 ai200-v2-api:v1
# Les versjon og helsestatus fra API-et.
Invoke-RestMethod http://localhost:8080/health
# Autentiser Docker mot ditt register med innlogget Azure-identitet.
az acr login --name $acr
# Gi det lokale imaget en full registeradresse.
docker tag ai200-v2-api:v1 "$login/ai200-v2-api:v1"
# Push første versjon til registeret.
docker push "$login/ai200-v2-api:v1"
# Bygg og push v2 i ACR uten lokal Docker-bygging.
az acr build --registry $acr --image ai200-v2-api:v2 --build-arg APP_VERSION=v2 workshops/labs/containers
# Vis hvilke tagger registeret inneholder.
az acr repository show-tags --name $acr --repository ai200-v2-api -o table''',
                ["containers/app.py", "containers/Dockerfile"]),
            activity("acr-delivery", "Tegn leveringsløpet og velg tilgang", "analysis",
                "m-01-* m-02-* m-03-2-1 m-03-3-1 m-03-4-1 m-03-5-1 m-04-5-2 prep-acr-003 prep-p-acr-m01 prep-p-acr-008 prep-acr-001 prep-acr-010 prep-acr-012 prep-acr-014 prep-p-acr-014",
                ["Lag et flytskjema for commit → ACR Task → image → utrulling. Marker hva som er Git-trigger, base-image-trigger, timer og utgående webhook. Sammenlign med import av et eksisterende image.",
                 "Fyll en beslutningstabell med kravene: bare pull til en app, push til ett repository, ABAC-aktivert register, privat nettverk, to regioner, signaturkontroll, gjenoppretting av slettet image og kundestyrt nøkkel. Oppgi rolle, egenskap, SKU og forutsetning der det er relevant.",
                 "Bruk kontrollspørsmålene som sjekkliste for tabellen. Ikke opprett Premium-funksjonene i denne øvelsen. Skriv hvorfor digest-kontroll alene ikke bekrefter produsenten."],
                "En leveringsskisse og en begrunnet kravtabell. AcrPull er knyttet til valgt RBAC-modell; private endepunkter trenger også DNS og nettverk. Signering og innholdsidentitet har ulike formål.", files=["containers/acr-task.yaml"]),
        ]),
         chapter("app-service", "Kjør det samme imaget med identitet og miljøinnstillinger.", ["HTTP", "API", "TLS", "URL", "SDK"], [
            activity("app-runtime", "Kjør med miljøinnstillinger og få et kontrollert pull-avvik", "practical",
                "m-05-1-1 m-05-3-1 m-05-4-1 m-06-1-1 m-06-5-1",
                ["Fullfør App Service-oppsettet i ressursplanen. Velg imaget fra forrige kapittel og bruk managed identity til pull.",
                 "Sett APP_VERSION=v1 og WORKSHOP_MODE=staging under appinnstillinger, start appen på nytt og kall /health. Endre WORKSHOP_MODE uten å bygge imaget på nytt.",
                 "Bruk først en ikke-eksisterende image-tag og finn pull-feilen i containerloggen. Gjenopprett v1. Beskriv forskjellen mellom en feil tag og manglende pull-rettighet. Bruk en ny unik tag ved neste utrulling."],
                "Samme image-digest med endret mode, samt en identifisert pull-feil. Appidentiteten har pull-tilgang; registerets admin-passord trengs ikke."),
            activity("app-settings", "Planlegg staging, secrets og oppdateringer", "analysis",
                "m-06-2-1 m-06-3-1 m-06-4-1 m-07-*",
                ["Lag en tabell for staging og production med databaseadresse, vanlig konfigurasjon og en testhemmelighet. Marker hvilke verdier som skal følge slot-en ved et swap.",
                 "Skriv en gyldig Key Vault-referanse med og uten versjon, angi identitet og nødvendig datarolle. Forklar hva appkoden leser og hva som skjer med en bufret verdi etter rotasjon.",
                 "Sammenlign vanlige appinnstillinger og connection strings, inkludert navngivning og typeprefiks. Selve hvelvet bygges i domene 4A."],
                "En konfigurasjonsmatrise som skiller miljø, hemmelighet, slot-tilhørighet og oppdateringsmekanisme. En endret hemmelighetsversjon og en oppdatert appverdi er to forskjellige hendelser."),
         ]),
         chapter("container-apps", "Flytt imaget til revisjoner og velg riktig driftsform.", ["YAML", "JSON", "HTTPS", "URI"], [
            activity("ca-revisions", "Sammenlign single og multiple revisions", "practical",
                "m-12-1-1 m-12-2-1 m-12-4-1 m-12-5-1 prep-ca-001 prep-ca-002 prep-ca-003 prep-p-ca-012",
                ["Opprett appen med APP_VERSION=v1 i miljøet fra ressursplanen. Kontroller ekstern ingress og /health. Noter miljønavn og revisjonsnavn.",
                 "Sett multiple-revision mode. Opprett en ny revisjon ved å endre APP_VERSION til v2. I Revisions fordeler du trafikk 90/10 mellom v1 og v2, og gir v2 en testlabel.",
                 "Kall label-adressen og den vanlige appadressen. Se revisjonslogg og systemhendelser. Bytt tilbake til single og beskriv hvilken revisjon som nå får trafikken."],
                "To ulike revisjoner, trafikkvekter som summerer til 100 og en stabil testadresse. Feilsøking knyttes til riktig revisjon, ikke bare appnavnet."),
            activity("ca-design", "Velg hosting, integrasjon og secret-livsløp", "analysis",
                "m-13-* m-14-* prep-ca-007 prep-ca-010 prep-p-ca-022 prep-p-ca-009 prep-ca-030 prep-ca-011 prep-ca-012 prep-p-ca-010 prep-p-ca-011 prep-p-ca-017 prep-ca-025 prep-ca-027 prep-p-ca-007",
                ["Løs fire driftskrav i en tabell: bakgrunnsjobb hver natt, jobb på bestilling, gRPC-tjeneste med privat ingress og et HTTP-API med ekstern HTTPS-adresse og Entra-pålogging. Velg app eller job, ingress, kapasitet, autentisering og eventuell lagring.",
                 "Tegn en Dapr-samtale mellom to appId-er og en separat state-store-komponent. Marker hva som er appidentitet, tjenesteadresse og varig tilstand.",
                 "Beskriv hva som er app-scope og revisjons-scope for secrets, miljøvariabler og skalering. Planlegg Key Vault-referanse, volum og graceful shutdown. Vurder minReplicas=0 mot responstid og forbruksmodell. Skaleringen prøves i 1B."],
                "En driftsmatrise og en livsløpsskisse. Jobber kjører avgrenset arbeid; en revisjon er en konfigurasjonssnapshot. Nye secret-verdier og nye revisjoner har ulikt livsløp."),
         ])],
        "Stopp og fjern bare Docker-containeren ai200-v2-api. Slett App Service og Container Apps når observasjonene er notert. Behold ACR bare hvis du skal bruke imaget i 1B; ellers slett den nye gruppen ai200-v2-d1a fra portalen etter at du har kontrollert innholdet."),

    workshop("d1b", 1, "Hendelsesstyrt skalering og Kubernetes-drift",
        "Dokument-API-et skal håndtere belastning og tåle en feil utrulling. Du undersøker købasert skalering i Container Apps og livsløpet til podder i AKS.",
        "Ha et tilgjengelig image fra 1A og sett AI200_IMAGE til hele adressen, helst med digest. Bruk en ny gruppe ai200-v2-d1b. AKS krever en egen labklynge eller et tildelt namespace i en delt klynge; du trenger tilgang til kubeconfig og kubectl.",
        [("Container Apps og Storage", "Opprett eget miljø, en scale-demo-kø og en app med autorisert image-pull. Køregelen skal bruke managed identity med Storage Queue Data Reader på kontoen."),
         ("AKS", "Bruk en Linux-systempool og namespace ai200-v2. Gi klyngens pull-identitet passende ACR-rolle. Velg riktig kubectl-context før namespace opprettes. Bare eieren sletter en delt klynge.")],
        [chapter("keda", "Skil mellom måling, skaleringsmål, polling og cooldown.", ["KEDA", "CPU", "SDK"], [
            activity("keda-queue", "La kølengden styre antall replikaer", "practical", "m-08-2-1 m-08-5-1",
                ["Opprett Storage-køen scale-demo og en custom azure-queue-skaleringsregel i Container App: queueName=scale-demo, accountName=ditt kontonavn, queueLength=5, minReplicas=0 og maxReplicas=3. Velg appens autoriserte managed identity som regelidentitet.",
                 "Legg 12 små testmeldinger i køen med Storage Browser. App-imaget behandler ikke køen; det brukes her bare til å observere skaleringen. Se Metrics/Replicas mens køen forblir ubehandlet.",
                 "Tøm bare scale-demo via Storage Browser etter målingen. Følg antall replikaer tilbake mot null, og noter klokkeslett for køendring og skalering."],
                "Replikaantall øker innenfor grensen og synker etter at køen tømmes. Ingen meldinger behandles av API-imaget; dette er en skaleringsmåling, ikke en fungerende køkonsument."),
            activity("keda-calculate", "Beregn skalering og bytt meldingskilde", "analysis", "m-08-1-1 m-08-3-* m-08-4-1",
                ["Beregn ønsket antall replikaer ved kølengdene 0, 1, 5, 12 og 30 med mål 5, og anvend deretter min/max. Sammenlign beregningen med observasjonen.",
                 "Bytt på papiret til azure-servicebus: oppgi namespace, queueName og messageCount. Forklar hvorfor metadata fra Storage-regelen ikke kan kopieres uendret.",
                 "Tegn en tidslinje som skiller polling fra cooldown for siste replika. Marker at du ikke har målt en tjenestegaranti fra én observasjon."],
                "Tabellen gir 0, 1, 1, 3 og 3 med maks 3. Polling undersøker målingen; cooldown gjelder nedskalering til null."),
         ]),
         chapter("aks", "Gå fra manifest til trafikk, kontrollert feil og gjenoppretting.", ["AKS", "YAML", "HPA", "VPA", "PDB", "CNI", "OIDC", "GPU", "WAF", "VNet"], [
            activity("aks-rollout", "Rull ut, finn en feil tag og rull tilbake", "practical",
                "m-15-1-1 m-15-2-1 m-15-3-1 m-15-4-1 m-16-6-1 m-17-1-1 m-17-3-1 m-17-6-1",
                ["Opprett namespace ai200-v2. Rediger bare den nye kopien av deployment.yaml: sett image til AI200_IMAGE. Apply er avgrenset til dette namespace-et.",
                 "Vent på rollout, kall /health med port-forward, og noter podnavn og image-digest. Skaler til to podder.",
                 "Sett en ugyldig image-tag, bruk describe/events og finn ImagePullBackOff. Kjør rollout undo og bekreft at /health virker igjen. Bruk logs --previous bare når en tidligere containerinstans faktisk finnes."],
                "En fungerende utrulling, en forklart feil og en bekreftet rollback. Et ImagePullBackOff skyldes ikke automatisk CPU-mangel.",
                '''# Opprett et eget namespace etter at du har kontrollert kubectl-context.
kubectl create namespace ai200-v2
# Bruk manifestet med ditt tilgjengelige image.
kubectl apply -n ai200-v2 -f workshops/labs/containers/deployment.yaml
# Vent på at utrullingen blir klar.
kubectl rollout status -n ai200-v2 deployment/workshop-api
# Se hendelser og containerstatus.
kubectl describe pods -n ai200-v2
# Gjør helseruten tilgjengelig lokalt; la denne terminalen stå åpen.
kubectl port-forward -n ai200-v2 deployment/workshop-api 8088:8080''', ["containers/deployment.yaml"]),
            activity("aks-connectivity", "Skill readiness fra en ødelagt Service-selector", "practical",
                "m-09-1-1 m-11-2-1 m-11-4-1",
                ["Apply service.yaml og kontroller EndpointSlices. Kall Service med port-forward.",
                 "Endre Service-selector til app=wrong. Kontroller podder, labels og EndpointSlices før du gjør noe annet. Rett selector tilbake.",
                 "Endre readiness-stien i Deployment til /missing. Sammenlign running, ready og restart count. Gjenopprett /health og vent på readiness."],
                "En feil selector gir manglende endepunkter selv om podden er frisk. En readiness-feil fjerner trafikkberedskap uten i seg selv å restarte containeren.",
                '''# Opprett den interne tjenesten for API-et.
kubectl apply -n ai200-v2 -f workshops/labs/containers/service.yaml
# Se hvilke pod-adresser tjenesten faktisk kan bruke.
kubectl get endpointslices -n ai200-v2 -l kubernetes.io/service-name=workshop-api
# Test gjennom Service i en separat terminal.
kubectl port-forward -n ai200-v2 service/workshop-api 8089:80''', ["containers/service.yaml"]),
            activity("aks-capacity", "Lag en driftsplan for podder og noder", "analysis",
                "m-09-2-1 m-09-3-1 m-09-4-1 m-09-5-1 m-10-* m-11-1-1 m-11-3-1 m-15-5-1 m-16-1-1 m-16-2-1 m-16-3-1 m-16-4-1 m-16-5-1 m-17-2-1 m-17-4-1 prep-aks-001 prep-aks-015 prep-aks-023 prep-p-aks-014 prep-aks-031 prep-aks-026 prep-aks-027 prep-aks-040 prep-aks-037 prep-p-aks-010",
                ["Med tre ønskede replikaer: tegn en Deployment-oppdatering og regn ut maxSurge og maxUnavailable inklusive avrunding. Sammenlign med DaemonSet- og nodepooloppgradering.",
                 "Lag et feilsøkingstre for Pending, CrashLoopBackOff, probe-feil og høy CPU. Velg HPA, VPA, cluster autoscaler eller KEDA ut fra årsaken. Ta med requests, målinger, ResourceQuota, LimitRange, imagePullPolicy og logs --previous for en tidligere krasjet instans.",
                 "Planlegg nodevedlikehold med cordon, drain og PDB. Begrunn systempool, StatefulSet, GPU-plassering og lagring. Beskriv også når stop/start eller node-image-oppgradering er riktig. Ikke utfør nodevedlikehold på en delt klynge."],
                "En trinnvis plan som skiller pod-livsløp, nodekapasitet og applikasjonsberedskap. CPU-utnyttelsesbasert HPA trenger CPU requests og ressursmålinger.", files=["containers/hpa.yaml"]),
            activity("aks-trust", "Tegn nettverk og identitet for en privat arbeidslast", "analysis",
                "prep-aks-009 prep-aks-025 prep-p-aks-008 prep-p-aks-006 prep-aks-016 prep-aks-017 prep-aks-019 prep-p-aks-011 prep-aks-021 prep-aks-022 prep-aks-028",
                ["Tegn klient → ingress → Service → pod → Key Vault. Marker API-serverens private adresse separat fra applikasjonens ingress.",
                 "Plasser NetworkPolicy, namespace-RoleBinding, Azure-rolle og OIDC-føderasjon i hver sin boks. Forklar hvilken identitet som autentiseres og hva hver kontroll beskytter.",
                 "Sammenlign Azure CNI Overlay, Istio, Application Gateway/WAF, Azure Files og Spot-pool i en kravtabell. Legg til hva en Deny-policy faktisk kan avvise. Disse tilleggene analyseres uten å opprette dem."],
                "Nettverk, Kubernetes-autorisasjon og Azure-dataplan er tegnet som separate kontroller. En toleration eller nettverkstilgang alene gir ikke en arbeidslast alle nødvendige rettigheter."),
         ])],
        "Fjern namespace ai200-v2 etter å ha kontrollert context. Slett Container Apps, Storage og en eventuell egen AKS-klynge i ai200-v2-d1b når de er ferdig brukt. Be eieren håndtere delt AKS. Slett også ACR i d1a hvis ingen bruker det videre."),
]

WORKSHOPS += [
    workshop("d4a", 4, "Identitet, hemmeligheter og dynamisk konfigurasjon",
        "Dokumenttjenesten skal kunne lese en hemmelighet uten å lagre den i kode, beholde korrekt tilgang under rotasjon og oppdatere vanlig konfigurasjon mens prosessen kjører.",
        "Bruk ny gruppe ai200-v2-d4a. Azure CLI-innlogging gjøres i fellesoppsettet. Den som oppretter rolletildelinger trenger nødvendig tilgang til dette scope-et. Bruk bare testhemmeligheter i laben.",
        [("Key Vault", "Aktiver Azure RBAC. Din labidentitet trenger Secrets Officer for testversjoner og en separat leseridentitet trenger Secrets User. Bruk demo-secret med verdiene workshop-only-v1/v2."),
         ("App Configuration", "Opprett Workshop:Mode med label lab og verdi initial, samt en sentinel uten label. Gi lokal leser App Configuration Data Reader. Sett KEY_VAULT_URL og APP_CONFIG_ENDPOINT."),
         ("Valgfri driftet app", "Bruk en ny testapp med managed identity i denne gruppen for Key Vault-reference-forsøket. Gjenbruk ikke gamle workshopapper og deres rolletildelinger.")],
        [chapter("identity-rbac", "Finn hvem som autentiseres og hvilken tillatelse et kall trenger.", ["RBAC", "ABAC", "SDK", "OIDC", "PIM", "MFA", "CI/CD", "VNet"], [
            activity("identity-read", "Koble et ekte oppslag til identitet, rolle og scope", "practical",
                "m-54-4-1 prep-rbac-003",
                ["Finn egen innlogget identitet og det nye hvelvets ressurs-ID. Vis hvelvets rolletildelinger med arv i portalen; noter rolle og scope uten å eksportere persondata.",
                 "Kjør secret-oppslaget i neste kapittel med DefaultAzureCredential. Forklar hvorfor lokal CLI-identitet kan fungere, mens ManagedIdentityCredential normalt ikke er tilgjengelig på en laptop.",
                 "Tegn scope-kjeden fra management group til ressurs. Marker den konkrete ressursen som testen leser, og hvilken identitet som gjør kallet."],
                "Et vellykket oppslag og en navngitt rolle/scope/identitet-kombinasjon. Management-plane-rett til ressursen er ikke automatisk rett til secret-verdien."),
            activity("identity-design", "Fordel minste tilgang og styr privilegier", "analysis",
                "m-05-2-1 m-54-1-1 m-54-2-1 m-54-3-1 prep-rbac-001 prep-p-rbac-003 prep-rbac-011 prep-rbac-006 prep-rbac-007 prep-p-rbac-010 prep-rbac-008 prep-rbac-012 prep-rbac-019 prep-rbac-016 prep-p-rbac-007 prep-rbac-015 prep-p-rbac-014 prep-p-rbac-017 prep-p-rbac-018 prep-rbac-021 prep-rbac-022 prep-p-rbac-023 prep-p-rbac-020 prep-rbac-027 prep-rbac-028",
                ["Lag en tilgangsmatrise for utvikler, runtime-app, CI-pipeline og drift. Velg system-/user-assigned identity eller føderert applikasjonsidentitet. Marker lokal credential chain og hvordan AZURE_TOKEN_CREDENTIALS kan begrense den i støttede SDK-versjoner.",
                 "Skill Owner, Contributor, User Access Administrator, data roles, custom Actions/DataActions/NotActions og assignableScopes. Forklar arv, additive tillatelser, ABAC-betingelser og deny assignment med to konkrete kall.",
                 "Løs governance-krav med Policy Deny/Modify, initiative, ressurslås, PIM, MFA, Access Reviews og gruppetilgang. Skill Graph application permission, sign-in-logg og NSG-nettverksregel fra selve RBAC-tildelingen. Ingen tenantomfattende endring skal utføres i denne øvelsen."],
                "En matrise med identitet, handling, rolle, scope og styringskontroll. En ressurslås, en policy og en datarolle håndhever ulike beslutninger."),
         ]),
         chapter("key-vault", "Les versjoner og beskriv rotasjon som et helt klientforløp.", ["SDK", "RBAC", "URI", "DEK", "KEK", "HSM", "TLS"], [
            activity("vault-versions", "Sammenlign versjonsløs og versjonsfestet lesing", "practical",
                "m-14-6-1 m-52-2-1 m-52-3-1 m-52-7-1 m-53-1-1 m-53-2-1 m-56-1-1 m-56-3-1 m-56-6-1",
                ["Opprett demo-secret med v1-testverdien. Kjør versions.py current, noter versjons-ID og sett FIRST_SECRET_VERSION til ID-en.",
                 "Opprett en ny versjon av samme secret med v2-testverdien. Kjør current og pinned. Sammenlign versjons-ID og status uten å skrive hemmelighetsverdier i logger eller notater.",
                 "Tegn én klient som leser hver gang, én som cacher og én som bruker en plattformreferanse. Planlegg overlapp mellom gamle og nye eksterne credentials og forklar hvorfor en ny Key Vault-versjon ikke oppdaterer alle klienter av seg selv."],
                "Current viser ny versjon; pinned viser den opprinnelige. En versjons-ID, en tillatelse og en refresh-mekanisme er hver sin del av rotasjonsforløpet.",
                '''# Les siste secret-versjon uten å skrive ut verdien.
python workshops/labs/security/versions.py current
# Sett ID-en fra første oppslag før du oppretter en ny versjon.
$env:FIRST_SECRET_VERSION = "VERSJONS-ID-FRA-FORSTE-OPPSLAG"
# Les etter rotasjon uten versjonsbinding.
python workshops/labs/security/versions.py current
# Les den opprinnelige versjonen eksplisitt.
python workshops/labs/security/versions.py pinned''', ["security/versions.py"]),
            activity("vault-design", "Skill objekttype, kontrollplan og datatilgang", "analysis",
                "m-07-5-1 m-52-1-1 m-52-4-1 m-52-5-1 m-52-5-2 m-52-6-1 m-53-3-1 m-53-4-1 m-56-4-1 m-56-5-1 m-57-* prep-kv-002 prep-kv-009 prep-kv-012 prep-kv-013 prep-p-kv-011 prep-p-kv-016 prep-p-kv-024 prep-p-kv-023 prep-c-tw-003",
                ["Fordel API-credential, vanlig featurekonfigurasjon, signeringsnøkkel og sertifikat til riktig tjeneste/objekttype. Tegn envelope encryption med DEK og KEK og marker hvor private nøkler brukes.",
                 "Lag en rolletabell for Reader, Secrets User/Officer, Administrator, Contributor, Purge Operator og Data Access Administrator. Svar på om hver rolle kan lese, endre, administrere tilgang eller purge.",
                 "Planlegg soft delete, purge protection, AuditEvent, Event Grid/Functions-rotasjon, App Configuration-reference og AKS CSI-mount. Sammenlign managed HSM med Key Vault og en build-time secret med Docker ARG/ENV. Ikke aktiver purge protection eller bytt tilgangsmodell på eksisterende hvelv som del av analysen."],
                "En objekttabell, en rettighetsmatrise og en rotasjonsplan. Recovery, ressursadministrasjon og secret-read er ulike rettigheter."),
         ]),
         chapter("app-configuration", "Les riktig label og oppdater uten prosessomstart.", ["SDK", "API", "JSON", "TTL"], [
            activity("config-refresh", "Observer nøkkel, label og sentinel i en kjørende prosess", "practical",
                "m-55-1-1 m-55-3-1 m-55-4-1 m-58-1-1 m-58-2-1 m-59-1-1 m-59-2-1 m-59-4-1 m-59-5-1",
                ["Opprett samme Workshop:Mode-nøkkel med label lab og production og ulike verdier. Kjør config-oppslaget; kontroller at label=lab velges.",
                 "Start refresh.py. Endre lab-verdien, og endre deretter sentinel uten label. Observer at den samme prosessen etter refresh-intervallet viser den nye verdien.",
                 "Bruk en midlertidig utilgjengelig endpoint i en separat testprosess for å se feil ved første lasting. Skill dette fra en senere refresh-feil etter at cache er fylt. Ikke påstå at initial oppstart kan bruke en cache som aldri er lastet."],
                "To label-verdier og en oppdatering uten omstart i den allerede lastede prosessen. Refresh må kalles; miljøvariabler er ikke en automatisk dynamisk konfigurasjonskanal.",
                '''# Les nøyaktig Workshop:Mode med label lab.
python workshops/labs/security/read_settings.py config
# La samme prosess forsøke refresh mens du endrer verdi og sentinel.
python workshops/labs/security/refresh.py''', ["security/read_settings.py", "security/refresh.py"]),
            activity("config-provider", "Sammenlign SDK og provider i Python og .NET", "analysis",
                "m-55-2-1 m-58-3-1 m-59-3-1",
                ["Lag et API-kart for get_configuration_setting, list_configuration_settings og list_labels. Marker hva som er én verdi, flere verdier og etiketter.",
                 "Skriv .NET-pseudokode med ConfigureRefresh, Register og UseAzureAppConfiguration. Sammenlign providerens konfigurasjonsintervall med separat Key Vault-secret-refresh.",
                 "Bruk kontrollspørsmålene til å validere hva som er SDK-lesing og hva som er provider-cache; ikke overfør Python-metodenavn til .NET."],
                "Et API-kart og pseudokode som skiller konfigurasjonsrefresh fra secret-refresh. .NET-delen er analyse, ikke en kompilert del av Python-laben."),
         ])],
        "Stopp refresh-prosessen. Slett de nye appene, App Configuration og labhvelvet i ai200-v2-d4a. Soft-deleted Key Vault-navn kan være reservert i retention-perioden; recovery/purge skal ikke brukes på andre hvelv. Bevar bare observasjoner uten secret-verdier."),

    workshop("d4b", 4, "Finn en distribuert feil med OpenTelemetry og KQL",
        "En frontend kaller en backend som av og til feiler eller blir treg. Du skal bevise sammenhengen mellom kallene, finne feilraten og velge varsling som faktisk treffer problemet.",
        "Bruk to terminaler med samme Python-miljø. Begynn lokalt uten Application Insights-tilkobling. Azure-delen bruker ai200-v2-d4b med Log Analytics og workspace-basert Application Insights.",
        [("Lokale tjenester", "Frontend på 8091 og backend på 8092. Begge lytter bare på 127.0.0.1 og bruker W3C Trace Context."),
         ("Azure Monitor", "Sett APPLICATIONINSIGHTS_CONNECTION_STRING før begge prosesser startes for Azure-eksport. Bruk samme ressurs i begge. Vent på faktisk ingestering før en tom spørring tolkes som kodefeil.")],
        [chapter("opentelemetry", "Følg ett faktisk kall gjennom to prosesser.", ["OTel", "SDK", "HTTP", "W3C", "API"], [
            activity("otel-trace", "Finn samme trace-id i frontend og backend", "practical",
                "m-64-* m-65-1-1 m-65-5-1 m-68-*",
                ["Start backend og frontend i hver sin terminal. Send ett normalt kall, ett tregt kall og ett kontrollert feilende kall.",
                 "Finn frontend-server, klientspan og backend-server med samme trace-id og riktig parent. Følg TracerProvider → processor → exporter i koden.",
                 "I den nye labkopien fjerner du midlertidig propagate.inject, starter frontend på nytt og sammenligner trace-id-er. Gjenopprett linjen før du fortsetter. En lokal aktiv span er ikke automatisk kontekst i en annen prosess."],
                "En normal og en feilende trace med relaterte spans, samt en demonstrert brutt kjede når headeren ikke sendes.",
                '''# Kjør backend i første terminal.
python workshops/labs/observability/services.py backend
# Kjør frontend i en annen terminal.
python workshops/labs/observability/services.py frontend
# Kjør i en tredje terminal for et normalt kall.
Invoke-RestMethod http://localhost:8091/search
# Bevis kontrollert treghet i backend.
Invoke-RestMethod 'http://localhost:8091/search?delay=0.5'
# Utløs en kontrollert serverfeil; HTTP 500 er forventet.
Invoke-WebRequest 'http://localhost:8091/search?fail=1' ''', ["observability/services.py"]),
            activity("otel-sampling", "Sammenlign alle traces med en samplingsandel", "practical",
                "m-66-5-1 m-66-5-2 m-67-1-1 m-67-2-1 m-67-3-1 m-67-5-1",
                ["Start begge prosessene på nytt med --sampler parent-ratio, send 100 kall og sammenlign antall eksporterte traces med --sampler all. Én liten måling skal ikke gi nøyaktig 10 prosent hver gang.",
                 "Finn sampleren på TracerProvider, og kontroller at barn i en valgt trace følger upstream-beslutningen. Skill antall spans fra antall traces.",
                 "Se på counter/histogram-koden: trace-sampling fjerner ikke de uavhengige metrikkmålingene. Sammenlign bare det som faktisk er eksportert i valgt lokal/Azure-modus."],
                "Målt forskjell mellom traces og en begrunnet sammenligning med målinger. ParentBased og valg av root-sampler er synlig i konfigurasjonen."),
            activity("otel-options", "Velg manuell SDK eller distro og riktig signal", "analysis",
                "m-65-2-1 m-65-3-1 m-65-4-1 m-66-2-1 m-66-3-1 m-66-4-1 m-66-6-1 m-67-4-1",
                ["Tegn det manuelle oppsettet og sammenlign med configure_azure_monitor. Marker risikoen ved dobbel instrumentering.",
                 "Lag en tabell for Python-klassenavn, standard OTEL_TRACES_SAMPLER-verdier og Azure Monitor-spesifikke alternativer. Skill TraceIdRatioBased, ParentBased, fixed percentage og rate limit.",
                 "Plasser View, TrackEvent, span kinds, tracing og metrics i riktig signal. Oppgi SDK-/distroversjon når et standardvalg brukes; den manuelle laben bruker eksplisitt valgt sampler."],
                "Et pipeline-kart og en signaltabell. Azure-distroens standarder er ikke det samme som denne labens manuelle konfigurasjon."),
         ]),
         chapter("kql", "Skriv spørringer med riktig tabell, enhet og radscope.", ["KQL", "SQL", "W3C"], [
            activity("kql-investigate", "Finn feilrate, treghet og relaterte kall", "practical",
                "m-60-* m-61-* m-62-*",
                ["Åpne queries.kql og kjør én spørring om gangen i Logs. Start med datatable-øvelsen, som ikke avhenger av at telemetri har kommet inn.",
                 "Forutsi resultatene av where, extend, project, distinct, summarize, join og render før du kjører dem. Sammenlign inner og standard innerunique når venstre side har flere rader med samme nøkkel.",
                 "Start begge tjenestene med Azure-tilkobling, generer nye kall og bruk spørringen for AppRequests/AppDependencies i workspace-kontekst. Ved Application Insights-kontekst bruker du den alternative requests/dependencies-varianten. Oppgi varighetsenhet og bruk riktig rolle-/operation-felt.",
                 "Lag tidsbøtter med bin, avgrens med ago og finn ett feilende end-to-end-kall. Skriv hvorfor tidsfilter og riktig kildetabell hører tidlig i spørringen."],
                "Kjørte spørringer, resultattabeller og forklaring på endret radantall. Datatable gir to av fire feil = 50 prosent; egne traces kan gi en annen rate.", files=["observability/queries.kql"]),
         ]),
         chapter("monitor", "Velg riktig observasjon og lag et begrunnet varsel.", ["KQL", "API", "HTTP", "SDK"], [
            activity("monitor-alert", "Koble et feilsignal til en konkret varslingsregel", "practical",
                "m-63-1-1 prep-mon-003 prep-p-mon-005 prep-mon-028",
                ["Finn den mislykkede operasjonen i Application Insights, og sammenlign transaksjonssøk/Application Map med KQL-resultatet. Custom spans og service.name må faktisk være ingestert før kartet vurderes.",
                 "Opprett en log search alert i den nye gruppen: tell mislykkede AppRequests i et femminutters vindu og bruk terskel større enn null. Velg ingen varsling til andre personer; en regel uten action group er nok til øvelsen.",
                 "Utløs en ny kontrollert feil, vent på evaluering og se fired/resolved i Alerts. Skill regler, evalueringsvindu, ingesteringstid og når handlinger ville blitt sendt."],
                "En konkret loggspørring, en lagret alert-regel og et notat om hva som faktisk ble evaluert. Ett mislykket HTTP-kall er ikke nødvendigvis ett umiddelbart varsel."),
            activity("monitor-design", "Lag en driftsvisning som ikke skjuler datatap", "analysis",
                "m-63-2-1 m-63-3-1 m-63-4-1 m-63-4-2 prep-mon-004 prep-p-mon-004 prep-mon-006 prep-p-mon-007 prep-p-mon-009 prep-p-mon-012 prep-p-mon-014 prep-mon-019 prep-p-mon-017 prep-mon-021 prep-p-mon-013",
                ["Tegn en workbook med feilrate, svartid, avhengigheter og endringer i infrastrukturen. Skill numeriske metrics, applikasjonslogger og AzureActivity.",
                 "Velg metric alert mot log search alert, action group, availability test, Live Metrics og alert processing rule for fire konkrete driftsbehov. Forklar hva som endres av planlagt vedlikehold.",
                 "Marker diagnostic settings, Azure Monitor workspace/Prometheus, Log Analytics workspace, kryss-workspace-spørring og customMetrics/AppMetrics på datakartet. Beskriv hvorfor daily cap og manglende ingestering kan gjøre visningen misvisende."],
                "En begrunnet workbook-skisse og en matrise for signal → datalager → spørring → varsel/handling. En metrikk og en loggspørring har ulike evalueringsmekanismer."),
         ])],
        "Stopp begge lokale prosesser med Ctrl+C slik at eksportørene flushes. Slett alert-regelen og deretter de nye ressursene i ai200-v2-d4b. Eksporter notater og spørringer før Log Analytics slettes."),
]

CATEGORY_DOCS = {
    "acr": DOC+"container-registry/container-registry-intro",
    "app-service": DOC+"app-service/configure-custom-container",
    "container-apps": DOC+"container-apps/overview",
    "keda": DOC+"container-apps/scale-app",
    "aks": DOC+"aks/learn/quick-kubernetes-deploy-cli",
    "postgresql": DOC+"postgresql/extensions/how-to-use-pgvector",
    "redis": DOC+"redis/overview",
    "cosmos": DOC+"cosmos-db/nosql/introduction",
    "functions": DOC+"azure-functions/functions-reference-python",
    "event-grid": DOC+"event-grid/overview",
    "service-bus": DOC+"service-bus-messaging/service-bus-messaging-overview",
    "event-hubs": DOC+"event-hubs/event-hubs-python-get-started-send",
    "identity-rbac": DOC+"role-based-access-control/overview",
    "key-vault": DOC+"key-vault/general/overview",
    "app-configuration": DOC+"azure-app-configuration/enable-dynamic-configuration-python",
    "opentelemetry": "https://opentelemetry.io/docs/languages/python/",
    "kql": "https://learn.microsoft.com/en-us/kusto/query/tutorials/learn-common-operators",
    "monitor": DOC+"azure-monitor/overview",
}

WORKSHOPS += [
    workshop("d2a", 2, "Hent riktige dokumenter med PostgreSQL og Redis",
        "Et dokumentoppslag skal filtrere på emne, rangere håndskrevne undervisningsvektorer og bruke cache uten å servere en gammel tekst etter oppdatering.",
        "Kjør fra prosjektroten med prosjektets Python-miljø. Lokal PostgreSQL bruker en ny Docker-container ai200-v2-pg. Azure-delen bruker ai200-v2-d2a og egne PostgreSQL/Managed Redis-instanser. Undervisningsvektorene har tre dimensjoner og er ikke modellgenererte embeddings.",
        [("PostgreSQL lokalt", "Docker med pgvector/pgvector:pg17, database workshop, port 15432 på 127.0.0.1. Testpassordet workshop-only er bare for denne lokale labcontaineren."),
         ("Azure PostgreSQL", "Flexible Server med VECTOR tillatt under azure.extensions, database workshop, TLS og nettverkstilgang fra egen maskin. Sett PGCONNINFO til din tilkobling når Azure-målingene gjøres."),
         ("Azure Managed Redis", "Opprett med RediSearch fra starten, Enterprise clustering og noeviction for vektordelen. Sett REDIS_HOST, REDIS_PORT fra Overview og REDIS_KEY via terminalen. Lokal Redis erstatter ikke denne tjenestekontrollen.")],
        [chapter("postgresql", "Undersøk filter, avstand, indeks og forbindelser hver for seg.", ["SQL", "RAG", "KNN", "HNSW", "IVFFlat", "GIN", "CPU", "TLS", "SDK"], [
            activity("pg-retrieval", "Lag data og sammenlign tre avstandsmål", "practical",
                "m-26-1-1 m-26-2-1 m-26-3-1 m-26-4-1 m-26-7-1 m-28-4-1 m-29-1-1 m-29-2-1 m-29-3-1 m-29-4-1 m-29-5-1 prep-p-pg-012",
                ["Start PostgreSQL og kjør setup. Kjør vector_experiments.sql før og etter indeksbygging. Forutsi rekkefølgen med og uten metadatafilteret topic=containers.",
                 "Sammenlign <code>&lt;-&gt;</code>, <code>&lt;=&gt;</code> og <code>&lt;#&gt;</code>. Finn den tilhørende operator class i indeksdefinisjonene. Behold ORDER BY og LIMIT i nærmeste-nabo-spørringen.",
                 "Les EXPLAIN ANALYZE: noter plan, faktiske rader og tid. Fire rader kan legitimt gi sekvensiell skanning; en liten måling beviser ingen ytelsesgevinst. Sammenlign metadataindeks og vektorindeks uten å blande oppgavene deres."],
                "En resultatliste per avstandsmål, plan før/etter og forklaring på hvorfor et nært dokument i feil emne filtreres bort. Parameterverdier sendes separat fra SQL-teksten.",
                '''# Start en ny, lokal PostgreSQL-container med pgvector.
docker run --name ai200-v2-pg -d -e POSTGRES_PASSWORD=workshop-only -e POSTGRES_DB=workshop -p 127.0.0.1:15432:5432 pgvector/pgvector:pg17
# Sett forbindelsen til akkurat denne lokale labdatabasen.
$env:PGCONNINFO = "host=127.0.0.1 port=15432 dbname=workshop user=postgres password=workshop-only"
# Opprett tabellen og fire undervisningsdokumenter etter at databasen er klar.
python workshops/labs/data/postgres_client.py setup
# Kjør det parameteriserte vektoroppslaget.
python workshops/labs/data/postgres_client.py query
# Kjør alle SQL-eksperimentene i samme lokale database.
Get-Content -Raw workshops/labs/data/vector_experiments.sql | docker exec -i ai200-v2-pg psql -U postgres -d workshop''',
                ["data/setup.sql", "data/postgres_client.py", "data/vector_experiments.sql"]),
            activity("pg-connections", "Mål tilkobling og lag et kapasitetsbudsjett", "practical",
                "m-28-2-1 m-28-3-1 m-28-5-1",
                ["Kjør compare flere ganger og noter både direkte forbindelser og pool. Forklar hvorfor etableringstid og spørringstid må skilles.",
                 "Bytt PGCONNINFO til Azure PostgreSQL med TLS, kjør setup mot den nye databasen og kjør query og compare igjen. Bruk det samme datasettet. Noter nettverksforsinkelse og antall appinstanser du planlegger.",
                 "Beregn en øvre grense ved 8 appinstanser og poolstørrelse 3. Sett dette opp mot serverens tillatte forbindelser og andre klienter."],
                "Måleserie for lokal og Azure-forbindelse, samt 24 mulige appforbindelser i eksemplet. Poolstørrelsen begrenses per instans og samlet.",
                '''# Sammenlign nye forbindelser med gjenbrukte forbindelser.
python workshops/labs/data/postgres_client.py compare'''),
            activity("pg-design", "Velg indeks, kapasitet og tilgjengelighet fra symptomet", "analysis",
                "m-26-6-1 m-27-1-1 m-27-2-1 m-27-3-1 m-27-5-1 m-27-6-1 m-28-1-1 m-30-* prep-pg-001 prep-pg-013 prep-pg-003 prep-p-pg-003 prep-p-pg-004 prep-pg-016 prep-pg-034 prep-p-pg-005 prep-pg-010 prep-p-pg-013 prep-pg-021 prep-p-pg-016 prep-pg-023 prep-p-pg-017 prep-pg-027 prep-pg-029 prep-p-pg-020 prep-p-pg-023 prep-p-pg-025",
                ["Lag en tiltakstabell for CPU-metning i avstandsberegning, indeks som ikke får plass i minnet, voksende lagring, mange korte forbindelser og read-only rapportering. Oppgi måling, endring og validering; velg ikke backup retention som svar på CPU-metning.",
                 "Sammenlign HNSW og IVFFlat: byggerekkefølge, representative data, byggeminne, m/ef_construction, ef_search, lists og probes. Legg til halfvec, B-tree, GIN/JSONB og hybrid tekst/vektorsøk i et skjema med kolonne → indeks → spørringsform.",
                 "Tegn Entra-pålogging til PostgreSQL og skill klientpool fra PgBouncer. Angi port og støttet compute-tier, TLS-krav, høy tilgjengelighet, read replica, punktgjenoppretting, VACUUM og Query Store. Begrunn hvert valg med et konkret behov."],
                "En begrunnet design- og feilsøkingstabell. Indeksvalg, forbindelsesgjenbruk, ressurskapasitet og gjenoppretting løser ulike problemer."),
         ]),
         chapter("redis", "Gjør cache-livsløpet synlig og bygg en egen vektorindeks.", ["TTL", "LRU", "LFU", "KNN", "HNSW", "TLS"], [
            activity("redis-cache", "Koble cache-aside til den faktiske datakilden", "practical",
                "m-32-1-1 m-35-1-1 m-35-2-1 m-35-3-1 m-35-5-1 m-36-1-1",
                ["Sett Redis-variablene og behold en fungerende PGCONNINFO. Kjør read to ganger for id 1: forvent først miss med databaseoppslag, deretter hit.",
                 "Kjør update med en ny ufarlig dokumenttekst og les igjen. Skriptet oppdaterer datakilden og invaliderer den tilhørende cachen. Noter hva som kunne skjedd hvis invalideringen feilet.",
                 "Kjør cache-demoen for fast TTL. Les skriptet og legg inn EXPIRE på hit i din nye labkopi for å prøve sliding expiration. Forklar hvorfor eviction eller mer minne ikke alene gir ferskere data."],
                "Miss → hit → kildeoppdatering → invalidering → miss med ny tekst. Denne enkle sekvensen er ikke en atomisk transaksjon mellom PostgreSQL og Redis.",
                '''# Hent fra PostgreSQL ved cache-miss.
python workshops/labs/redis/cache_aside.py read --id 1
# Hent samme dokument på nytt og kontroller cache-hit.
python workshops/labs/redis/cache_aside.py read --id 1
# Endre bare labdokumentet og invalider tilhørende cache.
python workshops/labs/redis/cache_aside.py update --id 1 --text "Updated workshop document"
# Se den oppdaterte teksten gjennom cache-aside-flyten.
python workshops/labs/redis/cache_aside.py read --id 1
# Observer også fast TTL og eksplisitt sletting.
python workshops/labs/redis/demo.py cache''', ["redis/cache_aside.py", "redis/demo.py"]),
            activity("redis-vector", "Bevis at data og søkeindeks er ulike ting", "practical",
                "m-34-1-1 m-34-3-1 m-34-5-1 m-37-*",
                ["Kjør index og deretter search. Undersøk hashene, embedding-feltets float32-format, dimensjon, avstandsmål, nøkkelprefiks og metadatafilter.",
                 "Endre bare indeksnavnet i en kopi og kjør søket før indeksen opprettes. Sammenlign feilen med et eksisterende indeksnavn som ikke matcher noen nøkler.",
                 "Gjenopprett korrekt navn, opprett indeksen og prøv igjen. Forklar hvorfor TTL, persistence og mer minne ikke lager en manglende vektorindeks."],
                "Et vellykket metadatafiltrert KNN-søk og en forklart indeksfeil. Eksisterende data er ikke det samme som en konfigurert og ferdig behandlet søkeindeks.",
                '''# Opprett indeksen og tre undervisningsdokumenter.
python workshops/labs/redis/demo.py index
# Kjør søket etter at indekseringen har rukket å behandle dataene.
python workshops/labs/redis/demo.py search'''),
            activity("redis-operations", "Velg minnepolicy, datastruktur og feilhåndtering", "analysis",
                "m-31-* m-32-2-1 m-33-* m-34-2-1 m-34-4-1 m-34-6-1 prep-*",
                ["Sorter kortenes Redis-kommandoer etter behov: enkel verdi, hash, teller, sortert rangering, atomiske operasjoner og strøm. Skriv et lite kommandoeksempel for hvert behov før du åpner svarene.",
                 "Sammenlign volatile, allkeys, LRU, LFU og noeviction. Forklar hva som skjer ved fullt minne når ingen nøkler har TTL. Skill expiration, eviction og persistence.",
                 "Lag en driftsplan for tjeneste/port/TLS, nødvendige moduler, FLAT mot HNSW, reconnect, hot keys, cache stampede og skalert kapasitet. Marker hvilke tiltak som endrer kapasitet, varighet, konsistens eller søkekvalitet."],
                "En kravtabell og konkrete kommandovalg. Alle prep-matchede kort vurderes mot sitt faktiske behov; ikke anta at en tradisjonell Redis-tier og Managed Redis har samme endpoint eller funksjonsvalg."),
         ])],
        "Kjør Redis-demoens cleanup for labprefiksene. Stopp og fjern bare Docker-containeren ai200-v2-pg. Slett dine egne Azure-ressurser i ai200-v2-d2a etter at du har eksportert måleresultatene; behold ingen database bare for notatene."),

    workshop("d2b", 2, "Cosmos DB fra partisjon til endringsflyt",
        "Dokumenter lagres som JSON, hentes med lavt unødvendig ressursforbruk og endringer sendes til en worker. Du må kunne forklare både dataflyten og grensene for det du faktisk målte.",
        "Bruk ny gruppe ai200-v2-d2b. Velg Cosmos DB for NoSQL med provisioned throughput og database workshop uten shared throughput for vektordelen. Aktiver vektorsøk for kontoen der tjenesten krever det. Sett COSMOS_ENDPOINT og COSMOS_KEY lokalt; lagre ingen nøkkel i kildefilene.",
        [("Cosmos DB", "notes og vectors bruker /topic. Demoen oppretter dem med dedikert 400 RU/s. Leses og skrives i en egen labkonto."),
         ("Functions og Storage", "Kjør change feed-triggeren lokalt med Core Tools. Bruk en ny Storage-konto for AzureWebJobsStorage og Cosmos-tilkobling i ignorert local.settings.json. leases skal bruke /id.")],
        [chapter("cosmos", "Mål oppslag, endre indeks og spor endringer uten full skanning.", ["JSON", "SDK", "RU/s", "TTL", "KNN", "SQL"], [
            activity("cosmos-read", "Sammenlign point read med en parameterisert spørring", "practical",
                "m-20-1-1 m-23-* prep-cosmos-006 prep-cosmos-008",
                ["Kjør setup og inspiser /topic i portalen. Finn forskjellen mellom dokumentets id og partisjonsnøkkel.",
                 "Kjør point og query. Noter RU fra responsheaderne, hvilke rader som kommer tilbake og hvor SDK-et får database-/containerklienten fra.",
                 "I den nye demo-kopien prøver du en spørring uten partition_key med cross-partition aktivert. Sammenlign med et avgrenset oppslag. En enkelt måling er ikke en fast kostnadsgaranti."],
                "En tabell med id, partisjon, operasjon, resultat og målt RU. Point read adresserer ett dokument med id og partisjonsnøkkel.",
                '''# Opprett notes-containeren og undervisningsdata.
python workshops/labs/cosmos/demo.py setup
# Les ett dokument med id og partisjonsnøkkel.
python workshops/labs/cosmos/demo.py point
# Kjør et parameterisert oppslag i samme partisjon.
python workshops/labs/cosmos/demo.py query''', ["cosmos/demo.py"]),
            activity("cosmos-vector", "Lag en egen policy og gjennomfør vektorsøk", "practical",
                "m-19-1-1 m-19-5-1 m-24-1-1 m-24-2-1 m-24-3-1 m-24-5-1 m-24-6-1",
                ["Kjør vector-setup for en ny vectors-container. Finn forskjellen mellom vector embedding policy, vanlig indexing policy og vectorIndexes i kildefilen.",
                 "Kjør vector og noter filter, rekkefølge og avstander. Endre TOP 2 til TOP 5 i din nye kopi og begrunn ORDER BY VectorDistance.",
                 "Undersøk hvorfor embedding-arrayet er ekskludert fra vanlig feltindeksering. Sammenlign float32 med støttede lavere presisjoner som et designvalg; ikke påstå at komprimering er målt her."],
                "Vektorsøk med definert dimensjon og avstandsmål. Den brukte flat-indeksen og en vanlig composite index løser forskjellige oppgaver.",
                '''# Opprett en separat container med vektorpolicy.
python workshops/labs/cosmos/demo.py vector-setup
# Kjør det metadatafiltrerte vektorsøket.
python workshops/labs/cosmos/demo.py vector'''),
            activity("cosmos-feed", "Observer endringer og lease-fremdrift", "practical",
                "m-21-1-1 m-21-3-1 m-21-4-1 m-25-1-1 m-25-3-1 m-25-4-1 m-25-5-1 m-25-6-1",
                ["Kopier local.settings.example.json til local.settings.json i den nye cosmos-mappen. Fyll CosmosConnection, COSMOS_DATABASE=workshop og AzureWebJobsStorage før hosten startes.",
                 "Start hosten med script-root i ny cosmos-mappe. Kjør update i en annen terminal. Finn samme id og revisjon i triggerloggen, og se lease-containeren i Data Explorer.",
                 "Stopp og start hosten igjen. Utfør en ny oppdatering og observer fremdrift. Tegn monitored container, compute instance, handler og lease container. Skil det du observerte fra fordelingen du bare har analysert med én worker."],
                "En logg med dokument-id/revisjon og et lease-dokument som viser fremdrift. Python-funksjonen bruker hostens change feed processor; sterkere konsistens fordeler ikke arbeidet mellom workere.",
                '''# Opprett bare den nye appens lokale innstillingsfil.
Copy-Item workshops/labs/cosmos/local.settings.example.json workshops/labs/cosmos/local.settings.json
# Start etter at alle nødvendige innstillinger er fylt ut.
func start --script-root workshops/labs/cosmos
# Kjør i en annen terminal for å utløse en dokumentendring.
python workshops/labs/cosmos/demo.py update''', ["cosmos/function_app.py", "cosmos/local.settings.example.json"]),
            activity("cosmos-design", "Velg konsistens, indekser og kapasitet fra krav", "analysis",
                "m-18-* m-19-2-1 m-19-3-1 m-19-4-1 m-19-6-1 m-20-2-1 m-20-3-1 m-20-4-1 m-21-2-1 m-22-* m-24-4-1 prep-cosmos-002 prep-cosmos-004 prep-cosmos-013 prep-p-cos-010 prep-c-ct-002",
                ["Lag fem lesetidslinjer for Strong, Bounded staleness, Session, Consistent prefix og Eventual. Marker hva klienten kan observere, hvilke grenser som gjelder og hva ett-region-laben ikke kan demonstrere.",
                 "Fyll en valgtabell for serverless, manual og autoscale RU/s, shared/dedicated throughput, hot partition, throttling, integrert cache og flere skriveregioner. Angi relevant SDK-atferd ved 429 og hva du vil måle før kapasitet endres.",
                 "Sammenlign flat, quantizedFlat og DiskANN samt vanlig, composite og vektorindeks. Tegn overlappende included/excluded paths. Planlegg TTL og endringsfeed-modus ved behov for slettinger; marker backup-forutsetningene."],
                "En kravbegrunnet tabell og tidslinjer. Multi-region-garantier, stalenessgrenser og avanserte indekser er analyse i denne workshopen, ikke observasjoner fra tre dokumenter i én region."),
         ])],
        "Stopp den lokale Functions-hosten. Slett Cosmos-konto og Storage i ai200-v2-d2b etter å ha bevart notater. local.settings.json skal fortsatt være ignorert. Slett ikke leases under en kjørende prosessor som du vil bevare fremdriften til."),
]

WORKSHOPS += [
    workshop("d3a", 3, "Fra HTTP-kall til bakgrunnsarbeid og hendelser",
        "Dokumentmottaket skal svare raskt, utføre arbeid i bakgrunnen og reagere på en filtrert dokumenthendelse. Du tester samme flyt lokalt og i Azure.",
        "Bruk ny gruppe ai200-v2-d3a. Core Tools og Python-miljøet må være klart. Start med den nye integrations-mappen. Bruk bare ufarlige testdokumenter.",
        [("Function App og Storage", "Python 3.12 på en støttet Linux-plan, med egen Storage-konto. Sett AzureWebJobsStorage i den nye lokale filen og i Azure. Test Function-nøkkel først etter publisering."),
         ("Event Grid", "Et eget custom topic og et push-abonnement til https://APP.azurewebsites.net/api/event-hook. Velg Event Grid Schema, subject begins with documents/ og ends with .txt. Sett EVENTGRID_ENDPOINT og EVENTGRID_KEY lokalt.")],
        [chapter("functions", "Skill HTTP-svar, trigger, binding og host-konfigurasjon.", ["HTTP", "API", "JSON", "SDK", "CLI", "IaC", "CI/CD", "DLQ"], [
            activity("functions-http", "Valider input og sammenlign lokal med publisert autorisasjon", "practical",
                "m-47-1-1 m-47-3-1 m-47-4-1 m-48-1-1 m-49-1-1 m-50-2-1 prep-func-010",
                ["Kopier eksempelfilen til local.settings.json i den nye integrations-mappen. Fyll AzureWebJobsStorage før hosten startes. Filen er lokal; host.json er host-konfigurasjon.",
                 "Send gyldig dokument, ugyldig JSON og to POST med samme id til /api/documents. Prøv GET mot samme rute. Noter status og processed-felt. Duplikatminnet er prosesslokalt og forsvinner ved omstart.",
                 "Publiser til din nye Function App. Sammenlign et kall til den beskyttede documents-ruten med og uten Function-nøkkel. Ikke send nøkkelen til andre verter, og ikke anta at lokal host håndhever samme kontroll."],
                "En HTTP-testmatrise for gyldig input, ugyldig input, metode og nøkkel. Én funksjon har én trigger; flere funksjoner kan ligge i samme app.",
                '''# Opprett kun den nye appens lokale innstillingsfil.
Copy-Item workshops/labs/integrations/local.settings.example.json workshops/labs/integrations/local.settings.json
# Start etter at Storage-tilkoblingen er fylt ut.
func start --script-root workshops/labs/integrations
# Kjør i en annen terminal for å sende et gyldig dokument.
Invoke-RestMethod -Method Post -Uri http://localhost:7071/api/documents -ContentType application/json -Body '{"id":"doc-v2-1"}'
# Publiser koden når $functionApp er satt til din nye app.
func azure functionapp publish $functionApp --script-root workshops/labs/integrations''', ["integrations/function_app.py", "integrations/host.json", "integrations/local.settings.example.json"]),
            activity("functions-background", "Flytt arbeid til en Storage-kø og observer poison queue", "practical",
                "m-46-1-1 m-46-2-1 m-48-2-1 m-48-2-2 m-48-5-1 m-49-3-1 m-49-4-1",
                ["Send en normal body til /api/enqueue. Finn 202-svaret og worker-loggen. Identifiser HTTP-trigger, kø-output og den separate køtriggeren i koden.",
                 "Send en body som inneholder fail. Følg gjentatte behandlingsforsøk og finn documents-poison i Storage Browser. Tøm bare denne labens poison queue etter at du har notert resultatet.",
                 "Finn Timer-triggerens seks felter i koden og vent til neste kjøring. Sammenlign timerformatet med ACR Tasks. Tegn forespørsel → varig kø → worker; 202 alene betyr ikke at arbeidet er fullført."],
                "Et raskt HTTP-svar, en vellykket worker-kjøring og et kontrollert poison-eksempel. Output-bindingen sender; den er ikke en ekstra trigger på HTTP-funksjonen.",
                '''# Send vanlig bakgrunnsarbeid til købindingen.
Invoke-RestMethod -Method Post -Uri http://localhost:7071/api/enqueue -ContentType application/json -Body '{"id":"background-1"}'
# Utløs en kontrollert feil som hosten forsøker å behandle på nytt.
Invoke-RestMethod -Method Post -Uri http://localhost:7071/api/enqueue -ContentType application/json -Body '{"id":"fail-demo"}' '''),
            activity("functions-design", "Design lange og tilstandsfulle arbeidsflyter", "analysis",
                "m-46-3-1 m-46-4-1 m-48-2-3 m-48-3-1 m-48-4-1 m-49-2-1 m-49-5-1 m-51-* prep-func-001 prep-p-fn-002 prep-p-fn-004 prep-p-fn-005 prep-p-fn-006 prep-func-006 prep-func-007 prep-p-fn-011 prep-p-fn-012 prep-p-fn-013 prep-p-fn-016 prep-p-fn-018 prep-p-fn-021 prep-p-fn-022 prep-p-fn-025",
                ["Tegn tre flyter: BlobCreated uten polling, Cosmos-batch med checkpoint og HTTP-jobb som varer lenger enn et synkront svar kan holdes åpent. Velg trigger, eventuell input-/output-binding og hvor status kan hentes.",
                 "Design en Durable-arbeidsflyt med først sekvensielle aktiviteter, så fan-out/fan-in, deretter ekstern godkjenning med frist. Marker deterministisk orkestratorkode, sideeffekter i aktiviteter, retries og eventuell entity-tilstand.",
                 "Lag en deploy-plan: infrastruktur, identitet, roller, Key Vault-referanser, appinnstillinger og kode. Sammenlign planene Consumption, Flex og Premium ut fra krav. Skill host-concurrency, timeout, timer-koordinering og gjenbruk av HTTP-forbindelser."],
                "Flytskjemaer og en rekkefølge for utrulling med begrunnelser. Durable, .NET-klientgjenbruk og planvalg er analyse; den kjørte Python-appen implementerer ikke Durable-orchestrering."),
         ]),
         chapter("event-grid", "Filtrer hva som leveres og følg et kontrollert retry-forløp.", ["HTTP", "JSON", "SDK", "MQTT", "DLQ", "TTL"], [
            activity("eg-filter", "Valider en webhook og lever bare riktig subject", "practical",
                "m-40-2-1 m-43-1-1 m-43-4-1",
                ["Opprett topic og abonnement fra ressursplanen etter at Function App er publisert. Bekreft at abonnementets validering lykkes.",
                 "Publiser de to testhendelsene. Sammenlign .txt og .csv med filteret og webhook-loggen. Koble event id, subject og tidspunkt til hver levering.",
                 "Endre subject-filteret til en annen suffiks og gjenta. Skriv et advanced-filter med datanøkkel og type som et separat forslag; array-filtre analyseres, ikke prøves av de to enkle hendelsene."],
                "Bare hendelsen som matcher abonnementets filter leveres. Valideringsresponsen etablerer eierskap til endpointet, ikke varig lagring av udleverte hendelser.",
                '''# Publiser en .txt- og en .csv-hendelse til ditt custom topic.
python workshops/labs/integrations/publish_event.py''', ["integrations/publish_event.py"]),
            activity("eg-retry", "Følg retry ved 503 og gjenopprett leveringen", "practical",
                "prep-p-eg-004 prep-p-eg-014",
                ["Sett FAIL_EVENTS=true i den publiserte appens innstillinger og publiser en ny hendelse. Se 503 og gjentatt event-id i loggene. Tilpass forsøket til abonnementets retry policy; ikke forutsett et bestemt intervall.",
                 "Sett FAIL_EVENTS=false, publiser om nødvendig en ny testhendelse og kontroller vellykket levering. La retry-testen avsluttes før ressurser fjernes.",
                 "Skriv hvordan en varig idempotensnøkkel kan hindre doble sideeffekter. Den nåværende webhooken logger bare hendelser og implementerer ikke en slik varig mekanisme."],
                "En tidslinje for samme hendelses-id med feil og vellykket mottak. Gjentatt levering må håndteres av mottakeren."),
            activity("eg-design", "Velg eventmodell og bevaring ved leveringsfeil", "analysis",
                "m-38-* m-39-* m-40-* m-43-2-1 m-43-3-1 m-43-5-1 prep-eg-001 prep-eg-006 prep-eg-010 prep-eg-011 prep-p-eg-016 prep-eg-020 prep-p-eg-024 prep-p-eg-025",
                ["Sammenlign custom/system/partner-topic, domain og namespace. Velg løsning for Blob-hendelse, egen forretningshendelse, mange kundetopics, pull-levering og MQTT-enheter.",
                 "Lag en feiltabell for webhook mot Azure-ressursendpoint, midlertidig feil mot permanent avvisning, TTL/leveringsforsøk og konfigurert dead-letter til Blob. Marker hvilket oppsett som faktisk bevarer en udlevert hendelse.",
                 "Design for duplikater, mulig omordning, batching, CloudEvents og avsenderrolle. Skriv et typet advanced-filter for en arrayegenskap og forklar hvordan det skiller seg fra subject-prefiks."],
                "En tjeneste- og leveringsmatrise. Event Grid-ruting, en arbeidskø og en gjenlesbar strøm gir ulike kontrakter. Validering erstatter ikke dead-letter-oppsett."),
         ])],
        "Stopp lokal host. Slå av den kontrollerte FAIL_EVENTS-feilen. Slett abonnement før topic og webhook, deretter de nye ressursene i ai200-v2-d3a. Bevar testnotater, men ingen Function-nøkler eller tilkoblingsstrenger i eksporten."),

    workshop("d3b", 3, "Pålitelig køarbeid og gjenlesbare hendelsesstrømmer",
        "Indeksering må håndteres én gang logisk selv ved gjentatt levering, mens analyse og revisjon skal kunne lese samme hendelsesstrøm uavhengig. Du bygger og sammenligner begge mønstrene.",
        "Bruk ny gruppe ai200-v2-d3b og felles Python-miljø med de nye tilleggspakkene. Sett SERVICEBUS_NAMESPACE og EVENTHUB_NAMESPACE til fulle namespace-adresser, uten protokoll.",
        [("Service Bus Standard", "Opprett documents-kø med max delivery count 3, document-events-topic og subscriptions indexer/audit. Gi din labidentitet Azure Service Bus Data Sender og Data Receiver. Bruk en egen session-aktivert documents-ordered-kø hvis session-forsøket tas."),
         ("Event Hubs Standard og Storage", "Opprett document-stream med to partisjoner, consumer groups ai200-a/ai200-b/ai200-replay og Blob-container checkpoints. Gi sender-/mottakerrolle på huben og Storage Blob Data Contributor på checkpoint-lageret. Sett EVENTHUB_NAME, CHECKPOINT_ACCOUNT_URL og CHECKPOINT_CONTAINER.")],
        [chapter("service-bus", "Observer meldingstilstand og tegn grensen for en køtransaksjon.", ["SDK", "DLQ", "AMQP", "JSON", "RBAC", "TTL"], [
            activity("sb-settlement", "Prøv complete, abandon, defer og dead-letter", "practical",
                "m-41-1-1 m-41-2-1 m-41-3-1 m-41-4-1 m-42-2-1 m-44-1-1 m-44-4-1 prep-sb-010 prep-sb-017",
                ["Send fire meldinger med ulike message-id-er, én om gangen. Motta den første med complete og den neste med abandon. Observer delivery count ved neste mottak.",
                 "Defer en melding og noter sequence number fra skriptet. Hent den med --sequence og complete. Dead-letter en annen og les DLQ uten å fullføre før årsaken er notert.",
                 "Gjenta abandon til max delivery count nås. Sammenlign peek med receive og vanlig kø med DLQ. Ingen av disse operasjonene gjør SQL-oppdateringen i et annet system atomisk."],
                "En meldingstilstandstabell med id, sequence, delivery count, handling og neste plassering. Deferred meldinger hentes eksplisitt med sekvensnummer.",
                '''# Send en identifiserbar testmelding.
python workshops/labs/integrations/bus_experiments.py send --id settlement-1
# Se meldingen uten å ta en behandlingslås.
python workshops/labs/integrations/bus_experiments.py peek
# Motta og returner meldingen for et nytt leveringsforsøk.
python workshops/labs/integrations/bus_experiments.py receive --settle abandon
# Flytt en mottatt melding til dead-letter-køen med en labårsak.
python workshops/labs/integrations/bus_experiments.py receive --settle dead-letter
# Inspiser dead-letter-køen uten å slette innholdet.
python workshops/labs/integrations/bus_experiments.py dlq''', ["integrations/bus_experiments.py"]),
            activity("sb-fanout", "Gi to abonnementer hver sin kopi", "practical",
                "m-44-2-1 m-44-3-1 prep-p-sb-005 prep-p-sb-009 prep-p-rbac-024 prep-p-sb-020",
                ["La indexer-abonnementet ha filter på application property kind=note, mens audit beholder alle meldinger. Fjern standardregelen bare fra indexer når det spesifikke filteret er lagt til.",
                 "Send til topic med den nye message_bus-kopien og motta fra begge subscriptions. Sammenlign dette med to kømottakere som konkurrerer om én melding.",
                 "Forklar hvorfor avsender- og mottakerroller er ulike og hvorfor ett filter ikke ser vilkårlig inn i JSON-body. Sammenlign correlation filter med SQL filter for samme egenskap."],
                "To selvstendige abonnementskopier, et dokumentert filter og en sammenligning med konkurrerende køkonsumenter.",
                '''# Send en melding med kind=note til topic-et.
python workshops/labs/integrations/message_bus.py topic
# Motta og fullfør indexer-kopien.
python workshops/labs/integrations/message_bus.py subscription --subscription indexer
# Motta og fullfør audit-kopien separat.
python workshops/labs/integrations/message_bus.py subscription --subscription audit''', ["integrations/message_bus.py"]),
            activity("sb-contract", "Planlegg sessions, låser og transaksjonsgrenser", "analysis",
                "m-41-5-1 m-42-1-1 m-42-3-1 m-42-4-1 m-44-5-1 m-45-* prep-sb-002 prep-sb-007 prep-p-sb-006 prep-sb-018 prep-p-sb-014 prep-sb-022 prep-p-sb-017 prep-p-sb-018 prep-p-sb-019 prep-p-sb-021 prep-sb-030 prep-sb-028 prep-sb-034 prep-p-sb-025",
                ["Lag en tidslinje for lang behandling, låsfornyelse, lock expiry og lock loss. Planlegg session-id, duplicate detection/message-id, scheduled delivery og request/reply-egenskaper for dokumentjobber.",
                 "Tegn en transactional outbox med database og broker. Marker hvilke Service Bus-operasjoner som kan være i samme broker-transaksjon, og hvordan en stor payload kan bruke claim-check.",
                 "Skriv pseudokode for .NET ServiceBusProcessor: klient, processor, message/error handlers, start og stopp. Angi auto-complete, callback-concurrency og retry. Skill dette fra Functions-hostens concurrency og identity-based connection. Velg metrikk ved backlog og regel ved auto-forward/AutoDeleteOnIdle."],
                "Tidslinje, transaksjonsskisse og pseudokode. .NET-prosessoren analyseres; Python-SDK-mottaket er det som faktisk ble kjørt."),
         ]),
         chapter("event-hubs", "Bevar sammenhørende rekkefølge og prøv uavhengig gjenlesing.", ["SDK", "TU", "AMQP", "JSON", "RBAC"], [
            activity("eh-replay", "Send med partisjonsnøkkel og les i to grupper", "practical",
                "prep-eh-001 prep-p-eh-002 prep-p-eh-003 prep-p-eh-001 prep-eh-002 prep-p-eh-004 prep-eh-006 prep-p-eh-014 prep-p-eh-012 prep-p-eh-015",
                ["Sett miljøvariablene fra ressursplanen. Send fem hendelser med samme partition key. Start mottakere i ai200-a og ai200-b i hver sin terminal.",
                 "Noter partition id og sequence number. Begge gruppene skal få sin egen leseposisjon; det totale antallet partisjoner begrenser samtidig partisjonsarbeid innen én gruppe.",
                 "Stopp ai200-a med Ctrl+C etter en behandlet hendelse og start igjen. Se checkpoint i Blob. Bruk den ferske ai200-replay-gruppen for å lese fra begynnelsen av tilgjengelig retention. Et eksisterende checkpoint går foran starting_position."],
                "Hendelser med stigende sekvens i én partisjon, to uavhengige grupper og lagrede checkpoints. Gjenlesing er begrenset av retention, ikke bare av klientens startparameter.",
                '''# Send fem hendelser med en felles partisjonsnøkkel.
python workshops/labs/event-hubs/stream.py send
# Les og lagre checkpoints i den første gruppen.
python workshops/labs/event-hubs/stream.py receive --group ai200-a
# Kjør i en annen terminal for en selvstendig leseposisjon.
python workshops/labs/event-hubs/stream.py receive --group ai200-b
# Bruk en ny gruppe når du vil prøve gjenlesing fra tilgjengelig begynnelse.
python workshops/labs/event-hubs/stream.py receive --group ai200-replay''', ["event-hubs/stream.py"]),
            activity("eh-capacity", "Velg kapasitet og håndter en problemhendelse", "analysis",
                "prep-p-eh-006 prep-p-eh-007 prep-p-eh-008 prep-p-eh-010 prep-p-eh-011 prep-eh-010 prep-p-eh-020 prep-p-eh-022",
                ["Lag en tabell for throughput units, auto-inflate, partisjoner, retention, Capture, Kafka-endpoint og Stream Analytics. Oppgi hvilken flaskehals hver egenskap adresserer.",
                 "Beskriv hva som skjer når data går ut av retention, og hvorfor Capture må planlegges før slike data trengs som historikk.",
                 "Design en handler som skriver en feilhendelse til karantene, dokumenterer feilen og avanserer checkpoint først etter en bevisst beslutning. Sammenlign checkpoint per hendelse med batching. Event Hubs har ikke Service Bus sin meldings-DLQ."],
                "En kapasitetsmatrise og en eksplisitt poison-event-strategi. Flere konsumenter enn partisjoner gir ikke ubegrenset partisjonsparallellitet i én gruppe."),
         ])],
        "Stopp mottakerprosessene. Dokumenter eventuelle DLQ-meldinger før du tømmer dem. Slett bare ressursene i ai200-v2-d3b, inkludert checkpoint-lager. Ikke slett checkpoints for en strøm som andre fortsatt behandler."),
]
