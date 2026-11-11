#!/usr/bin/env bash
# Shared safety, state and bounded readiness helpers. Never enable set -x.
set -Eeuo pipefail
if [[ $- == *x* ]]; then set +x; fi
umask 077
WORKSHOP_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
REPO_DIR=$(cd -- "$WORKSHOP_DIR/.." && pwd)
STATE="$WORKSHOP_DIR/.state"
[[ -f "$STATE/config.json" ]] || { echo 'Run python3 workshop/tools/bootstrap.py first.' >&2; exit 1; }
SUBSCRIPTION=$(jq -er .subscription "$STATE/config.json")
LOCATION=$(jq -er .location "$STATE/config.json")
STEM=$(jq -er .stem "$STATE/config.json")
GROUP=$(jq -er .group "$STATE/config.json")
WORKSHOP_ID=$(jq -er .workshopId "$STATE/config.json")
export WORKSHOP_DIR REPO_DIR STATE SUBSCRIPTION LOCATION STEM GROUP WORKSHOP_ID
# Isolate kubectl from the participant's normal cluster/context.
export KUBECONFIG="$STATE/kubeconfig"
export AZURE_CORE_COLLECT_TELEMETRY=no
trap 'printf "Stage failed at line %s. Fix the diagnostic above, then rerun this same stage. State: %s\n" "$LINENO" "$STATE" >&2' ERR
azx() { az "$@" --subscription "$SUBSCRIPTION" --only-show-errors; }
retry() {
  local attempts=$1 interval=$2; shift 2
  local attempt
  for ((attempt=1; attempt<=attempts; attempt++)); do
    if "$@"; then return 0; fi
    if (( attempt < attempts )); then
      printf 'Not ready (attempt %s/%s); retrying in %ss.\n' "$attempt" "$attempts" "$interval" >&2
      sleep "$interval"
    fi
  done
  echo 'Readiness/RBAC deadline exceeded. Check the failing resource and role scope before retrying.' >&2
  return 1
}
assert_group() {
  local owner
  owner=$(azx group show --name "$GROUP" --query 'tags."workshop-id"' -o tsv)
  [[ "$owner" == "$WORKSHOP_ID" ]] || { echo "Refusing to modify unowned group $GROUP" >&2; return 1; }
}
operator_id() {
  # Decode the oid claim locally. Never print, persist or pass the bearer token
  # as a command-line argument. This also works for service principals.
  azx account get-access-token --resource https://management.azure.com/ -o json |
    python3 -c 'import sys,json,base64; token=json.load(sys.stdin)["accessToken"].split(".")[1]; print(json.loads(base64.urlsafe_b64decode(token+"="*(-len(token)%4)))["oid"])'
}
assign_role() {
  local object_id=$1 role=$2 scope=$3
  local name
  name=$(python3 -c 'import sys,uuid; print(uuid.uuid5(uuid.NAMESPACE_URL,"|".join(sys.argv[1:])))' "$object_id" "$role" "$scope")
  retry 24 5 azx role assignment create --name "$name" --assignee-object-id "$object_id" \
    --assignee-principal-type ServicePrincipal --role "$role" --scope "$scope" -o none
}
wait_deployment() {
  local name=$1 status until=$((SECONDS+2400))
  while (( SECONDS < until )); do
    status=$(azx deployment group show -g "$GROUP" -n "$name" --query properties.provisioningState -o tsv)
    case "$status" in
      Succeeded) echo "$name ready"; return 0 ;;
      Failed|Canceled)
        azx deployment operation group list -g "$GROUP" -n "$name" --query "[?properties.provisioningState=='Failed'].properties.statusMessage" -o json >&2
        return 1 ;;
    esac
    printf '%s: %s (bounded readiness check)\n' "$name" "$status"
    sleep 10
  done
  echo "Timed out waiting for $name; inspect az deployment group show -g $GROUP -n $name" >&2
  return 1
}
