/* Shared preferences and in-place translation. No question bank or progress is changed. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.AI200Site = api; api.start(root); }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const LANGUAGE_KEY = 'ai200-site-language-v1', THEME_KEY = 'ai200-site-theme-v1';
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const languageValue = value => ['nb', 'en'].includes(value) ? value : 'nb';
  const themeValue = value => ['system', 'light', 'dark'].includes(value) ? value : 'system';
  const resolvedTheme = (choice, darkSystem) => choice === 'system' ? darkSystem ? 'dark' : 'light' : choice;
  const protectedSelector = 'script,style,pre,code,kbd,samp,textarea,.jargon-term,[contenteditable]:not([contenteditable="false"]),[translate="no"],[data-keep-english]';

  function translator(catalog = {}) {
    const exact = new Map(), patterns = [];
    for (const [nb, en] of catalog.messages || []) {
      const pair = {nb, en};
      exact.set(normalize(nb), pair); exact.set(normalize(en), pair);
    }
    for (const value of catalog.unchanged || []) if (!exact.has(normalize(value))) exact.set(normalize(value), {nb: value, en: value});
    const compile = value => {
      const names = [];
      const expression = value.split(/(\{\w+\})/).map(part => {
        if (/^\{\w+\}$/.test(part)) {
          const name = part.slice(1, -1);
          names.push(name);
          return /^(count|number|position|domain|percent|correct|questions|cases|total|answered|flagged|minutes)$/.test(name) ? '([\\d.,]+)' : '(.+?)';
        }
        return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }).join('');
      return {expression: new RegExp('^' + expression + '$'), names};
    };
    for (const [nb, en] of catalog.templates || []) patterns.push({nb, en, sources: [compile(nb), compile(en)]});
    function translate(value, language = 'nb', depth = 0) {
      const source = normalize(value);
      const target = languageValue(language);
      let translated = exact.get(source)?.[target];
      if (translated === undefined && depth < 2) {
        for (const pattern of patterns) {
          const match = pattern.sources.map(compiled => ({compiled, values: source.match(compiled.expression)})).find(item => item.values);
          if (!match) continue;
          const params = Object.fromEntries(match.compiled.names.map((name, i) => [name, translate(match.values[i + 1], target, depth + 1)]));
          translated = pattern[target].replace(/\{(\w+)\}/g, (_, name) => params[name]);
          break;
        }
      }
      if (translated === undefined) return value;
      const whitespace = value.match(/^(\s*)[\s\S]*?(\s*)$/);
      return whitespace[1] + translated + whitespace[2];
    }
    return {translate, has: value => exact.has(normalize(value)) || patterns.some(pattern => pattern.sources.some(source => source.expression.test(normalize(value))))};
  }

  function start(win) {
    const doc = win.document, html = doc.documentElement;
    const read = key => { try { return win.localStorage.getItem(key); } catch { return null; } };
    const save = (key, value) => { try { win.localStorage.setItem(key, value); } catch { /* Preferences still work in this tab. */ } };
    const media = win.matchMedia?.('(prefers-color-scheme: dark)');
    let language = languageValue(read(LANGUAGE_KEY)), theme = themeValue(read(THEME_KEY));
    let dictionary;
    const originals = new WeakMap(), attributeOriginals = new WeakMap();
    function applyTheme() {
      html.dataset.theme = resolvedTheme(theme, media?.matches === true);
      html.style.colorScheme = html.dataset.theme;
    }
    html.lang = language;
    applyTheme();
    media?.addEventListener('change', () => { if (theme === 'system') applyTheme(); });

    function protectedContent(element) { return !element || Boolean(element.closest(protectedSelector)); }
    function translated(value) { return dictionary.translate(value, language); }
    function textNode(node) {
      if (protectedContent(node.parentElement) || !node.nodeValue.trim()) return;
      let record = originals.get(node);
      if (!record || node.nodeValue !== record.rendered) record = {source: node.nodeValue};
      record.rendered = translated(record.source);
      originals.set(node, record);
      if (node.nodeValue !== record.rendered) node.nodeValue = record.rendered;
    }
    function attributes(element) {
      if (protectedContent(element)) return;
      let records = attributeOriginals.get(element);
      if (!records) { records = {}; attributeOriginals.set(element, records); }
      for (const name of ['aria-label', 'aria-valuetext', 'title', 'placeholder', 'alt']) {
        const value = element.getAttribute(name);
        if (!value) continue;
        if (!records[name] || value !== records[name].rendered) records[name] = {source: value};
        records[name].rendered = translated(records[name].source);
        if (value !== records[name].rendered) element.setAttribute(name, records[name].rendered);
      }
    }
    function translateTree(element) {
      if (element.nodeType === 3) { textNode(element); return; }
      if (element.nodeType !== 1 || protectedContent(element)) return;
      attributes(element);
      for (const child of element.childNodes) translateTree(child);
    }
    function applyLanguage() {
      win.dispatchEvent(new win.CustomEvent('site:beforelanguagechange'));
      html.lang = language;
      translateTree(doc.body);
      const title = doc.querySelector('title');
      if (title) translateTree(title);
      doc.querySelectorAll('[data-keep-english]').forEach(element => { element.lang = 'en'; element.setAttribute('translate', 'no'); });
      win.dispatchEvent(new win.CustomEvent('site:languagechange', {detail: {language}}));
    }
    function ready() {
      dictionary = translator(win.AI200_TRANSLATIONS);
      win.AI200Site.t = translated;
      const languages = doc.getElementById('site-language'), themes = doc.getElementById('site-theme');
      if (languages) {
        languages.value = language;
        languages.addEventListener('change', () => { language = languageValue(languages.value); save(LANGUAGE_KEY, language); applyLanguage(); });
      }
      if (themes) {
        themes.value = theme;
        themes.addEventListener('change', () => { theme = themeValue(themes.value); save(THEME_KEY, theme); applyTheme(); });
      }
      applyLanguage();
      const observer = new win.MutationObserver(records => {
        for (const record of records) {
          if (record.type === 'characterData') textNode(record.target);
          else if (record.type === 'attributes') attributes(record.target);
          else record.addedNodes.forEach(translateTree);
        }
      });
      observer.observe(doc.body, {subtree: true, childList: true, characterData: true, attributes: true,
        attributeFilter: ['aria-label', 'aria-valuetext', 'title', 'placeholder', 'alt']});
      win.addEventListener('storage', event => {
        if (event.key === LANGUAGE_KEY) { language = languageValue(event.newValue); if (languages) languages.value = language; applyLanguage(); }
        if (event.key === THEME_KEY) { theme = themeValue(event.newValue); if (themes) themes.value = theme; applyTheme(); }
      });
    }
    if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', ready, {once: true});
    else ready();
  }
  return {languageValue, themeValue, resolvedTheme, translator, protectedSelector, start};
});
