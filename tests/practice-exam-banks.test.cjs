const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const rules=require('../practice-exam-core.js'),share=require('../practice-exam-share.js');
function banks(){const context={window:{}};for(const name of ['practice-exam-data.js','practice-exam-interactive-data.js'])vm.runInNewContext(fs.readFileSync(require.resolve('../'+name),'utf8'),context);return JSON.parse(JSON.stringify([context.window.AI200_EXAM_BANK,context.window.AI200_INTERACTIVE_BANK]));}
test('bank selections combine deterministically, keeping single-bank identities and source data intact',()=>{
  const sources=banks(),before=JSON.stringify(sources),combined=rules.combineBanks(sources);
  assert.equal(rules.combineBanks([]),null);assert.equal(rules.combineBanks([sources[0]]),sources[0]);
  assert.equal(rules.combineBanks(sources.slice().reverse()).bankId,combined.bankId);
  assert.deepEqual(rules.combineBanks(sources.slice().reverse()).questions.map(q=>q.id),combined.questions.map(q=>q.id));
  assert.equal(rules.validateBank(combined),combined);
  assert.equal(combined.questions.length,368);assert.equal(rules.questionPool(combined).length,335);
  assert.equal(new Set(combined.questions.map(q=>q.id)).size,368);assert.equal(combined.contexts.length,4);
  assert.equal(combined.duplicateOf['p-kv-021'],'p-kv-m01');assert.equal(JSON.stringify(sources),before);
});
test('mixed exams contain both banks, preserve question types and cases, and grade saved answers',()=>{
  const mixed=rules.combineBanks(banks()),pool=rules.questionPool(mixed);
  const a=rules.createAttempt(mixed,{count:pool.length,minutes:0,randomOrder:false});
  assert.equal(a.ids.length,335);assert.equal(a.ids.filter(id=>id.startsWith('i-')).length,9);
  assert.ok(a.ids.includes('p-acr-001'));assert.ok(a.ids.includes('i-kql-code'));assert.ok(!a.ids.includes('p-kv-021'));
  for(const q of pool)a.answers[q.id]=q.correctAnswers.slice();
  assert.equal(rules.grade(mixed,a).percent,100);assert.ok(rules.validAttempt(JSON.parse(JSON.stringify(a)),rules.combineBanks(banks().reverse())));
  const selected=rules.createAttempt(mixed,{count:1,domains:[4]});assert.equal(mixed.questions.find(q=>q.id===selected.ids[0]).domain,4);
});
test('question attribution follows its original bank inside a combined exam',()=>{
  const mixed=rules.combineBanks(banks());
  assert.equal(rules.questionSource(mixed,'p-acr-001').kind,undefined);
  assert.equal(rules.questionSource(mixed,'i-aks-order').kind,'original');
  assert.throws(()=>rules.questionSource(mixed,'unknown'));
});
test('conflicting IDs, repeated selections and inconsistent merged data are rejected',()=>{
  const sources=banks();assert.throws(()=>rules.combineBanks([sources[0],sources[0]]));
  const questionConflict=banks();questionConflict[1].questions[0].id=questionConflict[0].questions[0].id;assert.throws(()=>rules.combineBanks(questionConflict));
  const contextConflict=banks();contextConflict[1].contexts.push(contextConflict[0].contexts[0]);assert.throws(()=>rules.combineBanks(contextConflict));
  const bad=JSON.parse(JSON.stringify(rules.combineBanks(sources)));bad.questions[0].prompt+=' different';assert.throws(()=>rules.validateBank(bad));
});
test('new mixed share links and existing single-bank links all resolve against the bank registry',()=>{
  const sources=banks(),mixed=rules.combineBanks(sources),registry=[...sources,mixed];
  for(const bank of registry){
    const a=rules.createAttempt(bank,{count:Math.min(12,rules.questionPool(bank).length),minutes:0,randomOrder:false});a.submittedAt=a.startedAt+1000;
    for(const id of a.ids){const q=bank.questions.find(q=>q.id===id);a.answers[id]=q.correctAnswers.slice();}
    const decoded=share.decode(share.encode(bank,a),registry);
    assert.equal(decoded.bank.bankId,bank.bankId);assert.deepEqual(rules.grade(decoded.bank,decoded.attempt),rules.grade(bank,a));
  }
});
test('mixed links preserve wrong choices and partial interactive answers within a compact URL',()=>{
  const sources=banks(),mixed=rules.combineBanks(sources),a=rules.createAttempt(mixed,{count:335,minutes:0,randomOrder:false});a.submittedAt=a.startedAt+1000;
  for(const id of a.ids){const q=mixed.questions.find(q=>q.id===id);a.answers[id]=!q.type?q.options.map(o=>o.id):q.type==='order'?q.correctAnswers.slice().reverse():q.correctAnswers.map((value,i)=>i?'':value);}
  const token=share.encode(mixed,a),decoded=share.decode(token,[...sources,mixed]);
  assert.deepEqual(decoded.attempt.answers,a.answers);assert.deepEqual(rules.grade(mixed,decoded.attempt),rules.grade(mixed,a));
  assert.ok(('https://example.com/ai200/practice-exam-results.html#r='+token).length<2000);
});
