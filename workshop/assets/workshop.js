'use strict';
(() => {
  const key = 'products-rag-workshop:v1:completed';
  const ids = [...document.querySelectorAll('[data-chapter-link]')].map(link => link.dataset.chapterLink);
  let completed = new Set();
  const storageNote = document.getElementById('storage-note');
  try { const saved = JSON.parse(localStorage.getItem(key) || '[]'); if (Array.isArray(saved)) completed = new Set(saved.filter(id => ids.includes(id))); }
  catch { if (storageNote) storageNote.textContent = 'Progress is temporary: browser storage is unavailable.'; }
  function save() { try { localStorage.setItem(key, JSON.stringify([...completed])); } catch { if (storageNote) storageNote.textContent = 'Progress is temporary: browser storage is unavailable.'; } }
  function paint() {
    document.querySelectorAll('[data-chapter-link]').forEach(link => {
      const done = completed.has(link.dataset.chapterLink); link.dataset.complete = String(done);
      link.querySelector('.chapter-number').textContent = done ? '✓' : link.dataset.number;
    });
    const count = document.getElementById('progress-count'); if (count) count.textContent = completed.size + ' of ' + ids.length + ' chapters completed';
    const progress = document.getElementById('docs-progress'); if (progress) progress.value = completed.size;
    const button = document.querySelector('[data-complete-chapter]');
    if (button) { const done = completed.has(button.dataset.completeChapter); button.textContent = done ? 'Completed · mark unfinished' : 'Mark chapter complete'; button.setAttribute('aria-pressed', String(done)); }
  }
  document.querySelector('[data-complete-chapter]')?.addEventListener('click', event => {
    const id = event.currentTarget.dataset.completeChapter; completed.has(id) ? completed.delete(id) : completed.add(id); save(); paint();
  });
  document.getElementById('reset-progress')?.addEventListener('click', () => { if (confirm('Reset completion progress for this workshop on this browser?')) { completed.clear(); save(); paint(); } });
  paint();
  function positionMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar?.dataset.open === 'true') sidebar.style.setProperty('--menu-top', document.querySelector('.workshop-toolbar').getBoundingClientRect().bottom + 'px');
  }
  document.getElementById('chapter-menu')?.addEventListener('click', event => {
    const sidebar = document.querySelector('.sidebar'), open = sidebar.dataset.open !== 'true'; sidebar.dataset.open = String(open); event.currentTarget.setAttribute('aria-expanded', String(open)); positionMenu();
  });
  addEventListener('resize', positionMenu);
  addEventListener('scroll', positionMenu, {passive: true});
  function revealSection(hash = location.hash) {
    let target;
    try { target = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return; }
    let section = target?.closest('details');
    while (section) { section.open = true; section = section.parentElement?.closest('details'); }
  }
  revealSection();
  addEventListener('hashchange', () => revealSection());
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const target = new URL(link.href, location.href);
    if (target.origin === location.origin && target.pathname === location.pathname && target.hash) revealSection(target.hash);
  });
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  function highlight(code) {
    if (code.dataset.highlighted) return;
    const text = code.textContent, language = code.dataset.language || 'text';
    if (language === 'text') return;
    const comments = language === 'sql' ? '--[^\\n]*' : ['bash', 'powershell', 'python', 'yaml'].includes(language) ? '#[^\\n]*' : '//[^\\n]*';
    const expression = new RegExp('(' + comments + ')|("(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\')|\\b(if|else|then|fi|for|while|do|done|def|class|return|import|from|with|try|except|raise|public|private|static|void|new|var|param|resource|output|SELECT|FROM|WHERE|INSERT|UPDATE|CREATE|TABLE|VALUES|PRIMARY|KEY|NOT|NULL|true|false|null)\\b|\\b(\\d+(?:\\.\\d+)?)\\b', 'gm');
    let html = '', position = 0;
    for (const match of text.matchAll(expression)) {
      html += escape(text.slice(position, match.index));
      const type = match[1] ? 'comment' : match[2] ? 'string' : match[3] ? 'keyword' : 'number';
      html += '<span class="token-' + type + '">' + escape(match[0]) + '</span>'; position = match.index + match[0].length;
    }
    code.innerHTML = html + escape(text.slice(position)); code.dataset.highlighted = 'true';
  }
  document.querySelectorAll('pre code').forEach(highlight);
  document.addEventListener('click', async event => {
    const button = event.target.closest('[data-copy]'); if (!button) return;
    const code = button.closest('.code-block').querySelector('code');
    try { await navigator.clipboard.writeText(code.textContent); button.textContent = 'Copied'; setTimeout(() => button.textContent = 'Copy', 1800); }
    catch { const range = document.createRange(); range.selectNodeContents(code); getSelection().removeAllRanges(); getSelection().addRange(range); button.textContent = 'Selected · copy manually'; }
  });
  const dialog = document.getElementById('docs-search'), input = document.getElementById('search-input'), results = document.getElementById('search-results');
  let catalog;
  async function openSearch() {
    dialog.showModal(); input.focus();
    try { catalog ||= await fetch('./search-index.json').then(response => { if (!response.ok) throw Error('Search index unavailable'); return response.json(); }); search(); }
    catch { document.getElementById('search-status').textContent = 'Search could not load. Run python scripts/serve.py --port 8000 and reload.'; }
  }
  function search() {
    if (!catalog) return;
    const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = catalog.filter(item => terms.every(term => (item.title + ' ' + item.text).toLowerCase().includes(term))).slice(0, 12);
    results.replaceChildren(...matches.map(item => {
      const row = document.createElement('li'), link = document.createElement('a'), detail = document.createElement('small');
      link.href = './' + item.url; link.textContent = item.title; detail.textContent = item.summary; link.append(detail); row.append(link); return row;
    }));
    document.getElementById('search-status').textContent = matches.length ? matches.length + ' matching pages' : 'No matches. Try “retrieval”, “identity”, “timeout”, or “chunk”.';
  }
  document.getElementById('open-search')?.addEventListener('click', openSearch);
  document.getElementById('close-search')?.addEventListener('click', () => dialog.close());
  input?.addEventListener('input', search);
  document.addEventListener('keydown', event => { if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { event.preventDefault(); openSearch(); } });
  const sourceSelect = document.getElementById('source-select');
  if (sourceSelect) {
    fetch('./source-index.json').then(response => response.json()).then(files => {
      for (const file of files) sourceSelect.add(new Option(file.path, file.path));
      const show = () => {
        const requested = decodeURIComponent(location.hash.slice(1)), file = files.find(item => item.path === requested) || files[0];
        sourceSelect.value = file.path; document.getElementById('source-heading').textContent = file.path;
        const code = document.getElementById('source-code'); code.textContent = file.text; code.dataset.language = file.language; delete code.dataset.highlighted; highlight(code);
        const download = document.getElementById('source-download'); download.href = './' + file.path; download.download = file.path.split('/').pop();
      };
      sourceSelect.addEventListener('change', () => { location.hash = sourceSelect.value; }); addEventListener('hashchange', show); show();
    }).catch(() => document.getElementById('source-heading').textContent = 'Serve the website over HTTP to view source files.');
  }
})();
