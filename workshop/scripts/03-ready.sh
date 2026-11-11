#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
wait_deployment database
wait_deployment compute
azx deployment group show -g "$GROUP" -n compute --query properties.outputs -o json > "$STATE/compute.outputs.json"
azx deployment group show -g "$GROUP" -n database --query properties.outputs -o json > "$STATE/database.outputs.json"
azx aks get-credentials -g "$GROUP" -n "$STEM-aks" --file "$KUBECONFIG" --overwrite-existing -o none
kubectl wait --for=condition=Ready nodes --all --timeout=300s
kubectl get nodes -o wide
azx postgres flexible-server parameter show -g "$GROUP" -s "$STEM-pg" -n azure.extensions --query value -o tsv
echo 'Expected: Ready node, and VECTOR in azure.extensions. No PostgreSQL public firewall rule is required or created.'
