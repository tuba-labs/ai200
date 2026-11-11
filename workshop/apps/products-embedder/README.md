# ProductsEmbedder

Python 3.12 / Azure Functions v4, Python v2 programming model. The Blob trigger explicitly uses Event Grid. Flex Consumption uses a managed-identity deployment container and identity-based host/binding storage; there are no storage account keys in app settings.

From the repository root, run `bash workshop/scripts/07-embedder.sh` after Products is deployed and the role/configuration stage passes. `tools/package_function.py` copies the canonical shared package plus flattened requirements and constraints into a source ZIP. Azure performs the Linux dependency build; do not upload a Windows virtual environment.

`function_app.py` resolves stable product/manual IDs from the blob path. Shared `rag_core.embedding` verifies the immutable checksum, uses an advisory lock, persists processing/failure states and commits all chunks and ready atomically. Ready duplicates avoid new embedding calls. Blob receipts can also suppress duplicate invocations at the platform boundary.

To inspect locally without Azure, install `workshop/requirements-test.txt`, add `apps/shared` to `PYTHONPATH` and run the supplied tests. They check the actual decorator/binding and exercise indexing against real pgvector with deterministic model fixtures. This is not a claim that local tests exercise Event Grid delivery or the Functions cloud host.

Settings and Key Vault secrets load at cold/startup and are cached for that process. Restart the Function app for changed settings, and upload a new product to index a revised manual. No automatic refresh or in-place manual replacement is implemented.
