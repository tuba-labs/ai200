/* Shared term matching for inline help and explicit question glossaries. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AI200JargonCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function createMatcher(catalog) {
    const terms = new Map(catalog.map(term => [term.id, term]));
    const names = new Map();
    const normalize = value => value.replace(/[\t \u00a0]+/g, ' ').toLocaleLowerCase();
    for (const term of terms.values()) for (const name of [term.primary, ...term.aliases]) names.set(normalize(name), term.id);
    const escape = value => value.replace(/[.*+?^$()|[\]{}\\]/g, '\\$&');
    const alternatives = [...names.keys()].sort((a, b) => b.length - a.length).map(name => escape(name).replace(/ /g, '[\\t \\u00a0]+'));
    const pattern = new RegExp('(?<![\\p{L}\\p{N}_])(?:' + alternatives.join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');
    function matches(text, excluded = new Set()) {
      const blocked = [...text.matchAll(/(?:https?:\/\/|file:\/\/|www\.)[^\s<>]+/giu)].map(match => [match.index, match.index + match[0].length]);
      const found = [];
      pattern.lastIndex = 0;
      for (const match of text.matchAll(pattern)) {
        const start = match.index, end = start + match[0].length, id = names.get(normalize(match[0]));
        if (!id || excluded.has(id) || text[start - 1] === '.'
          || (text[end] === '.' && /[\p{L}\p{N}_]/u.test(text[end + 1] || ''))
          || blocked.some(([a, b]) => start < b && end > a)) continue;
        found.push({id, start, end, text: match[0]});
      }
      return found;
    }
    function findTerms(text) {
      return [...new Set(matches(text).map(match => match.id))].map(id => terms.get(id));
    }
    return {terms, matches, findTerms};
  }
  return {createMatcher};
});
