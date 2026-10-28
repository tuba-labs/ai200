"""Publish custom Event Grid events to a dedicated workshop topic."""
# Les topic-endpoint og labnøkkel fra miljøet.
import os
# Pakk inn Event Grid-nøkkelen i SDK-ets credential-type.
from azure.core.credentials import AzureKeyCredential
# Bruk Event Grid Schema-hendelser og publisher-klienten.
from azure.eventgrid import EventGridEvent, EventGridPublisherClient


# Publiser to hendelser for å teste abonnementets filter.
def main():
    # Koble publisher-klienten til ditt eget labtopic.
    client = EventGridPublisherClient(os.environ["EVENTGRID_ENDPOINT"],
                                     # Les tilgangen fra terminalen; ingen nøkkel lagres i kodefilen.
                                     AzureKeyCredential(os.environ["EVENTGRID_KEY"]))
    # Lukk nettverksklienten etter sendingen.
    with client:
        # Første hendelse har subject som matcher documents/ og .txt-filteret.
        client.send([EventGridEvent(subject="documents/note.txt", event_type="AI200.DocumentCreated",
                                    # Versjoner nyttelastskjemaet og send en liten dokument-ID.
                                    data_version="1.0", data={"id": "doc-001"}),
                     # Andre hendelse har samme type, men en annen filendelse.
                     EventGridEvent(subject="documents/note.csv", event_type="AI200.DocumentCreated",
                                    # Send begge i samme operasjon; abonnementet velger hvilke som leveres.
                                    data_version="1.0", data={"id": "doc-002"})])
    # Sammenlign bekreftelsen med hendelsene i webhook-loggen.
    print("Published two events; the .txt subject filter should deliver only the first")


# Start bare når filen kjøres direkte.
if __name__ == "__main__":
    # Send labhendelsene.
    main()
