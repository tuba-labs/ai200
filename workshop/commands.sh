#!/usr/bin/env bash
# Canonical copyable chapter commands. Snippets are imported into the website.
# Run individual sections as: bash workshop/commands.sh <section>
set -Eeuo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.."
case "${1:-help}" in
  bootstrap)
# region bootstrap
python3 workshop/tools/bootstrap.py
bash workshop/scripts/00-check.sh
# endregion
    ;;
  providers)
# region providers
bash workshop/scripts/00-check.sh --register
# endregion
    ;;
  provision)
# region provision
bash workshop/scripts/01-models.sh
bash workshop/scripts/02-provision.sh
# endregion
    ;;
  build)
# region build
bash workshop/scripts/05-images.sh
# endregion
    ;;
  inspect-container)
# region inspect-container
tag=$(python3 -c 'import json; print(json.load(open("workshop/.state/images.json"))["tag"])')
registry=$(python3 -c 'import json; print(json.load(open("workshop/.state/config.json"))["stem"]+"acr.azurecr.io")')
docker run --rm --name products-inspect -p 127.0.0.1:8080:8080 \
  "$registry/products:$tag" --spring.profiles.active=inspect
# endregion
    ;;
  configure)
# region configure
bash workshop/scripts/03-ready.sh
bash workshop/scripts/04-configure.sh
# endregion
    ;;
  products)
# region products
bash workshop/scripts/06-products.sh
# endregion
    ;;
  embedder)
# region embedder
bash workshop/scripts/07-embedder.sh
# endregion
    ;;
  inspect-data)
# region inspect-data
bash workshop/scripts/inspect-data.sh
# endregion
    ;;
  chat)
# region chat
bash workshop/scripts/08-chat.sh
# endregion
    ;;
  retrieval)
# region retrieval
bash workshop/scripts/change-retrieval.sh 1
# endregion
    ;;
  keda)
# region keda
bash workshop/scripts/09-keda.sh
bash workshop/scripts/demo-scaling.sh start
# endregion
    ;;
  observe)
# region observe
bash workshop/scripts/watch-scaling.sh
# endregion
    ;;
  tools)
# region tools
python3 -m venv workshop/.tools/venv
# shellcheck source=/dev/null
source workshop/.tools/venv/bin/activate
python -m pip install -r workshop/requirements-test.txt
# endregion
    ;;
  load)
# region load
# shellcheck source=/dev/null
source workshop/.tools/venv/bin/activate
python workshop/tools/load.py --count 8
# endregion
    ;;
  threshold)
# region threshold
bash workshop/scripts/demo-scaling.sh threshold 4
python workshop/tools/load.py --count 8
bash workshop/scripts/demo-scaling.sh stop
# endregion
    ;;
  smoke)
# region smoke
# shellcheck source=/dev/null
source workshop/.tools/venv/bin/activate
python workshop/tools/smoke.py
# endregion
    ;;
  diagnose)
# region diagnose
bash workshop/scripts/diagnostics.sh
# endregion
    ;;
  cleanup)
# region cleanup
bash workshop/scripts/cleanup.sh
# endregion
    ;;
  *) echo 'Sections: bootstrap, providers, provision, build, inspect-container, configure, products, embedder, inspect-data, chat, retrieval, keda, observe, tools, load, threshold, smoke, diagnose, cleanup' ;;
esac
