# Products

Java 21 / Spring Boot 4.1.2. No ORM: JdbcClient and explicit SQL; Thymeleaf views; Flyway migration in `src/main/resources/db/migration`.

```bash
# This directory, Java 21 installed:
bash mvnw test
bash mvnw package
java -jar target/products.jar --spring.profiles.active=inspect
```

Inspect mode has no Azure connections and exposes only a startup explanation and health. For the real application, follow the workshop's staged setup and deploy with the `azure` profile. Its only application bootstrap settings are `APP_CONFIG_ENDPOINT`/`APP_CONFIG_LABEL`; workload identity is supplied by AKS. Settings/secrets are read at startup; restart to pick up changes.

The public service uses HTTPS (8443), mounted PEM certificate/key in `/tls`, and a random Key Vault sign-in password for `participant`. CSRF remains enabled for all writes; API clients first obtain a session token at `/api/csrf`. The real-deployment client implements this.

Database integration tests run when `TEST_DATABASE_URL` is set to the disposable workshop PostgreSQL fixture. The root local-verification script starts it, applies Flyway and checks transaction visibility, outbox persistence, reply correlation, duplicate replies and timeout persistence. They use `workshopadmin` / `local-test-only` solely in that loopback-only disposable fixture.

Upload ordering is intentional: commit product before blob creation. Chat uses a persistent outbox and asynchronous request/reply; no open HTTP request must survive. Read `Store.java` and `MessagePump.java` before changing retry/acknowledgement order.
