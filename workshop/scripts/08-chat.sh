#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
python3 "$WORKSHOP_DIR/tools/render_manifests.py" chat | kubectl apply -f -
kubectl rollout status deployment/products-chat -n products --timeout=300s
kubectl logs -n products deployment/products-chat --tail=10
echo 'One chat worker is ready. Ask a question through Products, then run the final smoke test.'
