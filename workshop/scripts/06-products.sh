#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
kubectl create namespace products --dry-run=client -o yaml | kubectl apply -f -
python3 "$WORKSHOP_DIR/tools/render_manifests.py" service | kubectl apply -f -
get_ip() {
  ip=$(kubectl get service products -n products -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
  [[ -n "$ip" ]]
}
retry 60 5 get_ip
if [[ ! -f "$STATE/tls.crt" ]] || ! openssl x509 -checkend 3600 -noout -in "$STATE/tls.crt" >/dev/null \
  || ! openssl x509 -checkip "$ip" -noout -in "$STATE/tls.crt" >/dev/null; then
  openssl req -x509 -newkey rsa:2048 -noenc -days 2 -subj '/CN=Products workshop' \
    -addext "subjectAltName=IP:$ip" -keyout "$STATE/tls.key" -out "$STATE/tls.crt" 2>/dev/null
fi
kubectl create secret tls products-tls -n products --cert="$STATE/tls.crt" --key="$STATE/tls.key" \
  --dry-run=client -o yaml | kubectl apply -f -
python3 "$WORKSHOP_DIR/tools/render_manifests.py" products | kubectl apply -f -
kubectl rollout restart deployment/products -n products
kubectl rollout status deployment/products -n products --timeout=600s
printf '%s\n' "https://$ip" > "$STATE/endpoint.txt"
curl --fail --silent --show-error --cacert "$STATE/tls.crt" "https://$ip/actuator/health/readiness"
printf '\nProducts endpoint: https://%s\n' "$ip"
openssl x509 -in "$STATE/tls.crt" -noout -fingerprint -sha256
echo 'Self-signed TLS: verify this fingerprint in the browser before accepting its warning. Username: participant.'
echo 'Retrieve your password deliberately: bash workshop/scripts/credentials.sh (never paste it into the documentation website).'
