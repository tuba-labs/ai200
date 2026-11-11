from datetime import datetime, timedelta, timezone
import hashlib
import importlib.util
import json
import math
from pathlib import Path
from uuid import uuid4

import jsonschema
import pytest
from psycopg.types.json import Jsonb

from rag_core.chunks import chunk_text
from rag_core.embedding import index_manual
from rag_core.models import DIMENSIONS, INSUFFICIENT, vector_literal
from rag_core.chat import validate_request, process_question, reply, apply_reply, retrieve, InvalidRequest
from repositories import application_dir

ROOT = Path(__file__).resolve().parents[1]


def vector(axis=0):
    return [1.0 if i == axis else 0.0 for i in range(DIMENSIONS)]


class Models:
    """Deterministic LOCAL fixture. It does not contact or emulate Azure auth."""
    def __init__(self, bad=False):
        self.calls = 0
        self.bad = bad
        self.answers = 0

    def embed(self, texts):
        self.calls += 1
        return [[1, 2] if self.bad else vector() for _ in texts]

    def answer(self, question, sources):
        self.answers += 1
        return '420 lumens [1]'


def product(database, text=b'The Aurora lamp produces 420 lumens. ' * 25):
    identifier, manual = uuid4(), uuid4()
    database.execute('INSERT INTO products(id,name,manual_id,blob_name,manual_sha256) VALUES (%s,%s,%s,%s,%s)',
                     (identifier, 'Test lamp ' + str(identifier), manual, f'products/{identifier}/{manual}.txt', hashlib.sha256(text).hexdigest()))
    return identifier, manual, text


def request(database, product_id=None, deadline=None):
    identifier, correlation = str(uuid4()), str(uuid4())
    end = deadline or datetime.now(timezone.utc) + timedelta(minutes=8)
    body = dict(schemaVersion=1, type='chat.request', requestId=identifier, correlationId=correlation,
                question='How bright is this lamp?', productId=str(product_id) if product_id else None, deadline=end.isoformat())
    database.execute('INSERT INTO chat_requests(id,correlation_id,question,product_id,deadline) VALUES (%s,%s,%s,%s,%s)',
                     (identifier, correlation, body['question'], body['productId'], end))
    return body


def test_chunk_boundaries_unicode_overlap_and_empty_inputs():
    text = 'Operating temperature: −10 to 40°C.\n\n' + 'A' * 1100 + '\n\nCharge with 5 V. ' * 80
    chunks = chunk_text(text, 300, 30)
    assert all(0 < len(part) <= 300 for part in chunks)
    assert chunks[0].startswith('Operating temperature')
    assert chunks[-1].endswith('Charge with 5 V.')
    for char in ['−', '°', 'A']:
        assert char in ''.join(chunks)
    with pytest.raises(ValueError):
        chunk_text('   ')
    with pytest.raises(ValueError):
        chunk_text('bad\0manual')
    with pytest.raises(ValueError):
        chunk_text('text', 300, 150)


@pytest.mark.parametrize('bad', [[0] * 3, [math.nan] * DIMENSIONS, [math.inf] * DIMENSIONS])
def test_wrong_dimensions_and_nonfinite_vectors_fail_before_sql(bad):
    with pytest.raises(ValueError):
        vector_literal(bad)


def test_atomic_indexing_and_duplicate_event_do_not_repeat_model_or_chunks(database):
    identifier, manual, data = product(database)
    models = Models()
    first = index_manual(database, identifier, manual, data, models, 'embedding', 300)
    assert first['chunks'] > 1
    second = index_manual(database, identifier, manual, data, models, 'embedding', 300)
    assert second['duplicate'] is True and models.calls == 1
    assert database.execute('SELECT count(*),min(vector_dims(embedding)),max(vector_dims(embedding)) FROM manual_chunks WHERE manual_id=%s', (manual,)).fetchone() == (first['chunks'], DIMENSIONS, DIMENSIONS)
    assert database.execute('SELECT status FROM products WHERE id=%s', (identifier,)).fetchone()[0] == 'ready'
    with pytest.raises(ValueError, match='checksum'):
        index_manual(database, identifier, manual, data + b' changed', models, 'embedding')


def test_failed_embedding_persists_error_without_partial_chunks_then_recovers(database):
    identifier, manual, data = product(database)
    with pytest.raises(ValueError):
        index_manual(database, identifier, manual, data, Models(bad=True), 'embedding')
    status, error = database.execute('SELECT status,error FROM products WHERE id=%s', (identifier,)).fetchone()
    assert status == 'failed' and 'Indexing failed' in error
    assert database.execute('SELECT count(*) FROM manual_chunks WHERE manual_id=%s', (manual,)).fetchone()[0] == 0
    result = index_manual(database, identifier, manual, data, Models(), 'embedding')
    assert result['chunks'] > 0


def test_filtered_retrieval_cached_requests_correlated_and_duplicate_replies(database):
    first, manual, data = product(database)
    other, other_manual, other_data = product(database)
    index_manual(database, first, manual, data, Models(), 'embedding')
    index_manual(database, other, other_manual, other_data, Models(), 'embedding')
    sources = retrieve(database, vector(), str(first), 3, 0.35)
    assert sources and {source['productId'] for source in sources} == {str(first)}
    body = request(database, first)
    validate_request(body, body['requestId'], body['correlationId'])
    models = Models()
    result = process_question(database, body, models, count=1)
    cached = process_question(database, body, models, count=1)
    assert models.calls == 1 and models.answers == 1 and cached == result
    schema = json.loads((ROOT / 'contracts/chat-reply.schema.json').read_text())
    jsonschema.Draft202012Validator(schema, format_checker=jsonschema.FormatChecker()).validate(result)
    assert apply_reply(database, {**result, 'correlationId': str(uuid4())}) == 0
    assert apply_reply(database, result) == 1
    assert apply_reply(database, {**result, 'answer': 'duplicate'}) == 0
    assert database.execute('SELECT answer,status FROM chat_requests WHERE id=%s', (body['requestId'],)).fetchone() == ('420 lumens [1]', 'completed')


def test_no_evidence_does_not_call_chat_model(database):
    identifier, _, _ = product(database)
    body = request(database, identifier)
    models = Models()
    result = process_question(database, body, models)
    assert result['answer'] == INSUFFICIENT and result['sources'] == [] and models.answers == 0


def test_expired_requests_are_failed_without_model_and_failed_reply_is_persisted(database):
    body = request(database, deadline=datetime.now(timezone.utc) - timedelta(seconds=5))
    models = Models()
    result = process_question(database, body, models)
    assert result['status'] == 'failed' and result['errorCode'] == 'request_timeout' and models.calls == 0
    # Products independently expires overdue requests; this verifies a timely
    # worker failure result's guarded persistence rather than accepting late answers.
    live = request(database)
    failed = reply(live, 'failed', error='worker_failed_after_retries')
    assert apply_reply(database, failed) == 1
    assert database.execute('SELECT status,error FROM chat_requests WHERE id=%s', (live['requestId'],)).fetchone() == ('failed', 'worker_failed_after_retries')


def test_message_contract_headers_uuid_deadline_and_schema():
    body = dict(schemaVersion=1, type='chat.request', requestId=str(uuid4()), correlationId=str(uuid4()), question='A question?', productId=None,
                deadline=(datetime.now(timezone.utc) + timedelta(minutes=8)).isoformat())
    schema = json.loads((ROOT / 'contracts/chat-request.schema.json').read_text())
    jsonschema.Draft202012Validator(schema, format_checker=jsonschema.FormatChecker()).validate(body)
    with pytest.raises(ValueError, match='headers'):
        validate_request(body, str(uuid4()), body['correlationId'])
    with pytest.raises(ValueError):
        validate_request({**body, 'productId': 'not-uuid'}, body['requestId'], body['correlationId'])
    with pytest.raises(ValueError, match='timezone'):
        validate_request({**body, 'deadline': '2026-01-01T00:00:00'}, body['requestId'], body['correlationId'])


def test_real_functions_decorator_discovers_event_grid_blob_trigger():
    path = application_dir('embedder') / 'function_app.py'
    spec = importlib.util.spec_from_file_location('test_embedder_function', path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    functions = module.app.get_functions()
    assert len(functions) == 1 and functions[0].get_function_name() == 'IndexManual'
    binding = json.loads(functions[0].get_function_json())['bindings'][0]
    assert binding['source'] == 'EventGrid' and binding['type'] == 'blobTrigger'
    assert binding['connection'] == 'ManualStorage'


def test_unknown_persistent_request_is_permanent_invalid_work(database):
    body = dict(schemaVersion=1, type='chat.request', requestId=str(uuid4()), correlationId=str(uuid4()),
                question='Missing persistent work', productId=None,
                deadline=(datetime.now(timezone.utc)+timedelta(minutes=8)).isoformat())
    with pytest.raises(InvalidRequest, match='stored request'):
        process_question(database, body, Models())
    assert database.execute('SELECT count(*) FROM chat_results WHERE request_id=%s', (body['requestId'],)).fetchone()[0] == 0


def test_concurrent_duplicate_manual_cannot_write_or_call_model(database):
    import os
    import psycopg
    identifier, manual, data = product(database)
    database.execute('SELECT pg_advisory_lock(hashtextextended(%s,0))', (str(manual),))
    models = Models()
    try:
        with psycopg.connect(os.environ['TEST_DATABASE_DSN'], autocommit=True) as other:
            with pytest.raises(RuntimeError, match='already being indexed'):
                index_manual(other, identifier, manual, data, models, 'embedding')
        assert models.calls == 0
        assert database.execute('SELECT status FROM products WHERE id=%s', (identifier,)).fetchone()[0] == 'waiting'
    finally:
        database.execute('SELECT pg_advisory_unlock(hashtextextended(%s,0))', (str(manual),))
