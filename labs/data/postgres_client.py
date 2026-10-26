"""Run the same parameterized vector query with a direct connection and a pool."""
import argparse
import os
import time
from pathlib import Path

import psycopg
from pgvector.psycopg import register_vector
from psycopg_pool import ConnectionPool


def configure(connection):
    register_vector(connection)
    connection.commit()


def query(connection):
    return connection.execute(
        "SELECT id, topic, content FROM workshop_notes "
        "WHERE topic = %s ORDER BY embedding <=> %s::vector LIMIT 2",
        ("containers", "[0,1,0]"),
    ).fetchall()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["setup", "query", "compare"])
    args = parser.parse_args()
    connection_string = os.environ["PGCONNINFO"]
    # Disable prepared statements so the example also works through transaction pooling.
    options = {"prepare_threshold": None}
    if args.mode == "setup":
        with psycopg.connect(connection_string, **options) as connection:
            connection.execute(Path(__file__).with_name("setup.sql").read_text(encoding="utf-8"))
        print("Schema and four example rows ready")
    elif args.mode == "query":
        with psycopg.connect(connection_string, **options) as connection:
            for row in query(connection):
                print(row)
    else:
        count = 10
        started = time.perf_counter()
        for _ in range(count):
            with psycopg.connect(connection_string, **options) as connection:
                query(connection)
        print(f"{count} new connections: {time.perf_counter() - started:.3f}s")
        with ConnectionPool(connection_string, min_size=1, max_size=3,
                            kwargs=options, configure=configure) as pool:
            pool.wait()
            started = time.perf_counter()
            for _ in range(count):
                with pool.connection() as connection:
                    query(connection)
            print(f"{count} pooled queries: {time.perf_counter() - started:.3f}s")


if __name__ == "__main__":
    main()
