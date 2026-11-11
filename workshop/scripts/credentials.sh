#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
echo 'This displays the Products browser password in YOUR terminal. Do not record or share the output.' >&2
[[ -t 1 ]] || { echo 'Refusing to print a password to a noninteractive output stream.' >&2; exit 1; }
azx keyvault secret show --vault-name "$STEM-kv" --name products-password --query value -o tsv
