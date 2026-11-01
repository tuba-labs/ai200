const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const rules=require('../practice-exam-core.js'),share=require('../practice-exam-share.js');
function banks(){const context={window:{}};for(const name of ['practice-exam-data.js','practice-exam-interactive-data.js'])vm.runInNewContext(fs.readFileSync(require.resolve('../'+name),'utf8'),context);return JSON.parse(JSON.stringify([context.window.AI200_EXAM_BANK,context.window.AI200_INTERACTIVE_BANK]));}
function attempt(bank,ids){const a=rules.createAttempt(bank,{count:1,minutes:100},Date.UTC(2026,10,1,10));a.ids=ids||rules.questionPool(bank).map(q=>q.id);a.submittedAt=a.startedAt+600000;return a;}
function roundtrip(bank,a){const token=share.encode(bank,a),result=share.decode(token,[bank]);assert.ok(rules.validAttempt(result.attempt,bank));assert.deepEqual(rules.grade(bank,result.attempt),rules.grade(bank,a));assert.deepEqual(result.attempt.ids,a.ids);assert.deepEqual(result.attempt.flagged,a.flagged);return{token,decoded:result.attempt};}
function forged(token,change){
  const bytes=Buffer.from(token,'base64url').subarray(0,-4);change(bytes);
  let crc=0xffffffff;for(const byte of bytes){crc^=byte;for(let bit=0;bit<8;bit++)crc=crc&1?0xedb88320^(crc>>>1):crc>>>1;}
  const tail=Buffer.alloc(4);tail.writeUInt32BE((crc^0xffffffff)>>>0);return Buffer.concat([bytes,tail]).toString('base64url');
}
test('full exams reconstruct correct answers, wrong selections, unanswered questions and review marks in order',()=>{
  const [bank]=banks(),a=attempt(bank);
  a.ids.reverse();a.ids.forEach((id,i)=>{const q=bank.questions.find(q=>q.id===id);if(i%4===0)return;a.answers[id]=i%4===1?[q.options.find(o=>!q.correctAnswers.includes(o.id)).id]:q.correctAnswers.slice();});
  a.flagged=a.ids.filter((_,i)=>i%5===0);
  const before=JSON.stringify(a),{token,decoded}=roundtrip(bank,a);
  for(const [id,answer] of Object.entries(a.answers))if(!rules.isCorrect(bank.questions.find(q=>q.id===id),answer))assert.deepEqual(decoded.answers[id],answer);
  assert.equal(JSON.stringify(a),before);assert.match(token,/^[A-Za-z0-9_-]+$/);assert.ok(token.length<2000);
});
test('all-correct full exams stay compact',()=>{
  const [bank]=banks(),a=attempt(bank);
  for(const q of rules.questionPool(bank))a.answers[q.id]=q.correctAnswers.slice();
  const {token,decoded}=roundtrip(bank,a);
  assert.equal(decoded.ids.length,326);assert.ok(token.length<80);
});
test('all-wrong full exams with every review mark stay below 2000 URL characters',()=>{
  const [bank]=banks(),a=attempt(bank);
  for(const q of rules.questionPool(bank))a.answers[q.id]=q.options.map(o=>o.id);
  a.flagged=a.ids.slice();const{token}=roundtrip(bank,a);assert.ok(('https://example.com/ai200/practice-exam-results.html#r='+token).length<2000);
});
test('all interactive formats retain partial answers and ordering, including repeated matching choices',()=>{
  const [,bank]=banks(),a=attempt(bank);
  for(const q of bank.questions){if(q.type==='order')a.answers[q.id]=q.correctAnswers.slice().reverse();else a.answers[q.id]=q.correctAnswers.map((id,i)=>i%2?'':id);}
  const{decoded}=roundtrip(bank,a);assert.deepEqual(decoded.answers,a.answers);
});

test('partially filled numbered order slots retain their exact positions in saved and shared results',()=>{
  const [,bank]=banks(),q=bank.questions.find(q=>q.id==='i-pg-order'),a=attempt(bank,[q.id]);
  a.answers[q.id]=['extension','','','index'];a.flagged=[q.id];
  assert.ok(rules.validAttempt(JSON.parse(JSON.stringify(a)),bank));
  assert.equal(rules.grade(bank,a,{answeredOnly:true}).total,1);assert.equal(rules.grade(bank,a).correct,0);
  const {decoded}=roundtrip(bank,a);assert.deepEqual(decoded.answers[q.id],['extension','','','index']);
  assert.equal(rules.grade(bank,decoded).unanswered,0);
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
  for(const version of [0,1,2,4,255])assert.throws(()=>share.decode(forged(token,bytes=>{bytes[0]=version;}),[bank]),/unsupported/);
  assert.throws(()=>share.decode(forged(token,bytes=>{bytes[1]=128;}),[bank]),/invalid/);
  assert.throws(()=>share.decode(forged(token,bytes=>{bytes[18]=255;bytes[19]=255;}),[bank]),/invalid/);
  assert.throws(()=>share.decode(forged(token,bytes=>{bytes[20]=255;bytes[21]|=128;}),[bank]),/invalid/);
});

test('subset ranks and sparse state counts reject out-of-range values even with a valid checksum',()=>{
  const [,bank]=banks(),a=rules.createAttempt(bank,{count:8,minutes:0,randomOrder:false},Date.UTC(2026,10,1));
  a.submittedAt=a.startedAt+1000;const token=share.encode(bank,a);
  assert.equal(Buffer.from(token,'base64url')[1]>>1,1);
  assert.throws(()=>share.decode(forged(token,bytes=>{bytes[20]|=0xf0;}),[bank]),/invalid/);
  a.ids=bank.questions.map(q=>q.id);for(const q of bank.questions)a.answers[q.id]=q.correctAnswers.slice();
  const full=share.encode(bank,a);
  assert.throws(()=>share.decode(forged(full,bytes=>{bytes[20]=0xde;}),[bank]),/invalid/);
});

test('seeded full exams preserve their exact order after saving and sharing, with much shorter links',()=>{
  const bank=rules.combineBanks(banks()),a=rules.createAttempt(bank,{count:335,minutes:0},Date.UTC(2026,10,1),()=>.36);
  a.submittedAt=a.startedAt+600000;
  for(const q of rules.questionPool(bank))a.answers[q.id]=q.correctAnswers.slice();
  assert.deepEqual(rules.questionOrder(bank,a.ids,a.orderSeed),a.ids);
  const {token,decoded}=roundtrip(bank,JSON.parse(JSON.stringify(a)));
  assert.equal(token,'Awapq2vAFigYj2rmg1gAAAJYAU9cKPXCG4VVqrb9CIBHBILK53geDtOpPYgANdULnQ');
  assert.equal(require('node:crypto').createHash('sha256').update(JSON.stringify(decoded.ids)).digest('hex'),'194cfc466a45d66cdd033e29de992647ed90833e38adfbe676f5c6a1d449eb3b');
  assert.equal(Buffer.from(token,'base64url')[0],3);assert.equal(decoded.orderSeed,a.orderSeed);
  assert.ok(token.length<80);
  const changed=structuredClone(bank);changed.duplicateOf={};
  assert.deepEqual(share.decode(token,[changed]).attempt.ids,a.ids);
});

test('subset ranks preserve varied counts, domain filters, case groups and both seeded and ordinary ordering',()=>{
  const bank=rules.combineBanks(banks());
  for(const count of [1,2,9,45,167,334,335])for(const randomOrder of [false,true]){
    const a=rules.createAttempt(bank,{count,randomOrder,minutes:0},Date.UTC(2026,10,1),()=>count/400);a.submittedAt=a.startedAt+1000;
    a.ids.forEach((id,i)=>{if(i%3)a.answers[id]=bank.questions.find(q=>q.id===id).correctAnswers.slice();});
    roundtrip(bank,a);
  }
  const a=rules.createAttempt(bank,{count:60,domains:[4],minutes:0},Date.UTC(2026,10,1),()=>.9);a.submittedAt=a.startedAt+1000;
  assert.ok(a.ids.every(id=>bank.questions.find(q=>q.id===id).domain===4));roundtrip(bank,a);
});

test('dense and sparse wrong answers, unanswered questions and flags use compact sets without losing selections',()=>{
  const bank=rules.combineBanks(banks());
  for(const every of [1,2,7,167,335]){
    const a=rules.createAttempt(bank,{count:335,minutes:0},Date.UTC(2026,10,1),()=>.4);a.submittedAt=a.startedAt+1000;
    a.ids.forEach((id,i)=>{const q=bank.questions.find(q=>q.id===id);a.answers[id]=i%every?q.correctAnswers.slice():q.type==='order'?q.correctAnswers.slice().reverse():q.type?q.correctAnswers.map((id,j)=>j?'':id):[q.options.find(o=>!q.correctAnswers.includes(o.id)).id];if(i%every===0)a.flagged.push(id);});
    const {token,decoded}=roundtrip(bank,a);assert.deepEqual(decoded.answers,a.answers);assert.ok(token.length<450);
    a.ids.forEach((id,i)=>{if(i%every===0)delete a.answers[id];});
    roundtrip(bank,a);
  }
});

test('explicit ordering retains the question sequence when a seed cannot describe it',()=>{
  const [bank]=banks(),a=attempt(bank);a.ids.reverse();delete a.orderSeed;
  a.flagged=a.ids.slice(0,3);roundtrip(bank,a);
  a.orderSeed=12;roundtrip(bank,a);
  a.orderSeed='invalid';roundtrip(bank,a);
});
