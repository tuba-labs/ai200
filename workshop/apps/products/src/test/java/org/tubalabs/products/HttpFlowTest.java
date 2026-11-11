package org.tubalabs.products;

import com.azure.storage.blob.*;
import com.azure.storage.blob.options.BlobParallelUploadOptions;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.flywaydb.core.Flyway;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.*;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;
import java.net.*;
import java.net.http.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

/** Real HTTP + PostgreSQL + security; ONLY Blob Storage is a deterministic boundary fixture. */
@EnabledIfEnvironmentVariable(named="TEST_DATABASE_URL", matches=".+")
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class HttpFlowTest {
    static final AtomicBoolean committedBeforeBlob = new AtomicBoolean();
    ConfigurableApplicationContext context;
    HttpClient browser;
    String endpoint;
    final ObjectMapper json = new ObjectMapper();
    @BeforeAll void start() {
        context = new SpringApplicationBuilder(Fixture.class).properties("server.port=0", "spring.main.banner-mode=off", "logging.level.root=WARN").run();
        endpoint = "http://127.0.0.1:" + context.getEnvironment().getProperty("local.server.port");
        browser = HttpClient.newBuilder().cookieHandler(new CookieManager(null, CookiePolicy.ACCEPT_ALL)).build();
    }
    @AfterAll void stop() { if (context != null) context.close(); }
    HttpRequest.Builder request(String path) {
        return HttpRequest.newBuilder(URI.create(endpoint + path)).header("Accept", "application/json")
                .header("Authorization", "Basic " + Base64.getEncoder().encodeToString("participant:local-test-only".getBytes(StandardCharsets.UTF_8)));
    }
    @Test void uploadAndChatUseRealHttpCsrfRecordsAndPersistentReplies() throws Exception {
        var denied = browser.send(request("/api/questions").header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString("{\"question\":\"fixture\",\"productId\":null}")).build(), HttpResponse.BodyHandlers.ofString());
        // A fresh request may receive an auth challenge before CSRF denial.
        // The authenticated token flow below must still succeed end to end.
        assertThat(denied.statusCode()).isIn(401, 403);
        var tokenResponse = browser.send(request("/api/csrf").GET().build(), HttpResponse.BodyHandlers.ofString());
        assertThat(tokenResponse.statusCode()).isEqualTo(200);
        var csrf = json.readTree(tokenResponse.body());
        String header = csrf.path("headerName").asText(), token = csrf.path("token").asText();
        String boundary = "WorkshopBoundary" + UUID.randomUUID().toString().replace("-", "");
        String body = "--" + boundary + "\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nHTTP fixture lamp\r\n"
                + "--" + boundary + "\r\nContent-Disposition: form-data; name=\"manual\"; filename=\"manual.txt\"\r\nContent-Type: text/plain\r\n\r\nA fictional lamp outputs 420 lumens.\r\n"
                + "--" + boundary + "--\r\n";
        var uploaded = browser.send(request("/api/products").header(header, token)
                .header("Content-Type", "multipart/form-data; boundary=" + boundary)
                .POST(HttpRequest.BodyPublishers.ofString(body)).build(), HttpResponse.BodyHandlers.ofString());
        assertThat(uploaded.statusCode()).withFailMessage(uploaded.body()).isEqualTo(201);
        var product = json.readTree(uploaded.body());
        assertThat(product.path("manualId").asText()).isNotBlank();
        assertThat(product.path("status").asText()).isEqualTo("waiting");
        assertThat(committedBeforeBlob.get()).isTrue();
        var asked = browser.send(request("/api/questions").header(header, token).header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString("{\"question\":\"How bright?\",\"productId\":null}")).build(), HttpResponse.BodyHandlers.ofString());
        assertThat(asked.statusCode()).withFailMessage(asked.body()).isEqualTo(202);
        var question = json.readTree(asked.body());
        UUID id = UUID.fromString(question.path("id").asText());
        var store = context.getBean(Store.class);
        var reply = new LinkedHashMap<String,Object>();
        reply.put("schemaVersion",1); reply.put("type","chat.reply"); reply.put("requestId",id.toString());
        reply.put("correlationId",question.path("correlationId").asText()); reply.put("status","completed");
        reply.put("answer","420 lumens [1]"); reply.put("sources",List.of()); reply.put("errorCode",null);
        assertThat(store.applyReply(store.encode(reply), question.path("correlationId").asText())).isEqualTo(1);
        var polled = browser.send(request("/api/questions/" + id).GET().build(), HttpResponse.BodyHandlers.ofString());
        assertThat(polled.statusCode()).isEqualTo(200);
        assertThat(json.readTree(polled.body()).path("answer").asText()).isEqualTo("420 lumens [1]");
    }
    @Configuration @EnableAutoConfiguration @Import({Store.class, ProductsController.class})
    static class Fixture {
        @Bean DataSource dataSource() { return new DriverManagerDataSource(System.getenv("TEST_DATABASE_URL"),"workshopadmin","local-test-only"); }
        @Bean JdbcClient jdbcClient(DataSource source) { return JdbcClient.create(source); }
        @Bean(initMethod="migrate") Flyway flyway(DataSource source) { return Flyway.configure().dataSource(source).load(); }
        @Bean UserDetailsService users() { return new InMemoryUserDetailsManager(User.withUsername("participant").password("{noop}local-test-only").roles("PARTICIPANT").build()); }
        @Bean SecurityFilterChain security(HttpSecurity http) throws Exception { return new CloudConfiguration().security(http); }
        @Bean BlobContainerClient blobs(DataSource source) {
            var container = mock(BlobContainerClient.class);
            var blob = mock(BlobClient.class);
            when(container.getBlobClient(anyString())).thenAnswer(invocation -> {
                String path = invocation.getArgument(0);
                UUID id = UUID.fromString(path.split("/")[1]);
                committedBeforeBlob.set(JdbcClient.create(source).sql("SELECT count(*) FROM products WHERE id=?").param(id).query(Integer.class).single() == 1);
                return blob;
            });
            when(blob.uploadWithResponse(any(BlobParallelUploadOptions.class), any(), any())).thenReturn(null);
            return container;
        }
    }
}
