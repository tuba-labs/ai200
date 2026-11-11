# Products: a self-paced Azure RAG workshop

This directory contains documentation, staged infrastructure and verification tools for an estimated 3½-hour core path **after tools/access are ready**. Application source is maintained in the three separate repositories below. The estimate has not been confirmed by a timed participant walkthrough.

From the repository root, with Python 3.12+:

```bash
python3 scripts/build.py
python3 scripts/serve.py --port 8000
```

Open **http://127.0.0.1:8000/workshop/**, or use the workshop link from the existing home page. No Azure credentials, Java, Docker or package install are needed to build/serve the website. Static files also work beneath the GitHub Pages repository base `/ai200/`; all asset/page/source URLs are relative.

The production build exports a clean `.site/` tree. GitHub Pages publishes that export. The local server uses the same public-file allowlist: `.state`, `.tools`, virtual environments, Git metadata, kubeconfig and private TLS keys are never served. Do not replace it with an unrestricted HTTP server while deployment state is present.

The tutorial's primary shell is **Bash**. Windows participants use WSL2 Ubuntu with Docker Desktop integration. The reference system is a separate deployable Azure application, not the documentation server.

Before the core workshop, follow the [prerequisite checklist](content/prerequisites.inc): an active Azure subscription, resource/role-assignment permissions, regional model/VM quota and a local Linux-container engine are required. Windows participants can download [setup-windows.ps1](scripts/setup-windows.ps1) from the website and run it in an Administrator PowerShell window; `-WhatIf` previews actions. It uses WinGet for Docker Desktop and the WSL installer for Ubuntu 24.04. After restarting/initializing Ubuntu and enabling Docker Desktop integration, run `bash workshop/scripts/setup-ubuntu.sh` **from the repository root inside Ubuntu** for Azure CLI, Bicep, Java, Python, kubectl and supporting tools. Installation and account/quota approvals are outside the 3½-hour estimate. Check tools alone with `python3 workshop/tools/preflight.py --local-only`; this does not require sign-in or `.state/config.json`.

Workshop pages reuse the default site header, language/theme controls and shared jargon tooltips. Workshop instructions remain in English; definitions and sources belong to the root jargon catalog rather than a second glossary.

## Layout

| Path | Purpose |
| --- | --- |
| [Products](https://github.com/tuba-labs/ai200-workshop1-products) | Separate Java / Flyway application repository |
| [ProductsEmbedder](https://github.com/tuba-labs/ai200-workshop1-products-embedder) | Separate Python Function repository |
| [ProductsChat](https://github.com/tuba-labs/ai-200-products-chat) | Separate Python worker repository |
| `infra/` | Model gate, shared network/data foundation, private PostgreSQL, AKS/Functions templates |
| `k8s/` | Products, one chat worker, Service and inspection Job |
| `scripts/` | Ordered Bash setup, readiness, deployment, observation and confirmed cleanup stages |
| `tools/` | Prerequisite checks, canonical render/package tools, real-deployment smoke/load/replay |
| `samples/` | Three fictional UTF-8 manuals and objectively checkable supporting passages |
| `contracts/` | Versioned request/reply JSON schemas |
| `content/`, `assets/` | Authored documentation and accessible static interface |
| `tests/` | Real pgvector integration, deterministic model fixtures and browser/static checks |

## Deployment path

Follow the website in order. It explains the commands before executing stages. Start with `python3 workshop/tools/bootstrap.py` and `bash workshop/scripts/00-check.sh` **from the repository root**, not this directory. The stage scripts explicitly target one subscription/group and persist non-secret state under ignored `.state/`. Do not enable shell tracing. Actual passwords stay in Key Vault; temporary secure parameter files are removed after submission.

The first paid stage creates only the model resource/deployments and proves actual inference access. AKS and PostgreSQL start only after that gate passes. Your source IPv4 /32 restricts the Products load balancer; PostgreSQL uses private VNet networking. Products uses self-signed HTTPS with a certificate pinned by the smoke client and a random sign-in password stored in Key Vault.

**Selected exam objectives only:** AKS, ACR images, PostgreSQL/RAG filters, Service Bus, Event Grid/Functions, Key Vault and App Configuration. See `reference.html` for the dated mapping and official sources.

## Local checks and Azure acceptance

```bash
# Requires Docker, Java 21, Python 3.12+, Node and a browser installed for Playwright.
bash workshop/scripts/verify-local.sh

# After the published Azure deployment instructions have succeeded:
source workshop/.tools/venv/bin/activate
python workshop/tools/smoke.py

# Only this workshop's tagged group, after showing resources and typed confirmation:
bash workshop/scripts/cleanup.sh
```

Install the local test browser with `python -m playwright install chromium`, or set `BROWSER_EXECUTABLE` to an installed compatible Chromium/Edge executable. Integration tests use a disposable loopback-only PostgreSQL/pgvector container and deterministic model fixtures. The real Azure smoke uploads a new manual and checks indexing, correlation, a nonempty answer and relevant source passages; it never asserts exact model wording.

See [VALIDATION.md](VALIDATION.md) for observed checks versus remaining Azure validation, and [VERSIONS.md](VERSIONS.md) for versions. Never treat a static chapter's expected output as an observed Azure success.

## Application repositories

Application code is maintained only in the three GitHub repositories above. This website links to their files; it does not contain submodules or app-source copies. The documentation builds without app checkouts or Azure credentials.

Before deployment or cross-application tests, run `bash workshop/scripts/get-apps.sh`. It clones the pinned revisions from `repositories.json` into sibling folders. Set `AI200_APPS_DIR` to a different parent directory when needed. Existing checkouts are never reset or overwritten. To advance the workshop baseline, update the manifest after validating the three apps together.

Both Python repos vendor `rag_core/` and include flattened requirements/constraints. Integration checks verify their shared runtime code agrees. The chat image includes its own database inspection tool; Function packaging lives in its own repository.

Edit `content/*.inc` and the local executable files, then run `python3 scripts/build.py`. `commands.sh` provides the canonical command snippets. Do not edit generated HTML or JSON indexes directly.
