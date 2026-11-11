# Validation report — 2026-11-11

This report separates observations from expectations. Local model fixtures are deterministic and make no Azure model calls.

## Observed local checks

| Check | Observed result |
| --- | --- |
| Production website | `python scripts/build.py` and `--check` pass; ten chapters, four reference pages and a clean `.site/` export. Build does not read Azure credentials. The separate workshop glossary was replaced by the shared jargon catalog. |
| Documentation/source integrity | Every workshop local link, anchor, asset, canonical snippet and source reference resolves; generated source/search indexes match actual files. |
| Browser | Five real headless Chromium/Edge cases at `/ai200/workshop/`: navigation, exact command copying (platform newline normalization), search, persisted completion/reset, source explorer, responsive layout, blocked storage, and denial of a real private state file. The shared header/theme, language control, jargon tooltip/toggle and byte-for-byte Windows-script download also pass. Desktop/mobile screenshots visually inspected. |
| Java / HTTP / SQL | Java 21 with Maven Wrapper succeeds. Four integration tests pass: Flyway migration/rerun, independent-connection product visibility before blob upload, persistent outbox, reply correlation/duplicates/timeouts, and a real HTTP authenticated CSRF + multipart upload + question/polling flow. Only the Blob network boundary is mocked in the HTTP test. |
| Real database | Disposable loopback-only PostgreSQL 17.8 with pgvector 0.8.1. Actual SQL, extension creation, vector types/operators, uniqueness and transactions execute. |
| Workshop Python tests | Initial reference-system verification passed 26 pytest cases, including real pgvector duplicate/concurrent processing, dimension rejection, atomic/failure persistence, retrieval filters, cached requests, correlation/duplicate replies, expired work, invalid messages and real Functions binding metadata. Model responses are deterministic fixtures. The subsequent interface/setup update reran 14 relevant cases: five browser, six documentation/export and three local-preflight boundary cases. |
| Python dependencies | Pinned direct requirements and transitive constraints resolve on Python 3.12; Linux runtime installation succeeds in the worker image. |
| Containers | Both Products and ProductsChat Dockerfiles build for linux/amd64. Actual Products inspect-container `/`, liveness and readiness return HTTP 200; health reports UP. Worker SDK imports and actual ServiceBusMessage construction pass inside Linux. Inspect mode is explicitly not a simulated Azure application. |
| Bicep | All four stages compile with Bicep 0.49.2; no remaining compiler diagnostics. This is not ARM/server-side validation. |
| Kubernetes | Ten rendered resources: eight standard resources pass strict Kubernetes 1.34 schemas with kubeconform 0.7.0; ScaledObject and TriggerAuthentication pass official KEDA 2.18.2 CRD structural schemas. No live admission/controller behavior is claimed. |
| Shell / JavaScript | Bash syntax, ShellCheck 0.11.0 and browser-script syntax pass. |
| Local setup scripts | Windows PowerShell 5.1 parsing and an actual `-WhatIf` preview pass; Ubuntu installer Bash syntax and ShellCheck pass. Local-preflight tests prove it works without bootstrap state or cloud access and rejects missing tools/Windows containers. No software installer was executed on this machine; a clean Windows/WSL/Ubuntu installation remains unverified. |
| Existing site regression | All 58 existing Python tests and 91 existing JavaScript tests pass. |

Java tests were executed with `TEST_DATABASE_URL` set; Python database tests used `TEST_DATABASE_DSN`. They were not skipped. The fixture password is deliberately test-only, bound to loopback, and never reused for Azure.

Content revision: the ten core chapters were shortened from 9,529 to 3,300 authored words (65%); text outside collapsed details dropped 77%. Counts exclude HTML and do not expand code snippets. All original command regions remain. Eleven documentation/browser cases, 58 existing Python tests, 91 JavaScript tests, the production build, Bash syntax and ShellCheck pass. Desktop/mobile screenshots were inspected. Application/infrastructure code was unchanged; cloud verification remains as below.

## Cloud boundary

The user explicitly chose **“Leave Azure testing for my walkthrough.”** No Azure providers were registered and no paid cloud resources were created. Read-only checks found Azure sign-in available, but Microsoft.Compute, Microsoft.ContainerService and Microsoft.CognitiveServices are NotRegistered. VM/model usage queries for Sweden Central returned empty arrays; that is not proof of insufficient quota. Register providers and rerun the supplied checks in the intended subscription before drawing a quota conclusion.

ARM/server-side validation, a clean Azure deployment, actual model inference probes, Functions/Event Grid host delivery, workload/KEDA identity propagation, the public HTTPS endpoint, the real smoke test, the six-phase scaling observation and Azure cleanup remain unverified until run in a suitable authorized subscription. A successful local fixture test does not establish any of these.

The website's chapter output is labeled expected/example behavior. The four-hour duration is an estimate and has not been confirmed by a timed human walkthrough.
