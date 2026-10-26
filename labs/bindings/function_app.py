"""HTTP -> Service Bus output binding -> Service Bus trigger."""
import logging
import azure.functions as func

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)


@app.route(route="enqueue", methods=["POST"])
@app.service_bus_queue_output(arg_name="message", queue_name="documents", connection="ServiceBusConnection")
def enqueue(req: func.HttpRequest, message: func.Out[str]) -> func.HttpResponse:
    message.set(req.get_body().decode("utf-8"))
    return func.HttpResponse("Queued", status_code=202)


@app.service_bus_queue_trigger(arg_name="message", queue_name="documents", connection="ServiceBusConnection")
def consume(message: func.ServiceBusMessage):
    body = message.get_body().decode("utf-8")
    if "fail" in body.lower():
        raise ValueError("Controlled failure for delivery-count and DLQ exercise")
    logging.info("Consumed id=%s delivery=%s", message.message_id, message.delivery_count)
