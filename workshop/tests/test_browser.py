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
    command = page.locator('.code-block:visible').first
    original = command.locator('code').inner_text()
    command.get_by_role('button', name='Copy code').click()
    expect(command.locator('[data-copy]')).to_have_text('Copied')
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
    page.evaluate("document.documentElement.dataset.theme='light'")
    page.goto(website)
    page.screenshot(path=str(destination / 'desktop.png'))
    context.close()


def test_source_explorer_and_mobile_navigation_have_no_overflow(browser, website):
    context = browser.new_context(viewport={'width':390,'height':844}, is_mobile=True)
    page = context.new_page()
    page.goto(website + 'source.html#commands.sh')
    expect(page.locator('#source-heading')).to_have_text('commands.sh')
    expect(page.locator('#source-code')).to_contain_text('bash workshop/scripts/01-models.sh')
    assert page.locator('#source-download').get_attribute('href') == './commands.sh'
    page.locator('#chapter-menu').click()
    expect(page.locator('.sidebar')).to_be_visible()
    assert page.locator('.sidebar').bounding_box()['y'] >= page.locator('.workshop-toolbar').bounding_box()['y'] + page.locator('.workshop-toolbar').bounding_box()['height'] - 1
    page.locator('[data-chapter-link="embedder"]').click()
    expect(page.get_by_role('heading', name='Turn a manual into vectors')).to_be_visible()
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    assert page.locator('.workshop-toolbar').bounding_box()['y'] >= 0
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


def test_shared_header_tooltips_theme_and_installer_downloads(browser, website):
    context = browser.new_context(locale='en-GB', color_scheme='light', viewport={'width':1440,'height':1000})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(website + 'data.html')
    expect(page.locator('header[data-site-header]')).to_have_count(1)
    expect(page.locator('.site-header .site-brand')).to_have_attribute('href', '../index.html')
    expect(page.locator('.site-header .site-nav a')).to_have_count(5)
    expect(page.locator('#site-theme')).to_be_enabled()
    page.locator('#site-theme').click()
    expect(page.locator('html')).to_have_attribute('data-theme', 'dark')
    page.reload()
    expect(page.locator('html')).to_have_attribute('data-theme', 'dark')
    term = page.locator('.article button[data-jargon-id="flyway"]').first
    term.focus()
    expect(page.locator('#jargon-explanation')).to_be_visible()
    expect(page.locator('#jargon-explanation-description')).to_contain_text('versioned SQL')
    expect(page.locator('.jargon-entry-link')).to_have_attribute('href', website.replace('workshop/', '') + 'jargon.html#flyway')
    page.keyboard.press('Escape')
    page.locator('.site-header .jargon-toggle').click()
    expect(page.locator('.article .jargon-term')).to_have_count(0)
    page.locator('.site-header .jargon-toggle').click()
    expect(page.locator('.article button[data-jargon-id="flyway"]').first).to_be_visible()
    page.locator('#site-language').click()
    expect(page.locator('.article h1')).to_have_text('Connect data, settings and identity')
    page.goto(website + 'prerequisites.html')
    link = page.locator('a[download="setup-windows.ps1"]')
    expect(link).to_be_visible()
    with page.expect_download() as download:
        link.click()
    assert download.value.suggested_filename == 'setup-windows.ps1'
    assert Path(download.value.path()).read_bytes() == (ROOT / 'workshop/scripts/setup-windows.ps1').read_bytes()
    assert context.request.get(website + 'scripts/setup-ubuntu.sh').status == 200
    assert context.request.get(website + 'glossary.html').status == 404
    page.goto(website + 'prerequisites.html#permissions')
    expect(page.locator('#permissions')).to_have_attribute('open', '')
    expect(page.locator('#permissions .code-block')).to_be_visible()
    page.goto(website + 'prerequisites.html')
    setup = page.locator('details').filter(has=page.get_by_text('Windows / Ubuntu installation steps', exact=True))
    expect(setup).not_to_have_attribute('open', '')
    setup.locator('summary').click()
    expect(setup.locator('code[data-language="powershell"]')).to_be_visible()
    assert not errors
    context.close()


def test_background_panels_and_repeated_toc_links_keep_actions_visible(browser, website):
    context = browser.new_context(locale='en-GB', viewport={'width':1440,'height':1000})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(website + 'data.html')
    panel = page.locator('details#identity')
    expect(panel).not_to_have_attribute('open', '')
    expect(panel.locator('figure')).not_to_be_visible()
    expect(page.locator('.article .code-block:visible').first).to_contain_text('03-ready.sh')
    expect(page.locator('.verification')).to_be_visible()
    topic = page.locator('.toc').get_by_role('link', name='How identity, settings and secrets connect')
    topic.click()
    expect(panel).to_have_attribute('open', '')
    expect(panel.locator('figure')).to_be_visible()
    panel.locator('summary').focus()
    page.keyboard.press('Enter')
    expect(panel).not_to_have_attribute('open', '')
    # Clicking the same fragment must reopen it even without a hashchange.
    topic.click()
    expect(panel).to_have_attribute('open', '')
    page.goto(website + 'reference.html')
    expect(page.locator('.article details[open]')).to_have_count(0)
    page.goto(website + 'reference.html#costs')
    expect(page.locator('details#costs')).to_have_attribute('open', '')
    expect(page.locator('details#costs')).to_contain_text('US$5')
    expect(page.locator('details#decisions')).not_to_have_attribute('open', '')
    assert not errors
    context.close()


def test_shared_menu_logo_and_terms_help_link(browser, website):
    context = browser.new_context(locale='en-GB', viewport={'width':1440,'height':1000})
    page = context.new_page()
    root = website.removesuffix('workshop/')
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(root + 'index.html')
    expect(page.locator('.site-nav a')).to_have_text(['Flashcards','Workshops','Practice Exam','Study resources','Exam'])
    expect(page.locator('.site-brand')).to_have_attribute('aria-current', 'page')
    page.locator('.site-nav').get_by_role('link', name='Workshops', exact=True).click()
    expect(page).to_have_url(root + 'workshop/index.html')
    expect(page.locator('.site-nav a[aria-current="page"]')).to_have_text('Workshops')
    page.locator('.site-brand').click()
    expect(page).to_have_url(root + 'index.html')
    toggle = page.locator('.site-header .jargon-toggle')
    toggle.focus()
    expect(page.locator('#jargon-explanation')).to_be_visible()
    expect(page.locator('#jargon-explanation-title')).to_have_text('Term help')
    page.keyboard.press('ArrowDown')
    terms = page.locator('.jargon-entry-link')
    expect(terms).to_be_focused()
    expect(terms).to_have_attribute('href', root + 'jargon.html')
    terms.click()
    expect(page).to_have_url(root + 'jargon.html')
    toggle.click()
    expect(toggle).to_have_attribute('aria-checked', 'false')
    page.locator('#site-theme').focus()
    toggle.focus()
    expect(page.locator('#jargon-explanation-title')).to_have_text('Term help')
    page.keyboard.press('ArrowDown')
    expect(page.locator('.jargon-entry-link')).to_be_focused()
    page.screenshot(path=str(ROOT / 'workshop/.tools/screenshots/menu-term-help.png'))
    assert not errors
    context.close()


def test_question_bank_credit_is_plain_text_in_practice_views(browser, website):
    context = browser.new_context(locale='en-GB')
    page = context.new_page()
    root = website.removesuffix('workshop/')
    page.goto(root + 'flashcards.html')
    card = page.evaluate("window.AI200_FLASHCARDS.cards.find(card => card.references.some(ref => new URL(ref.url).hostname === 'ai200prep.com')).id")
    page.goto(root + 'flashcards.html?card=' + card)
    expect(page.locator('#card-reference')).not_to_be_empty()
    expect(page.locator('a[href*="ai200prep.com"]')).to_have_count(0)
    page.goto(root + 'laerestoff.html')
    expect(page.locator('a[href*="ai200prep.com"]')).to_have_count(0)
    page.goto(root + 'practice-exam.html')
    page.locator('#question-count').fill('1')
    page.locator('#time-limit').fill('0')
    page.locator('#random-order').uncheck()
    page.locator('#setup-form button[type="submit"]').click()
    page.locator('#question-fieldset input').first.check()
    page.locator('#check-answer').click()
    expect(page.locator('#feedback-source')).to_have_text('AI-200 Prep')
    expect(page.locator('#feedback-source a')).to_have_count(0)
    context.close()
