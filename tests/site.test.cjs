const test = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const site = require('../site.js');
const catalog = require('../data/site-translations.json');
const dictionary = site.translator(catalog);

test('preferences accept supported values and recover from missing or invalid saved values', () => {
  for (const language of ['nb', 'en']) assert.equal(site.languageValue(language), language);
  for (const value of [null, undefined, '', 'no', 'fr', '<script>']) assert.equal(site.languageValue(value), 'nb');
  for (const theme of ['light', 'dark']) for (const systemDark of [false, true]) assert.equal(site.themeValue(theme, systemDark), theme);
  for (const value of [null, undefined, '', 'system', 'blue', '{}']) {
    assert.equal(site.themeValue(value, false), 'light');
    assert.equal(site.themeValue(value, true), 'dark');
  }
});

function boot(values, systemDark, blocked = false) {
  const html = {dataset: {}, style: {}};
  const media = new EventTarget();
  media.matches = systemDark;
  const win = {document: {documentElement: html, readyState: 'loading', addEventListener() {}},
    localStorage: {getItem(key) { if (blocked) throw new Error('blocked'); return values[key] ?? null; }},
    matchMedia: () => media};
  site.start(win);
  return {html, media};
}

test('saved light/dark and language preferences apply before styles, overriding the system theme', () => {
  const saved = boot({'ai200-site-language-v1': 'en', 'ai200-site-theme-v1': 'dark'}, false);
  assert.equal(saved.html.lang, 'en');
  assert.equal(saved.html.dataset.theme, 'dark');
  assert.equal(saved.html.style.colorScheme, 'dark');
  const light = boot({'ai200-site-theme-v1': 'light'}, true);
  assert.equal(light.html.dataset.theme, 'light');
  assert.equal(light.html.style.colorScheme, 'light');
});

test('without a manual preference, choose the system theme once per page load, including legacy system and blocked storage', () => {
  for (const preferences of [{}, {'ai200-site-theme-v1': 'system'}, {'ai200-site-theme-v1': 'invalid'}]) {
    for (const dark of [false, true]) {
      const page = boot(preferences, dark);
      assert.equal(page.html.lang, 'nb');
      assert.equal(page.html.dataset.theme, dark ? 'dark' : 'light');
      page.media.matches = !dark;
      page.media.dispatchEvent(new Event('change'));
      assert.equal(page.html.dataset.theme, dark ? 'dark' : 'light');
      assert.equal(boot(preferences, !dark).html.dataset.theme, dark ? 'light' : 'dark');
    }
  }
  assert.equal(boot({}, true, true).html.dataset.theme, 'dark');
  assert.equal(boot({}, false, true).html.dataset.theme, 'light');
});

test('translation preserves inline spacing, technical text and unknown user content', () => {
  assert.equal(dictionary.translate(' \nTa prøveeksamen →  ', 'en'), ' \nTake a practice exam →  ');
  assert.equal(dictionary.translate('Take a practice exam →', 'nb'), 'Ta en prøveeksamen →');
  assert.equal(dictionary.translate('az containerapp update --name orders', 'en'), 'az containerapp update --name orders');
  assert.equal(dictionary.translate('My own notes about this example', 'nb'), 'My own notes about this example');
  assert.equal(dictionary.translate('Enter the name of the secret', 'nb'), 'Enter the name of the secret');
  assert.equal(dictionary.has('Enter the name of the secret'), false);
});

test('changing counts, progress, domains and exam results are localised in both directions', () => {
  for (const [nb, en] of [
    ['Domene 4 · Sikkerhet og overvåking', 'Domain 4 · Security & monitoring'],
    ['359 spørsmål · 4 caser · lastet ned 2026-10-30', '359 questions · 4 case studies · downloaded 2026-10-30'],
    ['2 av 45 besvart · 1 merket for gjennomgang', '2 of 45 answered · 1 marked for review'],
    ['Plass 35 av 560 i køen', 'Position 35 of 560 in queue'],
    ['Spørsmål 4, besvart, merket for gjennomgang', 'Question 4, answered, marked for review'],
    ['Prøven er levert. 45 spørsmål · 12 min.', 'Exam submitted. 45 questions · 12 min.'],
    ['1 ubesvart spørsmål · 0 merket for gjennomgang.', '1 unanswered question · 0 marked for review.'],
  ]) {
    assert.equal(dictionary.translate(en, 'nb'), nb);
    assert.equal(dictionary.translate(nb, 'en'), en);
  }
});

test('the translation catalog has complete messages and matching template parameters', () => {
  const sources = new Set();
  for (const [nb, en] of catalog.messages) {
    assert(nb.trim() && en.trim());
    assert(!sources.has(nb), `Duplicate Norwegian message: ${nb}`);
    sources.add(nb);
    assert.equal(dictionary.translate(nb, 'en'), en);
  }
  for (const [nb, en] of catalog.templates) {
    const names = value => [...value.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort();
    assert.deepEqual(names(nb), names(en));
  }
});

test('dark-theme text, muted text, links and primary buttons meet normal-text contrast', () => {
  const css = readFileSync(path.join(__dirname, '../site-theme.css'), 'utf8');
  const dark = css.match(/:root\[data-theme=dark\]\{([^}]+)\}/)[1];
  const colors = Object.fromEntries([...dark.matchAll(/(--site-[\w-]+):(#[a-f\d]{6})/g)].map(match => [match[1], match[2]]));
  const luminance = hex => {
    const linear = hex.match(/[a-f\d]{2}/g).map(value => parseInt(value, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    return linear[0] * .2126 + linear[1] * .7152 + linear[2] * .0722;
  };
  const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + .05) / (Math.min(luminance(a), luminance(b)) + .05);
  for (const foreground of ['--site-ink', '--site-muted', '--site-link']) {
    for (const background of ['--site-bg', '--site-surface', '--site-raised']) assert(contrast(colors[foreground], colors[background]) >= 4.5, foreground + ' on ' + background);
  }
  assert(contrast('#ffffff', colors['--site-blue']) >= 4.5);
  assert(contrast(colors['--site-green'], '#14382e') >= 4.5);
  assert(contrast(colors['--site-amber'], '#392b1a') >= 4.5);
});
