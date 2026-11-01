(() => {
  'use strict';

  document.querySelectorAll('[data-account-tabs]').forEach(group => {
    const tablist = group.querySelector('[data-tab-list]');
    const tabs = [...group.querySelectorAll('[data-tab]')];
    const panels = tabs.map(tab => document.getElementById(tab.dataset.tab));
    if (!tablist || !tabs.length || panels.some(panel => !panel || !group.contains(panel))) return;

    const activate = (selected, { focus = false, updateHash = false } = {}) => {
      tabs.forEach((tab, index) => {
        const active = tab === selected;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        panels[index].hidden = !active;
      });
      if (focus) selected.focus();
      if (updateHash) {
        try {
          history.replaceState(null, '', `#${selected.dataset.tab}`);
        } catch {
          // Tab switching still works when local-file history updates are blocked.
        }
      }
    };

    const selectFromHash = () => {
      let id;
      try {
        id = decodeURIComponent(location.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      const panel = target?.closest('[data-tab-panel]');
      const index = panels.indexOf(panel);
      if (index === -1) return;
      activate(tabs[index]);
      return target;
    };

    tablist.setAttribute('role', 'tablist');
    tabs.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panels[index].id);
      panels[index].setAttribute('role', 'tabpanel');
      panels[index].setAttribute('aria-labelledby', tab.id);
      panels[index].tabIndex = 0;
      tab.addEventListener('click', () => activate(tab, { updateHash: true }));
      tab.addEventListener('keydown', event => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[next], { focus: true, updateHash: true });
      });
    });
    activate(tabs[0]);
    tablist.hidden = false;
    group.dataset.enhanced = 'true';

    const revealHashTarget = () => {
      const target = selectFromHash();
      if (!target) return;
      window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
    };
    revealHashTarget();
    window.addEventListener('load', revealHashTarget, { once: true });
    window.addEventListener('hashchange', revealHashTarget);
  });

  const checks = [...document.querySelectorAll('input[type="checkbox"][data-check]')];
  const checkKeys = new Map();
  const checkGroups = new Map();
  let storageAvailable = true;
  const readState = key => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '{}');
      if (value && typeof value === 'object' && !Array.isArray(value)) return value;
    } catch {
      storageAvailable = false;
    }
    return {};
  };
  checks.forEach(check => {
    const key = `ai200-workshop-v1:${location.pathname}`;
    checkKeys.set(check, key);
    if (!checkGroups.has(key)) checkGroups.set(key, []);
    checkGroups.get(key).push(check);
  });
  checkGroups.forEach((items, key) => {
    const state = readState(key);
    items.forEach(check => { check.checked = state[check.dataset.check] === true; });
  });
  let progress = document.querySelector('[data-progress]');
  if (checks.length && !progress) {
    progress = document.createElement('p');
    progress.dataset.progress = '';
    progress.setAttribute('aria-live', 'polite');
    const last = checks[checks.length - 1];
    (last.closest('.check-item') || last.parentElement).after(progress);
  }
  const updateProgress = () => {
    if (!progress) return;
    const done = checks.filter(check => check.checked).length;
    progress.textContent = `${done} av ${checks.length} øvelsessjekkpunkter fullført. `;
    const note = document.createElement('span');
    note.className = 'progress-note';
    note.textContent = storageAvailable
      ? 'Lagres bare i denne nettleseren. Fjern avhuking for å nullstille et punkt.'
      : 'Nettleseren kan ikke lagre fremdrift. Avhuking gjelder bare til siden lukkes.';
    progress.append(note);
  };
  checks.forEach(check => check.addEventListener('change', () => {
    const storageKey = checkKeys.get(check);
    const state = { ...readState(storageKey), ...Object.fromEntries(
      checkGroups.get(storageKey).map(item => [item.dataset.check, item.checked])) };
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      storageAvailable = true;
    } catch {
      storageAvailable = false;
    }
    updateProgress();
  }));
  window.addEventListener('storage', event => {
    if (!checkGroups.has(event.key)) return;
    const state = readState(event.key);
    checkGroups.get(event.key).forEach(check => { check.checked = state[check.dataset.check] === true; });
    updateProgress();
  });
  updateProgress();

  const status = document.createElement('div');
  status.className = 'sr-only';
  status.setAttribute('role', 'status');
  document.body.append(status);
  document.querySelectorAll('pre').forEach((pre, index) => {
    const code = pre.querySelector('code') || pre;
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    const toolbar = document.createElement('div');
    toolbar.className = 'code-toolbar';
    const label = document.createElement('span');
    label.textContent = pre.dataset.language || code.dataset.language || 'Kode / kommando';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'Kopier';
    button.setAttribute('aria-label', `Kopier kodeblokk ${index + 1}`);
    toolbar.append(label, button);
    pre.before(wrapper);
    wrapper.append(toolbar, pre);
    button.addEventListener('click', async () => {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Kopiert!';
        status.textContent = `Kodeblokk ${index + 1} er kopiert.`;
      } catch {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Trykk Ctrl/Cmd+C';
        status.textContent = 'Automatisk kopiering er utilgjengelig. Koden er markert; trykk Ctrl+C eller Cmd+C.';
      }
      window.setTimeout(() => { button.textContent = 'Kopier'; }, 3000);
    });
  });
})();
