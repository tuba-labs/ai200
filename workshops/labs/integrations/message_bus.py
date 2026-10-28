"""Service Bus data-plane operations using the signed-in user's identity."""
# Velg kø-, topic-, subscription- eller DLQ-operasjon.
import argparse
# Les Service Bus-navnet fra miljøet.
import os

# Bruk Entra-identitet, for eksempel den innloggede Azure CLI-brukeren.
from azure.identity import DefaultAzureCredential
# Hent klienten, meldingstypen og valget for dead-letter-køen.
from azure.servicebus import ServiceBusClient, ServiceBusMessage, ServiceBusSubQueue


# Kjør én operasjon mot labnamespace-et.
def main():
    # Opprett kommandolinjeparseren.
    parser = argparse.ArgumentParser()
    # Begrens operasjonene til dem som brukes i øvelsene.
    parser.add_argument("mode", choices=["send", "receive", "dlq", "topic", "subscription"])
    # Velg mottakende subscription; indexer er standard.
    parser.add_argument("--subscription", default="indexer")
    # Les valgene fra terminalen.
    args = parser.parse_args()
    # Opprett identitet og klient, og lukk dem etter operasjonen.
    with DefaultAzureCredential() as credential, ServiceBusClient(
            # Bruk namespace-adressen uten å lagre en tilkoblingsnøkkel i filen.
            fully_qualified_namespace=os.environ["SERVICEBUS_NAMESPACE"], credential=credential) as client:
        # Disse operasjonene sender én ny melding.
        if args.mode in {"send", "topic"}:
            # Send til topic-et når topic-operasjonen er valgt.
            sender = (client.get_topic_sender("document-events") if args.mode == "topic"
                      # Ellers sendes meldingen til documents-køen.
                      else client.get_queue_sender("documents"))
            # Åpne senderen for denne sendingen.
            with sender:
                # Bruk en liten JSON-body som nyttelast.
                sender.send_messages(ServiceBusMessage('{"id":"doc-001"}',
                                                       # Legg til subject og en egenskap som subscription-filtre kan bruke.
                                                       subject="document", application_properties={"kind": "note"}))
            # Bekreft at SDK-sendingen er fullført.
            print("Sent")
        # De øvrige operasjonene mottar meldinger.
        else:
            # En topic-mottaker leser fra en bestemt subscription.
            if args.mode == "subscription":
                # Velg indexer eller audit på document-events-topic-et.
                receiver = client.get_subscription_receiver("document-events", args.subscription)
            # Køøvelsen leser enten vanlig kø eller dens DLQ.
            else:
                # Opprett mottakeren for documents-køen.
                receiver = client.get_queue_receiver("documents", sub_queue=(
                    # Velg dead-letter-underkøen bare i dlq-modus.
                    ServiceBusSubQueue.DEAD_LETTER if args.mode == "dlq" else None))
            # Åpne mottakeren og lukk den etter bruk.
            with receiver:
                # Hent høyst ti meldinger og begrens ventingen til fem sekunder.
                messages = receiver.receive_messages(max_message_count=10, max_wait_time=5)
                # Vis hvor mange meldinger som ble hentet.
                print("Received:", len(messages))
                # Behandle hver mottatt melding.
                for message in messages:
                    # Vis body og antall leveringsforsøk.
                    print(str(message), "Delivery:", message.delivery_count)
                    # Fremprovoser DLQ-flyten i den vanlige køøvelsen.
                    if args.mode == "receive":
                        # Flytt meldingen til DLQ med en årsak du kan inspisere.
                        receiver.dead_letter_message(message, reason="Workshop", error_description="Controlled demo")
                    # Fullfør meldinger i DLQ- og subscription-øvelsene.
                    else:
                        # Bekreft behandling og fjern meldingen fra denne mottakerkøen.
                        receiver.complete_message(message)


# Start bare når filen kjøres direkte.
if __name__ == "__main__":
    # Kjør valgt Service Bus-operasjon.
    main()
