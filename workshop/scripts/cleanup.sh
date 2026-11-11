#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
echo "Subscription: $SUBSCRIPTION"
echo "ONLY workshop resource group: $GROUP"
azx resource list -g "$GROUP" --query '[].{Name:name,Type:type}' -o table
node_group=$(azx aks show -g "$GROUP" -n "$STEM-aks" --query nodeResourceGroup -o tsv 2>/dev/null || true)
echo "AKS will also remove its managed node resource group: ${node_group:-not created}"
echo 'This removes workshop data and model deployments. Key Vault (7 days) and App Configuration (1 day) may remain soft-deleted; no automatic purge is performed.'
read -r -p "Type DELETE $GROUP to continue: " confirmation
[[ "$confirmation" == "DELETE $GROUP" ]] || { echo 'Canceled.'; exit 1; }
azx group delete --name "$GROUP" --yes --no-wait
echo "Deletion requested. Verify: az group exists --subscription $SUBSCRIPTION --name $GROUP"
echo 'Keep .state until Azure confirms deletion. Remove its local certificate/private key and kubeconfig afterward; they are not needed for the documentation website.'
