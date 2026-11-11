package org.tubalabs.products;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.*;

@Configuration @Profile("inspect")
class InspectConfiguration {
    @Bean SecurityFilterChain inspectSecurity(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(auth -> auth.anyRequest().permitAll()).build();
    }
    @RestController @Profile("inspect") static class InspectController {
        @GetMapping("/") String inspect() {
            return "Products container is running. Inspect profile: Azure connections and upload/chat are disabled. Deploy with the azure profile to use the application.";
        }
    }
}
