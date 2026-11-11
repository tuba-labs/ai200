# Version and dependency matrix

Selected and checked on 2026-11-11. These are pinned baselines, not a promise that they remain the newest release.

| Component | Version / choice | Canonical source |
| --- | --- | --- |
| Java | 21 LTS; local verification uses Corretto 21.0.12.1 | Products pom.xml |
| Spring Boot | 4.1.2 | Products pom.xml |
| Azure Java SDK BOM | 1.3.9 | Products pom.xml |
| Maven Wrapper / Maven | 3.3.4 / 3.9.11 | Products .mvn/wrapper/maven-wrapper.properties |
| Flyway | 12.4.0, managed by pinned Boot parent | Effective Maven dependencies |
| Build image | maven:3.9.11-eclipse-temurin-21 | Products Dockerfile |
| Java runtime image | eclipse-temurin:21.0.9_10-jre-jammy | Products Dockerfile |
| Python runtime image | python:3.12.12-slim-bookworm | ProductsChat Dockerfile |
| Azure Functions | v4 host, Python 3.12, v2 programming model; extension bundle [4.0.0,5.0.0) | host.json / compute.bicep |
| Python direct dependencies | identity 1.25.1; appconfiguration 1.7.2; keyvault-secrets 4.10.0; servicebus 7.14.3; storage-blob 12.27.1; psycopg 3.2.12; requests 2.32.5; functions 1.24.0 | requirements.txt / Function requirements |
| Python transitive constraints | Exact versions resolved with Python 3.12 | constraints.txt |
| PostgreSQL / local pgvector | Azure PostgreSQL 17; local pgvector/pgvector:0.8.1-pg17 | database.bicep / verification script |
| Embeddings | text-embedding-3-small version 1; deployment embedding; 1536 dimensions | config.example.json / migration / models.py |
| Chat | gpt-5-mini version 2025-08-07; deployment chat; low reasoning effort | config.example.json / models.py |
| Model API | Azure OpenAI GA /openai/v1/embeddings and /openai/v1/chat/completions | models.py / model_probe.py |
| AKS | AKS-supported default Kubernetes at creation, patch upgrades; one node, fixed worker replica | compute.bicep |
| Kubernetes API resources | apps/v1, v1, batch/v1 | k8s/ |
| ARM APIs | Network 2024-05-01; Web 2024-04-01; AKS 2025-01-01; PostgreSQL 2024-08-01; Cognitive Services 2024-10-01 | infra/ |
| Test tools | pytest 8.4.2; jsonschema 4.25.1; Playwright 1.56.0; ShellCheck image v0.11.0 | requirements-test.txt / verify-local.sh |
| Local Bicep compiler | 0.49.2 | Validation environment; templates also validated against its resource schemas |
| Azure CLI / Docker | CLI 2.91.0; Docker Engine 29.9.2 | CLI help/metadata and actual Docker builds; no cloud deployment claimed |
| Local Node / Python | Node 24.13.0; Python 3.12.10 for workshop tests | Existing-site tests and isolated workshop test environment |

Model/deployment offers and quota are checked again before creation; the actual model-only probe is the access gate. Different embedding models require reindexing and a reviewed schema change if dimensions change. Do not change only the App Configuration deployment name and assume old vectors remain compatible.

The optional local installers target x64 Windows 11 + Ubuntu 24.04 WSL2, or native x86-64 Ubuntu 24.04 for the Bash stage. WinGet installs the currently offered Docker Desktop; apt installs supported Ubuntu packages and Azure CLI (minimum 2.91 checked). Bicep is pinned to 0.49.2 and kubectl to 1.34.1 with SHA-256 verification. Check the client/server minor-version difference after AKS creation. These installation flows require a real first-run machine check; syntax/preview validation does not prove a clean OS installation succeeded.

Kubernetes and Functions platform/extension patch releases are managed rather than pretending to pin Azure's service host. Application dependencies and container references are explicit; no application image is called latest. For a longer-lived release, upgrade Java/Python base images to current patched tags/digests and rerun the complete validation set.
