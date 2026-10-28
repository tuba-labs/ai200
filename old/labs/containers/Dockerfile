# Bruk et ferdig Linux-image med Python 3.12.
# slim-varianten har færre forhåndsinstallerte pakker enn standardimaget.
FROM python:3.12-slim

# Sett /app som arbeidsmappe i imaget. Mappen opprettes hvis den mangler.
WORKDIR /app

# Kopier app.py fra byggkonteksten til /app/app.py i imaget.
COPY app.py .

# Opprett brukeren appuser med UID 10001 under byggingen, uten hjemmemappe.
RUN useradd --uid 10001 --no-create-home appuser

# Kjør påfølgende instruksjoner og appens startkommando som UID 10001.
# Appen kjører dermed uten root-rettigheter.
USER 10001

# Dokumenter at appen lytter på TCP-port 8080 inne i containeren.
# Bruk docker run --publish for å gjøre porten tilgjengelig på verten.
EXPOSE 8080

# Start app.py med Python når containeren starter.
# -u slår av bufring av stdout/stderr, slik at loggene kommer fortløpende.
# Listeformen starter Python direkte, uten et mellomliggende shell.
CMD ["python", "-u", "app.py"]
