(() => {
  'use strict';
  const key = 'ai200-new-workshops-progress-v1';
  let available = true;
  let state = { checks: {}, notes: {} };
  const record = value => value && typeof value === 'object' && !Array.isArray(value);
  try {
    const stored = JSON.parse(localStorage.getItem(key) || '{}');
    if (record(stored)) {
      if (record(stored.checks)) state.checks = Object.fromEntries(Object.entries(stored.checks).filter(([, value]) => value === true));
      if (record(stored.notes)) state.notes = Object.fromEntries(Object.entries(stored.notes).filter(([, value]) => typeof value === 'string'));
    }
  } catch { available = false; }
  const checks = [...document.querySelectorAll('input[data-progress]')];
  const notes = [...document.querySelectorAll('textarea[data-note]')];
  function summary() {
    const tasks = checks.filter(input => input.dataset.kind === 'task');
    const terms = checks.filter(input => input.dataset.kind === 'term');
    for (const element of document.querySelectorAll('[data-progress-summary]')) {
      element.textContent = `${tasks.filter(input => input.checked).length}/${tasks.length} oppgaver · ${terms.filter(input => input.checked).length}/${terms.length} begreper`;
    }
    for (const element of document.querySelectorAll('[data-storage-note]')) {
      element.textContent = available ? 'Notater og avkryssing lagres lokalt i denne nettleseren. Flashcardenes egenvurdering føres separat.' : 'Lokal lagring er utilgjengelig. Eksporter notatene før du lukker siden.';
    }
  }
  function save() {
    try { localStorage.setItem(key, JSON.stringify(state)); available = true; }
    catch { available = false; }
    summary();
  }
  for (const input of checks) {
    input.checked = state.checks[input.dataset.progress] === true;
    input.addEventListener('change', () => {
      if (input.checked) state.checks[input.dataset.progress] = true;
      else delete state.checks[input.dataset.progress];
      save();
    });
  }
  for (const textarea of notes) {
    textarea.value = state.notes[textarea.dataset.note] || '';
    textarea.addEventListener('input', () => { state.notes[textarea.dataset.note] = textarea.value; save(); });
  }
  for (const button of document.querySelectorAll('[data-export]')) {
    button.addEventListener('click', () => {
      const payload = { version: 1, workshop: button.dataset.export, exportedAt: new Date().toISOString(),
        checks: Object.fromEntries(checks.map(input => [input.dataset.progress, input.checked])),
        notes: Object.fromEntries(notes.map(textarea => [textarea.dataset.note, textarea.value])) };
      const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url; link.download = `ai200-${button.dataset.export}-notater.json`;
      document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 0);
    });
  }
  const filters = document.querySelector('[data-coverage-filters]');
  if (filters) {
    const rows = [...document.querySelectorAll('[data-coverage-row]')];
    const names = ['domain', 'category', 'kind', 'search'];
    const params = new URLSearchParams(location.search);
    for (const name of names) {
      const input = filters.elements.namedItem(name);
      const value = params.get(name);
      if (value && (name === 'search' || [...input.options].some(option => option.value === value))) input.value = value;
    }
    function filter() {
      const value = Object.fromEntries(names.map(name => [name, filters.elements.namedItem(name).value]));
      let count = 0;
      for (const row of rows) {
        row.hidden = !(['domain', 'category', 'kind'].every(name => value[name] === 'all' || value[name] === row.dataset[name]) && row.textContent.toLocaleLowerCase().includes(value.search.trim().toLocaleLowerCase()));
        if (!row.hidden) count++;
      }
      document.querySelector('[data-coverage-count]').textContent = `${count} av ${rows.length} kort`;
    }
    filters.addEventListener('submit', event => event.preventDefault());
    filters.addEventListener('input', filter);
    filters.addEventListener('change', filter);
    filter();
  }
  function openAnchor() {
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch { return; }
    for (let element = target; element; element = element.parentElement) if (element.tagName === 'DETAILS') element.open = true;
  }
  window.addEventListener('hashchange', openAnchor);
  openAnchor(); summary();
})();
