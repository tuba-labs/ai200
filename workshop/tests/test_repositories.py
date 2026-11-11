"""The website stays independent of app checkouts; tooling locates them safely."""
import json
from pathlib import Path

import pytest
import repositories as repos


def test_application_parent_override_and_missing_checkout(monkeypatch, tmp_path):
    monkeypatch.setenv('AI200_APPS_DIR', str(tmp_path))
    path = repos.application_dir('chat', require=False)
    assert path == tmp_path / 'ai-200-products-chat'
    with pytest.raises(RuntimeError, match='get-apps.sh'):
        repos.application_dir('chat')


def test_clone_preserves_existing_non_repository_directories(monkeypatch, tmp_path):
    monkeypatch.setenv('AI200_APPS_DIR', str(tmp_path))
    path = repos.application_dir('products', require=False)
    path.mkdir()
    original = path / 'keep.txt'
    original.write_text('keep')
    with pytest.raises(RuntimeError, match='Refusing to overwrite'):
        repos.clone()
    assert original.read_text() == 'keep'


def test_python_repositories_vendor_the_same_runtime():
    embedder = repos.application_dir('embedder') / 'rag_core'
    chat = repos.application_dir('chat') / 'rag_core'
    left = {path.name: path.read_bytes() for path in embedder.glob('*.py')}
    right = {path.name: path.read_bytes() for path in chat.glob('*.py')}
    assert left and left == right


def test_website_build_has_no_dependency_on_local_app_checkouts(monkeypatch, tmp_path):
    monkeypatch.setenv('AI200_APPS_DIR', str(tmp_path / 'not-installed'))
    import build_workshop
    outputs = build_workshop.outputs()
    assert 'https://github.com/tuba-labs/ai200-workshop1-products' in outputs['index.html']
    assert not any(item['path'].startswith('apps/') for item in json.loads(outputs['source-index.json']))
