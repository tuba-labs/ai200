const test = require('node:test');
const assert = require('node:assert/strict');
const {createMatcher} = require('../jargon-core.js');
const {readFileSync} = require('node:fs');
const vm = require('node:vm');
const catalog = [
  {id:'aks', primary:'AKS', aliases:['Azure Kubernetes Service']},
  {id:'identity', primary:'Managed identity', aliases:['MI']},
  {id:'container', primary:'container', aliases:[]},
  {id:'app', primary:'Container Apps', aliases:['Azure Container Apps']},
];
test('question terms deduplicate aliases in first-appearance order and prefer the longest name', () => {
  const matcher = createMatcher(catalog);
  assert.deepEqual(matcher.findTerms('Azure Container Apps uses a managed identity. MI also works in AKS (Azure Kubernetes Service).').map(term=>term.id), ['app','identity','aks']);
  assert.equal(matcher.matches('MANAGED\tIDENTITY')[0].id, 'identity');
  assert.equal(matcher.matches('Managed\u00a0identity')[0].id, 'identity');
});
test('term matching avoids substrings, URLs and qualified identifiers', () => {
  const matcher = createMatcher(catalog);
  assert.deepEqual(matcher.findTerms('AKSagent _AKS AKS_ https://example.com/AKS www.AKS.com thing.AKS AKS.value'), []);
  assert.deepEqual(matcher.matches('Use AKS. Then MI.', new Set(['identity'])).map(match=>match.text), ['AKS']);
});
test('the complete catalog matches service context and question jargon without modifying its input', () => {
  const context = {window:{}};
  vm.runInNewContext(readFileSync(require.resolve('../jargon-data.js'),'utf8'), context);
  const data = context.window.AI200_JARGON;
  const terms = Array.isArray(data) ? data : data.terms;
  const before = JSON.stringify(terms), matcher = createMatcher(terms);
  const found = matcher.findTerms('Postgres requires TLS. A managed identity accesses Azure Key Vault.');
  assert.ok(found.length >= 3);
  assert.equal(new Set(found.map(term=>term.id)).size, found.length);
  assert.equal(JSON.stringify(terms), before);
});
