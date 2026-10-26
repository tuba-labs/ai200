CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS workshop_notes (
    id integer PRIMARY KEY,
    topic text NOT NULL,
    content text NOT NULL,
    embedding vector(3) NOT NULL
);

-- Hand-written teaching vectors, not output from an embedding model.
INSERT INTO workshop_notes (id, topic, content, embedding) VALUES
    (1, 'containers', 'A container packages an application and its dependencies.', '[1,0,0]'),
    (2, 'containers', 'Read container logs when an application fails to start.', '[0.9,0.1,0]'),
    (3, 'data', 'A database stores and retrieves application data.', '[0,1,0]'),
    (4, 'security', 'Managed identity removes the need to store a credential.', '[0,0,1]')
ON CONFLICT (id) DO UPDATE SET
    topic = EXCLUDED.topic,
    content = EXCLUDED.content,
    embedding = EXCLUDED.embedding;
