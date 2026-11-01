/* Pure exam rules, shared by the browser and Node's built-in test runner. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AI200Exam = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const unique = values => new Set(values).size === values.length;
  const safeId = value => text(value) && /^[a-z0-9-]+$/i.test(value);
  const sourceUrl = (value, host = 'ai200prep.com') => {
    try { const url = new URL(value); return url.protocol === 'https:' && url.hostname === host; }
    catch { return false; }
  };
  function validateBank(bank) {
    const fail = message => { throw new Error(message); };
    if (!isObject(bank) || bank.schemaVersion !== 1 || !safeId(bank.bankId)) fail('The practice exam questions could not be loaded. Reload this page to try again.');
    if (!isObject(bank.source)) fail('The question source is missing.');
    const sourceKind = bank.source.kind || 'ai200prep';
    const sources = {ai200prep: {host: 'ai200prep.com', label: 'Real Exam'},
      original: {host: 'learn.microsoft.com', label: 'Original practice'}};
    const source = Object.hasOwn(sources, sourceKind) ? sources[sourceKind] : null;
    if (!source || bank.source.filterLabel !== source.label || !sourceUrl(bank.source.url, source.host)) fail('The question source or label is invalid.');
    if (!Array.isArray(bank.questions) || !bank.questions.length || bank.questions.length > 10000 || !Array.isArray(bank.contexts)) fail('The question bank is empty or invalid.');
    if (!unique(bank.questions.map(q => q?.id)) || !unique(bank.contexts.map(c => c?.id))) fail('The bank contains duplicate question or case IDs.');
    const contexts = new Set();
    for (const c of bank.contexts) {
      if (!isObject(c) || !safeId(c.id) || !text(c.title) || !text(c.body) || !Array.isArray(c.requirements) || !c.requirements.every(text)) fail('A case study is incomplete.');
      contexts.add(c.id);
    }
    for (const q of bank.questions) {
      const reference = url => (sourceKind === 'original' ? [source.host, 'kubernetes.io'] : [source.host]).some(host => sourceUrl(url, host));
      if (!isObject(q) || !safeId(q.id) || !text(q.prompt) || ![1, 2, 3, 4].includes(q.domain) || !text(q.service) || !reference(q.sourceUrl) || !reference(q.setUrl)) fail('A question has invalid text, domain or source information.');
      if (!Array.isArray(q.tags) || !q.tags.includes(source.label)) fail('An unlabelled question was found.');
      const type = questionType(q);
      if (!['choice', 'order', 'match', 'dropdown'].includes(type)) fail('A question has an unsupported format.');
      const optionsValid = options => Array.isArray(options) && options.length >= 2 && options.every(o => isObject(o) && typeof o.id === 'string' && /^[A-Za-z0-9_-]+$/.test(o.id) && text(o.text)) && unique(options.map(o => o.id));
      if (type !== 'dropdown' && !optionsValid(q.options)) fail('A question has invalid answer options.');
      if (!Array.isArray(q.correctAnswers) || !q.correctAnswers.length || !q.correctAnswers.every(text) || !text(q.explanation)) fail('A question has an incomplete answer key.');
      if (type === 'choice' || type === 'order') {
        if (!unique(q.correctAnswers) || !q.correctAnswers.every(id => q.options.some(o => o.id === id))) fail('A question has an incomplete answer key.');
        if (type === 'order' && (q.correctAnswers.length < 2 || q.acceptedOrders !== undefined && (!Array.isArray(q.acceptedOrders) || !q.acceptedOrders.every(order => Array.isArray(order) && order.length === q.correctAnswers.length && unique(order) && order.every(id => q.options.some(o => o.id === id)))))) fail('An ordering question has an invalid accepted order.');
      } else {
        if (!Array.isArray(q.slots) || !q.slots.length || q.slots.length !== q.correctAnswers.length || !unique(q.slots.map(slot => slot?.id))) fail('A question has invalid answer slots.');
        if (!q.slots.every((slot, i) => isObject(slot) && safeId(slot.id) && text(slot.label) && (type !== 'dropdown' || optionsValid(slot.options)) && (type === 'dropdown' ? slot.options : q.options).some(option => option.id === q.correctAnswers[i]))) fail('An answer slot has an invalid answer key.');
        if (type === 'match' && typeof q.reuse !== 'boolean' || type === 'match' && !q.reuse && !unique(q.correctAnswers)) fail('A matching question has an invalid reuse rule.');
      }
      if (q.code !== undefined) {
        if (type !== 'dropdown' || !Array.isArray(q.code) || !q.code.every(line => typeof line === 'string')) fail('A question has an invalid code template.');
        const blanks = [...q.code.join('\n').matchAll(/\{\{([a-zA-Z0-9-]+)\}\}/g)].map(match => match[1]);
        if (!unique(blanks) || blanks.length !== q.slots.length || !q.slots.every(slot => blanks.includes(slot.id))) fail('Code blanks must match the answer slots exactly.');
      }
      if (q.contextId !== null && !contexts.has(q.contextId)) fail('A question refers to a missing case study.');
      if (!Array.isArray(q.instructions) || !q.instructions.every(text)) fail('A question has invalid instructions.');
    }
    if (bank.duplicateOf !== undefined) {
      if (!isObject(bank.duplicateOf)) fail('The reviewed duplicate list is invalid.');
      const byId = new Map(bank.questions.map(q => [q.id, q]));
      for (const [duplicate, kept] of Object.entries(bank.duplicateOf)) {
        if (!byId.has(duplicate) || !byId.has(kept) || duplicate === kept || Object.hasOwn(bank.duplicateOf, kept)) fail('A reviewed duplicate has an invalid retained question.');
      }
    }
    return bank;
  }
  function questionPool(bank) {
    return bank.questions.filter(q => !Object.hasOwn(bank.duplicateOf || {}, q.id));
  }
  function shuffle(values, random = Math.random) {
    const result = values.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function createAttempt(bank, {count = 45, minutes = 100, domains = [1, 2, 3, 4], randomOrder = true} = {}, now = Date.now(), random = Math.random) {
    const pool = questionPool(bank).filter(q => domains.includes(q.domain));
    if (!Number.isInteger(count) || count < 1 || count > pool.length) throw new Error(`Choose between 1 and ${pool.length} questions.`);
    if (!Number.isInteger(minutes) || minutes < 0 || minutes > 1440) throw new Error('Choose a time limit from 0 to 1440 minutes. Use 0 for no timer.');
    const selected = (randomOrder ? shuffle(pool, random) : pool).slice(0, count);
    // Keep selected questions belonging to the same case together.
    const groups = new Map();
    for (const q of selected) {
      const key = q.contextId ? 'case:' + q.contextId : 'question:' + q.id;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(q.id);
    }
    return {version: 1, bankId: bank.bankId, ids: [...groups.values()].flat(), answers: {}, flagged: [], checked: [],
      index: 0, startedAt: now, deadline: minutes ? now + minutes * 60000 : null,
      submittedAt: null, timedOut: false};
  }
  function validAttempt(attempt, bank) {
    if (!isObject(attempt) || attempt.version !== 1 || attempt.bankId !== bank.bankId || !Array.isArray(attempt.ids) || !attempt.ids.length || !unique(attempt.ids)) return false;
    const questions = new Map(bank.questions.map(q => [q.id, q]));
    if (!attempt.ids.every(id => questions.has(id)) || !Number.isInteger(attempt.index) || attempt.index < 0 || attempt.index >= attempt.ids.length || !isObject(attempt.answers) || !Array.isArray(attempt.flagged) || !unique(attempt.flagged) || !attempt.flagged.every(id => attempt.ids.includes(id))) return false;
    if (!Number.isFinite(attempt.startedAt) || (attempt.deadline !== null && (!Number.isFinite(attempt.deadline) || attempt.deadline <= attempt.startedAt)) || (attempt.submittedAt !== null && (!Number.isFinite(attempt.submittedAt) || attempt.submittedAt < attempt.startedAt)) || typeof attempt.timedOut !== 'boolean') return false;
    if (!Object.entries(attempt.answers).every(([id, answer]) => attempt.ids.includes(id) && validAnswer(questions.get(id), answer))) return false;
    // Older saved attempts do not have per-question answer checks.
    return attempt.checked === undefined || Array.isArray(attempt.checked) && unique(attempt.checked) && attempt.checked.every(id => attempt.ids.includes(id) && hasAnswer(attempt.answers[id]));
  }
  function questionType(question) { return question.type || 'choice'; }
  function hasAnswer(answer) { return Array.isArray(answer) && answer.some(value => Boolean(value)); }
  function validAnswer(question, answer) {
    if (!Array.isArray(answer)) return false;
    const type = questionType(question);
    if (type === 'choice' || type === 'order') return unique(answer) && answer.every(id => question.options.some(o => o.id === id)) && (type !== 'order' || answer.length <= question.correctAnswers.length);
    if (!answer.length) return true;
    return answer.length === question.slots.length && answer.every((id, i) => id === '' || (type === 'dropdown' ? question.slots[i].options : question.options).some(o => o.id === id))
      && (type !== 'match' || question.reuse || unique(answer.filter(Boolean)));
  }
  function isCorrect(question, selected = []) {
    if (!validAnswer(question, selected)) return false;
    const type = questionType(question);
    if (type === 'choice') return selected.length === question.correctAnswers.length && selected.every(id => question.correctAnswers.includes(id));
    const orders = type === 'order' ? [question.correctAnswers, ...(question.acceptedOrders || [])] : [question.correctAnswers];
    return orders.some(order => order.length === selected.length && order.every((id, i) => id === selected[i]));
  }
  function checkAnswer(bank, attempt, now = Date.now()) {
    if (!validAttempt(attempt, bank)) throw new Error('This attempt does not match the loaded bank.');
    if (attempt.submittedAt !== null || remainingSeconds(attempt, now) === 0) return null;
    const id = attempt.ids[attempt.index], answer = attempt.answers[id] || [];
    if (!hasAnswer(answer)) return null;
    attempt.checked ||= [];
    if (!attempt.checked.includes(id)) attempt.checked.push(id);
    const correct = isCorrect(bank.questions.find(q => q.id === id), answer);
    if (!correct && !attempt.flagged.includes(id)) attempt.flagged.push(id);
    return correct;
  }
  function grade(bank, attempt, {answeredOnly = false} = {}) {
    if (!validAttempt(attempt, bank)) throw new Error('This attempt does not match the loaded bank.');
    const questions = new Map(bank.questions.map(q => [q.id, q]));
    const result = {total: 0, correct: 0, unanswered: 0, domains: {}, questions: []};
    for (const id of attempt.ids) {
      const q = questions.get(id), selected = Array.isArray(attempt.answers[id]) ? attempt.answers[id] : [];
      if (answeredOnly && !hasAnswer(selected)) continue;
      const correct = isCorrect(q, selected);
      const domain = result.domains[q.domain] ||= {total: 0, correct: 0, unanswered: 0};
      result.total++; domain.total++;
      if (correct) { result.correct++; domain.correct++; }
      if (!hasAnswer(selected)) { result.unanswered++; domain.unanswered++; }
      result.questions.push({id, correct, unanswered: !hasAnswer(selected)});
    }
    result.percent = result.total ? Math.round(result.correct / result.total * 100) : null;
    return result;
  }
  function remainingSeconds(attempt, now = Date.now()) {
    return attempt.deadline === null ? null : Math.max(0, Math.ceil((attempt.deadline - now) / 1000));
  }
  return {validateBank, questionPool, createAttempt, validAttempt, questionType, hasAnswer, validAnswer, isCorrect, checkAnswer, grade, remainingSeconds, shuffle};
});
