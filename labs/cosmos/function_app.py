"""The Cosmos DB trigger uses the change feed processor and checkpoints in leases."""
import logging
import azure.functions as func

app = func.FunctionApp()


@app.cosmos_db_trigger(arg_name="documents", database_name="%COSMOS_DATABASE%",
                      container_name="notes", connection="CosmosConnection",
                      lease_container_name="leases", create_lease_container_if_not_exists=True)
def changed(documents: func.DocumentList):
    for document in documents:
        logging.info("changed id=%s revision=%s", document["id"], document.get("revision", 0))
