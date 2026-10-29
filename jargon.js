/* Shared explanations for static pages and dynamically rendered flashcards. */
(() => {
  'use strict';
  if (!window.AI200_JARGON || window.AI200Jargon) return;
  const glossaryURL = new URL('./jargon.html', document.currentScript.src).href;
  const terms = new Map(window.AI200_JARGON.terms.map(term => [term.id, term]));
  const platforms = window.AI200_JARGON.platforms || {};
  const relationKinds = window.AI200_JARGON.relationKinds || {};
  const names = new Map();
  const key = value => value.replace(/[\t \u00a0]+/g, ' ').toLocaleLowerCase();
  for (const term of terms.values()) {
    for (const name of [term.primary, ...term.aliases]) names.set(key(name), term.id);
  }
  const escapeRegex = value => value.replace(/[.*+?^$()|[\]{}\\]/g, '\\$&');
  const alternatives = [...names.keys()].sort((a, b) => b.length - a.length)
    .map(name => escapeRegex(name).replace(/ /g, '[\\t \\u00a0]+'));
  const pattern = new RegExp('(?<![\\p{L}\\p{N}_])(?:' + alternatives.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
  const skip = 'script,style,pre,code,kbd,samp,textarea,input,select,option,svg,math,[contenteditable]:not([contenteditable="false"]),[data-no-jargon],.jargon-term,.jargon-popover,.jargon-tools';
  const flashcardToggle = document.getElementById('disable-tooltips');
  const sitePreference = 'ai200-jargon-enabled-v1';
  const preference = flashcardToggle ? 'ai200-flashcard-jargon-enabled-v1' : sitePreference;
  let enabled = true;
  try {
    const stored = localStorage.getItem(preference);
    enabled = (stored ?? (flashcardToggle ? localStorage.getItem(sitePreference) : null)) !== 'false';
  } catch {}
  let observer, active = null, pinned = false, overPopup = false, dismissed = null;
  let openTimer, closeTimer, restoringFocus = false, pointerDown = false;
  const descriptions = new WeakMap();
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  const popup = make('aside', 'jargon-popover');
  popup.id = 'jargon-explanation';
  popup.hidden = true;
  popup.setAttribute('role', 'dialog');
  popup.setAttribute('aria-modal', 'false');
  popup.setAttribute('aria-labelledby', 'jargon-explanation-title');
  popup.setAttribute('aria-describedby', 'jargon-explanation-description');
  popup.dataset.noJargon = '';
  const heading = make('div', 'jargon-popover-heading');
  const title = make('h2', '');
  title.id = 'jargon-explanation-title';
  const closeButton = make('button', 'jargon-close', '×');
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Lukk forklaring');
  heading.append(title, closeButton);
  const fullName = make('p', 'jargon-popover-full');
  fullName.id = 'jargon-explanation-full';
  const definition = make('p', 'jargon-popover-definition');
  definition.id = 'jargon-explanation-description';
  definition.lang = 'en';
  const aliases = make('p', 'jargon-popover-aliases');
  const exampleArea = make('section', 'jargon-example');
  exampleArea.dataset.noJargon = '';
  exampleArea.hidden = true;
  const relatedArea = make('section', 'jargon-related');
  relatedArea.dataset.noJargon = '';
  relatedArea.hidden = true;
  const entryLink = make('a', 'jargon-entry-link', 'Alle navn og kilder i begrepslisten →');
  popup.append(heading, fullName, definition, exampleArea, relatedArea, aliases, entryLink);
  document.body.append(popup);

  function renderExample(container, example) {
    container.replaceChildren();
    container.hidden = !example;
    if (!example) return;
    container.classList.add('jargon-example');
    container.append(make('h3', '', 'Eksempel · ' + example.language));
    if (example.mode === 'inline') {
      const pre = make('pre', '');
      pre.append(make('code', '', example.code));
      container.append(pre);
    } else if (example.mode === 'page') {
      const link = make('a', '', 'Se hele eksemplet i ' + example.language + ' (ny fane) ↗');
      link.href = new URL(example.url, glossaryURL).href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      container.append(link);
    }
    if (example.table) {
      const table = make('table', 'jargon-example-table');
      table.append(make('caption', '', example.table.caption));
      const head = make('thead', ''), headings = make('tr', '');
      for (const label of example.table.headers) {
        const cell = make('th', '', label);
        cell.scope = 'col';
        headings.append(cell);
      }
      head.append(headings);
      const body = make('tbody', '');
      for (const row of example.table.rows) {
        const line = make('tr', ''), source = make('th', '', row[0]);
        source.scope = 'row';
        const value = make('td', '');
        value.append(make('code', '', row[1]));
        line.append(source, value);
        body.append(line);
      }
      table.append(head, body);
      container.append(table);
    }
    const summary = make('p', '', example.summary);
    summary.lang = 'en';
    container.append(summary);
  }

  function renderRelated(related) {
    relatedArea.replaceChildren();
    relatedArea.hidden = !related?.length;
    if (!related?.length) return;
    relatedArea.append(make('h3', '', 'Liknende begreper og viktige forskjeller'));
    const list = make('dl', 'jargon-relations-list');
    for (const row of related.slice(0, 3)) {
      const item = make('div', 'jargon-relation');
      const name = make('dt', '');
      name.append(make('span', 'jargon-relation-meta', platforms[row.platform] + ' · ' + relationKinds[row.kind]));
      const link = make('a', '', row.name);
      link.href = row.term ? glossaryURL + '#' + row.term : row.url;
      if (!row.term) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      name.append(link);
      const details = make('dd', '');
      const note = make('p', '', row.note);
      note.lang = 'en';
      details.append(note);
      item.append(name, details);
      list.append(item);
    }
    relatedArea.append(list);
    if (related.length > 3) {
      const remaining = related.length - 3;
      relatedArea.append(make('p', 'jargon-related-more', '+ ' + remaining + (remaining === 1 ? ' sammenligning' : ' sammenligninger') + ' i begrepslisten.'));
    }
  }
  const examplesByCard = new Map([...terms.values()].filter(term => term.sourceCard && term.example)
    .map(term => [term.sourceCard, term.example]));
  for (const card of window.AI200_FLASHCARDS?.cards || []) {
    if (card.example) examplesByCard.set(card.id, card.example);
  }
  function renderCardExample() {
    const container = document.getElementById('card-example');
    if (!container) return;
    const example = container.dataset.answer === 'true' ? examplesByCard.get(container.dataset.cardId) : null;
    renderExample(container, example);
  }

  function position() {
    if (!active?.isConnected || popup.hidden) return;
    const rect = active.getBoundingClientRect();
    const view = window.visualViewport;
    const leftEdge = view?.offsetLeft || 0, topEdge = view?.offsetTop || 0;
    const width = view?.width || window.innerWidth;
    const height = view?.height || window.innerHeight;
    popup.style.maxWidth = Math.max(0, width - 24) + 'px';
    popup.style.maxHeight = Math.max(100, height - 24) + 'px';
    const box = popup.getBoundingClientRect();
    const left = Math.max(leftEdge + 12, Math.min(rect.left, leftEdge + width - box.width - 12));
    let top = rect.bottom + 9;
    if (top + box.height > topEdge + height - 12) top = rect.top - box.height - 9;
    top = Math.max(topEdge + 12, Math.min(top, topEdge + height - box.height - 12));
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
  }
  function hide(restoreFocus = false) {
    clearTimeout(openTimer); clearTimeout(closeTimer);
    const previous = active;
    if (previous) {
      const before = descriptions.get(previous);
      if (before) previous.setAttribute('aria-describedby', before);
      else previous.removeAttribute('aria-describedby');
      if (previous.tagName === 'BUTTON') previous.setAttribute('aria-expanded', 'false');
    }
    active = null; pinned = false; overPopup = false; popup.hidden = true;
    if (restoreFocus && previous?.isConnected && previous.tagName === 'BUTTON') {
      restoringFocus = true;
      previous.focus({preventScroll: true});
      restoringFocus = false;
    }
  }
  function show(trigger, pin = false) {
    clearTimeout(openTimer); clearTimeout(closeTimer);
    if (!enabled || !trigger?.isConnected || dismissed === trigger) return;
    if (pinned && active !== trigger && !pin) return;
    const term = terms.get(trigger.dataset.jargonId);
    if (!term) return;
    const changed = active !== trigger;
    if (changed) hide();
    active = trigger; pinned = pinned || pin;
    title.textContent = term.primary;
    fullName.textContent = term.fullName;
    fullName.hidden = !term.fullName || term.fullName === term.primary;
    definition.textContent = term.definition;
    renderExample(exampleArea, term.example);
    renderRelated(term.related);
    const otherNames = term.aliases.filter(name => name !== term.fullName);
    aliases.textContent = otherNames.length ? 'Andre navn: ' + otherNames.slice(0, 5).join(', ') + (otherNames.length > 5 ? ' …' : '') : '';
    aliases.hidden = !otherNames.length;
    entryLink.href = glossaryURL + '#' + term.id;
    entryLink.textContent = term.related?.length ? 'Alle sammenligninger, navn og kilder →' : 'Alle navn og kilder i begrepslisten →';
    if (!descriptions.has(trigger)) descriptions.set(trigger, trigger.getAttribute('aria-describedby') || '');
    const before = descriptions.get(trigger);
    trigger.setAttribute('aria-describedby', [before, term.fullName ? fullName.id : '', definition.id].filter(Boolean).join(' '));
    if (trigger.tagName === 'BUTTON') trigger.setAttribute('aria-expanded', 'true');
    popup.hidden = false;
    if (changed) popup.scrollTop = 0;
    position();
  }
  function scheduleHide() {
    clearTimeout(openTimer); clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      if (!pinned && !overPopup && document.activeElement !== active && !popup.contains(document.activeElement)) hide();
    }, 220);
  }
  function triggerFrom(node) {
    return node instanceof Element ? node.closest('.jargon-term') : null;
  }
  function excluded(node) {
    return !node.parentElement || node.parentElement.closest(skip);
  }
  function annotate(root) {
    if (!enabled || !root?.isConnected) return;
    observer?.disconnect();
    try {
      const nodes = [];
      if (root.nodeType === Node.TEXT_NODE) {
        if (!excluded(root)) nodes.push(root);
      } else {
        if (root.nodeType !== Node.ELEMENT_NODE || root.closest(skip)) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
          acceptNode: node => !excluded(node) && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        });
        while (walker.nextNode()) nodes.push(walker.currentNode);
      }
      for (const node of nodes) {
        const text = node.nodeValue;
        const blocked = [...text.matchAll(/(?:https?:\/\/|file:\/\/|www\.)[^\s<>]+/giu)]
          .map(match => [match.index, match.index + match[0].length]);
        const self = new Set((node.parentElement.closest('[data-jargon-exclude]')?.dataset.jargonExclude || '').split(' '));
        const passive = !!node.parentElement.closest('a,button,label,summary,[role="button"]');
        const fragment = document.createDocumentFragment();
        let cursor = 0, changed = false;
        pattern.lastIndex = 0;
        for (const match of text.matchAll(pattern)) {
          const start = match.index, end = start + match[0].length;
          const id = names.get(key(match[0]));
          if (!id || self.has(id) || text[start - 1] === '.'
              || (text[end] === '.' && /[\p{L}\p{N}_]/u.test(text[end + 1] || ''))
              || blocked.some(([a, b]) => start < b && end > a)) continue;
          fragment.append(document.createTextNode(text.slice(cursor, start)));
          const trigger = make(passive ? 'span' : 'button', 'jargon-term', match[0]);
          trigger.dataset.jargonId = id;
          if (passive) trigger.dataset.jargonPassive = '';
          else {
            trigger.type = 'button';
            trigger.setAttribute('aria-haspopup', 'dialog');
            trigger.setAttribute('aria-expanded', 'false');
            trigger.setAttribute('aria-controls', popup.id);
          }
          fragment.append(trigger); cursor = end; changed = true;
        }
        if (changed) {
          fragment.append(document.createTextNode(text.slice(cursor)));
          node.replaceWith(fragment);
        }
      }
    } finally {
      observer?.observe(document.body, {subtree: true, childList: true, characterData: true});
    }
  }

  document.addEventListener('pointerover', event => {
    if (event.pointerType === 'touch' || event.buttons || window.getSelection()?.toString()) return;
    const trigger = triggerFrom(event.target);
    if (!trigger || trigger.contains(event.relatedTarget)) return;
    clearTimeout(closeTimer);
    clearTimeout(openTimer);
    openTimer = setTimeout(() => { if (!window.getSelection()?.toString()) show(trigger); }, 160);
  });
  document.addEventListener('pointerout', event => {
    const trigger = triggerFrom(event.target);
    if (!trigger || trigger.contains(event.relatedTarget)) return;
    if (dismissed === trigger) dismissed = null;
    if (!popup.contains(event.relatedTarget)) scheduleHide();
  });
  popup.addEventListener('pointerenter', () => { overPopup = true; clearTimeout(closeTimer); });
  popup.addEventListener('pointerleave', () => { overPopup = false; scheduleHide(); });
  document.addEventListener('focusin', event => {
    if (restoringFocus || pointerDown) return;
    const trigger = triggerFrom(event.target) || (event.target.matches('a') ? event.target.querySelector('.jargon-term') : null);
    if (trigger) show(trigger);
    else if (!popup.contains(event.target)) hide();
  });
  document.addEventListener('focusout', event => {
    if (dismissed === event.target) dismissed = null;
    if (!popup.contains(event.relatedTarget) && event.relatedTarget !== active) {
      if (pinned) hide();
      else scheduleHide();
    }
  });
  document.addEventListener('pointerdown', event => {
    pointerDown = event.button === 0;
    if (!popup.hidden && !popup.contains(event.target) && (!pinned || !active?.contains(event.target))) hide();
  }, true);
  document.addEventListener('pointerup', () => { pointerDown = false; }, true);
  document.addEventListener('pointercancel', () => { pointerDown = false; }, true);
  window.addEventListener('blur', () => { pointerDown = false; });
  document.addEventListener('click', event => {
    const trigger = triggerFrom(event.target);
    if (!trigger || trigger.tagName !== 'BUTTON' || window.getSelection()?.toString()) return;
    event.preventDefault(); event.stopPropagation();
    if (active === trigger && pinned) { dismissed = trigger; hide(); return; }
    dismissed = null;
    show(trigger, true);
    if (event.detail === 0) (exampleArea.querySelector('a') || entryLink).focus();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !popup.hidden) {
      dismissed = active;
      const restore = popup.contains(document.activeElement);
      hide(restore); event.preventDefault(); event.stopPropagation();
    } else if (event.key === 'ArrowDown' && triggerFrom(event.target)?.tagName === 'BUTTON') {
      dismissed = null; show(triggerFrom(event.target), true); (exampleArea.querySelector('a') || entryLink).focus(); event.preventDefault(); event.stopPropagation();
    } else if (event.key === 'Tab' && popup.contains(event.target)) {
      if ((!event.shiftKey && event.target === entryLink) || (event.shiftKey && event.target === closeButton)) {
        const previous = active;
        hide(true);
        if (event.shiftKey || !previous) event.preventDefault();
      }
    }
  }, true);
  closeButton.addEventListener('click', () => { dismissed = active; hide(true); });
  window.addEventListener('resize', position);
  window.addEventListener('scroll', position, true);
  window.visualViewport?.addEventListener('resize', position);

  const controls = make('span', 'jargon-tools');
  controls.dataset.noJargon = '';
  const toggle = make('button', 'jargon-toggle');
  toggle.type = 'button';
  function toggleLabel() {
    toggle.textContent = enabled ? 'Begrepshjelp på' : 'Begrepshjelp av';
    toggle.setAttribute('aria-pressed', String(enabled));
    if (flashcardToggle) flashcardToggle.checked = !enabled;
  }
  function setEnabled(value) {
    enabled = value; hide(); dismissed = null;
    try { localStorage.setItem(preference, String(enabled)); } catch {}
    if (enabled) annotate(document.body);
    else {
      for (const trigger of document.querySelectorAll('.jargon-term')) trigger.replaceWith(document.createTextNode(trigger.textContent));
    }
    toggleLabel();
  }
  toggle.addEventListener('click', () => setEnabled(!enabled));
  flashcardToggle?.addEventListener('change', () => setEnabled(!flashcardToggle.checked));
  toggleLabel(); controls.append(toggle);
  const navLink = document.querySelector('.jargon-nav-link');
  if (navLink) navLink.after(controls);
  else (document.querySelector('header nav') || document.body).append(controls);

  const form = document.querySelector('[data-jargon-search]');
  if (form) {
    const entries = [...document.querySelectorAll('[data-jargon-entry]')];
    const fold = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
    const filter = () => {
      const query = fold(form.elements.term.value.trim());
      const domain = form.elements.domain.value;
      let count = 0;
      for (const entry of entries) {
        const domains = entry.dataset.domains.split(' ').filter(Boolean);
        entry.hidden = !(fold(entry.dataset.search).includes(query)
          && (domain === 'all' || (domain === 'shared' ? !domains.length : domains.includes(domain))));
        if (!entry.hidden) count++;
      }
      document.querySelector('[data-jargon-count]').textContent = count + ' av ' + entries.length + ' begreper';
      document.querySelector('[data-jargon-empty]').hidden = count !== 0;
    };
    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('input', filter);
    form.addEventListener('change', filter);
    function followHash() {
      let entry;
      try { entry = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch {}
      if (entry?.matches('[data-jargon-entry]') && entry.hidden) {
        form.reset(); filter(); entry.scrollIntoView({block: 'start'});
      }
    }
    window.addEventListener('hashchange', followHash);
    filter(); followHash();
  }
  annotate(document.body);
  observer = new MutationObserver(records => {
    if (active && !active.isConnected) hide();
    if (!enabled) return;
    const roots = new Set();
    for (const record of records) {
      if (record.type === 'characterData') roots.add(record.target);
      else for (const node of record.addedNodes) roots.add(node);
    }
    for (const root of roots) annotate(root);
  });
  observer.observe(document.body, {subtree: true, childList: true, characterData: true});
  window.AI200Jargon = {annotate, close: () => hide(), terms, renderCardExample};
  renderCardExample();
})();
