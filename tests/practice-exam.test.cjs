const test = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const rules = require('../practice-exam-core.js');

function bank() {
  const make = (id, domain, correctAnswers, contextId = null) => ({
    id, domain, contextId, prompt: 'Choose a response for ' + id, service: 'Example service',
    options: [{id: 'A', text: 'First'}, {id: 'B', text: 'Second'}, {id: 'C', text: 'Third'}],
    correctAnswers, explanation: 'The source explanation.', instructions: [], tags: ['Real Exam'],
    sourceUrl: 'https://ai200prep.com/questions/' + id + '/', setUrl: 'https://ai200prep.com/practice-sets/set-01/#' + id,
  });
  return {schemaVersion: 1, bankId: 'test-bank', source: {filterLabel: 'Real Exam', url: 'https://ai200prep.com/practice-sets/'},
    contexts: [{id: 'case-1', title: 'An example case', body: 'A team needs a service.', requirements: ['Keep the data private.']}],
    questions: [make('one', 1, ['A'], 'case-1'), make('two', 2, ['A', 'C']), make('three', 1, ['B'], 'case-1')]};
}

test('the bundled bank supports complete exams in every domain without imported questions', () => {
  const context = {window: {}};
  vm.runInNewContext(readFileSync(path.join(__dirname, '../practice-exam-data.js'), 'utf8'), context);
  const source = rules.validateBank(context.window.AI200_EXAM_BANK);
  assert.equal(source.questions.length, source.download.questionCount);
  for (const domain of [1, 2, 3, 4]) {
    const attempt = rules.createAttempt(source, {count: 1, domains: [domain]});
    assert.equal(source.questions.find(q => q.id === attempt.ids[0]).domain, domain);
  }
  const pool = rules.questionPool(source);
  assert.equal(pool.length, source.download.uniqueQuestionCount);
  assert.equal(source.questions.length - pool.length, source.download.reviewedDuplicatesExcluded);
  const attempt = rules.createAttempt(source, {count: pool.length, randomOrder: false});
  attempt.answers = Object.fromEntries(pool.map(q => [q.id, q.correctAnswers]));
  assert.equal(rules.grade(source, attempt).percent, 100);
});

test('only the labelled source bank is accepted, with complete and unique cases, questions and keys', () => {
  assert.equal(rules.validateBank(bank()).questions.length, 3);
  for (const change of [
    b => { b.questions[0].tags = ['Priority']; },
    b => { b.questions[0].correctAnswers = ['D']; },
    b => { b.questions[0].correctAnswers = ['A', 'A']; },
    b => { b.questions[0].contextId = 'missing'; },
    b => { b.questions.push(b.questions[0]); },
    b => { b.questions[0].sourceUrl = 'https://example.com/'; },
    b => { b.source.filterLabel = 'All'; },
  ]) { const value = bank(); change(value); assert.throws(() => rules.validateBank(value)); }
});

test('multiple answers require an exact match, independent of option order', () => {
  const q = bank().questions[1];
  assert(rules.isCorrect(q, ['C', 'A']));
  for (const selected of [[], ['A'], ['A', 'B', 'C'], ['A', 'A'], ['B', 'C']]) assert(!rules.isCorrect(q, selected));
});

test('checking a wrong answer adds one review flag and preserves it after correcting or clearing the answer', () => {
  const source = bank(), attempt = rules.createAttempt(source, {count: 3, minutes: 100, randomOrder: false}, 1000);
  attempt.answers.one = ['B'];
  const deadline = attempt.deadline;
  assert.equal(rules.checkAnswer(source, attempt, 2000), false);
  assert.deepEqual(attempt.flagged, ['one']);
  assert.deepEqual(attempt.checked, ['one']);
  rules.checkAnswer(source, attempt, 3000);
  assert.deepEqual(attempt.flagged, ['one']);
  attempt.answers.one = ['A'];
  assert.equal(rules.checkAnswer(source, attempt, 4000), true);
  assert.deepEqual(attempt.flagged, ['one']);
  delete attempt.answers.one;
  attempt.checked = [];
  assert.equal(rules.checkAnswer(source, attempt, 5000), null);
  assert.deepEqual(attempt.flagged, ['one']);
  assert.equal(attempt.deadline, deadline);
  assert.equal(attempt.submittedAt, null);
  assert.deepEqual(JSON.parse(JSON.stringify(attempt)).flagged, ['one']);
});

test('correct answers and unchecked, empty, submitted or expired attempts do not acquire review flags', () => {
  const source = bank();
  const correct = rules.createAttempt(source, {count: 1, randomOrder: false}, 1000);
  correct.answers.one = ['A'];
  assert.equal(rules.checkAnswer(source, correct, 2000), true);
  assert.deepEqual(correct.flagged, []);
  const empty = rules.createAttempt(source, {count: 1, randomOrder: false}, 1000);
  assert.equal(rules.checkAnswer(source, empty, 2000), null);
  assert.deepEqual(empty.checked, []);
  for (const finish of [a => { a.submittedAt = 1500; }, a => { a.deadline = 1500; }]) {
    const attempt = rules.createAttempt(source, {count: 1, randomOrder: false}, 1000);
    attempt.answers.one = ['B']; finish(attempt);
    const before = JSON.stringify(attempt);
    assert.equal(rules.checkAnswer(source, attempt, 2000), null);
    assert.equal(JSON.stringify(attempt), before);
  }
});

test('incomplete or excessive multiple-answer selections are automatically marked for review', () => {
  const source = bank();
  for (const answer of [['A'], ['A', 'B', 'C']]) {
    const attempt = rules.createAttempt(source, {count: 1, domains: [2]}, 1000);
    attempt.answers.two = answer;
    assert.equal(rules.checkAnswer(source, attempt, 2000), false);
    assert.deepEqual(attempt.flagged, ['two']);
  }
});

test('reviewed paraphrases are excluded from new exams while existing saved attempts remain valid', () => {
  const source = bank();
  const saved = rules.createAttempt(source, {count: 3, randomOrder: false}, 1000);
  saved.answers.three = ['B']; saved.checked = ['three']; saved.flagged = ['three'];
  source.duplicateOf = {three: 'one'};
  rules.validateBank(source);
  assert.deepEqual(rules.questionPool(source).map(q => q.id), ['one', 'two']);
  for (const randomOrder of [false, true]) {
    const attempt = rules.createAttempt(source, {count: 2, randomOrder}, 1000);
    assert(!attempt.ids.includes('three'));
    assert.equal(new Set(attempt.ids).size, 2);
  }
  assert.throws(() => rules.createAttempt(source, {count: 3}));
  assert(rules.validAttempt(saved, source));
  assert.equal(rules.grade(source, saved).correct, 1);
  rules.validateBank({...source, duplicateOf: {three: 'two'}});
  for (const duplicateOf of [null, [], {one: 'one'}, {missing: 'one'}, {three: 'missing'}, {three: 'one', one: 'three'}]) {
    assert.throws(() => rules.validateBank({...source, duplicateOf}));
  }
});

test('selection uses only included source questions, without repeats, and keeps cases together', () => {
  const source = bank(), before = JSON.stringify(source);
  const attempt = rules.createAttempt(source, {count: 3, minutes: 0, randomOrder: false}, 1000);
  assert.deepEqual(attempt.ids, ['one', 'three', 'two']);
  assert.equal(attempt.deadline, null);
  assert.equal(JSON.stringify(source), before);
  const filtered = rules.createAttempt(source, {count: 2, domains: [1]}, 1000, () => .1);
  assert.equal(new Set(filtered.ids).size, 2);
  assert(filtered.ids.every(id => source.questions.find(q => q.id === id).domain === 1));
  assert.throws(() => rules.createAttempt(source, {count: 2, domains: [2]}));
  assert.throws(() => rules.createAttempt(source, {count: 0}));
  assert.throws(() => rules.createAttempt(source, {count: 1, minutes: -1}));
});

test('grading includes unanswered questions in total and domain denominators', () => {
  const source = bank(), attempt = rules.createAttempt(source, {count: 3, randomOrder: false}, 1000);
  attempt.answers = {one: ['A'], two: ['A']};
  const result = rules.grade(source, attempt);
  assert.deepEqual([result.total, result.correct, result.unanswered, result.percent], [3, 1, 1, 33]);
  assert.deepEqual(result.domains[1], {total: 2, correct: 1, unanswered: 1});
  assert.deepEqual(result.domains[2], {total: 1, correct: 0, unanswered: 0});
});

test('saved attempts reject unknown options, repeated questions and a different bank', () => {
  const source = bank();
  const attempt = rules.createAttempt(source, {count: 3}, 1000);
  assert(rules.validAttempt(JSON.parse(JSON.stringify(attempt)), source));
  for (const change of [
    a => { a.bankId = 'another-bank'; }, a => { a.ids.push(a.ids[0]); },
    a => { a.index = 100; }, a => { a.answers.one = ['D']; }, a => { a.flagged = ['missing']; },
    a => { a.deadline = a.startedAt; }, a => { a.submittedAt = 0; },
  ]) { const copy = structuredClone(attempt); change(copy); assert(!rules.validAttempt(copy, source)); }
});

test('the timer uses an absolute deadline and cannot reset on a reload or inactive tab', () => {
  const source = bank(), attempt = rules.createAttempt(source, {count: 1, minutes: 1}, 1000);
  const restored = JSON.parse(JSON.stringify(attempt));
  assert.equal(restored.deadline, 61000);
  assert.equal(rules.remainingSeconds(restored, 1050), 60);
  assert.equal(rules.remainingSeconds(restored, 60999), 1);
  assert.equal(rules.remainingSeconds(restored, 61000), 0);
  assert.equal(rules.remainingSeconds(restored, 999999), 0);
});

test('checked answers survive saving without finishing, changing the timer or awarding extra points', () => {
  const source = bank(), attempt = rules.createAttempt(source, {count: 3}, 1000);
  attempt.answers = {one: ['A'], two: ['A']};
  const initialScore = rules.grade(source, attempt), deadline = attempt.deadline;
  attempt.checked = ['one', 'two'];
  const restored = JSON.parse(JSON.stringify(attempt));
  assert(rules.validAttempt(restored, source));
  assert.deepEqual(restored.checked, ['one', 'two']);
  assert.equal(restored.submittedAt, null);
  assert.equal(restored.deadline, deadline);
  assert.deepEqual(rules.grade(source, restored), initialScore);
});

test('older saved attempts still load, while malformed or unanswered checks are rejected', () => {
  const source = bank(), attempt = rules.createAttempt(source, {count: 3}, 1000);
  delete attempt.checked;
  assert(rules.validAttempt(attempt, source));
  for (const checked of [['missing'], ['one'], ['one', 'one'], 'one', null]) {
    assert(!rules.validAttempt({...attempt, checked}, source));
  }
  attempt.answers.one = ['A'];
  assert(rules.validAttempt({...attempt, checked: ['one']}, source));
});
