"""Explicit Service Bus settlement; peek and DLQ inspection do not remove messages."""
# Velg en avgrenset operasjon på en labkø.
import argparse
# Les namespace fra terminalen.
import os


# Kjør én melding gjennom en synlig tilstandsendring.
def main():
    # Beskriv kommandolinjen.
    parser = argparse.ArgumentParser()
    # DLQ og peek skal bare inspisere.
    parser.add_argument("mode", choices=["send", "peek", "receive", "dlq"])
    # Bruk en egen labkø, med mulighet for session-kø i tillegg.
    parser.add_argument("--queue", default="documents")
    # Stabil id gjør det mulig å følge meldingen i notatene.
    parser.add_argument("--id", default="workshop-message")
    # Angi en session bare for en session-aktivert kø.
    parser.add_argument("--session")
    # Velg hvordan en faktisk mottatt melding gjøres opp.
    parser.add_argument("--settle", choices=["complete", "abandon", "defer", "dead-letter"], default="complete")
    # Deferred meldinger hentes eksplisitt med dette sekvensnummeret.
    parser.add_argument("--sequence", type=int)
    # Les valgene før nettverk brukes.
    args = parser.parse_args()
    # Bruk Entra-credential og Service Bus sine dataplanklienter.
    from azure.identity import DefaultAzureCredential
    # Hent riktig message- og subqueue-type.
    from azure.servicebus import ServiceBusClient, ServiceBusMessage, ServiceBusSubQueue
    # Lukk nettverksklient og credential etter den valgte operasjonen.
    with DefaultAzureCredential() as credential, ServiceBusClient(os.environ["SERVICEBUS_NAMESPACE"], credential) as client:
        # Sending oppretter en melding, ikke en mottakerlås.
        if args.mode == "send":
            # Velg køen fra kommandolinjen.
            with client.get_queue_sender(args.queue) as sender:
                # Bruk bare ufarlig undervisningsinnhold.
                sender.send_messages(ServiceBusMessage("Workshop payload", message_id=args.id, session_id=args.session))
            # Bekreft meldings-ID-en.
            print("Sent", args.id)
            # Avslutt etter sending.
            return
        # Legg bare på session-valget når det er oppgitt.
        options = {"session_id": args.session} if args.session else {}
        # Velg DLQ for inspeksjon uten å tømme den.
        if args.mode == "dlq":
            # Dette er køens innebygde dead-letter-underkø.
            options["sub_queue"] = ServiceBusSubQueue.DEAD_LETTER
        # Opprett en mottaker i den valgte køen.
        with client.get_queue_receiver(args.queue, max_wait_time=5, **options) as receiver:
            # Peek gir inspeksjon uten settlement.
            if args.mode in {"peek", "dlq"}:
                # Hent bare noen få metadataobjekter.
                messages = receiver.peek_messages(max_message_count=10)
            # En deferred melding ligger utenfor vanlig mottaksflyt.
            elif args.sequence is not None:
                # Hent akkurat det noterte sekvensnummeret.
                messages = receiver.receive_deferred_messages(sequence_numbers=[args.sequence])
            # Vanlig mottak tar én melding med PeekLock.
            else:
                # Avgrens forsøket så hvert resultat er lett å følge.
                messages = receiver.receive_messages(max_message_count=1, max_wait_time=5)
            # Vis hvilke meldinger operasjonen faktisk fant.
            for message in messages:
                # Logg bare lab-ID og leveringsmetadata.
                print("id=", message.message_id, "sequence=", message.sequence_number,
                      # DLQ-årsak er nyttig ved inspeksjon.
                      "delivery=", message.delivery_count, "reason=", message.dead_letter_reason)
                # Peek-objekter skal ikke fullføres eller endres.
                if args.mode in {"peek", "dlq"}:
                    # Fortsett uten settlement.
                    continue
                # Fullfør en vellykket behandlet melding.
                if args.settle == "complete":
                    # Fjern meldingen fra mottakskøen.
                    receiver.complete_message(message)
                # Returner en låst melding til leveringsflyten.
                elif args.settle == "abandon":
                    # Den kan mottas på nytt.
                    receiver.abandon_message(message)
                # Sett meldingen til side med sekvensnummeret bevart.
                elif args.settle == "defer":
                    # Neste vanlige mottak hopper over den.
                    receiver.defer_message(message)
                # Flytt en kontrollert feil til DLQ med synlig årsak.
                else:
                    # Dette er en labhandling, ikke standardfeilhåndtering for alle feil.
                    receiver.dead_letter_message(message, reason="Workshop", error_description="Controlled settlement experiment")


# Unngå Azure-kall når modulen importeres.
if __name__ == "__main__":
    # Kjør valgt meldingstilstandsovergang.
    main()
