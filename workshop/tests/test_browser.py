"""Real Chromium browser checks at /ai200/workshop/, with no Azure access."""
from http.server import ThreadingHTTPServer
import os
from pathlib import Path
import threading
import sys

import pytest
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / 'scripts'))
from serve import StudyHandler, public_files


class Handler(StudyHandler):
    base_path = '/ai200'
    public = public_files()

    def log_message(self, *_):
        pass


@pytest.fixture(scope='module')
def website():
    server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    yield f'http://127.0.0.1:{server.server_port}/ai200/workshop/'
    server.shutdown()
    server.server_close()


@pytest.fixture
def browser():
    (ROOT / 'workshop/.tools/screenshots').mkdir(parents=True, exist_ok=True)
    with sync_playwright() as playwright:
        options = {'headless': True}
        if os.getenv('BROWSER_EXECUTABLE'):
            options['executable_path'] = os.environ['BROWSER_EXECUTABLE']
        browser = playwright.chromium.launch(**options)
        yield browser
        browser.close()


def test_navigation_copy_search_persisted_progress_and_reset(browser, website):
    context = browser.new_context(permissions=['clipboard-read','clipboard-write'], viewport={'width':1440,'height':1000})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(website)
    expect(page.get_by_role('heading', name='A small system, end to end')).to_be_visible()
    expect(page.locator('[data-chapter-link]')).to_have_count(10)
    page.locator('[data-complete-chapter]').click()
    expect(page.locator('#progress-count')).to_have_text('1 of 10 chapters completed')
    page.reload()
    expect(page.locator('[data-complete-chapter]')).to_have_attribute('aria-pressed', 'true')
    page.get_by_role('link', name='Continue → Check your starting point').click()
    expect(page).to_have_url(website + 'prerequisites.html')
    command = page.locator('.code-block').first
    original = command.locator('code').inner_text()
    command.get_by_role('button', name='Copy code').click()
    expect(command.locator('button')).to_have_text('Copied')
    # Windows clipboard APIs normalize LF to CRLF; the executable text is the
    # same after platform newline normalization.
    assert page.evaluate('navigator.clipboard.readText()').replace('\r\n', '\n') == original
    page.get_by_role('button', name='Search /').click()
    page.locator('#search-input').fill('KEDA')
    expect(page.locator('#search-results a').first).to_be_visible()
    page.locator('#search-results a').filter(has_text='Make the queue drive scaling').click()
    expect(page).to_have_url(website + 'keda.html')
    page.once('dialog', lambda dialog: dialog.accept())
    page.locator('#reset-progress').click()
    expect(page.locator('#progress-count')).to_have_text('0 of 10 chapters completed')
    assert not errors
    destination = ROOT / 'workshop/.tools/screenshots'
    destination.mkdir(parents=True, exist_ok=True)
    page.evaluate("document.documentElement.dataset.docsTheme='light'")
    page.screenshot(path=str(destination / 'desktop.png'))
    context.close()


def test_source_explorer_and_mobile_navigation_have_no_overflow(browser, website):
    context = browser.new_context(viewport={'width':390,'height':844}, is_mobile=True)
    page = context.new_page()
    page.goto(website + 'source.html#apps/products/pom.xml')
    expect(page.locator('#source-heading')).to_have_text('apps/products/pom.xml')
    expect(page.locator('#source-code')).to_contain_text('<artifactId>products</artifactId>')
    assert page.locator('#source-download').get_attribute('href') == './apps/products/pom.xml'
    page.locator('#chapter-menu').click()
    expect(page.locator('.sidebar')).to_be_visible()
    page.locator('[data-chapter-link="embedder"]').click()
    expect(page.get_by_role('heading', name='Turn a manual into vectors')).to_be_visible()
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    assert page.locator('.docs-brand').bounding_box()['y'] >= 0
    page.screenshot(path=str(ROOT / 'workshop/.tools/screenshots/mobile.png'))
    context.close()


def test_blocked_storage_keeps_reading_and_completion_usable(browser, website):
    context = browser.new_context()
    context.add_init_script("Storage.prototype.getItem=function(){throw new Error('blocked')}; Storage.prototype.setItem=function(){throw new Error('blocked')};")
    page = context.new_page()
    page.goto(website)
    expect(page.locator('#storage-note')).to_contain_text('temporary')
    page.locator('[data-complete-chapter]').click()
    expect(page.locator('#progress-count')).to_have_text('1 of 10 chapters completed')
    page.reload()
    expect(page.locator('#progress-count')).to_have_text('0 of 10 chapters completed')
    context.close()


def test_static_server_refuses_a_real_private_state_file(browser, website):
    from uuid import uuid4
    private = ROOT / 'workshop/.state' / ('server-test-' + str(uuid4()) + '.txt')
    private.parent.mkdir(exist_ok=True)
    private.write_text('private verification fixture')
    context = browser.new_context()
    try:
        response = context.request.get(website + '.state/' + private.name)
        assert response.status == 404
        assert 'private verification fixture' not in response.text()
        assert context.request.get(website + '../..//.git/config').status == 404
    finally:
        private.unlink()
        context.close()
