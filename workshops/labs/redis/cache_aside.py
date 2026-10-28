"""A real PostgreSQL source with a Redis cache; no distributed transaction."""
# Les operasjon og labdokument fra kommandolinjen.
import argparse
# Serialiser den offentlige testteksten i cacheverdien.
import json
# Les tilkoblinger fra terminalen.
import os


# Hent ett dokument og returner også hvor svaret kom fra.
def read_document(cache, connection, document_id):
    # Bruk et eget prefiks for denne nye laben.
    key = f"ai200:v2:document:{document_id}"
    # Forsøk cache før datakilden.
    cached = cache.get(key)
    # En tom streng er også en eksisterende verdi, så test eksplisitt mot None.
    if cached is not None:
        # Returner den serialiserte teksten uten databaseoppslag.
        return json.loads(cached), "hit"
    # Send ID som parameter fremfor å bygge SQL fra input.
    row = connection.execute("SELECT content FROM workshop_notes WHERE id = %s", (document_id,)).fetchone()
    # Ikke cache et fraværende dokument i denne enkle øvelsen.
    if row is None:
        # Gjør fravær forskjellig fra et tomt innhold.
        raise LookupError(f"No lab document {document_id}")
    # Cache kildeverdien i tretti sekunder.
    cache.set(key, json.dumps(row[0]), ex=30)
    # Returner kildedata og vis at dette var en miss.
    return row[0], "miss"


# Oppdater datakilden før den gamle cacheverdien fjernes.
def update_document(cache, connection, document_id, text):
    # Oppdater bare dokumentet deltakeren valgte.
    cursor = connection.execute("UPDATE workshop_notes SET content = %s WHERE id = %s", (text, document_id))
    # En ukjent ID skal ikke se ut som en vellykket endring.
    if cursor.rowcount != 1:
        # Avbryt hvis dokumentet ikke finnes.
        raise LookupError(f"No lab document {document_id}")
    # Gjør kildeendringen varig før invalidering; dette er fortsatt ikke atomisk med Redis.
    connection.commit()
    # Fjern kun denne labnøkkelen.
    cache.delete(f"ai200:v2:document:{document_id}")


# Kjør en eksplisitt lese- eller skriveoperasjon.
def main():
    # Beskriv kommandolinjen.
    parser = argparse.ArgumentParser()
    # Tillat bare labens to operasjoner.
    parser.add_argument("mode", choices=["read", "update"])
    # Standarddokumentet finnes etter setup.sql.
    parser.add_argument("--id", type=int, default=1)
    # Krev en ny tekst bare ved oppdatering.
    parser.add_argument("--text")
    # Les valgene før eksterne biblioteker og tjenester brukes.
    args = parser.parse_args()
    # Avvis en ufullstendig skrivekommando.
    if args.mode == "update" and args.text is None:
        # Gi en konkret kommandolinjefeil.
        parser.error("update requires --text")
    # Importer databasedriveren for den faktiske kjøringen.
    import psycopg
    # Importer Redis-klienten for den faktiske kjøringen.
    import redis
    # Åpne begge forbindelser og lukk dem etter operasjonen.
    with psycopg.connect(os.environ["PGCONNINFO"]) as connection, redis.Redis(
        # Bruk Managed Redis-endpointet fra din ressurs.
        host=os.environ["REDIS_HOST"], port=int(os.getenv("REDIS_PORT", "10000")),
        # Les nøkkelen lokalt, bruk TLS og avgrens nettverksventingen.
        password=os.environ["REDIS_KEY"], ssl=True, socket_timeout=10
    ) as cache:
        # Les gjennom cache-aside-funksjonen.
        if args.mode == "read":
            # Vis bare den ufarlige labteksten og hvor den ble hentet.
            print(read_document(cache, connection, args.id))
        # Utfør en bevisst oppdatering av labdokumentet.
        else:
            # Endre datakilden og invalider cacheverdien.
            update_document(cache, connection, args.id, args.text)
            # Bekreft rekkefølgen uten å vise tilkoblingsdata.
            print("Source committed; cache invalidated")


# Unngå nettverkskall ved import, blant annet i testene.
if __name__ == "__main__":
    # Kjør den valgte laboperasjonen.
    main()
