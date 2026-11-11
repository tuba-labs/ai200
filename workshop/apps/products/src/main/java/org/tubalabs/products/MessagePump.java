package org.tubalabs.products;

import com.azure.messaging.servicebus.*;
import com.azure.messaging.servicebus.models.DeadLetterOptions;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.UUID;

@Component @Profile("!inspect")
class MessagePump {
    private static final Logger LOG = LoggerFactory.getLogger(MessagePump.class);
    private final Store store;
    private final ServiceBusSenderClient sender;
    private final ServiceBusReceiverClient receiver;
    MessagePump(Store store, ServiceBusSenderClient sender, ServiceBusReceiverClient receiver) {
        this.store = store; this.sender = sender; this.receiver = receiver;
    }
    @Scheduled(fixedDelay=2000) void dispatch() {
        store.expire();
        for (var row : store.outgoing()) {
            try {
                String body = (String) row.get("payload");
                String correlation = new ObjectMapper().readTree(body).get("correlationId").asText();
                sender.sendMessage(new ServiceBusMessage(body).setMessageId(row.get("id").toString())
                        .setCorrelationId(correlation).setContentType("application/json").setTimeToLive(Duration.ofMinutes(8)));
                store.sent((UUID) row.get("id"));
            } catch (Exception error) {
                LOG.warn("Request {} remains in outbox; check Service Bus/RBAC. Failure type={}", row.get("id"), error.getClass().getSimpleName());
                break;
            }
        }
    }
    @Scheduled(fixedDelay=1000) void consumeReplies() {
        try {
            for (var message : receiver.receiveMessages(10, Duration.ofSeconds(1))) {
                try {
                    store.applyReply(message.getBody().toString(), message.getCorrelationId());
                    receiver.complete(message); // Commit to PG before acknowledgement.
                } catch (IllegalArgumentException error) {
                    receiver.deadLetter(message, new DeadLetterOptions().setDeadLetterReason("invalid_reply"));
                } catch (Exception error) { receiver.abandon(message); }
            }
        } catch (Exception error) {
            LOG.warn("Reply polling failed; check queue/RBAC. Failure type={}", error.getClass().getSimpleName());
        }
    }
}
