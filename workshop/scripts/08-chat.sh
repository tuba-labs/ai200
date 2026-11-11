#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
python3 "$WORKSHOP_DIR/tools/render_manifests.py" chat | kubectl apply -f -
# First verify a single worker before KEDA takes over. This is not the final
# scaling configuration; Products itself always stays at one or more replicas.
kubectl scale deployment/products-chat -n products --replicas=1
kubectl rollout status deployment/products-chat -n products --timeout=300s
kubectl logs -n products deployment/products-chat --tail=10
echo 'Ask a question through Products. Then continue to stage 09 for scale-to-zero.'
