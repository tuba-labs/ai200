#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
kubectl delete job inspect-data -n products --ignore-not-found --wait=true
python3 "$WORKSHOP_DIR/tools/render_manifests.py" inspect | kubectl apply -f -
kubectl wait --for=condition=Complete job/inspect-data -n products --timeout=180s
kubectl logs job/inspect-data -n products
