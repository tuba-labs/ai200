const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const rules=require('../practice-exam-core.js'),share=require('../practice-exam-share.js');
function banks(){const context={window:{}};for(const name of ['practice-exam-data.js','practice-exam-interactive-data.js'])vm.runInNewContext(fs.readFileSync(require.resolve('../'+name),'utf8'),context);return JSON.parse(JSON.stringify([context.window.AI200_EXAM_BANK,context.window.AI200_INTERACTIVE_BANK]));}
function attempt(bank,ids){const a=rules.createAttempt(bank,{count:1,minutes:100},Date.UTC(2026,10,1,10));a.ids=ids||rules.questionPool(bank).map(q=>q.id);a.submittedAt=a.startedAt+600000;return a;}
function roundtrip(bank,a){const token=share.encode(bank,a),result=share.decode(token,[bank]);assert.ok(rules.validAttempt(result.attempt,bank));assert.deepEqual(rules.grade(bank,result.attempt),rules.grade(bank,a));assert.deepEqual(result.attempt.ids,a.ids);assert.deepEqual(result.attempt.flagged,a.flagged);return{token,decoded:result.attempt};}
test('full exams reconstruct correct answers, wrong selections, unanswered questions and review marks in order',()=>{
  const [bank]=banks(),a=attempt(bank);
  a.ids.reverse();a.ids.forEach((id,i)=>{const q=bank.questions.find(q=>q.id===id);if(i%4===0)return;a.answers[id]=i%4===1?[q.options.find(o=>!q.correctAnswers.includes(o.id)).id]:q.correctAnswers.slice();});
  a.flagged=a.ids.filter((_,i)=>i%5===0);
  const before=JSON.stringify(a),{token,decoded}=roundtrip(bank,a);
  for(const [id,answer] of Object.entries(a.answers))if(!rules.isCorrect(bank.questions.find(q=>q.id===id),answer))assert.deepEqual(decoded.answers[id],answer);
  assert.equal(JSON.stringify(a),before);assert.match(token,/^[A-Za-z0-9_-]+$/);assert.ok(token.length<2000);
});
test('all-correct exams are compact and legacy results retain excluded question IDs',()=>{
  const [bank]=banks(),a=attempt(bank,bank.questions.map(q=>q.id));
  for(const q of bank.questions)a.answers[q.id]=q.correctAnswers.slice();
  const {token,decoded}=roundtrip(bank,a);
  assert.equal(decoded.ids.length,359);assert.ok(decoded.ids.includes('p-kv-021'));assert.ok(token.length<700);
});
test('all-wrong legacy exams with every review mark stay below 2000 URL characters',()=>{
  const [bank]=banks(),a=attempt(bank,bank.questions.map(q=>q.id));
  for(const q of bank.questions)a.answers[q.id]=q.options.map(o=>o.id);
  a.flagged=a.ids.slice();const{token}=roundtrip(bank,a);assert.ok(('https://example.com/ai200/practice-exam-results.html#r='+token).length<2000);
});
test('all interactive formats retain partial answers and ordering, including repeated matching choices',()=>{
  const [,bank]=banks(),a=attempt(bank);
  for(const q of bank.questions){if(q.type==='order')a.answers[q.id]=q.correctAnswers.slice().reverse();else a.answers[q.id]=q.correctAnswers.map((id,i)=>i%2?'':id);}
  const{decoded}=roundtrip(bank,a);assert.deepEqual(decoded.answers,a.answers);
});
test('accepted alternative orders and timed-out durations survive sharing',()=>{
  const [,bank]=banks(),q=bank.questions.find(q=>q.type==='order');q.acceptedOrders=[q.correctAnswers.slice().reverse()];
  const a=attempt(bank,[q.id]);a.answers[q.id]=q.acceptedOrders[0].slice();a.submittedAt=a.deadline+30000;a.timedOut=true;
  const{decoded}=roundtrip(bank,a);assert.deepEqual(decoded.answers[q.id],a.answers[q.id]);assert.equal(decoded.timedOut,true);assert.equal(decoded.deadline-decoded.startedAt,a.deadline-a.startedAt);
});
test('empty answers and unattempted bank questions stay distinct',()=>{
  const [bank]=banks(),a=attempt(bank,[bank.questions[2].id,bank.questions[0].id]);
  a.answers[a.ids[0]]=[];const{decoded}=roundtrip(bank,a);assert.equal(decoded.ids.length,2);assert.deepEqual(decoded.answers,{});
});
test('sharing requires a completed valid exam',()=>{
  const [bank]=banks(),a=attempt(bank);a.submittedAt=null;assert.throws(()=>share.encode(bank,a),/Finish/);
  a.submittedAt=a.startedAt+10000;a.answers[a.ids[0]]=['unknown'];assert.throws(()=>share.encode(bank,a));
});
test('malformed, truncated, corrupted, oversized and wrong-bank links fail clearly',()=>{
  const [bank]=banks(),a=attempt(bank),token=share.encode(bank,a);
  for(const text of ['',token.slice(1),token.slice(0,-1),token+'A','!', 'A'.repeat(8193),token.slice(0,10)+(token[10]==='A'?'B':'A')+token.slice(11)])assert.throws(()=>share.decode(text,[bank]));
  const changed=structuredClone(bank);changed.questions[0].prompt+=' Updated';assert.throws(()=>share.decode(token,[changed]),/different question bank/);
  const exclusions=structuredClone(bank);exclusions.duplicateOf={};assert.doesNotThrow(()=>share.decode(token,[exclusions]));
});
test('valid checksums still reject unsupported flags, invalid counts and out-of-range question IDs',()=>{
  const [bank]=banks(),a=attempt(bank,[bank.questions[0].id]);const token=share.encode(bank,a);
  function forged(change){
    const bytes=Buffer.from(token,'base64url').subarray(0,-4);change(bytes);
    let crc=0xffffffff;for(const byte of bytes){crc^=byte;for(let bit=0;bit<8;bit++)crc=crc&1?0xedb88320^(crc>>>1):crc>>>1;}
    const tail=Buffer.alloc(4);tail.writeUInt32BE((crc^0xffffffff)>>>0);return Buffer.concat([bytes,tail]).toString('base64url');
  }
  assert.throws(()=>share.decode(forged(bytes=>{bytes[0]=2;}),[bank]),/unsupported/);
  assert.throws(()=>share.decode(forged(bytes=>{bytes[1]=128;}),[bank]),/invalid/);
  assert.throws(()=>share.decode(forged(bytes=>{bytes[18]=255;bytes[19]=255;}),[bank]),/invalid/);
  assert.throws(()=>share.decode(forged(bytes=>{bytes[20]=255;bytes[21]|=128;}),[bank]),/invalid/);
});
