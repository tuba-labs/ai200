const test = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const vm = require('node:vm');
const rules = require('../practice-exam-core.js');
function data() {
  const context = {window:{}};
  for (const file of ['practice-exam-data.js','practice-exam-interactive-data.js','practice-exam-objectives.js']) vm.runInNewContext(readFileSync(require.resolve('../'+file),'utf8'),context);
  return JSON.parse(JSON.stringify({banks:[context.window.AI200_EXAM_BANK,context.window.AI200_INTERACTIVE_BANK],catalog:context.window.AI200_EXAM_OBJECTIVES}));
}
function attempt(bank, ids) {
  const a=rules.createAttempt(bank,{count:1,minutes:0,randomOrder:false},1000);
  a.ids=ids;return a;
}
function correct(bank,a,id){a.answers[id]=bank.questions.find(q=>q.id===id).correctAnswers.slice();}
test('every question in both banks has a reviewed mapping and all 27 objectives are defined once',()=>{
  const {banks,catalog}=data();
  assert.equal(rules.validateObjectives(catalog,banks),catalog);
  assert.equal(Object.keys(catalog.questions).length,368);
  const covered=new Set(Object.values(catalog.questions).flatMap(q=>q.objectives));
  assert.equal(covered.size,27);
  for(const change of [
    c=>{delete c.questions['p-acr-001'];},
    c=>{c.questions['unknown']={objectives:[]};},
    c=>{c.questions['p-acr-001'].objectives=['invalid'];},
    c=>{c.questions['p-acr-001'].objectives=['containers-acr-images','containers-acr-images'];},
    c=>{c.objectives.push(c.objectives[0]);},
    c=>{c.objectives[1].number=c.objectives[0].number;},
    c=>{delete c.objectives[0].short.en;},
    c=>{delete c.questions['p-eh-001'].reason;},
  ]) {const c=structuredClone(catalog);change(c);assert.throws(()=>rules.validateObjectives(c,banks));}
});
test('three correct out of four questions produces 75% and leaves unrelated objectives unassessed',()=>{
  const {banks:[bank],catalog}=data();
  const ids=['p-acr-001','p-acr-002','p-acr-008','p-acr-012'],a=attempt(bank,ids);
  for(const id of ids.slice(0,3))correct(bank,a,id);
  const last=bank.questions.find(q=>q.id===ids[3]);
  a.answers[last.id]=[last.options.find(o=>!last.correctAnswers.includes(o.id)).id];
  const before=JSON.stringify(a),result=rules.gradeObjectives(bank,a,catalog);
  const image=result.objectives.find(o=>o.id==='containers-acr-images');
  assert.deepEqual(image,{id:'containers-acr-images',domain:1,total:4,correct:3,unanswered:0,percent:75});
  assert.ok(result.objectives.filter(o=>o.id!==image.id).every(o=>o.percent===null&&o.total===0));
  assert.equal(result.objectives.length,27);
  assert.equal(JSON.stringify(a),before);
});
test('unanswered questions count in final ratings; answered-only ratings use the preview denominator',()=>{
  const {banks:[bank],catalog}=data(),ids=['p-acr-001','p-acr-002','p-acr-008','p-acr-012'],a=attempt(bank,ids);
  for(const id of ids.slice(0,3))correct(bank,a,id);
  const score=options=>rules.gradeObjectives(bank,a,catalog,options).objectives.find(o=>o.id==='containers-acr-images');
  assert.equal(score().percent,75);assert.equal(score().unanswered,1);
  assert.equal(score({answeredOnly:true}).percent,100);assert.equal(score({answeredOnly:true}).total,3);
  a.answers={};assert.equal(score().percent,0);assert.equal(score({answeredOnly:true}).percent,null);
});
test('a multi-objective question counts once for each linked objective, with supporting questions in the overall score only',()=>{
  const {banks:[bank],catalog}=data(),a=attempt(bank,['p-acr-003','p-eh-001']);
  for(const id of a.ids)correct(bank,a,id);
  const result=rules.gradeObjectives(bank,a,catalog);
  assert.equal(result.supporting,1);
  assert.equal(rules.grade(bank,a).correct,2);
  assert.deepEqual(result.objectives.filter(o=>o.total).map(o=>[o.id,o.correct,o.total]),[['containers-acr-tasks',1,1],['security-key-vault',1,1]]);
  const saved=JSON.parse(JSON.stringify(a));delete saved.checked;
  assert.equal(rules.validAttempt(saved,bank),true);
  assert.deepEqual(rules.gradeObjectives(bank,saved,catalog),result);
});
test('interactive partial answers follow exact question scoring in objective ratings',()=>{
  const {banks:[,bank],catalog}=data(),a=attempt(bank,['i-fn-code']);
  a.answers['i-fn-code']=['post','',''];
  let score=rules.gradeObjectives(bank,a,catalog).objectives.find(o=>o.id==='integrations-functions-api');
  assert.deepEqual([score.percent,score.total,score.correct,score.unanswered],[0,1,0,0]);
  correct(bank,a,'i-fn-code');a.submittedAt=2000;
  score=rules.gradeObjectives(bank,a,catalog).objectives.find(o=>o.id==='integrations-functions-api');
  assert.deepEqual([score.percent,score.total,score.correct],[100,1,1]);
});
