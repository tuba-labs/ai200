FROM python:3.12.12-slim-bookworm
ENV PYTHONUNBUFFERED=1 PYTHONDONTWRITEBYTECODE=1 PIP_NO_CACHE_DIR=1
WORKDIR /app
COPY workshop/requirements.txt /app/requirements.txt
COPY workshop/constraints.txt /app/constraints.txt
RUN pip install --no-cache-dir -r requirements.txt && useradd --uid 10001 --no-create-home app
COPY workshop/apps/shared/rag_core /app/rag_core
COPY workshop/apps/products-chat/worker.py /app/worker.py
COPY workshop/tools/inspect_db.py /app/inspect_db.py
USER 10001:10001
EXPOSE 8080
ENTRYPOINT ["python", "worker.py"]
