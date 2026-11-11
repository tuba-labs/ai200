package org.tubalabs.products;

import org.flywaydb.core.Flyway;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.core.simple.JdbcClient;

import java.util.*;

import static org.assertj.core.api.Assertions.*;

@EnabledIfEnvironmentVariable(named="TEST_DATABASE_URL", matches=".+")
class StoreTest {
    static DriverManagerDataSource database;
    static JdbcClient sql;
    Store store;
    @BeforeAll static void migrate() {
        database = new DriverManagerDataSource(System.getenv("TEST_DATABASE_URL"), "workshopadmin", "local-test-only");
        var flyway = Flyway.configure().dataSource(database).load();
        flyway.migrate(); flyway.validate();
        assertThat(flyway.migrate().migrationsExecuted).isZero();
        sql = JdbcClient.create(database);
        assertThat(sql.sql("SELECT extversion FROM pg_extension WHERE extname='vector'").query(String.class).single()).startsWith("0.8");
    }
    @BeforeEach void store() { store = new Store(sql, database); }
    @Test void productRecordIsVisibleBeforeAnyBlobUpload() {
        var product = store.createProduct("Commit before blob " + UUID.randomUUID(), "a".repeat(64));
        // A separate connection proves this is committed, rather than merely
        // visible inside the request's own uncommitted transaction.
        var independent = JdbcClient.create(database);
        assertThat(independent.sql("SELECT status FROM products WHERE id=?").param(product.id()).query(String.class).single()).isEqualTo("waiting");
        assertThat(product.blobName()).contains(product.id().toString(), product.manualId().toString()).endsWith(".txt");
        store.failUpload(product.id());
        assertThat(store.product(product.id()).orElseThrow().status()).isEqualTo("failed");
    }
    @Test void requestAndOutboxArePersistentAndRepliesAreCorrelatedAndIdempotent() {
        var request = store.createQuestion("How bright is the lamp?", null);
        assertThat(sql.sql("SELECT count(*) FROM chat_outbox WHERE request_id=?").param(request.id()).query(Integer.class).single()).isEqualTo(1);
        assertThat(store.chat(request.id()).orElseThrow().status()).isEqualTo("queued");
        var reply = new LinkedHashMap<String,Object>();
        reply.put("schemaVersion", 1); reply.put("type", "chat.reply"); reply.put("requestId", request.id().toString());
        reply.put("correlationId", UUID.randomUUID().toString()); reply.put("status", "completed");
        reply.put("answer", "420 lumens [1]"); reply.put("sources", List.of()); reply.put("errorCode", null);
        String wrong = reply.get("correlationId").toString();
        assertThat(store.applyReply(store.encode(reply), wrong)).isZero();
        reply.put("correlationId", request.correlationId().toString());
        assertThat(store.applyReply(store.encode(reply), request.correlationId().toString())).isEqualTo(1);
        reply.put("answer", "A duplicate must not replace the displayed answer");
        assertThat(store.applyReply(store.encode(reply), request.correlationId().toString())).isZero();
        assertThat(store.chat(request.id()).orElseThrow().answer()).isEqualTo("420 lumens [1]");
        assertThatThrownBy(() -> store.applyReply(store.encode(reply), UUID.randomUUID().toString())).isInstanceOf(IllegalArgumentException.class);
    }
    @Test void expiredRequestsPersistFailureAndRejectLateReplies() {
        var request = store.createQuestion("Timeout fixture", null);
        sql.sql("UPDATE chat_requests SET deadline=now()-interval '1 second' WHERE id=?").param(request.id()).update();
        store.expire();
        assertThat(store.chat(request.id()).orElseThrow().status()).isEqualTo("failed");
        assertThat(store.chat(request.id()).orElseThrow().error()).contains("timed out");
        var payload = new LinkedHashMap<String,Object>();
        payload.put("schemaVersion", 1); payload.put("type", "chat.reply"); payload.put("requestId", request.id().toString());
        payload.put("correlationId", request.correlationId().toString()); payload.put("status", "completed");
        payload.put("answer", "too late"); payload.put("sources", List.of()); payload.put("errorCode", null);
        assertThat(store.applyReply(store.encode(payload), request.correlationId().toString())).isZero();
    }
}
