#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
python3 "$WORKSHOP_DIR/tools/preflight.py"
echo "Model access gate: creates PAID resources in $SUBSCRIPTION / $GROUP / $LOCATION."
if [[ $(azx group exists -n "$GROUP" -o tsv) == true ]]; then
  assert_group
else
  read -r -p "Type $GROUP to create this workshop resource group: " confirmation
  [[ "$confirmation" == "$GROUP" ]] || exit 1
  azx group create -n "$GROUP" -l "$LOCATION" --tags "workshop-id=$WORKSHOP_ID" -o none
fi
python3 "$WORKSHOP_DIR/tools/parameters.py" models "$(operator_id)"
azx deployment group create -g "$GROUP" -n models --template-file "$WORKSHOP_DIR/infra/models.bicep" \
  --parameters "@$STATE/models.parameters.json" -o none
python3 "$WORKSHOP_DIR/tools/model_probe.py"
echo 'Both Azure model probes passed. You may now start AKS and database provisioning.'
