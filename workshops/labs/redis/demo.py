"""Managed Redis, Enterprise clustering policy, TLS and a lab access key."""
# Velg cache-, indeks-, søke- eller oppryddingsoperasjon.
import argparse
# Les Redis-endpoint og labnøkkel fra terminalens miljø.
import os
# Vent på en kort TTL for å demonstrere utløp.
import time
# Konverter spørsmåls- og dokumentvektorer til float32-byteverdier.
from array import array

# Bruk Redis-klienten til cache- og søkekommandoer.
import redis
# Beskriv metadata, tekst og vektorer i søkeindeksen.
from redis.commands.search.field import TagField, TextField, VectorField
# Avgrens hvilke Redis-hasher indeksen leser.
from redis.commands.search.index_definition import IndexDefinition, IndexType
# Bygg et søk med filter, KNN og resultatvalg.
from redis.commands.search.query import Query
# Gjenkjenn feilsvaret når indeksen allerede finnes.
from redis.exceptions import ResponseError


# Kjør én Redis-operasjon.
def main():
    # Opprett kommandolinjeparseren.
    parser = argparse.ArgumentParser()
    # Begrens operasjonene til labens fire valg.
    parser.add_argument("mode", choices=["cache", "index", "search", "cleanup"])
    # Les valgt operasjon.
    args = parser.parse_args()
    # Bruk endpoint og port for labinstansen.
    with redis.Redis(host=os.environ["REDIS_HOST"], port=int(os.getenv("REDIS_PORT", "10000")),
                     # Bruk TLS, miljøbasert labnøkkel og en avgrenset nettverkstimeout.
                     password=os.environ["REDIS_KEY"], ssl=True, socket_timeout=10) as client:
        # Demonstrer hit, invalidering og TTL-utløp.
        if args.mode == "cache":
            # Bruk en avgrenset nøkkel for labens cacheoppføring.
            key = "ai200:cache:containers:v1"
            # Kontroller om oppføringen finnes fra før.
            print("Initial:", client.get(key))
            # Cache resultatet med ti sekunders TTL.
            client.set(key, "note-1,note-2", ex=10)
            # Les den nye oppføringen og gjenværende levetid.
            print("Hit:", client.get(key), "TTL:", client.ttl(key))
            # Invalider oppføringen eksplisitt.
            client.delete(key)
            # Bekreft at oppslaget ikke lenger gir en cacheverdi.
            print("Invalidated:", client.get(key))
            # Legg inn en oppdatert verdi med kort TTL.
            client.set(key, "updated-note-1", ex=2)
            # Vent lenger enn levetiden.
            time.sleep(3)
            # Vis at Redis har latt oppføringen utløpe.
            print("Expired:", client.get(key), "TTL:", client.ttl(key))
        # Opprett en vektorindeks og tre dokumenter.
        elif args.mode == "index":
            # Indekser topic som filter, text som tekst og embedding med HNSW.
            fields = [TagField("topic"), TextField("text"), VectorField("embedding", "HNSW", {
                # Bruk float32, tre dimensjoner og cosinusavstand.
                "TYPE": "FLOAT32", "DIM": 3, "DISTANCE_METRIC": "COSINE",
            })]
            # Tillat at oppsettet kjøres flere ganger.
            try:
                # Opprett søkeindeksen med det valgte skjemaet.
                client.ft("ai200-index").create_index(fields, definition=IndexDefinition(
                    # Les bare Redis-hasher med labens vektorprefiks.
                    prefix=["ai200:vector:"], index_type=IndexType.HASH))
            # Undersøk hvorfor indeksopprettelsen ble avvist.
            except ResponseError as error:
                # Ignorer bare den forventede feilen om en eksisterende indeks.
                if "index already exists" not in str(error).lower():
                    # La andre feil gå videre til terminalen.
                    raise
            # Første dokument ligger langs første vektordimensjon.
            for number, topic, vector in [(1, "containers", [1, 0, 0]),
                                           # Legg til et lignende dokument og et dokument i et annet emne.
                                           (2, "containers", [0.9, 0.1, 0]), (3, "data", [0, 1, 0])]:
                # Lagre hvert dokument i en Redis-hash som indeksen overvåker.
                client.hset(f"ai200:vector:{number}", mapping={
                    # Lagre metadata og tekst sammen med vektoren.
                    "topic": topic, "text": f"Teaching document {number}",
                    # Send embedding som binære float32-verdier.
                    "embedding": array("f", vector).tobytes(),
                })
            # Minn om at søkeindeksen må ha rukket å behandle dataene.
            print("Index and three documents ready; wait for indexing before search")
        # Kombiner metadatafilter med vektorrangering.
        elif args.mode == "search":
            # Finn to nærmeste treff innen topic=containers, med avstanden kalt score.
            query = Query("(@topic:{containers})=>[KNN 2 @embedding $vec AS score]")
            # Sorter etter avstand og bruk søkedialekten som støtter denne syntaksen.
            query = query.sort_by("score").return_fields("topic", "text", "score").dialect(2)
            # Send spørsmålsvektoren i samme binære format som dokumentvektorene.
            result = client.ft("ai200-index").search(query, query_params={"vec": array("f", [0, 1, 0]).tobytes()})
            # Behandle de returnerte treffene.
            for document in result.docs:
                # Vis ID, emne og avstand for sammenligning.
                print(document.id, document.topic, document.score)
        # Rydd bare labens indeks og tilknyttede dokumenter.
        else:
            # Slett indeksen og dokumentene som hører til den.
            client.ft("ai200-index").dropindex(delete_documents=True)
            # Bekreft oppryddingen.
            print("Removed lab index and its documents")


# Start bare når filen kjøres direkte.
if __name__ == "__main__":
    # Kjør valgt Redis-operasjon.
    main()
