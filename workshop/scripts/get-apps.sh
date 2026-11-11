#!/usr/bin/env bash
set -Eeuo pipefail
WORKSHOP_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
python3 "$WORKSHOP_DIR/tools/repositories.py" clone
