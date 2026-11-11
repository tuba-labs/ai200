#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
mode=${1:-start}
case "$mode" in
  start)
    kubectl set env deployment/products-chat -n products DEMO_DELAY_SECONDS=20
    kubectl patch scaledobject products-chat -n products --type merge \
      -p '{"spec":{"triggers":[{"type":"azure-servicebus","metadata":{"namespace":"'"$STEM"'-bus","queueName":"chat-requests","messageCount":"2","activationMessageCount":"0"},"authenticationRef":{"name":"servicebus-identity"}}]}}'
    echo 'A clearly labeled 20-second delay is now enabled for NEW worker pods. Wait for idle scale-to-zero, then run the bounded load command in another terminal.'
    ;;
  threshold)
    value=${2:-4}
    [[ "$value" =~ ^[1-8]$ ]] || exit 1
    kubectl patch scaledobject products-chat -n products --type json \
      -p '[{"op":"replace","path":"/spec/triggers/0/metadata/messageCount","value":"'"$value"'"}]'
    echo "Threshold is now $value active messages per worker. Compare another bounded load."
    ;;
  stop)
    kubectl set env deployment/products-chat -n products DEMO_DELAY_SECONDS=0
    python3 "$WORKSHOP_DIR/tools/render_manifests.py" keda | kubectl apply -f -
    echo 'Demonstration delay disabled; normal threshold restored.'
    ;;
  *) echo 'Use start, threshold [1..8], or stop.' >&2; exit 1 ;;
esac
