import os
from pathlib import Path
import sys

import pytest
import psycopg

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'apps/shared'))
sys.path.insert(0, str(ROOT / 'tools'))


@pytest.fixture
def database():
    url = os.getenv('TEST_DATABASE_DSN')
    if not url:
        pytest.skip('Set TEST_DATABASE_DSN to a real PostgreSQL database with the Flyway migration applied')
    connection = psycopg.connect(url, autocommit=True)
    assert connection.execute("SELECT extversion FROM pg_extension WHERE extname='vector'").fetchone(), 'Run the Java Flyway test first'
    yield connection
    connection.close()
