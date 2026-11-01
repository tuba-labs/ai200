const test = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const script = readFileSync(path.join(__dirname, '../learning-objectives.js'), 'utf8');
const key = 'ai200-learning-objectives-v1';
const ids = ['containers-acr-images', 'data-postgresql-sdk', 'security-kql'];

function boot(saved = {}, options = {}) {
  const values = new Map(Object.entries(saved)), writes = [];
  const checks = (options.ids || ids).map(id => Object.assign(new EventTarget(), {dataset: {objective: id}, checked: false}));
  const progress = {textContent: ''}, note = {textContent: ''};
  const document = Object.assign(new EventTarget(), {readyState: 'complete', querySelectorAll: () => checks,
    getElementById: id => id === 'objective-progress' ? progress : note});
  const window = new EventTarget();
  const localStorage = {
    getItem(name) { if (options.blockRead) throw Error('Storage blocked'); return values.get(name) ?? null; },
    setItem(name, value) { if (options.blockWrite) throw Error('Storage blocked'); values.set(name, value); writes.push(name); },
  };
  vm.runInNewContext(script, {document, window, localStorage});
  return {values, writes, progress, note,
    checked: () => checks.filter(check => check.checked).map(check => check.dataset.objective),
    select(id, value) { const check = checks.find(check => check.dataset.objective === id); check.checked = value; check.dispatchEvent(new Event('change')); },
    storage(name, value) { window.dispatchEvent(Object.assign(new Event('storage'), {key: name, newValue: value})); },
  };
}

test('completed objectives survive reloading and reordering, and unchecking persists without changing other progress', () => {
  const otherProgress = {'ai200-site-language-v1': 'en', 'ai200-practice-exam-attempt-v1': '{"answers":{"one":["A"]}}'};
  const page = boot(otherProgress);
  page.select(ids[0], true); page.select(ids[2], true);
  assert.deepEqual(page.checked(), [ids[0], ids[2]]);
  assert.equal(page.progress.textContent, '2 of 3 learning objectives completed.');
  assert(page.writes.every(name => name === key));
  const restored = boot(Object.fromEntries(page.values), {ids: ids.toReversed()});
  assert.deepEqual(new Set(restored.checked()), new Set([ids[0], ids[2]]));
  restored.select(ids[0], false);
  const reloaded = boot(Object.fromEntries(restored.values));
  assert.deepEqual(reloaded.checked(), [ids[2]]);
  for (const [name, value] of Object.entries(otherProgress)) assert.equal(reloaded.values.get(name), value);
});

test('malformed saved progress recovers, while unknown IDs, non-string values and duplicates do not count', () => {
  for (const value of ['{broken', '{}', 'null', 'true', '42', '"not a checklist"']) {
    const page = boot({[key]: value});
    assert.deepEqual(page.checked(), []);
    page.select(ids[1], true);
    assert.deepEqual(boot(Object.fromEntries(page.values)).checked(), [ids[1]]);
  }
  const page = boot({[key]: JSON.stringify([ids[1], ids[1], 'removed-objective', 12, null, {}])});
  assert.deepEqual(page.checked(), [ids[1]]);
  assert.equal(page.progress.textContent, '1 of 3 learning objectives completed.');
});

test('when storage is blocked or full, checkboxes keep working for the current tab and explain that progress is temporary', () => {
  for (const options of [{blockRead: true, blockWrite: true}, {blockWrite: true}]) {
    const page = boot({}, options);
    page.select(ids[0], true); page.select(ids[1], true);
    assert.deepEqual(page.checked(), [ids[0], ids[1]]);
    assert(page.note.textContent.includes('Browser storage is unavailable'));
    page.select(ids[0], false);
    assert.deepEqual(page.checked(), [ids[1]]);
    assert.equal(page.progress.textContent, '1 of 3 learning objectives completed.');
  }
});

test('other-tab updates and clearing storage update the checklist without echoing writes or reacting to unrelated preferences', () => {
  const page = boot();
  page.storage(key, JSON.stringify([ids[2]]));
  assert.deepEqual(page.checked(), [ids[2]]);
  page.storage('ai200-site-theme-v1', 'dark');
  assert.deepEqual(page.checked(), [ids[2]]);
  page.storage(key, null);
  assert.deepEqual(page.checked(), []);
  page.storage(key, JSON.stringify([ids[0], ids[1]]));
  page.storage(null, null);
  assert.deepEqual(page.checked(), []);
  assert.deepEqual(page.writes, []);
});
