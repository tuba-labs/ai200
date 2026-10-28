"""HTTP -> Service Bus output binding -> Service Bus trigger."""
# Skriv behandlingsinformasjon til Functions-loggen.
import logging
# Bruk Functions-dekoratorer, HTTP-typer og bindingstyper.
import azure.functions as func

# Krev en Function-nøkkel på HTTP-rutene når appen kjører i Azure.
app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)


# Ta imot HTTP POST på /api/enqueue.
@app.route(route="enqueue", methods=["POST"])
# Koble message-outputen til documents-køen med den navngitte appinnstillingen.
@app.service_bus_queue_output(arg_name="message", queue_name="documents", connection="ServiceBusConnection")
# Motta HTTP-kallet og et output-objekt som Functions-hosten håndterer.
def enqueue(req: func.HttpRequest, message: func.Out[str]) -> func.HttpResponse:
    # Legg HTTP-body i output-bindingen; hosten står for sendingen.
    message.set(req.get_body().decode("utf-8"))
    # Svar at forespørselen er akseptert.
    return func.HttpResponse("Queued", status_code=202)


# Start denne funksjonen når en melding kan behandles fra documents-køen.
@app.service_bus_queue_trigger(arg_name="message", queue_name="documents", connection="ServiceBusConnection")
# Motta meldingen og metadataene fra triggeren.
def consume(message: func.ServiceBusMessage):
    # Les meldingsteksten som UTF-8.
    body = message.get_body().decode("utf-8")
    # Bruk en bestemt tekst til å fremprovosere behandlingsfeil.
    if "fail" in body.lower():
        # La feilen gå til hosten så ny levering og DLQ kan observeres.
        raise ValueError("Controlled failure for delivery-count and DLQ exercise")
    # Vis meldingens ID og antall leveringsforsøk ved vellykket behandling.
    logging.info("Consumed id=%s delivery=%s", message.message_id, message.delivery_count)
