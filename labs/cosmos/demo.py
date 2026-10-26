"""Small isolated Cosmos DB lab; credentials are read from the environment."""
import argparse
import os

from azure.cosmos import CosmosClient, PartitionKey

DOCUMENTS = [
    {"id": "note-1", "topic": "containers", "text": "Package an application", "embedding": [1.0, 0.0, 0.0]},
    {"id": "note-2", "topic": "containers", "text": "Inspect container logs", "embedding": [0.9, 0.1, 0.0]},
    {"id": "note-3", "topic": "data", "text": "Retrieve stored data", "embedding": [0.0, 1.0, 0.0]},
]


def report(headers, _body):
    charge = headers.get("x-ms-request-charge")
    if charge:
        print("Request charge:", charge, "RU")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["setup", "query", "point", "vector-setup", "vector", "update"])
    args = parser.parse_args()
    with CosmosClient(os.environ["COSMOS_ENDPOINT"], credential=os.environ["COSMOS_KEY"]) as client:
        # Use a database without shared throughput so vector search is supported.
        database = client.get_database_client(os.getenv("COSMOS_DATABASE", "workshop"))
        name = "vectors" if args.mode.startswith("vector") else "notes"
        container = database.get_container_client(name)
        if args.mode in {"setup", "vector-setup"}:
            policy = {
                "indexingMode": "consistent", "automatic": True,
                "includedPaths": [{"path": "/*"}],
                "excludedPaths": [{"path": "/embedding/*"}],
            }
            extra = {}
            if args.mode == "vector-setup":
                policy["vectorIndexes"] = [{"path": "/embedding", "type": "flat"}]
                extra["vector_embedding_policy"] = {"vectorEmbeddings": [{
                    "path": "/embedding", "dataType": "float32",
                    "dimensions": 3, "distanceFunction": "cosine",
                }]}
            container = database.create_container_if_not_exists(
                id=name, partition_key=PartitionKey(path="/topic"),
                indexing_policy=policy, offer_throughput=400, **extra,
            )
            for document in DOCUMENTS:
                container.upsert_item(document, response_hook=report)
            print("Ready:", name)
        elif args.mode == "point":
            result = container.read_item("note-1", partition_key="containers", response_hook=report)
            print(result["id"], result["text"])
        elif args.mode == "update":
            document = container.read_item("note-1", partition_key="containers")
            document["revision"] = document.get("revision", 0) + 1
            container.upsert_item(document, response_hook=report)
            print("Updated note-1, revision", document["revision"])
        else:
            sql = "SELECT c.id, c.topic FROM c WHERE c.topic = @topic"
            parameters = [{"name": "@topic", "value": "containers"}]
            if args.mode == "vector":
                sql = ("SELECT TOP 2 c.id, VectorDistance(c.embedding, @vector) AS distance "
                       "FROM c WHERE c.topic = @topic ORDER BY VectorDistance(c.embedding, @vector)")
                parameters.append({"name": "@vector", "value": [0.0, 1.0, 0.0]})
            results = container.query_items(sql, parameters=parameters,
                                            partition_key="containers", response_hook=report)
            for result in results:
                print(result)


if __name__ == "__main__":
    main()
