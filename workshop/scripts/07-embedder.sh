#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
python3 "$WORKSHOP_DIR/tools/package_function.py"
azx functionapp deployment source config-zip -g "$GROUP" -n "$STEM-embedder" \
  --src "$STATE/embedder.zip" --build-remote true -o none
storage_id="/subscriptions/$SUBSCRIPTION/resourceGroups/$GROUP/providers/Microsoft.Storage/storageAccounts/${STEM}st"
azx eventgrid system-topic create -g "$GROUP" -n "$STEM-events" -l "$LOCATION" \
  --source "$storage_id" --topic-type Microsoft.Storage.StorageAccounts --mi-system-assigned -o none
event_identity=$(azx eventgrid system-topic show -g "$GROUP" -n "$STEM-events" --query identity.principalId -o tsv)
assign_role "$event_identity" 'Storage Blob Data Contributor' "$storage_id/blobServices/default/containers/event-deadletters"
python3 "$WORKSHOP_DIR/tools/event_subscription.py"
echo 'Upload a NEW manual through Products now. Earlier BlobCreated events are not replayed automatically.'
