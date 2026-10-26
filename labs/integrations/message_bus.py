"""Service Bus data-plane operations using the signed-in user's identity."""
import argparse
import os

from azure.identity import DefaultAzureCredential
from azure.servicebus import ServiceBusClient, ServiceBusMessage, ServiceBusSubQueue


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["send", "receive", "dlq", "topic", "subscription"])
    parser.add_argument("--subscription", default="indexer")
    args = parser.parse_args()
    with DefaultAzureCredential() as credential, ServiceBusClient(
            fully_qualified_namespace=os.environ["SERVICEBUS_NAMESPACE"], credential=credential) as client:
        if args.mode in {"send", "topic"}:
            sender = (client.get_topic_sender("document-events") if args.mode == "topic"
                      else client.get_queue_sender("documents"))
            with sender:
                sender.send_messages(ServiceBusMessage('{"id":"doc-001"}',
                                                       subject="document", application_properties={"kind": "note"}))
            print("Sent")
        else:
            if args.mode == "subscription":
                receiver = client.get_subscription_receiver("document-events", args.subscription)
            else:
                receiver = client.get_queue_receiver("documents", sub_queue=(
                    ServiceBusSubQueue.DEAD_LETTER if args.mode == "dlq" else None))
            with receiver:
                messages = receiver.receive_messages(max_message_count=10, max_wait_time=5)
                print("Received:", len(messages))
                for message in messages:
                    print(str(message), "Delivery:", message.delivery_count)
                    if args.mode == "receive":
                        receiver.dead_letter_message(message, reason="Workshop", error_description="Controlled demo")
                    else:
                        receiver.complete_message(message)


if __name__ == "__main__":
    main()
