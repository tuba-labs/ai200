"""Managed Redis, Enterprise clustering policy, TLS and a lab access key."""
import argparse
import os
import time
from array import array

import redis
from redis.commands.search.field import TagField, TextField, VectorField
from redis.commands.search.index_definition import IndexDefinition, IndexType
from redis.commands.search.query import Query
from redis.exceptions import ResponseError


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["cache", "index", "search", "cleanup"])
    args = parser.parse_args()
    with redis.Redis(host=os.environ["REDIS_HOST"], port=int(os.getenv("REDIS_PORT", "10000")),
                     password=os.environ["REDIS_KEY"], ssl=True, socket_timeout=10) as client:
        if args.mode == "cache":
            key = "ai200:cache:containers:v1"
            print("Initial:", client.get(key))
            client.set(key, "note-1,note-2", ex=10)
            print("Hit:", client.get(key), "TTL:", client.ttl(key))
            client.delete(key)
            print("Invalidated:", client.get(key))
            client.set(key, "updated-note-1", ex=2)
            time.sleep(3)
            print("Expired:", client.get(key), "TTL:", client.ttl(key))
        elif args.mode == "index":
            fields = [TagField("topic"), TextField("text"), VectorField("embedding", "HNSW", {
                "TYPE": "FLOAT32", "DIM": 3, "DISTANCE_METRIC": "COSINE",
            })]
            try:
                client.ft("ai200-index").create_index(fields, definition=IndexDefinition(
                    prefix=["ai200:vector:"], index_type=IndexType.HASH))
            except ResponseError as error:
                if "index already exists" not in str(error).lower():
                    raise
            for number, topic, vector in [(1, "containers", [1, 0, 0]),
                                           (2, "containers", [0.9, 0.1, 0]), (3, "data", [0, 1, 0])]:
                client.hset(f"ai200:vector:{number}", mapping={
                    "topic": topic, "text": f"Teaching document {number}",
                    "embedding": array("f", vector).tobytes(),
                })
            print("Index and three documents ready; wait for indexing before search")
        elif args.mode == "search":
            query = Query("(@topic:{containers})=>[KNN 2 @embedding $vec AS score]")
            query = query.sort_by("score").return_fields("topic", "text", "score").dialect(2)
            result = client.ft("ai200-index").search(query, query_params={"vec": array("f", [0, 1, 0]).tobytes()})
            for document in result.docs:
                print(document.id, document.topic, document.score)
        else:
            client.ft("ai200-index").dropindex(delete_documents=True)
            print("Removed lab index and its documents")


if __name__ == "__main__":
    main()
