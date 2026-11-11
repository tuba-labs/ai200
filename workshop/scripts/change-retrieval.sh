#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
value=${1:-1}
[[ "$value" =~ ^[1-8]$ ]] || { echo 'Use a retrieval count from 1 to 8.' >&2; exit 1; }
azx appconfig kv set --name "$STEM-cfg" --auth-mode login --key rag:retrieval-count --label workshop --value "$value" --yes -o none
# Settings are read ON STARTUP, not refreshed automatically.
# Changing a pod-template annotation causes any existing pods to restart and
# ensures the replacement worker reads the new value.
kubectl rollout restart deployment/products-chat -n products
echo "Retrieval count set to $value. New workers will report retrieval_count=$value in startup logs. Ask a NEW question; existing cached results do not change."
