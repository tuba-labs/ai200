"""Send ordered teaching events and receive using durable Blob checkpoints."""
# Velg operasjon og consumer group.
import argparse
# Lag en liten JSON-body for hver hendelse.
import json
# Les navn, endpoint og checkpoint-lager fra miljøet.
import os


# Bygg kun ufarlige og forutsigbare undervisningshendelser.
def teaching_events():
    # Bruk samme dokumentemne for alle fem hendelser.
    return [{"id": f"document-{number}", "topic": "containers", "revision": number} for number in range(1, 6)]


# Kjør den valgte nettverksoperasjonen.
def main():
    # Beskriv kommandolinjen før SDK-et lastes.
    parser = argparse.ArgumentParser()
    # Tillat sending eller mottak.
    parser.add_argument("mode", choices=["send", "receive"])
    # Egen gruppe holder leseposisjonen separat fra andre apper.
    parser.add_argument("--group", default="ai200-a")
    # Les valgene.
    args = parser.parse_args()
    # Bruk synkrone Event Hubs-klienter.
    from azure.eventhub import EventData, EventHubConsumerClient, EventHubProducerClient
    # Lagre fremdrift i et varig Blob-lager.
    from azure.eventhub.extensions.checkpointstoreblob import BlobCheckpointStore
    # Bruk lokal CLI-identitet eller støttet Azure-identitet.
    from azure.identity import DefaultAzureCredential
    # Del de ikke-hemmelige klientinnstillingene.
    settings = dict(fully_qualified_namespace=os.environ["EVENTHUB_NAMESPACE"], eventhub_name=os.environ["EVENTHUB_NAME"])
    # Lukk credential etter at operasjonen er ferdig.
    with DefaultAzureCredential() as credential:
        # Send fem hendelser i en batch til én valgt partisjon.
        if args.mode == "send":
            # Åpne produsenten.
            with EventHubProducerClient(credential=credential, **settings) as producer:
                # Samme partisjonsnøkkel holder relaterte hendelser sammen.
                batch = producer.create_batch(partition_key="containers")
                # Legg inn hendelsene i original rekkefølge.
                for item in teaching_events():
                    # SDK-et kontrollerer batchstørrelsen ved add.
                    batch.add(EventData(json.dumps(item)))
                # Send batchen til tjenesten.
                producer.send_batch(batch)
            # Bekreft sending uten å skrive tilkoblingsdata.
            print("Sent 5 events with partition key containers")
            # Avslutt senderoperasjonen.
            return
        # Opprett varig eierskaps- og checkpoint-lager for konsumentgruppen.
        store = BlobCheckpointStore(blob_account_url=os.environ["CHECKPOINT_ACCOUNT_URL"],
                                    # Bruk en labcontainer som allerede er opprettet.
                                    container_name=os.getenv("CHECKPOINT_CONTAINER", "checkpoints"), credential=credential)
        # Kall handleren etter mottak av en hendelse.
        def on_event(context, event):
            # max_wait_time kan gi en tom callback; den skal ikke checkpointes.
            if event is None:
                # Vent videre på faktisk data.
                return
            # Vis rekkefølge innen partisjonen og den ufarlige testbodyen.
            print(context.partition_id, event.sequence_number, event.body_as_str(), flush=True)
            # Bekreft bare etter at denne enkle handleren er ferdig; per-event er valgt for synlighet.
            context.update_checkpoint(event)
        # Åpne en konsument som deler eierskap bare innen valgt gruppe.
        with EventHubConsumerClient(consumer_group=args.group, checkpoint_store=store, credential=credential, **settings) as consumer:
            # La Ctrl+C være den eksplisitte avslutningen i terminaløvelsen.
            try:
                # Begynn ved tilgjengelig start bare når gruppen ikke allerede har et checkpoint.
                consumer.receive(on_event=on_event, starting_position="-1", max_wait_time=5)
            # Avslutt normalt og la with-blokken lukke klienten.
            except KeyboardInterrupt:
                # Bekreft at deltakeren stoppet mottaket.
                print("Stopped; processed events have checkpoints")


# Ingen Azure-operasjon skjer ved import.
if __name__ == "__main__":
    # Kjør den valgte senderen eller mottakeren.
    main()
