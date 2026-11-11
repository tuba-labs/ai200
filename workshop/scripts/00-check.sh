#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
if [[ ${1:-} == --register ]]; then
  mapfile -t providers < <(python3 -c 'import sys; sys.path.insert(0,sys.argv[1]); from preflight import PROVIDERS; print("\n".join(PROVIDERS))' "$WORKSHOP_DIR/tools")
  for provider in "${providers[@]}"; do
    azx provider register --namespace "$provider" -o none
  done
  providers_ready() {
    azx provider list -o json | python3 -c '
import json,sys
states={item["namespace"]:item["registrationState"] for item in json.load(sys.stdin)}
missing=[name for name in sys.argv[1:] if states.get(name)!="Registered"]
print("Providers still registering: "+", ".join(missing) if missing else "All required providers registered")
sys.exit(bool(missing))' "${providers[@]}"
  }
  retry 90 10 providers_ready
fi
python3 "$WORKSHOP_DIR/tools/preflight.py"
