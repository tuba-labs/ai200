#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
echo 'Bounded observation: up to 8 minutes; Ctrl+C stops only the observer.'
until=$((SECONDS+480))
while (( SECONDS < until )); do
  date -u '+%H:%M:%S UTC'
  kubectl get deployment products products-chat -n products
  azx servicebus queue show -g "$GROUP" --namespace-name "$STEM-bus" -n chat-requests \
    --query 'countDetails.{active:activeMessageCount,deadLetter:deadLetterMessageCount}' -o json
  sleep 10
done
