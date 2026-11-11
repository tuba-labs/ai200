package org.tubalabs.products;

import com.azure.core.credential.TokenCredential;
import com.azure.data.appconfiguration.ConfigurationClientBuilder;
import com.azure.data.appconfiguration.models.SettingSelector;
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.messaging.servicebus.*;
import com.azure.security.keyvault.secrets.SecretClientBuilder;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.flywaydb.core.Flyway;
import org.springframework.context.annotation.*;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Configuration
@Profile("!inspect")
class CloudConfiguration {
    record Settings(Map<String,String> values, TokenCredential credential, String pgPassword, String webPassword) {
        String get(String key) {
            String value = values.get(key);
            if (value == null || value.isBlank()) throw new IllegalStateException("Missing App Configuration key rag:" + key);
            return value;
        }
    }
    @Bean Settings settings() {
        var credential = new DefaultAzureCredentialBuilder().build();
        String endpoint = System.getenv("APP_CONFIG_ENDPOINT");
        if (endpoint == null) throw new IllegalStateException("Set APP_CONFIG_ENDPOINT and enable workload identity first");
        var config = new ConfigurationClientBuilder().endpoint(endpoint).credential(credential).buildClient();
        Map<String,String> values = new HashMap<>();
        config.listConfigurationSettings(new SettingSelector().setKeyFilter("rag:*")
                .setLabelFilter(System.getenv().getOrDefault("APP_CONFIG_LABEL", "workshop")))
                .forEach(setting -> values.put(setting.getKey().substring(4), setting.getValue()));
        var vault = new SecretClientBuilder().vaultUrl(values.get("key-vault-uri")).credential(credential).buildClient();
        return new Settings(values, credential, vault.getSecret("postgres-password").getValue(), vault.getSecret("products-password").getValue());
    }
    @Bean(destroyMethod="close") DataSource dataSource(Settings settings) {
        var config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://" + settings.get("pg-host") + ":5432/" + settings.get("pg-database") + "?sslmode=require");
        config.setUsername(settings.get("pg-user")); config.setPassword(settings.pgPassword());
        config.setMaximumPoolSize(5); config.setMinimumIdle(1); config.setConnectionTimeout(15000);
        return new HikariDataSource(config);
    }
    @Bean(initMethod="migrate") Flyway flyway(DataSource dataSource) { return Flyway.configure().dataSource(dataSource).load(); }
    @Bean JdbcClient jdbcClient(DataSource dataSource) { return JdbcClient.create(dataSource); }
    @Bean BlobContainerClient manuals(Settings settings) {
        return new BlobServiceClientBuilder().endpoint(settings.get("blob-endpoint")).credential(settings.credential())
                .buildClient().getBlobContainerClient("manuals");
    }
    @Bean(destroyMethod="close") ServiceBusSenderClient requestSender(Settings settings) {
        return new ServiceBusClientBuilder().credential(settings.get("servicebus-host"), settings.credential())
                .sender().queueName("chat-requests").buildClient();
    }
    @Bean(destroyMethod="close") ServiceBusReceiverClient replyReceiver(Settings settings) {
        return new ServiceBusClientBuilder().credential(settings.get("servicebus-host"), settings.credential())
                .receiver().queueName("chat-replies").prefetchCount(0).buildClient();
    }
    @Bean UserDetailsService users(Settings settings) {
        return new InMemoryUserDetailsManager(User.withUsername("participant")
                .password("{bcrypt}" + new BCryptPasswordEncoder().encode(settings.webPassword())).roles("PARTICIPANT").build());
    }
    @Bean SecurityFilterChain security(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(auth -> auth
                        .requestMatchers("/actuator/health/**", "/app.css", "/app.js").permitAll().anyRequest().authenticated())
                .httpBasic(Customizer.withDefaults()).formLogin(Customizer.withDefaults())
                .headers(headers -> headers.contentSecurityPolicy(policy -> policy.policyDirectives("default-src 'self'; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'")))
                .build(); // CSRF remains enabled for forms AND JSON/multipart API calls.
    }
}
