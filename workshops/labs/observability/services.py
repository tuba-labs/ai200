"""Two separate HTTP services with explicit W3C context propagation and metrics."""
# Velg frontend eller backend og eventuelle lokale porter.
import argparse
# Bygg HTTP-responsen med trace-ID som JSON.
import json
# Skriv rolle, trace-ID og status til konsollen.
import logging
# Les Azure Monitor-tilkoblingen fra miljøet.
import os
# Mål svartid og lag en kontrollert forsinkelse.
import time
# Importer HTTP-feiltypene som hører til nettverksklienten.
import urllib.error
# La frontend gjøre et faktisk HTTP-kall til backend.
import urllib.request
# Kjør to små HTTP-servere i separate prosesser.
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
# Les delay og fail fra URL-ens spørringsparametere.
from urllib.parse import parse_qs, urlsplit

# Hent API-ene for målinger, sporingskontekst og spans.
from opentelemetry import metrics, propagate, trace
# Konfigurer hvor målinger samles og eksporteres.
from opentelemetry.sdk.metrics import MeterProvider
# Eksporter aggregerte målinger med et fast intervall.
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader
# Gi telemetrien et tjenestenavn som skiller prosessene.
from opentelemetry.sdk.resources import Resource
# Konfigurer sporings-SDK-et.
from opentelemetry.sdk.trace import TracerProvider
# Velg købasert Azure-eksport eller direkte konsollutskrift.
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter, SimpleSpanProcessor
# Velg en eksplisitt sampler for det nye eksperimentet.
from opentelemetry.sdk.trace.sampling import ALWAYS_ON, ParentBased, TraceIdRatioBased
# Merk klient-/serverspans og feilstatus eksplisitt.
from opentelemetry.trace import SpanKind, Status, StatusCode


# Klargjør samme telemetrioppsett for hver av de to prosessene.
def setup(role, sampler_mode="all"):
    # Skill ai200-frontend fra ai200-backend i Azure og konsollen.
    resource = Resource.create({"service.name": "ai200-" + role})
    # Opprett sporingsleverandøren med tjenestens identitet.
    # En root-ratio kan brukes alene eller med barn som følger upstream-beslutningen.
    ratio = TraceIdRatioBased(0.1)
    # Standardvalget i denne laben er eksplisitt all, uavhengig av distro-standarder.
    sampler = ALWAYS_ON if sampler_mode == "all" else ParentBased(ratio) if sampler_mode == "parent-ratio" else ratio
    # Koble sampleren til leverandøren før spans opprettes.
    provider = TracerProvider(resource=resource, sampler=sampler)
    # Uten Azure-tilkobling opprettes ingen metrikkeksportør.
    readers = []
    # La miljøvariabelen velge om telemetrien skal sendes til Azure.
    connection = os.getenv("APPLICATIONINSIGHTS_CONNECTION_STRING")
    # Bruk Azure Monitor når en connection string er konfigurert.
    if connection:
        # Hent eksportørene for både målinger og spans.
        from azure.monitor.opentelemetry.exporter import AzureMonitorMetricExporter, AzureMonitorTraceExporter
        # Send spans i bakgrunnen i samlinger.
        provider.add_span_processor(BatchSpanProcessor(AzureMonitorTraceExporter(connection_string=connection)))
        # Koble en periodisk leser til måleeksportøren.
        readers.append(PeriodicExportingMetricReader(
            # Bruk samme Azure-ressurs og eksporter målinger hvert tiende sekund.
            AzureMonitorMetricExporter(connection_string=connection), export_interval_millis=10000))
    # Bruk konsollen når Azure-tilkoblingen mangler.
    else:
        # Skriv hver avsluttet span til konsollen for lokal inspeksjon.
        provider.add_span_processor(SimpleSpanProcessor(ConsoleSpanExporter()))
    # Gjør dette sporingsoppsettet aktivt i prosessen.
    trace.set_tracer_provider(provider)
    # La målingene bruke samme tjenestenavn som sporingen.
    meter_provider = MeterProvider(resource=resource, metric_readers=readers)
    # Gjør måleoppsettet aktivt i prosessen.
    metrics.set_meter_provider(meter_provider)
    # Behold leverandørene slik at de kan flushes ved avslutning.
    return provider, meter_provider


# Start én av tjenestene fra kommandolinjen.
def main():
    # Opprett kommandolinjeparseren.
    parser = argparse.ArgumentParser()
    # Velg hvilken tjeneste denne prosessen skal være.
    parser.add_argument("role", choices=["frontend", "backend"])
    # La observasjonsøvelsen velge samme sampler i begge prosesser.
    parser.add_argument("--sampler", choices=["all", "ratio", "parent-ratio"], default="all")
    # Tillat en annen lokal port, blant annet i testene.
    parser.add_argument("--port", type=int)
    # La frontend vite hvilken backend-adresse den skal kalle.
    parser.add_argument("--backend-url", default="http://127.0.0.1:8092/lookup")
    # Les rolle og nettverksvalg.
    args = parser.parse_args()
    # Vis INFO-meldinger som inneholder sporingsbevis.
    logging.basicConfig(level=logging.INFO)
    # Klargjør eksport før serveren tar imot kall.
    provider, meter_provider = setup(args.role, args.sampler)
    # Opprett traceren som lager labens spans.
    tracer = trace.get_tracer("ai200.network")
    # Opprett instrumentene for labens målinger.
    meter = metrics.get_meter("ai200.network")
    # Tell forespørsler per status.
    requests = meter.create_counter("workshop.requests")
    # Samle svartid i millisekunder.
    duration = meter.create_histogram("workshop.duration", unit="ms")

    # Definer hvordan denne tjenesten håndterer HTTP-kall.
    class Handler(BaseHTTPRequestHandler):
        # Behandle én GET-forespørsel.
        def do_GET(self):
            # Start målingen av hele forespørselen.
            started = time.perf_counter()
            # Skill URL-sti fra spørringsparametere.
            parsed = urlsplit(self.path)
            # Les parameterne som styrer forsinkelse og kontrollert feil.
            query = parse_qs(parsed.query)
            # Anta et vellykket kall frem til en feil oppstår.
            status = 200
            # Start en serverspan for den innkommende forespørselen.
            with tracer.start_as_current_span(args.role, kind=SpanKind.SERVER,
                                             # Les sporingskontekst fra HTTP-headerne så backend kan fortsette samme trace.
                                             context=propagate.extract({key.lower(): value for key, value in self.headers.items()})) as span:
                # La kontrollerte nettverks- og backend-feil gi HTTP 500.
                try:
                    # Frontend videresender arbeidet til en annen prosess.
                    if args.role == "frontend":
                        # Legg en klientspan under frontendens serverspan.
                        with tracer.start_as_current_span("call-backend", kind=SpanKind.CLIENT):
                            # Lag headerne som skal følge det utgående kallet.
                            headers = {}
                            # Legg aktiv trace-kontekst i headerne før HTTP-kallet.
                            propagate.inject(headers)
                            # Send de samme delay-/fail-parameterne videre.
                            url = args.backend_url + "?" + parsed.query
                            # Gjør et ekte nettverkskall med sporingsheaderne.
                            with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=10) as response:
                                # Les svaret ferdig før klientspannen avsluttes.
                                response.read()
                    # Backend utfører det simulerte oppslaget.
                    else:
                        # Avgrens den valgte forsinkelsen til mellom null og ett sekund.
                        time.sleep(min(max(float(query.get("delay", ["0.02"])[0]), 0), 1))
                        # Bruk fail=1 til å slå på en kjent feil.
                        if query.get("fail", ["0"])[0] == "1":
                            # La feilen bli synlig både i backend og i klientkallet fra frontend.
                            raise RuntimeError("Controlled backend failure")
                # Fang feilen for å sende et kontrollert HTTP-svar.
                except Exception as error:
                    # Merk HTTP-svaret som en serverfeil.
                    status = 500
                    # Legg unntaket inn som en hendelse på spannen.
                    span.record_exception(error)
                    # Merk spannen som mislykket.
                    span.set_status(Status(StatusCode.ERROR, str(error)))
                # Ta med HTTP-statusen som span-attributt.
                span.set_attribute("http.response.status_code", status)
                # Gjør tjenestens rolle synlig på spannen.
                span.set_attribute("workshop.role", args.role)
                # Formater trace-ID slik at du kan sammenligne den mellom prosessene.
                trace_id = format(span.get_span_context().trace_id, "032x")
                # Send rolle, trace-ID og resultat til klienten.
                body = json.dumps({"role": args.role, "trace_id": trace_id, "status": status}).encode()
                # Start HTTP-svaret med resultatstatusen.
                self.send_response(status)
                # Oppgi at innholdet er JSON.
                self.send_header("Content-Type", "application/json")
                # Oppgi svarlengden i byte.
                self.send_header("Content-Length", str(len(body)))
                # Avslutt headerne før body sendes.
                self.end_headers()
                # Skriv svarinnholdet til klienten.
                self.wfile.write(body)
                # Vis samme trace-ID i begge tjenestenes logger.
                logging.info("role=%s trace_id=%s status=%s", args.role, trace_id, status)
            # Skill målingene etter HTTP-status.
            attributes = {"status": str(status)}
            # Tell denne forespørselen.
            requests.add(1, attributes)
            # Registrer hele forespørselens varighet i millisekunder.
            duration.record((time.perf_counter() - started) * 1000, attributes)

    # Bruk forskjellige standardporter for de to prosessene.
    port = args.port or (8091 if args.role == "frontend" else 8092)
    # Lytt bare lokalt på maskinen.
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    # La tjenesten kjøre frem til den stoppes.
    try:
        # Ta imot og behandle HTTP-kall.
        server.serve_forever()
    # Håndter Ctrl+C som en vanlig avslutning.
    except KeyboardInterrupt:
        # Fortsett til oppryddingen under.
        pass
    # Lukk serveren og tøm eksportkøene også ved avbrudd.
    finally:
        # Frigi lytteporten.
        server.server_close()
        # Forsøk å sende gjenværende spans før prosessen avsluttes.
        provider.force_flush()
        # Forsøk å sende gjenværende målinger.
        meter_provider.force_flush()
        # Stopp sporingsleverandøren.
        provider.shutdown()
        # Stopp måleleverandøren.
        meter_provider.shutdown()


# Start bare når filen kjøres direkte.
if __name__ == "__main__":
    # Kjør tjenesten med valgt rolle.
    main()
