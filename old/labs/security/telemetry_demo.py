"""Three synthetic operations; real OpenTelemetry spans, no external service calls."""

import json
import os
import time

from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import ConsoleSpanExporter, SimpleSpanProcessor
from opentelemetry.trace import SpanKind, Status, StatusCode

if os.getenv("APPLICATIONINSIGHTS_CONNECTION_STRING"):
    # Optional Azure exercise: install azure-monitor-opentelemetry first.
    from azure.monitor.opentelemetry import configure_azure_monitor

    configure_azure_monitor(
        resource=Resource.create({"service.name": "ai200-workshop"})
    )
else:
    provider = TracerProvider(
        resource=Resource.create({"service.name": "ai200-workshop"})
    )
    provider.add_span_processor(SimpleSpanProcessor(ConsoleSpanExporter()))
    trace.set_tracer_provider(provider)

tracer = trace.get_tracer("ai200.workshop")
mode = os.getenv("WORKSHOP_MODE", "practice")

for document_id, delay, should_fail in [
    ("doc-001", 0.02, False),
    ("doc-002", 0.35, False),
    ("doc-003", 0.02, True),
]:
    with tracer.start_as_current_span("process-document", kind=SpanKind.SERVER) as request:
        request.set_attribute("workshop.mode", mode)
        request.set_attribute("document.id", document_id)
        started = time.perf_counter()
        try:
            with tracer.start_as_current_span("lookup", kind=SpanKind.CLIENT):
                time.sleep(delay)
                if should_fail:
                    raise RuntimeError("Synthetic lookup failure")
            success = True
        except RuntimeError as exc:
            success = False
            request.record_exception(exc)
            request.set_status(Status(StatusCode.ERROR, "Synthetic lookup failure"))
        context = request.get_span_context()
        print(json.dumps({
            "event": "document_processed",
            "document_id": document_id,
            "mode": mode,
            "success": success,
            "duration_ms": round((time.perf_counter() - started) * 1000, 1),
            "trace_id": format(context.trace_id, "032x"),
            "span_id": format(context.span_id, "016x"),
        }))

# Flush the optional Azure exporter before this short-lived program exits.
trace.get_tracer_provider().force_flush()
trace.get_tracer_provider().shutdown()
