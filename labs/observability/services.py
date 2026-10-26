"""Two separate HTTP services with explicit W3C context propagation and metrics."""
import argparse
import json
import logging
import os
import time
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlsplit

from opentelemetry import metrics, propagate, trace
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter, SimpleSpanProcessor
from opentelemetry.trace import SpanKind, Status, StatusCode


def setup(role):
    resource = Resource.create({"service.name": "ai200-" + role})
    provider = TracerProvider(resource=resource)
    readers = []
    connection = os.getenv("APPLICATIONINSIGHTS_CONNECTION_STRING")
    if connection:
        from azure.monitor.opentelemetry.exporter import AzureMonitorMetricExporter, AzureMonitorTraceExporter
        provider.add_span_processor(BatchSpanProcessor(AzureMonitorTraceExporter(connection_string=connection)))
        readers.append(PeriodicExportingMetricReader(
            AzureMonitorMetricExporter(connection_string=connection), export_interval_millis=10000))
    else:
        provider.add_span_processor(SimpleSpanProcessor(ConsoleSpanExporter()))
    trace.set_tracer_provider(provider)
    meter_provider = MeterProvider(resource=resource, metric_readers=readers)
    metrics.set_meter_provider(meter_provider)
    return provider, meter_provider


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("role", choices=["frontend", "backend"])
    parser.add_argument("--port", type=int)
    parser.add_argument("--backend-url", default="http://127.0.0.1:8092/lookup")
    args = parser.parse_args()
    logging.basicConfig(level=logging.INFO)
    provider, meter_provider = setup(args.role)
    tracer = trace.get_tracer("ai200.network")
    meter = metrics.get_meter("ai200.network")
    requests = meter.create_counter("workshop.requests")
    duration = meter.create_histogram("workshop.duration", unit="ms")

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            started = time.perf_counter()
            parsed = urlsplit(self.path)
            query = parse_qs(parsed.query)
            status = 200
            with tracer.start_as_current_span(args.role, kind=SpanKind.SERVER,
                                             context=propagate.extract({key.lower(): value for key, value in self.headers.items()})) as span:
                try:
                    if args.role == "frontend":
                        with tracer.start_as_current_span("call-backend", kind=SpanKind.CLIENT):
                            headers = {}
                            propagate.inject(headers)
                            url = args.backend_url + "?" + parsed.query
                            with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=10) as response:
                                response.read()
                    else:
                        time.sleep(min(max(float(query.get("delay", ["0.02"])[0]), 0), 1))
                        if query.get("fail", ["0"])[0] == "1":
                            raise RuntimeError("Controlled backend failure")
                except Exception as error:
                    status = 500
                    span.record_exception(error)
                    span.set_status(Status(StatusCode.ERROR, str(error)))
                span.set_attribute("http.response.status_code", status)
                span.set_attribute("workshop.role", args.role)
                trace_id = format(span.get_span_context().trace_id, "032x")
                body = json.dumps({"role": args.role, "trace_id": trace_id, "status": status}).encode()
                self.send_response(status)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                logging.info("role=%s trace_id=%s status=%s", args.role, trace_id, status)
            attributes = {"status": str(status)}
            requests.add(1, attributes)
            duration.record((time.perf_counter() - started) * 1000, attributes)

    port = args.port or (8091 if args.role == "frontend" else 8092)
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
        provider.force_flush()
        meter_provider.force_flush()
        provider.shutdown()
        meter_provider.shutdown()


if __name__ == "__main__":
    main()
