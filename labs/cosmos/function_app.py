"""The Cosmos DB trigger uses the change feed processor and checkpoints in leases."""
# Send meldinger til Functions-hostens logg.
import logging
# Hent FunctionApp og dokumenttypene for Python-bindingene.
import azure.functions as func

# Opprett appen som Functions-hosten oppdager.
app = func.FunctionApp()


# Send endrede dokumenter til documents-argumentet.
# Databasenavnet hentes fra appinnstillingen COSMOS_DATABASE.
@app.cosmos_db_trigger(arg_name="documents", database_name="%COSMOS_DATABASE%",
                      # Overvåk notes med tilkoblingen fra CosmosConnection-innstillingen.
                      container_name="notes", connection="CosmosConnection",
                      # Lagre fremdrift i leases; opprett lease-containeren hvis den mangler.
                      lease_container_name="leases", create_lease_container_if_not_exists=True)
# En triggerkjøring kan inneholde en samling endrede dokumenter.
def changed(documents: func.DocumentList):
    # Behandle hvert dokument i leveransen.
    for document in documents:
        # Logg ID og revisjon slik at du kan sammenligne med oppdateringsskriptet.
        logging.info("changed id=%s revision=%s", document["id"], document.get("revision", 0))
