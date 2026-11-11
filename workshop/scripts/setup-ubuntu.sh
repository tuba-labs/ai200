#!/usr/bin/env bash
# Local software only. Run as your normal Ubuntu user, not with sudo bash.
set -Eeuo pipefail
trap 'echo "Local setup failed at line $LINENO. Fix the reported package/network error and rerun; no Azure resources were created." >&2' ERR
WORKSHOP_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
# shellcheck source=/dev/null
source /etc/os-release
[[ $ID == ubuntu && $VERSION_ID == 24.04 ]] || { echo 'This installer targets Ubuntu 24.04 (WSL2 or native). For other systems, follow the prerequisite tool links.' >&2; exit 1; }
[[ $EUID -ne 0 ]] || { echo 'Run as your normal Ubuntu user; the installer uses sudo only for packages.' >&2; exit 1; }
[[ $(uname -m) == x86_64 ]] || { echo 'The supplied installer targets x86-64 Ubuntu, matching the workshop linux/amd64 images.' >&2; exit 1; }
sudo -v
sudo apt-get update
sudo apt-get install -y bash ca-certificates curl git gnupg jq openssl unzip zip \
  python3 python3-venv python3-pip openjdk-21-jdk-headless

temporary=$(mktemp -d)
cleanup_setup() {
  rm -f -- "$temporary/microsoft.gpg" "$temporary/kubectl" "$temporary/kubectl.sha256"
  rmdir -- "$temporary"
}
trap cleanup_setup EXIT
curl --fail --silent --show-error --location --retry 3 https://packages.microsoft.com/keys/microsoft.asc \
  | gpg --dearmor --yes --output "$temporary/microsoft.gpg"
sudo install -d -m 0755 /etc/apt/keyrings
sudo install -m 0644 "$temporary/microsoft.gpg" /etc/apt/keyrings/microsoft.gpg
sudo tee /etc/apt/sources.list.d/azure-cli.sources >/dev/null <<'REPOSITORY'
Types: deb
URIs: https://packages.microsoft.com/repos/azure-cli/
Suites: noble
Components: main
Architectures: amd64
Signed-by: /etc/apt/keyrings/microsoft.gpg
REPOSITORY
sudo apt-get update
sudo apt-get install -y azure-cli
az bicep install --version v0.49.2

# Pin the tested schema baseline; after deployment check kubectl/server skew.
kubectl_version=v1.34.1
for name in kubectl kubectl.sha256; do
  curl --fail --silent --show-error --location --retry 3 \
    "https://dl.k8s.io/release/$kubectl_version/bin/linux/amd64/$name" -o "$temporary/$name"
done
printf '%s  %s\n' "$(cat "$temporary/kubectl.sha256")" "$temporary/kubectl" | sha256sum --check --status
sudo install -m 0755 "$temporary/kubectl" /usr/local/bin/kubectl

python3 -m venv "$WORKSHOP_DIR/.tools/venv"
"$WORKSHOP_DIR/.tools/venv/bin/python" -m pip install -r "$WORKSHOP_DIR/requirements.txt"
echo 'Installed the Linux tools and workshop client dependencies. Checking this Bash environment now.'
python3 "$WORKSHOP_DIR/tools/preflight.py" --local-only
echo 'Next: az login, deliberately select your subscription, then follow the bootstrap/check commands on the prerequisites page.'
