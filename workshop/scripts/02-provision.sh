#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
[[ -f "$STATE/models-ready.json" ]] || { echo 'Run the actual model probe in stage 01 first.' >&2; exit 1; }
[[ $(jq -r .endpoint "$STATE/models-ready.json") == "https://$STEM-ai.openai.azure.com" ]] || exit 1
python3 "$WORKSHOP_DIR/tools/parameters.py" foundation "$(operator_id)"
azx deployment group create -g "$GROUP" -n foundation --template-file "$WORKSHOP_DIR/infra/foundation.bicep" \
  --parameters "@$STATE/foundation.parameters.json" -o none
azx deployment group show -g "$GROUP" -n foundation --query properties.outputs -o json > "$STATE/foundation.outputs.json"
python3 "$WORKSHOP_DIR/tools/ensure_secrets.py"
# Both long operations are independent after the shared VNet exists.
python3 "$WORKSHOP_DIR/tools/parameters.py" database
trap 'rm -f -- "$STATE/database.parameters.json"' EXIT
azx deployment group create -g "$GROUP" -n database --template-file "$WORKSHOP_DIR/infra/database.bicep" \
  --parameters "@$STATE/database.parameters.json" --no-wait -o none
rm -f -- "$STATE/database.parameters.json"
python3 "$WORKSHOP_DIR/tools/parameters.py" compute
azx deployment group create -g "$GROUP" -n compute --template-file "$WORKSHOP_DIR/infra/compute.bicep" \
  --parameters "@$STATE/compute.parameters.json" --no-wait -o none
echo 'AKS/Functions and PostgreSQL are provisioning. Continue with the Docker chapter while they run.'
