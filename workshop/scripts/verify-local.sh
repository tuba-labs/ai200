#!/usr/bin/env bash
set -Eeuo pipefail
# No Azure credentials or .state/config.json are needed for local verification.
WORKSHOP_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
REPO_DIR=$(cd -- "$WORKSHOP_DIR/.." && pwd)
cd -- "$REPO_DIR"
container="products-rag-test-$$"
created=false
cleanup() {
  # Never remove a pre-existing name if docker run failed before creating ours.
  if [[ "$created" == true ]]; then docker rm --force --volumes "$container" >/dev/null 2>&1 || true; fi
}
trap cleanup EXIT
docker run --detach --name "$container" --label products-rag-fixture=true \
  --publish 127.0.0.1::5432 --env POSTGRES_USER=workshopadmin \
  --env POSTGRES_PASSWORD=local-test-only --env POSTGRES_DB=products pgvector/pgvector:0.8.1-pg17 >/dev/null
created=true
ready=false
for ((attempt=1; attempt<=60; attempt++)); do
  if docker exec "$container" pg_isready -U workshopadmin -d products >/dev/null 2>&1; then ready=true; break; fi
  sleep 1
done
[[ "$ready" == true ]] || { echo 'Local PostgreSQL did not become ready.' >&2; exit 1; }
port=$(docker port "$container" 5432/tcp | head -1 | awk -F: '{print $NF}')
export TEST_DATABASE_URL="jdbc:postgresql://127.0.0.1:$port/products?sslmode=disable"
export TEST_DATABASE_DSN="host=127.0.0.1 port=$port dbname=products user=workshopadmin password=local-test-only sslmode=disable"
(cd workshop/apps/products && bash mvnw -B test)
[[ -d workshop/.tools/venv ]] || python3 -m venv workshop/.tools/venv
# The virtualenv is generated locally and not repository source.
# shellcheck source=/dev/null
source workshop/.tools/venv/bin/activate
python -m pip install -r workshop/requirements-test.txt
python scripts/build.py
python scripts/build.py --check
python -m pytest workshop/tests -q
python -m unittest discover -s tests -p 'test_*.py'
node --test tests/*.test.cjs
for file in workshop/scripts/*.sh workshop/commands.sh; do bash -n "$file"; done
if command -v shellcheck >/dev/null; then
  shellcheck -x -P workshop/scripts workshop/scripts/*.sh workshop/commands.sh
else
  docker run --rm -v "$REPO_DIR:/src:ro" -w /src koalaman/shellcheck:v0.11.0 \
    -x -P workshop/scripts workshop/scripts/*.sh workshop/commands.sh
fi
echo 'Local checks passed. These model fixtures do not verify Azure or live LLM behavior.'
