-- Mål før vi legger til eksperimentets indekser.
EXPLAIN ANALYZE SELECT id FROM workshop_notes WHERE topic = 'containers' ORDER BY embedding <=> '[0,1,0]'::vector LIMIT 2;
-- Lag en vanlig indeks på metadatafeltet.
CREATE INDEX IF NOT EXISTS notes_topic_idx ON workshop_notes (topic);
-- Lag en HNSW-indeks for cosinusavstand.
CREATE INDEX IF NOT EXISTS notes_cosine_idx ON workshop_notes USING hnsw (embedding vector_cosine_ops);
-- Lag en separat HNSW-indeks for euklidsk avstand.
CREATE INDEX IF NOT EXISTS notes_l2_idx ON workshop_notes USING hnsw (embedding vector_l2_ops);
-- Lag en separat HNSW-indeks for negativt indreprodukt.
CREATE INDEX IF NOT EXISTS notes_ip_idx ON workshop_notes USING hnsw (embedding vector_ip_ops);
-- Oppdater statistikken før planene sammenlignes.
ANALYZE workshop_notes;
-- Sammenlign cosinusavstand bare innenfor valgt emne.
SELECT id, topic, embedding <=> '[0,1,0]'::vector AS distance FROM workshop_notes WHERE topic = 'containers' ORDER BY embedding <=> '[0,1,0]'::vector LIMIT 2;
-- Fjern emnefilteret og se hvorfor et dokument fra data nå kan være nærmest.
SELECT id, topic, embedding <=> '[0,1,0]'::vector AS distance FROM workshop_notes ORDER BY embedding <=> '[0,1,0]'::vector LIMIT 2;
-- Bruk operatoren som matcher vector_l2_ops.
SELECT id, embedding <-> '[0,1,0]'::vector AS distance FROM workshop_notes ORDER BY embedding <-> '[0,1,0]'::vector LIMIT 2;
-- Sorter negativt indreprodukt stigende, slik at størst indreprodukt kommer først.
SELECT id, embedding <#> '[0,1,0]'::vector AS negative_inner_product FROM workshop_notes ORDER BY embedding <#> '[0,1,0]'::vector LIMIT 2;
-- Sammenlign faktisk plan og tid etter indeksbyggingen uten å tvinge indeksbruk.
EXPLAIN ANALYZE SELECT id FROM workshop_notes WHERE topic = 'containers' ORDER BY embedding <=> '[0,1,0]'::vector LIMIT 2;
