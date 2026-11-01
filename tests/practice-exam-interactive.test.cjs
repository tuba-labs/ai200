const test = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const vm = require('node:vm');
const rules = require('../practice-exam-core.js');
const interactions = require('../practice-exam-interactions.js');
function bank() {
  const context = {window:{}};
  vm.runInNewContext(readFileSync(require.resolve('../practice-exam-interactive-data.js'),'utf8'), context);
  return JSON.parse(JSON.stringify(context.window.AI200_INTERACTIVE_BANK));
}
test('the original bank validates and every interactive solution earns one point', () => {
  const b = rules.validateBank(bank());
  assert.equal(b.questions.length,9);
  assert.deepEqual([...new Set(b.questions.map(q=>q.type))].sort(), ['dropdown','match','order']);
  const a = rules.createAttempt(b,{count:9,randomOrder:false,minutes:0});
  for (const q of b.questions) a.answers[q.id] = q.correctAnswers.slice();
  assert.equal(rules.grade(b,a).percent,100);
  assert.equal(rules.validAttempt(JSON.parse(JSON.stringify(a)),b),true);
});
test('order is significant, accepted alternatives work, and repeated or excessive steps are invalid', () => {
  const q = bank().questions.find(q=>q.type==='order');
  assert.equal(rules.isCorrect(q,q.correctAnswers.slice().reverse()),false);
  q.acceptedOrders = [q.correctAnswers.slice().reverse()];
  assert.equal(rules.isCorrect(q,q.acceptedOrders[0]),true);
  assert.ok(interactions.describe(q,q.acceptedOrders[0]).every(part=>part.correct));
  assert.equal(rules.validAnswer(q,[q.correctAnswers[0],q.correctAnswers[0]]),false);
  assert.equal(rules.isCorrect(q,q.correctAnswers.slice(0,-1)),false);
});

test('numbered order slots can be filled out of sequence without moving other steps',()=>{
  const q=bank().questions.find(q=>q.id==='i-pg-order'),empty=['','','',''];
  let answer=interactions.placeOrderStep(q,empty,'index',3);
  assert.deepEqual(answer,['','','','index']);assert.deepEqual(empty,['','','','']);
  answer=interactions.placeOrderStep(q,answer,'extension',0);
  answer=interactions.placeOrderStep(q,answer,'load',2);
  assert.deepEqual(answer,['extension','','load','index']);
  assert.ok(rules.validAnswer(q,answer));assert.ok(rules.hasAnswer(answer));assert.equal(rules.isCorrect(q,answer),false);
  assert.deepEqual(interactions.describe(q,answer).map(part=>part.selected),[q.options.find(o=>o.id==='extension').text,'',q.options.find(o=>o.id==='load').text,q.options.find(o=>o.id==='index').text]);
  answer=interactions.placeOrderStep(q,answer,'table',1);assert.ok(rules.isCorrect(q,answer));
});

test('moving an ordered action swaps occupied slots and replaces a target without inserting or shifting steps',()=>{
  const q=bank().questions.find(q=>q.id==='i-pg-order');
  assert.deepEqual(interactions.placeOrderStep(q,q.correctAnswers,'load',0),['load','table','extension','index']);
  const answer=interactions.placeOrderStep(q,['extension','','load','index'],'index',1);
  assert.deepEqual(answer,['extension','index','load','']);
  assert.deepEqual(interactions.placeOrderStep(q,answer,'table',0),['table','index','load','']);
  assert.throws(()=>interactions.placeOrderStep(q,answer,'unknown',0));
  assert.throws(()=>interactions.placeOrderStep(q,answer,'table',4));
  assert.throws(()=>interactions.placeOrderStep(q,answer,'table',-1));
});

test('empty numbered order slots remain unanswered and repeated actions are rejected around gaps',()=>{
  const q=bank().questions.find(q=>q.id==='i-pg-order');
  assert.ok(rules.validAnswer(q,['','','','']));assert.equal(rules.hasAnswer(['','','','']),false);
  assert.equal(rules.validAnswer(q,['extension','','extension','']),false);
  assert.equal(rules.validAnswer(q,['extension',null,'load','index']),false);
  assert.equal(rules.validAnswer(q,['extension','','load','index','table']),false);
});
test('slot answers retain blanks, validate per-slot choices, and enforce the matching reuse rule', () => {
  const b = bank(), match = b.questions.find(q=>q.type==='match' && q.reuse), unique = b.questions.find(q=>q.type==='match' && !q.reuse), drop = b.questions.find(q=>q.type==='dropdown');
  assert.equal(rules.isCorrect(match,match.correctAnswers),true);
  assert.equal(rules.validAnswer(unique,unique.correctAnswers.map(()=>unique.correctAnswers[0])),false);
  const partial = drop.correctAnswers.map((id,i)=>i ? '' : id);
  assert.equal(rules.validAnswer(drop,partial),true);
  assert.equal(rules.hasAnswer(partial),true);
  assert.equal(rules.isCorrect(drop,partial),false);
  assert.equal(rules.hasAnswer(partial.map(()=>'')),false);
  assert.equal(rules.validAnswer(drop,[drop.correctAnswers[1],...drop.correctAnswers.slice(1)]),false);
  assert.equal(rules.validAnswer(drop,['unknown']),false);
});
test('preview counts a partially completed question once, flags a wrong check and survives saving', () => {
  const b = bank(), a = rules.createAttempt(b,{count:9,randomOrder:false,minutes:0});
  const q = b.questions.find(q=>q.type==='dropdown');
  a.index = a.ids.indexOf(q.id);
  a.answers[q.id] = q.correctAnswers.map((id,i)=>i ? '' : id);
  assert.equal(rules.checkAnswer(b,a),false);
  assert.deepEqual(a.flagged,[q.id]);
  assert.equal(rules.grade(b,a,{answeredOnly:true}).total,1);
  assert.equal(rules.grade(b,a,{answeredOnly:true}).percent,0);
  assert.equal(rules.validAttempt(JSON.parse(JSON.stringify(a)),b),true);
  a.answers[q.id] = q.correctAnswers.slice();
  assert.equal(rules.grade(b,a,{answeredOnly:true}).percent,100);
  assert.equal(rules.checkAnswer(b,a),true);
  assert.deepEqual(a.flagged,[q.id]);
});
test('interactive validation rejects malformed blanks, answer keys, orders, pools and providers', () => {
  for (const change of [
    b=>{b.source.kind='toString';},
    b=>{b.questions[0].type='unknown';},
    b=>{b.questions[0].acceptedOrders=[['history','history','test','undo']];},
    b=>{b.questions.find(q=>q.type==='dropdown').code=['{{missing}}'];},
    b=>{const q=b.questions.find(q=>q.type==='dropdown');q.code.push('{{'+q.slots[0].id+'}}');},
    b=>{b.questions.find(q=>q.type==='match').correctAnswers[0]='unknown';},
    b=>{b.questions.find(q=>q.type==='match').slots[1].id=b.questions.find(q=>q.type==='match').slots[0].id;},
    b=>{b.questions.find(q=>q.type==='match').reuse=undefined;},
  ]) {
    const b=bank(); change(b); assert.throws(()=>rules.validateBank(b));
  }
});
test('the duplicate review covers all 43 source IDs once and refers to existing local questions', () => {
  const report = JSON.parse(readFileSync(require.resolve('../reports/mightybs-duplicate-review.json'),'utf8'));
  const {createHash} = require('node:crypto');
  assert.equal(report.snapshots.localBankSha256,createHash('sha256').update(readFileSync(require.resolve('../practice-exam-data.js'),'utf8').replace(/\r\n/g,'\n')).digest('hex'),'Recheck duplicates when the local bank changes');
  const context={window:{}};
  vm.runInNewContext(readFileSync(require.resolve('../practice-exam-data.js'),'utf8'),context);
  const localIds = new Set(context.window.AI200_EXAM_BANK.questions.map(q=>q.id));
  const ids=[...report.nearDuplicates.map(q=>q.sourceId),...report.partialOverlaps.map(q=>q.sourceId),...report.noEquivalentWholeQuestionFound];
  assert.equal(ids.length,43); assert.equal(new Set(ids).size,43);
  for(const item of [...report.nearDuplicates,...report.partialOverlaps]) for(const id of item.localIds) assert.ok(localIds.has(id),id);
});
