"""Check built docs at their real relative paths, snippets and source links."""
from html import unescape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

import pytest

ROOT = Path(__file__).resolve().parents[2]
WORKSHOP = ROOT / 'workshop'
sys.path.insert(0, str(ROOT / 'scripts'))
import build_workshop as docs


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids, self.links = [], []
        self.feed(source)

    def handle_starttag(self, tag, attributes):
        values = dict(attributes)
        if 'id' in values:
            self.ids.append(values['id'])
        for key in ['href', 'src']:
            if key in values:
                self.links.append(values[key])


def test_generated_docs_and_source_index_match_canonical_files():
    outputs = docs.outputs()
    for name, expected in outputs.items():
        assert (WORKSHOP / name).read_text(encoding='utf-8') == expected, name
    sources = json.loads(outputs['source-index.json'])
    assert len(sources) > 50
    for item in sources:
        assert not {'.state', '.tools', 'target'}.intersection(Path(item['path']).parts)
        assert (WORKSHOP / item['path']).read_text(encoding='utf-8') == item['text']


def test_every_workshop_link_anchor_asset_and_source_exists():
    pages = {path.resolve(): Page(path.read_text(encoding='utf-8')) for path in WORKSHOP.glob('*.html')}
    source_names = {item['path'] for item in json.loads((WORKSHOP / 'source-index.json').read_text(encoding='utf-8'))}
    for path, page in pages.items():
        assert len(page.ids) == len(set(page.ids)), path.name
        for link in page.links:
            url = urlsplit(link)
            if url.scheme or url.netloc:
                continue
            target = (path.parent / unquote(url.path)).resolve() if url.path else path
            assert target.is_relative_to(ROOT) and target.is_file(), (path.name, link)
            if url.fragment and target in pages and unquote(url.fragment) in pages[target].ids:
                continue
            if url.fragment and target.name == 'source.html':
                assert unquote(url.fragment) in source_names, link
            elif url.fragment and target in pages:
                assert unquote(url.fragment) in pages[target].ids, (path.name, link)


def test_commands_are_imported_exactly_and_chapters_have_actions_and_checks():
    for chapter in docs.CHAPTERS:
        source = (WORKSHOP / f'content/{chapter["id"]}.inc').read_text(encoding='utf-8')
        assert 'Requires:' in source or chapter['id'] in {'overview', 'prerequisites'}
        assert 'Verification:' in source, chapter['id']
        assert 'Bash · repository root' in (WORKSHOP / chapter['file']).read_text(encoding='utf-8')
        assert '<summary>' in source or chapter['id'] == 'overview'
        for name, section in re.findall(r'\{\{snippet:([^:}]+):([^}]+)\}\}', source):
            canonical = (WORKSHOP / name).read_text(encoding='utf-8')
            value = re.search(r'^# region ' + section + r'\n(.*?)^# endregion', canonical, re.S | re.M)[1].rstrip()
            generated = (WORKSHOP / chapter['file']).read_text(encoding='utf-8')
            assert value in unescape(generated)
    assert sum(chapter['minutes'] for chapter in docs.CHAPTERS) == 240


def test_manifest_renderer_requires_every_value_and_never_renders_secret_settings():
    from render_manifests import render
    values = {'PRODUCTS_CLIENT_ID':'11111111-1111-1111-1111-111111111111',
              'CHAT_CLIENT_ID':'22222222-2222-2222-2222-222222222222', 'KEDA_CLIENT_ID':'33333333-3333-3333-3333-333333333333',
              'APP_CONFIG_ENDPOINT':'https://fixture.azconfig.io', 'ACR_HOST':'fixture.azurecr.io',
              'IMAGE_TAG':'w1-fixture', 'ALLOWED_CIDR':'198.51.100.2/32', 'SERVICEBUS_NAME':'fixture-bus'}
    for path in (WORKSHOP / 'k8s').glob('*.yaml'):
        output = render(path.read_text(), values)
        assert '${' not in output
        assert 'postgres-password' not in output and 'products-password' not in output
    with pytest.raises(ValueError, match='Missing manifest'):
        render('${PRODUCTS_CLIENT_ID}', {})


def test_bootstrap_rejects_unsafe_public_access_and_names():
    from bootstrap import validate
    config = json.loads((WORKSHOP / 'config.example.json').read_text())
    config.update(subscription='11111111-1111-1111-1111-111111111111', allowedCidr='8.8.8.8/32')
    validated = validate(config.copy())
    assert 9 <= len(validated['stem']) <= 14
    assert validate(config.copy())['group'] == validated['group']
    with pytest.raises(ValueError, match='public IPv4'):
        validate({**config, 'allowedCidr':'0.0.0.0/0'})
    with pytest.raises(ValueError, match='Prefix'):
        validate({**config, 'prefix':'../../unsafe'})


def test_production_export_has_no_runtime_credentials_or_tooling():
    from serve import public_files
    allowed = public_files()
    assert allowed
    for path in allowed:
        assert not {'.state', '.tools', '.git', '.venv', 'target'}.intersection(path.relative_to(ROOT).parts)
        exported = ROOT / '.site' / path.relative_to(ROOT)
        assert exported.is_file(), str(exported)
        assert exported.read_bytes() == path.read_bytes(), str(exported)
