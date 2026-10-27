"""Run the same parameterized vector query with a direct connection and a pool."""
# Velg setup, query eller compare fra kommandolinjen.
import argparse
# Les tilkoblingen fra miljøet fremfor å lagre passord i filen.
import os
# Mål tiden brukt på direkte forbindelser og forbindelsespool.
import time
# Finn SQL-filen ved siden av denne arbeidskopien.
from pathlib import Path

# Bruk PostgreSQL-driveren til å kjøre SQL.
import psycopg
# Registrer hvordan pgvector-verdier konverteres i forbindelsen.
from pgvector.psycopg import register_vector
# Gjenbruk et lite antall databaseforbindelser.
from psycopg_pool import ConnectionPool


# Kjør dette oppsettet på hver nye forbindelse i poolen.
def configure(connection):
    # Lær forbindelsen å håndtere databasens vector-type.
    register_vector(connection)
    # Avslutt transaksjonen fra typeoppsettet før forbindelsen brukes av poolen.
    connection.commit()


# Bruk samme spørring i begge målingene.
def query(connection):
    # Kjør parameterisert SQL og hent de to nærmeste radene.
    return connection.execute(
        # Hent dokumentets ID, metadata og tekst.
        "SELECT id, topic, content FROM workshop_notes "
        # Filtrer på emne og sorter etter cosinusavstand med pgvector.
        "WHERE topic = %s ORDER BY embedding <=> %s::vector LIMIT 2",
        # Send verdiene separat fra SQL-teksten.
        ("containers", "[0,1,0]"),
    ).fetchall()


# Samle oppsett, spørring og sammenligning i ett kjørbart eksempel.
def main():
    # Opprett kommandolinjeparseren.
    parser = argparse.ArgumentParser()
    # Tillat bare de tre laboperasjonene.
    parser.add_argument("mode", choices=["setup", "query", "compare"])
    # Les operasjonen deltakeren valgte.
    args = parser.parse_args()
    # Bruk tilkoblingsstrengen satt i terminalen.
    connection_string = os.environ["PGCONNINFO"]
    # Disable prepared statements so the example also works through transaction pooling.
    # Deaktiver automatisk server-side prepare for å støtte transaction pooling.
    options = {"prepare_threshold": None}
    # Opprett skjema og eksempeldata.
    if args.mode == "setup":
        # Åpne og lukk en direkte forbindelse for denne operasjonen.
        with psycopg.connect(connection_string, **options) as connection:
            # Les setup.sql fra samme mappe og kjør innholdet på serveren.
            connection.execute(Path(__file__).with_name("setup.sql").read_text(encoding="utf-8"))
        # Bekreft at oppsettet er fullført.
        print("Schema and four example rows ready")
    # Kjør ett vanlig oppslag.
    elif args.mode == "query":
        # Åpne og lukk en direkte forbindelse for denne operasjonen.
        with psycopg.connect(connection_string, **options) as connection:
            # Behandle radene fra den parameteriserte spørringen.
            for row in query(connection):
                # Vis resultatet i terminalen.
                print(row)
    # Sammenlign tidsbruk med og uten forbindelsespool.
    else:
        # Bruk samme antall operasjoner i begge målingene.
        count = 10
        # Start tidsmålingen for direkte forbindelser.
        started = time.perf_counter()
        # Åpne en ny forbindelse for hver repetisjon.
        for _ in range(count):
            # Inkluder forbindelsesopprettelsen i målingen.
            with psycopg.connect(connection_string, **options) as connection:
                # Kjør samme arbeid som i pool-varianten.
                query(connection)
        # Vis samlet tid for nye forbindelser.
        print(f"{count} new connections: {time.perf_counter() - started:.3f}s")
        # Opprett en pool med mellom én og tre forbindelser.
        with ConnectionPool(connection_string, min_size=1, max_size=3,
                            # Bruk samme tilkoblingsvalg og registrer pgvector for hver forbindelse.
                            kwargs=options, configure=configure) as pool:
            # Vent til poolen er klar før målingen starter.
            pool.wait()
            # Start målingen etter klargjøringen av poolen.
            started = time.perf_counter()
            # Gjenta samme antall spørringer.
            for _ in range(count):
                # Lån en forbindelse og lever den tilbake etter bruk.
                with pool.connection() as connection:
                    # Kjør den samme spørringen på en gjenbrukt forbindelse.
                    query(connection)
            # Vis tiden for spørringene gjennom poolen.
            print(f"{count} pooled queries: {time.perf_counter() - started:.3f}s")


# Start bare når filen kjøres direkte.
if __name__ == "__main__":
    # Kjør den valgte laboperasjonen.
    main()
