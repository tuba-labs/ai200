"""Local workshop API. In-memory deduplication is deliberately not production storage."""

import json
import logging
import os
import threading

import azure.functions as func

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)
processed = set()
processed_lock = threading.Lock()


@app.route(route="documents", methods=["POST"])
def documents(req: func.HttpRequest) -> func.HttpResponse:
    try:
        payload = req.get_json()
    except ValueError:
        return func.HttpResponse("Body must be JSON", status_code=400)
    if not isinstance(payload, dict):
        return func.HttpResponse("Body must be a JSON object", status_code=400)
    document_id = payload.get("id")
    if not isinstance(document_id, str) or not document_id.strip():
        return func.HttpResponse("id must be a non-empty string", status_code=400)
    with processed_lock:
        duplicate = document_id in processed
        processed.add(document_id)
    logging.info("document_received duplicate=%s", duplicate)
    return func.HttpResponse(
        json.dumps({"id": document_id, "processed": not duplicate}),
        mimetype="application/json",
    )


@app.route(route="configuration", methods=["GET"])
def configuration(req: func.HttpRequest) -> func.HttpResponse:
    secret = os.getenv("DEMO_SECRET", "")
    resolved = bool(secret) and not secret.startswith("@Microsoft.KeyVault(")
    return func.HttpResponse(
        json.dumps({"secret_configured": resolved}),
        mimetype="application/json",
    )


@app.route(route="event-hook", methods=["POST"], auth_level=func.AuthLevel.ANONYMOUS)
def event_hook(req: func.HttpRequest) -> func.HttpResponse:
    events = req.get_json()
    if not isinstance(events, list):
        return func.HttpResponse("Expected Event Grid Schema array", status_code=400)
    for event in events:
        if event.get("eventType") == "Microsoft.EventGrid.SubscriptionValidationEvent":
            return func.HttpResponse(json.dumps({"validationResponse": event["data"]["validationCode"]}),
                                     mimetype="application/json")
    if os.getenv("FAIL_EVENTS", "false").lower() == "true":
        logging.warning("Controlled Event Grid delivery failure")
        return func.HttpResponse("Retry this delivery", status_code=503)
    for event in events:
        logging.info("event id=%s subject=%s", event.get("id"), event.get("subject"))
    return func.HttpResponse("Accepted")
