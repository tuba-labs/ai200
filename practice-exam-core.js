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
  const sourceUrl = value => {
    try { const url = new URL(value); return url.protocol === 'https:' && url.hostname === 'ai200prep.com'; }
    catch { return false; }
  };
  function validateBank(bank) {
    const fail = message => { throw new Error(message); };
    if (!isObject(bank) || bank.schemaVersion !== 1 || !safeId(bank.bankId)) fail('The practice exam questions could not be loaded. Reload this page to try again.');
    if (!isObject(bank.source) || bank.source.filterLabel !== 'Real Exam' || !sourceUrl(bank.source.url)) fail('This bank must contain only AI-200 Prep questions labelled Real Exam.');
    if (!Array.isArray(bank.questions) || !bank.questions.length || bank.questions.length > 10000 || !Array.isArray(bank.contexts)) fail('The question bank is empty or invalid.');
    if (!unique(bank.questions.map(q => q?.id)) || !unique(bank.contexts.map(c => c?.id))) fail('The bank contains duplicate question or case IDs.');
    const contexts = new Set();
    for (const c of bank.contexts) {
      if (!isObject(c) || !safeId(c.id) || !text(c.title) || !text(c.body) || !Array.isArray(c.requirements) || !c.requirements.every(text)) fail('A case study is incomplete.');
      contexts.add(c.id);
    }
    for (const q of bank.questions) {
      if (!isObject(q) || !safeId(q.id) || !text(q.prompt) || ![1, 2, 3, 4].includes(q.domain) || !text(q.service) || !sourceUrl(q.sourceUrl) || !sourceUrl(q.setUrl)) fail('A question has invalid text, domain or source information.');
      if (!Array.isArray(q.tags) || !q.tags.includes('Real Exam')) fail('An unlabelled question was found. Only Real Exam-labelled questions are allowed.');
      if (!Array.isArray(q.options) || q.options.length < 2 || !q.options.every(o => isObject(o) && /^[A-Z]$/.test(o.id) && text(o.text)) || !unique(q.options.map(o => o.id))) fail('A question has invalid answer options.');
      if (!Array.isArray(q.correctAnswers) || !q.correctAnswers.length || !unique(q.correctAnswers) || !q.correctAnswers.every(id => q.options.some(o => o.id === id)) || !text(q.explanation)) fail('A question has an incomplete answer key.');
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
    if (!Object.entries(attempt.answers).every(([id, answer]) => attempt.ids.includes(id) && Array.isArray(answer) && unique(answer) && answer.every(option => questions.get(id).options.some(o => o.id === option)))) return false;
    // Older saved attempts do not have per-question answer checks.
    return attempt.checked === undefined || Array.isArray(attempt.checked) && unique(attempt.checked) && attempt.checked.every(id => attempt.ids.includes(id) && Array.isArray(attempt.answers[id]) && attempt.answers[id].length > 0);
  }
  function isCorrect(question, selected = []) {
    return selected.length === question.correctAnswers.length && unique(selected) && selected.every(id => question.correctAnswers.includes(id));
  }
  function checkAnswer(bank, attempt, now = Date.now()) {
    if (!validAttempt(attempt, bank)) throw new Error('This attempt does not match the loaded bank.');
    if (attempt.submittedAt !== null || remainingSeconds(attempt, now) === 0) return null;
    const id = attempt.ids[attempt.index], answer = attempt.answers[id] || [];
    if (!answer.length) return null;
    attempt.checked ||= [];
    if (!attempt.checked.includes(id)) attempt.checked.push(id);
    const correct = isCorrect(bank.questions.find(q => q.id === id), answer);
    if (!correct && !attempt.flagged.includes(id)) attempt.flagged.push(id);
    return correct;
  }
  function grade(bank, attempt) {
    if (!validAttempt(attempt, bank)) throw new Error('This attempt does not match the loaded bank.');
    const questions = new Map(bank.questions.map(q => [q.id, q]));
    const result = {total: attempt.ids.length, correct: 0, unanswered: 0, domains: {}, questions: []};
    for (const id of attempt.ids) {
      const q = questions.get(id), selected = Array.isArray(attempt.answers[id]) ? attempt.answers[id] : [], correct = isCorrect(q, selected);
      const domain = result.domains[q.domain] ||= {total: 0, correct: 0, unanswered: 0};
      domain.total++;
      if (correct) { result.correct++; domain.correct++; }
      if (!selected.length) { result.unanswered++; domain.unanswered++; }
      result.questions.push({id, correct, unanswered: !selected.length});
    }
    result.percent = Math.round(result.correct / result.total * 100);
    return result;
  }
  function remainingSeconds(attempt, now = Date.now()) {
    return attempt.deadline === null ? null : Math.max(0, Math.ceil((attempt.deadline - now) / 1000));
  }
  return {validateBank, questionPool, createAttempt, validAttempt, isCorrect, checkAnswer, grade, remainingSeconds, shuffle};
});
