-- Aktiver pgvector-utvidelsen i den valgte databasen.
CREATE EXTENSION IF NOT EXISTS vector;

-- Opprett labtabellen hvis den ikke finnes fra før.
CREATE TABLE IF NOT EXISTS workshop_notes (
    -- Gi hver rad en entydig identifikator.
    id integer PRIMARY KEY,
    -- Bruk topic som metadatafilter i søkene.
    topic text NOT NULL,
    -- Lagre teksten som et senere RAG-steg kan hente frem.
    content text NOT NULL,
    -- Lagre nøyaktig tre komponenter per undervisningsvektor.
    embedding vector(3) NOT NULL
);

-- Hand-written teaching vectors, not output from an embedding model.
-- Sett inn fire eksempler. Vektorene er skrevet for hånd, ikke generert av en modell.
INSERT INTO workshop_notes (id, topic, content, embedding) VALUES
    -- Første containerdokument peker langs første vektordimensjon.
    (1, 'containers', 'A container packages an application and its dependencies.', '[1,0,0]'),
    -- Andre containerdokument ligger nær det første i vektorrommet.
    (2, 'containers', 'Read container logs when an application fails to start.', '[0.9,0.1,0]'),
    -- Datadokumentet ligger nær spørsmålsvektoren, men kan filtreres bort av topic.
    (3, 'data', 'A database stores and retrieves application data.', '[0,1,0]'),
    -- Sikkerhetsdokumentet gir oss et eksempel i et annet emne.
    (4, 'security', 'Managed identity removes the need to store a credential.', '[0,0,1]')
-- Oppdater eksisterende rader når skriptet kjøres på nytt.
ON CONFLICT (id) DO UPDATE SET
    -- Bruk emnet fra raden vi forsøkte å sette inn.
    topic = EXCLUDED.topic,
    -- Oppdater teksten til verdien i eksempeldatasettet.
    content = EXCLUDED.content,
    -- Oppdater også vektoren, og avslutt SQL-setningen.
    embedding = EXCLUDED.embedding;
