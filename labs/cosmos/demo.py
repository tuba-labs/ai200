"""Small isolated Cosmos DB lab; credentials are read from the environment."""
# Velg hvilken Cosmos-operasjon eksemplet skal utføre.
import argparse
# Les endpoint, nøkkel og databasenavn fra terminalens miljø.
import os

# Bruk Cosmos SDK-et og en eksplisitt partisjonsnøkkel.
from azure.cosmos import CosmosClient, PartitionKey

# Bruk små undervisningsdokumenter med håndskrevne vektorer.
DOCUMENTS = [
    # Første dokument ligger i partisjonen containers.
    {"id": "note-1", "topic": "containers", "text": "Package an application", "embedding": [1.0, 0.0, 0.0]},
    # Andre dokument ligger i samme partisjon, med en lignende vektor.
    {"id": "note-2", "topic": "containers", "text": "Inspect container logs", "embedding": [0.9, 0.1, 0.0]},
    # Tredje dokument viser hvordan metadatafilter kan utelate et nært vektortreff.
    {"id": "note-3", "topic": "data", "text": "Retrieve stored data", "embedding": [0.0, 1.0, 0.0]},
]


# La SDK-et sende responsheaderne til denne callbacken.
def report(headers, _body):
    # Hent kostnaden i request units fra responsheaderen.
    charge = headers.get("x-ms-request-charge")
    # Skriv bare RU når headeren finnes.
    if charge:
        # Vis grunnlaget for sammenligning av oppslag.
        print("Request charge:", charge, "RU")


# Kjør operasjonen som ble valgt på kommandolinjen.
def main():
    # Opprett kommandolinjeparseren.
    parser = argparse.ArgumentParser()
    # Begrens valgene til operasjonene workshopene bruker.
    parser.add_argument("mode", choices=["setup", "query", "point", "vector-setup", "vector", "update"])
    # Les valgt operasjon.
    args = parser.parse_args()
    # Åpne klienten med labkontoens endpoint og nøkkel, og lukk den etter bruk.
    with CosmosClient(os.environ["COSMOS_ENDPOINT"], credential=os.environ["COSMOS_KEY"]) as client:
        # Use a database without shared throughput so vector search is supported.
        # Velg databasen; dette oppretter ikke databasen.
        database = client.get_database_client(os.getenv("COSMOS_DATABASE", "workshop"))
        # Hold vektorpolicyen i en egen container.
        name = "vectors" if args.mode.startswith("vector") else "notes"
        # Hent en klient for den valgte containeren.
        container = database.get_container_client(name)
        # Opprett labcontainer og eksempeldata ved setup.
        if args.mode in {"setup", "vector-setup"}:
            # Beskriv den vanlige indekseringspolicyen.
            policy = {
                # Oppdater indeksene automatisk når dokumentene endres.
                "indexingMode": "consistent", "automatic": True,
                # Indekser dokumentfeltene som standard.
                "includedPaths": [{"path": "/*"}],
                # Unnta vektorarrayet fra vanlig feltindeksering.
                "excludedPaths": [{"path": "/embedding/*"}],
            }
            # Legg bare til vektorinnstillinger for vektorcontaineren.
            extra = {}
            # Konfigurer en egen indeks for VectorDistance-søk.
            if args.mode == "vector-setup":
                # Bruk en flat vektorindeks på embedding-feltet.
                policy["vectorIndexes"] = [{"path": "/embedding", "type": "flat"}]
                # Beskriv hvilke vektorer embedding-feltet inneholder.
                extra["vector_embedding_policy"] = {"vectorEmbeddings": [{
                    # Lagre vektorene i embedding og behandle verdiene som float32.
                    "path": "/embedding", "dataType": "float32",
                    # Krev tre dimensjoner og sammenlign med cosinusavstand.
                    "dimensions": 3, "distanceFunction": "cosine",
                }]}
            # Opprett containeren hvis den mangler; eksisterende policy erstattes ikke her.
            container = database.create_container_if_not_exists(
                # Bruk topic som partisjonsnøkkel.
                id=name, partition_key=PartitionKey(path="/topic"),
                # Bruk policyen over og 400 RU/s dedikert throughput.
                indexing_policy=policy, offer_throughput=400, **extra,
            )
            # Skriv inn undervisningsdokumentene.
            for document in DOCUMENTS:
                # Opprett eller erstatt dokumentet, og vis operasjonens RU.
                container.upsert_item(document, response_hook=report)
            # Vis hvilken container som er klargjort.
            print("Ready:", name)
        # Utfør et direkte oppslag uten SQL-spørring.
        elif args.mode == "point":
            # ID og partisjonsnøkkel identifiserer dokumentet sammen.
            result = container.read_item("note-1", partition_key="containers", response_hook=report)
            # Vis dokumentets ID og tekst.
            print(result["id"], result["text"])
        # Lag en endring som change feed-triggeren kan observere.
        elif args.mode == "update":
            # Les dokumentet før oppdateringen.
            document = container.read_item("note-1", partition_key="containers")
            # Øk et synlig revisjonsnummer.
            document["revision"] = document.get("revision", 0) + 1
            # Lagre den nye versjonen og vis skrivekostnaden.
            container.upsert_item(document, response_hook=report)
            # Bruk revisjonen til å kjenne igjen endringen i triggerloggen.
            print("Updated note-1, revision", document["revision"])
        # Kjør vanlig SQL-søk eller vektorsøk.
        else:
            # Start med et metadatafilter.
            sql = "SELECT c.id, c.topic FROM c WHERE c.topic = @topic"
            # Send filterverdien som en parameter.
            parameters = [{"name": "@topic", "value": "containers"}]
            # Bytt til rangering etter vektoravstand.
            if args.mode == "vector":
                # Returner de to nærmeste treffene og deres avstand.
                sql = ("SELECT TOP 2 c.id, VectorDistance(c.embedding, @vector) AS distance "
                       # Behold emnefilteret og sorter de gjenværende dokumentene etter avstand.
                       "FROM c WHERE c.topic = @topic ORDER BY VectorDistance(c.embedding, @vector)")
                # Bruk samme tredimensjonale spørsmålsvektor som i PostgreSQL-øvelsen.
                parameters.append({"name": "@vector", "value": [0.0, 1.0, 0.0]})
            # Kjør den parameteriserte spørringen.
            results = container.query_items(sql, parameters=parameters,
                                            # Avgrens lesingen til containers-partisjonen og vis RU.
                                            partition_key="containers", response_hook=report)
            # Iterer resultatene fra SDK-et.
            for result in results:
                # Vis hvert treff i terminalen.
                print(result)


# Kjør bare når filen startes direkte.
if __name__ == "__main__":
    # Start den valgte laboperasjonen.
    main()
