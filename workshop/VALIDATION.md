# Validation report — 2026-11-11

This report separates observations from expectations. Local model fixtures are deterministic and make no Azure model calls.

## Observed local checks

| Check | Observed result |
| --- | --- |
| Production website | `python scripts/build.py` and `--check` pass; nine chapters, four reference pages and a clean `.site/` export. Build does not read Azure credentials. The separate workshop glossary was replaced by the shared jargon catalog. |
| Documentation/source integrity | Every workshop local link, anchor, asset, canonical snippet and source reference resolves; generated source/search indexes match actual files. |
| Browser | Eight real headless Chromium/Edge cases at `/ai200/`: navigation, command copying, search, completion/reset, source explorer, responsive layout, blocked storage, private-file denial, shared header/theme, jargon tooltips and installer download. Collapsed panels, keyboard/direct links, the five-item menu, logo navigation, Term help's Terms link (also when disabled), and plain-text question-bank credits pass. Desktop/mobile screenshots visually inspected. |
| Java / HTTP / SQL | Java 21 with Maven Wrapper succeeds. Four integration tests pass: Flyway migration/rerun, independent-connection product visibility before blob upload, persistent outbox, reply correlation/duplicates/timeouts, and a real HTTP authenticated CSRF + multipart upload + question/polling flow. Only the Blob network boundary is mocked in the HTTP test. |
| Real database | Disposable loopback-only PostgreSQL 17.8 with pgvector 0.8.1. Actual SQL, extension creation, vector types/operators, uniqueness and transactions execute. |
| Workshop Python tests | Initial reference-system verification passed 26 pytest cases, including real pgvector duplicate/concurrent processing, dimension rejection, atomic/failure persistence, retrieval filters, cached requests, correlation/duplicate replies, expired work, invalid messages and real Functions binding metadata. Model responses are deterministic fixtures. The subsequent interface/setup update reran 14 relevant cases: five browser, six documentation/export and three local-preflight boundary cases. |
| Python dependencies | Pinned direct requirements and transitive constraints resolve on Python 3.12; Linux runtime installation succeeds in the worker image. |
| Containers | Both Products and ProductsChat Dockerfiles build for linux/amd64. Actual Products inspect-container `/`, liveness and readiness return HTTP 200; health reports UP. Worker SDK imports and actual ServiceBusMessage construction pass inside Linux. Inspect mode is explicitly not a simulated Azure application. |
| Bicep | All four stages compile with Bicep 0.49.2; no remaining compiler diagnostics. This is not ARM/server-side validation. |
| Kubernetes | Eight standard resources pass strict Kubernetes 1.34 schemas with kubeconform 0.7.0. No live admission/controller behavior is claimed. |
| Shell / JavaScript | Bash syntax, ShellCheck 0.11.0 and browser-script syntax pass. |
| Local setup scripts | Windows PowerShell 5.1 parsing and an actual `-WhatIf` preview pass; Ubuntu installer Bash syntax and ShellCheck pass. Local-preflight tests prove it works without bootstrap state or cloud access and rejects missing tools/Windows containers. No software installer was executed on this machine; a clean Windows/WSL/Ubuntu installation remains unverified. |
| Existing site regression | All 58 existing Python tests and 91 existing JavaScript tests pass. |

Java tests were executed with `TEST_DATABASE_URL` set; Python database tests used `TEST_DATABASE_DSN`. They were not skipped. The fixture password is deliberately test-only, bound to loopback, and never reused for Azure.

Documentation updates condensed the core text by about 65% and moved background/reference material into closed details panels. All original command regions retain their visibility and source references. Fourteen documentation/browser cases, 58 existing Python tests, 91 JavaScript tests, the production build and JavaScript syntax pass. Application/infrastructure code is unchanged; cloud verification remains as below.

## Separate application repositories

Application code was moved to three standalone repositories and pushed to the GitHub URLs in `repositories.json`; remote main SHAs were verified. The website contains links only, and its build passes with no app checkouts. Deployment tools use sibling checkouts at the pinned revisions; no Git submodules are used.

Post-split checks: both linux/amd64 container builds pass; four Java/HTTP/pgvector tests pass; the Function has five standalone tests including ZIP completeness/binding metadata, and the worker has three standalone model-contract tests. All 37 workshop tests pass against the real PostgreSQL fixture, including cross-repo code consistency and website independence. Existing site checks (58 Python, 91 JavaScript), Bash syntax and ShellCheck pass. No live Azure deployment was performed.

## Workshop 1 without autoscaling

The core now has nine chapters (210 estimated minutes), with one chat worker replica. The scaler chapter, manifests, identity, role assignments, load tools and artificial worker delay are removed. Workload scaling is reserved for the next workshop.

Checks rerun for this change: 18 documentation/browser/repository tests, three standalone worker model-contract tests, 58 existing Python tests and 91 JavaScript tests pass. The website production build and freshness check pass; all local links and source references resolve. The updated linux/amd64 worker image builds and imports successfully. All four Bicep stages compile; all eight Kubernetes resources pass strict schemas with no skipped kinds. Bash syntax, ShellCheck and both GitHub workflow files pass validation. Unchanged Java/database integration tests were not rerun for this change; their earlier results are recorded above.

ProductsChat's update is committed and pushed, and the workshop pins that verified revision in `repositories.json`.

## Cloud boundary

The user explicitly chose **“Leave Azure testing for my walkthrough.”** No Azure providers were registered and no paid cloud resources were created. Read-only checks found Azure sign-in available, but Microsoft.Compute, Microsoft.ContainerService and Microsoft.CognitiveServices are NotRegistered. VM/model usage queries for Sweden Central returned empty arrays; that is not proof of insufficient quota. Register providers and rerun the supplied checks in the intended subscription before drawing a quota conclusion.

ARM/server-side validation, a clean Azure deployment, actual model inference probes, Functions/Event Grid host delivery, workload identity propagation, the public HTTPS endpoint, the real smoke test and Azure cleanup remain unverified until run in a suitable authorized subscription. A successful local fixture test does not establish any of these.

The website's chapter output is labeled expected/example behavior. The 3½-hour duration is an estimate and has not been confirmed by a timed human walkthrough.
