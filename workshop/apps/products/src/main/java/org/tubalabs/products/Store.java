package org.tubalabs.products;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;
import java.time.OffsetDateTime;
import java.util.*;

@Repository @Profile("!inspect") @DependsOn("flyway")
public class Store {
    public record Product(UUID id, String name, UUID manualId, String status, String error, String blobName) {}
    public record Chat(UUID id, UUID correlationId, UUID productId, String question, String status,
                       String answer, List<Map<String,Object>> sources, String error, OffsetDateTime deadline) {}
    private final JdbcClient sql;
    private final TransactionTemplate transaction;
    private final ObjectMapper json = new ObjectMapper();
    public Store(JdbcClient sql, DataSource dataSource) {
        this.sql = sql; this.transaction = new TransactionTemplate(new DataSourceTransactionManager(dataSource));
    }
    public Product createProduct(String name, String sha256) {
        UUID id = UUID.randomUUID(), manual = UUID.randomUUID();
        String path = "products/" + id + "/" + manual + ".txt";
        // This statement commits before the controller starts the blob upload.
        sql.sql("INSERT INTO products(id,name,manual_id,blob_name,manual_sha256) VALUES (?,?,?,?,?)")
                .params(id, name, manual, path, sha256).update();
        return new Product(id, name, manual, "waiting", null, path);
    }
    public void failUpload(UUID id) {
        sql.sql("UPDATE products SET status='failed',error=?,updated_at=now() WHERE id=? AND status='waiting'")
                .params("Blob upload failed. Inspect Products logs; retry by creating a new product.", id).update();
    }
    public List<Product> products() {
        return sql.sql("SELECT id,name,manual_id,status,error,blob_name FROM products ORDER BY created_at DESC")
                .query((row, index) -> new Product(row.getObject(1, UUID.class), row.getString(2), row.getObject(3, UUID.class),
                        row.getString(4), row.getString(5), row.getString(6))).list();
    }
    public Optional<Product> product(UUID id) { return products().stream().filter(product -> product.id().equals(id)).findFirst(); }
    public Chat createQuestion(String question, UUID productId) {
        UUID id = UUID.randomUUID(), correlation = UUID.randomUUID();
        OffsetDateTime deadline = OffsetDateTime.now().plusMinutes(8);
        Map<String,Object> payload = new LinkedHashMap<>();
        payload.put("schemaVersion", 1); payload.put("type", "chat.request"); payload.put("requestId", id.toString());
        payload.put("correlationId", correlation.toString()); payload.put("productId", productId == null ? null : productId.toString());
        payload.put("question", question); payload.put("deadline", deadline.toString());
        transaction.executeWithoutResult(status -> {
            sql.sql("INSERT INTO chat_requests(id,correlation_id,product_id,question,deadline) VALUES (?,?,?,?,?)")
                    .param(id).param(correlation).param(productId).param(question).param(deadline).update();
            sql.sql("INSERT INTO chat_outbox(request_id,payload) VALUES (?,?::jsonb)").params(id, encode(payload)).update();
        });
        return chat(id).orElseThrow();
    }
    public List<Map<String,Object>> outgoing() {
        return sql.sql("SELECT o.request_id,o.payload::text FROM chat_outbox o JOIN chat_requests r ON r.id=o.request_id "
                + "WHERE o.sent_at IS NULL AND r.status='queued' AND r.deadline>now() ORDER BY r.created_at LIMIT 10")
                .query((row, i) -> Map.<String,Object>of("id", row.getObject(1, UUID.class), "payload", row.getString(2))).list();
    }
    public void sent(UUID id) { sql.sql("UPDATE chat_outbox SET sent_at=now(),attempts=attempts+1 WHERE request_id=?").param(id).update(); }
    public Optional<Chat> chat(UUID id) {
        return sql.sql("SELECT id,correlation_id,product_id,question,status,answer,sources::text,error,deadline FROM chat_requests WHERE id=?")
                .param(id).query((row, i) -> new Chat(row.getObject(1, UUID.class), row.getObject(2, UUID.class), row.getObject(3, UUID.class),
                        row.getString(4), row.getString(5), row.getString(6), decodeSources(row.getString(7)), row.getString(8),
                        row.getObject(9, OffsetDateTime.class))).optional();
    }
    public int applyReply(String payload, String correlationHeader) {
        try {
            var reply = json.readTree(payload);
            if (reply.path("schemaVersion").asInt() != 1 || !reply.path("type").asText().equals("chat.reply")
                    || !Set.of("completed", "failed").contains(reply.path("status").asText())
                    || !reply.path("sources").isArray() || !reply.path("answer").isTextual()
                    || !reply.path("correlationId").asText().equals(correlationHeader))
                throw new IllegalArgumentException("Invalid reply schema or correlation header");
            UUID id = UUID.fromString(reply.path("requestId").asText());
            UUID correlation = UUID.fromString(correlationHeader);
            return sql.sql("UPDATE chat_requests SET status=?,answer=?,sources=?::jsonb,error=?,updated_at=now() "
                    + "WHERE id=? AND correlation_id=? AND status IN ('queued','processing') AND deadline>now()")
                    .param(reply.path("status").asText()).param(reply.path("answer").asText()).param(reply.path("sources").toString())
                    .param(reply.path("errorCode").isNull() ? null : reply.path("errorCode").asText())
                    .param(id).param(correlation).update();
        } catch (JsonProcessingException error) { throw new IllegalArgumentException("Invalid reply JSON", error); }
    }
    public void expire() {
        sql.sql("UPDATE chat_requests SET status='failed',error='Request timed out after eight minutes. Check queue depth, worker logs and dead letters.',updated_at=now() "
                + "WHERE status IN ('queued','processing') AND deadline<=now()").update();
        sql.sql("UPDATE products SET status='failed',error='Indexing timed out. Check Event Grid delivery, Function logs and poison queue.',updated_at=now() "
                + "WHERE status IN ('waiting','processing') AND updated_at<now()-interval '12 minutes'").update();
    }
    public String encode(Object value) {
        try { return json.writeValueAsString(value); }
        catch (JsonProcessingException error) { throw new IllegalArgumentException("Cannot encode message", error); }
    }
    private List<Map<String,Object>> decodeSources(String value) {
        try { return json.readValue(value, json.getTypeFactory().constructCollectionType(List.class, Map.class)); }
        catch (JsonProcessingException error) { throw new IllegalArgumentException("Invalid sources", error); }
    }
}
