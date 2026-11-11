#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
kubectl wait --for=condition=Established crd/scaledobjects.keda.sh --timeout=120s
python3 "$WORKSHOP_DIR/tools/render_manifests.py" keda | kubectl apply -f -
kubectl wait --for=condition=Ready scaledobject/products-chat -n products --timeout=300s
kubectl get scaledobject,hpa,deployment -n products
echo 'With no queue backlog, expect zero chat workers after cooldown. Products remains at one replica.'
