"""Publish custom Event Grid events to a dedicated workshop topic."""
import os
from azure.core.credentials import AzureKeyCredential
from azure.eventgrid import EventGridEvent, EventGridPublisherClient


def main():
    client = EventGridPublisherClient(os.environ["EVENTGRID_ENDPOINT"],
                                     AzureKeyCredential(os.environ["EVENTGRID_KEY"]))
    with client:
        client.send([EventGridEvent(subject="documents/note.txt", event_type="AI200.DocumentCreated",
                                    data_version="1.0", data={"id": "doc-001"}),
                     EventGridEvent(subject="documents/note.csv", event_type="AI200.DocumentCreated",
                                    data_version="1.0", data={"id": "doc-002"})])
    print("Published two events; the .txt subject filter should deliver only the first")


if __name__ == "__main__":
    main()
