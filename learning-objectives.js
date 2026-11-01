/* The overview checklist uses language-independent IDs and its own saved state. */
(() => {
  'use strict';
  function start() {
    const checks = [...document.querySelectorAll('input[data-objective]')];
    if (!checks.length) return;
    const key = 'ai200-learning-objectives-v1';
    const ids = new Set(checks.map(check => check.dataset.objective));
    const progress = document.getElementById('objective-progress');
    const note = document.getElementById('objective-storage-note');
    let storageAvailable = true, raw;
    try { raw = localStorage.getItem(key); } catch { storageAvailable = false; }
    function parse(value) {
      try {
        const saved = JSON.parse(value);
        return new Set(Array.isArray(saved) ? saved.filter(id => ids.has(id)) : []);
      } catch { return new Set(); }
    }
    let completed = parse(raw);
    const translate = value => window.AI200Site?.t ? window.AI200Site.t(value) : value;
    function render() {
      checks.forEach(check => { check.checked = completed.has(check.dataset.objective); });
      progress.textContent = translate(`${completed.size} of ${checks.length} learning objectives completed.`);
      note.textContent = translate(storageAvailable ? 'Progress is saved in this browser.'
        : 'Browser storage is unavailable. Checkmarks will only last until this tab is closed.');
    }
    checks.forEach(check => check.addEventListener('change', () => {
      if (check.checked) completed.add(check.dataset.objective);
      else completed.delete(check.dataset.objective);
      try { localStorage.setItem(key, JSON.stringify([...completed])); storageAvailable = true; }
      catch { storageAvailable = false; }
      render();
    }));
    window.addEventListener('storage', event => {
      if (event.key !== key && event.key !== null) return;
      completed = parse(event.newValue); render();
    });
    window.addEventListener('site:languagechange', render);
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
