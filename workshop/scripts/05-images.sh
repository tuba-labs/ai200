#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
tag=$(python3 "$WORKSHOP_DIR/tools/image_tag.py")
registry="${STEM}acr.azurecr.io"
# The Products context is its own future repository. Chat uses the monorepo
# root to include the small shared package; .dockerignore keeps this bounded.
docker build --platform linux/amd64 -t "$registry/products:$tag" "$WORKSHOP_DIR/apps/products"
docker build --platform linux/amd64 -f "$WORKSHOP_DIR/apps/products-chat/Dockerfile" \
  -t "$registry/products-chat:$tag" "$REPO_DIR"
azx acr login --name "${STEM}acr" -o none
docker push "$registry/products:$tag"
docker push "$registry/products-chat:$tag"
echo "Pushed both images with content tag $tag. No image contains application secrets."
