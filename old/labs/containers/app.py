"""Small, deliberately local workshop API; no external Python dependencies."""
# Gjør Python-data om til JSON i HTTP-svaret.
import json
# Les appkonfigurasjon fra miljøvariabler i containeren.
import os
# Bruk en liten HTTP-server og en handler for hver forespørsel.
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
# Skill URL-stien fra eventuelle spørringsparametere.
from urllib.parse import urlsplit


# Samle behandlingen av HTTP-forespørsler i en handlerklasse.
class Handler(BaseHTTPRequestHandler):
    # HTTP-serveren kaller denne metoden for GET-forespørsler.
    def do_GET(self):
        # Hent bare stien, for eksempel /health.
        path = urlsplit(self.path).path
        # Helsesjekken gir 200; alle andre stier gir 404.
        status = 200 if path == "/health" else 404
        # Vis versjonen fra miljøet, med v1 som standard.
        payload = {"status": "ok", "version": os.getenv("APP_VERSION", "v1"),
                   # Vis konfigurasjonen uten at vi trenger å bygge et nytt image.
                   "mode": os.getenv("WORKSHOP_MODE", "practice"),
                   # Vis bare om en hemmelighet finnes. Selve verdien sendes aldri til klienten.
                   # For andre stier brukes en enkel feilmelding i stedet.
                   "secret_configured": bool(os.getenv("DEMO_SECRET"))} if status == 200 else {"error": "not found"}
        # Serialiser JSON og kod teksten som byte til nettverksforbindelsen.
        body = json.dumps(payload).encode("utf-8")
        # Start HTTP-svaret med statuskoden.
        self.send_response(status)
        # Fortell klienten at innholdet er JSON i UTF-8.
        self.send_header("Content-Type", "application/json; charset=utf-8")
        # Oppgi lengden på svaret i byte.
        self.send_header("Content-Length", str(len(body)))
        # Avslutt headerne før selve innholdet sendes.
        self.end_headers()
        # Skriv JSON-innholdet til HTTP-svaret.
        self.wfile.write(body)


# Start serveren bare når filen kjøres som et program.
if __name__ == "__main__":
    # Skriv en oppstartsmelding direkte til containerloggen.
    print("Workshop API listening on port 8080", flush=True)
    # Lytt på port 8080 på alle containerens nettverksgrensesnitt.
    ThreadingHTTPServer(("0.0.0.0", 8080), Handler).serve_forever()
