-- Azure must allowlist VECTOR before Flyway runs. Run as the database owner.
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE products (
    id uuid PRIMARY KEY,
    name varchar(120) NOT NULL,
    manual_id uuid NOT NULL UNIQUE,
    blob_name text NOT NULL UNIQUE,
    manual_sha256 char(64) NOT NULL,
    status text NOT NULL DEFAULT 'waiting'
        CHECK (status IN ('waiting', 'processing', 'ready', 'failed')),
    error text,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- No ANN index: an exact cosine scan is easier to inspect for three manuals.
CREATE TABLE manual_chunks (
    manual_id uuid NOT NULL REFERENCES products(manual_id),
    product_id uuid NOT NULL REFERENCES products(id),
    chunk_index integer NOT NULL CHECK (chunk_index >= 0),
    content text NOT NULL,
    embedding vector(1536) NOT NULL,
    embedding_deployment text NOT NULL,
    PRIMARY KEY (manual_id, chunk_index)
);
CREATE INDEX manual_chunks_product ON manual_chunks(product_id);

CREATE TABLE chat_requests (
    id uuid PRIMARY KEY,
    correlation_id uuid NOT NULL UNIQUE,
    product_id uuid REFERENCES products(id),
    question varchar(1000) NOT NULL,
    status text NOT NULL DEFAULT 'queued'
        CHECK (status IN ('queued', 'processing', 'completed', 'failed')),
    answer text,
    sources jsonb NOT NULL DEFAULT '[]',
    error text,
    created_at timestamptz NOT NULL DEFAULT now(),
    deadline timestamptz NOT NULL DEFAULT now() + interval '8 minutes',
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Commit the request and its outgoing message together. A crash after sending
-- may resend it; the worker's persistent result cache handles that duplicate.
CREATE TABLE chat_outbox (
    request_id uuid PRIMARY KEY REFERENCES chat_requests(id),
    payload jsonb NOT NULL,
    sent_at timestamptz,
    attempts integer NOT NULL DEFAULT 0
);
CREATE TABLE chat_results (
    request_id uuid PRIMARY KEY REFERENCES chat_requests(id),
    correlation_id uuid NOT NULL,
    payload jsonb NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);
