#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
for deployment in models foundation database compute; do
  state=$(azx deployment group show -g "$GROUP" -n "$deployment" --query properties.provisioningState -o tsv)
  printf '%s ARM deployment: %s\n' "$deployment" "$state"
  [[ "$state" == Succeeded ]] || exit 1
done
kubectl get nodes
kubectl rollout status deployment/products -n products --timeout=120s
kubectl get deployment,pods,service -n products
kubectl rollout status deployment/products-chat -n products --timeout=120s
[[ $(kubectl get deployment products-chat -n products -o jsonpath='{.spec.replicas}') == 1 ]] || { echo 'Expected one chat worker replica.' >&2; exit 1; }
azx postgres flexible-server show -g "$GROUP" -n "$STEM-pg" --query '{state:state,host:fullyQualifiedDomainName}' -o json
azx functionapp function list -g "$GROUP" -n "$STEM-embedder" --query '[].name' -o tsv
function_count=$(azx functionapp function list -g "$GROUP" -n "$STEM-embedder" --query "length([?contains(name,'IndexManual')])" -o tsv)
[[ "$function_count" -ge 1 ]] || { echo 'Function IndexManual was not discovered. Check remote build and host storage identity.' >&2; exit 1; }
azx eventgrid system-topic event-subscription show -g "$GROUP" --system-topic-name "$STEM-events" -n manual-created \
  --query '{state:provisioningState,filter:filter}' -o json
for queue in chat-requests chat-replies; do
  azx servicebus queue show -g "$GROUP" --namespace-name "$STEM-bus" -n "$queue" \
    --query '{queue:name,counts:countDetails,lock:lockDuration,maxDeliveries:maxDeliveryCount}' -o json
done
if [[ ${1:-} != --check ]]; then
  kubectl get events -n products --sort-by=.lastTimestamp
  kubectl logs deployment/products -n products --tail=40
  kubectl logs -n products deployment/products-chat --tail=40
  echo 'Function runtime logs: Application Insights → Logs, then run the query linked in the troubleshooting chapter.'
fi
