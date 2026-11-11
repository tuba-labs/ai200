# ProductsChat

Python 3.12 worker. One in-flight question per pod, prefetch zero, background Service Bus lock renewal for up to ten minutes. It reads ordinary App Configuration settings and the PostgreSQL Key Vault secret once at startup using workload identity.

From the repository root:

```bash
docker build --platform linux/amd64 -f workshop/apps/products-chat/Dockerfile -t products-chat:w1 .
```

The root context includes the canonical `apps/shared/rag_core` package; the root `.dockerignore` restricts it. Follow stages 08 and 09 to deploy and transfer replica control to KEDA. `DEMO_DELAY_SECONDS=0` is normal; the bounded KEDA exercise explicitly enables 20 seconds and disables it afterward.

The worker validates headers/body/persistent request, embeds the question with the same deployment/dimensions as the Function, executes filtered cosine SQL, builds a small untrusted-reference prompt, and calls the Azure-hosted chat model through GA v1 REST. It caches replies before publishing and acknowledges requests after publication. This is at-least-once delivery, not exactly once. A crash before caching can repeat a billed model call.

No evidence yields explicit insufficient information without a chat call. Answers without valid citations fall back to insufficient information. Failures retry; repeated failures produce a persisted failed reply and dead-lettered request. Products independently persists timeouts so a lost reply cannot leave an endless browser spinner.
