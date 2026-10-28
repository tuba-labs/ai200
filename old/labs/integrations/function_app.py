"""Local workshop API. In-memory deduplication is deliberately not production storage."""

# Serialiser svarene som JSON.
import json
# Skriv hendelser og kontrollerte feil til Functions-loggen.
import logging
# Les appinnstillingene fra miljøet.
import os
# Beskytt det delte minnesettet mot samtidige forespørsler.
import threading

# Bruk Functions-dekoratorer og HTTP-typer.
import azure.functions as func

# Krev en Function-nøkkel på vanlige HTTP-ruter i Azure.
app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)
# Husk behandlede dokument-ID-er bare så lenge denne prosessen kjører.
processed = set()
# La kontroll og registrering av en ID skje samlet.
processed_lock = threading.Lock()


# Ta imot dokumenter på /api/documents.
@app.route(route="documents", methods=["POST"])
# Valider dokumentet og demonstrer håndtering av samme ID flere ganger.
def documents(req: func.HttpRequest) -> func.HttpResponse:
    # Forsøk å lese forespørselsinnholdet som JSON.
    try:
        # Konverter JSON-body til Python-data.
        payload = req.get_json()
    # Håndter innhold som ikke kan tolkes som JSON.
    except ValueError:
        # Svar med klientfeil for ugyldig JSON.
        return func.HttpResponse("Body must be JSON", status_code=400)
    # Krev et JSON-objekt, ikke for eksempel en liste.
    if not isinstance(payload, dict):
        # Forklar hvorfor datatypen ble avvist.
        return func.HttpResponse("Body must be a JSON object", status_code=400)
    # Hent dokument-ID-en som brukes til duplikatkontroll.
    document_id = payload.get("id")
    # Avvis manglende, tomme og ikke-tekstlige ID-er.
    if not isinstance(document_id, str) or not document_id.strip():
        # Send en tydelig valideringsfeil til klienten.
        return func.HttpResponse("id must be a non-empty string", status_code=400)
    # Unngå at to samtidige kall registrerer samme ID som ny.
    with processed_lock:
        # Kontroller om denne prosessen allerede har sett ID-en.
        duplicate = document_id in processed
        # Registrer ID-en før en annen tråd får tilgang.
        processed.add(document_id)
    # Gjør duplikathåndteringen synlig i loggen.
    logging.info("document_received duplicate=%s", duplicate)
    # Returner et JSON-svar til klienten.
    return func.HttpResponse(
        # Vis om dette kallet ble behandlet som nytt.
        json.dumps({"id": document_id, "processed": not duplicate}),
        # Angi riktig innholdstype for JSON-responsen.
        mimetype="application/json",
    )


# La Key Vault-øvelsen kontrollere om hemmeligheten ble levert til appen.
@app.route(route="configuration", methods=["GET"])
# Rapporter bare status for konfigurasjonen.
def configuration(req: func.HttpRequest) -> func.HttpResponse:
    # Les hemmeligheten som appinnstilling.
    secret = os.getenv("DEMO_SECRET", "")
    # Skill en faktisk verdi fra en Key Vault-referanse som ikke er løst.
    resolved = bool(secret) and not secret.startswith("@Microsoft.KeyVault(")
    # Returner et JSON-svar til klienten.
    return func.HttpResponse(
        # Send bare en boolsk status, aldri hemmelighetens verdi.
        json.dumps({"secret_configured": resolved}),
        # Angi riktig innholdstype for JSON-responsen.
        mimetype="application/json",
    )


# Gi labens Event Grid-webhook en HTTP-rute uten Function-nøkkel.
@app.route(route="event-hook", methods=["POST"], auth_level=func.AuthLevel.ANONYMOUS)
# Håndter valideringshendelser og vanlige Event Grid-hendelser.
def event_hook(req: func.HttpRequest) -> func.HttpResponse:
    # Les hendelseslisten i Event Grid Schema-format.
    events = req.get_json()
    # Krev en liste slik dette hendelsesskjemaet bruker.
    if not isinstance(events, list):
        # Avvis et annet meldingsformat.
        return func.HttpResponse("Expected Event Grid Schema array", status_code=400)
    # Gå gjennom hendelsene i leveransen.
    for event in events:
        # Gjenkjenn håndtrykket som validerer webhook-abonnementet.
        if event.get("eventType") == "Microsoft.EventGrid.SubscriptionValidationEvent":
            # Send valideringskoden tilbake i validationResponse.
            return func.HttpResponse(json.dumps({"validationResponse": event["data"]["validationCode"]}),
                                     # Svar med JSON slik valideringen forventer.
                                     mimetype="application/json")
    # Bruk en appinnstilling til å slå på en kontrollert leveringsfeil.
    if os.getenv("FAIL_EVENTS", "false").lower() == "true":
        # Gjør den fremprovoserte feilen synlig i loggen.
        logging.warning("Controlled Event Grid delivery failure")
        # Svar med 503 så Event Grid kan forsøke levering igjen.
        return func.HttpResponse("Retry this delivery", status_code=503)
    # Gå gjennom hendelsene i leveransen.
    for event in events:
        # Vis hvilke hendelser som kom gjennom abonnementets filter.
        logging.info("event id=%s subject=%s", event.get("id"), event.get("subject"))
    # Bekreft vellykket mottak med HTTP 200.
    return func.HttpResponse("Accepted")
