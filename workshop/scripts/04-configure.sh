#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
[[ -f "$STATE/compute.outputs.json" ]] || { echo 'Run stage 03 readiness first.' >&2; exit 1; }
SCOPE="/subscriptions/$SUBSCRIPTION/resourceGroups/$GROUP"
identity_value() { jq -er --arg name "$1" --arg key "$2" '.identities.value[]|select(.name==$name)|.[$key]' "$STATE/foundation.outputs.json"; }
for workload in products embedder chat; do
  object_id=$(identity_value "$workload" principalId)
  assign_role "$object_id" 'Key Vault Secrets User' "$SCOPE/providers/Microsoft.KeyVault/vaults/$STEM-kv"
  assign_role "$object_id" 'App Configuration Data Reader' "$SCOPE/providers/Microsoft.AppConfiguration/configurationStores/$STEM-cfg"
done
for workload in embedder chat; do
  assign_role "$(identity_value "$workload" principalId)" 'Cognitive Services OpenAI User' "$SCOPE/providers/Microsoft.CognitiveServices/accounts/$STEM-ai"
done
assign_role "$(identity_value products principalId)" 'Storage Blob Data Contributor' "$SCOPE/providers/Microsoft.Storage/storageAccounts/${STEM}st/blobServices/default/containers/manuals"
for binding in 'products Sender chat-requests' 'products Receiver chat-replies' 'chat Receiver chat-requests' 'chat Sender chat-replies'; do
  read -r workload permission queue <<< "$binding"
  assign_role "$(identity_value "$workload" principalId)" "Azure Service Bus Data $permission" "$SCOPE/providers/Microsoft.ServiceBus/namespaces/$STEM-bus/queues/$queue"
done
assign_role "$(identity_value keda principalId)" 'Azure Service Bus Data Receiver' "$SCOPE/providers/Microsoft.ServiceBus/namespaces/$STEM-bus"
assign_role "$(jq -r .kubeletObjectId.value "$STATE/compute.outputs.json")" AcrPull "$SCOPE/providers/Microsoft.ContainerRegistry/registries/${STEM}acr"
issuer=$(jq -er .issuer.value "$STATE/compute.outputs.json")
for workload in products chat keda; do
  subject="system:serviceaccount:products:$workload"
  [[ "$workload" != keda ]] || subject='system:serviceaccount:kube-system:keda-operator'
  azx identity federated-credential create -g "$GROUP" --identity-name "$STEM-$workload" --name workshop \
    --issuer "$issuer" --subject "$subject" --audiences api://AzureADTokenExchange -o none
done
# KEDA authenticates independently of the worker pod.
kubectl annotate serviceaccount keda-operator -n kube-system \
  "azure.workload.identity/client-id=$(identity_value keda clientId)" --overwrite
kubectl patch deployment keda-operator -n kube-system --type merge \
  -p '{"spec":{"template":{"metadata":{"labels":{"azure.workload.identity/use":"true"}}}}}'
kubectl rollout restart deployment/keda-operator -n kube-system
kubectl rollout status deployment/keda-operator -n kube-system --timeout=180s
retry 36 5 python3 "$WORKSHOP_DIR/tools/configure_settings.py"
echo 'Roles, federated credentials, ACR pull permission and ordinary settings are configured.'
