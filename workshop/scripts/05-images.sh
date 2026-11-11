#!/usr/bin/env bash
set -Eeuo pipefail
source "$(dirname -- "${BASH_SOURCE[0]}")/common.sh"
assert_group
tag=$(python3 "$WORKSHOP_DIR/tools/image_tag.py")
registry="${STEM}acr.azurecr.io"
products_dir=$(python3 "$WORKSHOP_DIR/tools/repositories.py" path products)
chat_dir=$(python3 "$WORKSHOP_DIR/tools/repositories.py" path chat)
docker build --platform linux/amd64 -t "$registry/products:$tag" "$products_dir"
docker build --platform linux/amd64 -t "$registry/products-chat:$tag" "$chat_dir"
azx acr login --name "${STEM}acr" -o none
docker push "$registry/products:$tag"
docker push "$registry/products-chat:$tag"
echo "Pushed both images with content tag $tag. No image contains application secrets."
