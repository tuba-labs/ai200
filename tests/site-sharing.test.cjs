const test=require('node:test'),assert=require('node:assert/strict');
const sharing=require('../site-sharing.js');
const card={title:'AI-200 · SQL & "safe" values',text:'Which value contains C++ or æøå?',url:'https://study.example/ai200/share/cards/i-pg-code.html'};

test('share destinations keep the card title, question and direct link properly encoded',()=>{
  const links=sharing.links(card),message=sharing.message(card);
  assert.deepEqual(Object.keys(links),['email','linkedin','whatsapp','telegram','x']);
  assert.equal(new URL(links.email).searchParams.get('subject'),card.title);
  assert.equal(new URL(links.email).searchParams.get('body'),message);assert.ok(!links.email.includes('+'));
  assert.equal(new URL(links.linkedin).searchParams.get('url'),card.url);
  assert.equal(new URL(links.whatsapp).searchParams.get('text'),message);
  assert.equal(new URL(links.telegram).searchParams.get('url'),card.url);
  assert.equal(new URL(links.telegram).searchParams.get('text'),card.title+'\n'+card.text);
  assert.equal(new URL(links.x).searchParams.get('text'),card.title);
  assert.equal(new URL(links.x).searchParams.get('url'),card.url);
});

test('result links retain their complete fragment in every sharing service',()=>{
  const result={title:'AI-200 practice exam: 75% (3/4 correct)',text:'1 incorrect · 0 unanswered.',url:'https://study.example/ai200/share/results/75.html#r=A-b_c123'};
  const links=sharing.links(result);
  for(const service of ['linkedin','telegram','x'])assert.equal(new URL(links[service]).searchParams.get('url'),result.url);
  assert.ok(new URL(links.email).searchParams.get('body').endsWith(result.url));
  assert.ok(new URL(links.whatsapp).searchParams.get('text').endsWith(result.url));
  assert.equal(sharing.message(result),result.title+'\n'+result.text+'\n\n'+result.url);
});

test('unusable site addresses cannot become sharing links',()=>{
  for(const url of ['javascript:alert(1)','file:///C:/results.html','data:text/plain,result','https://user:password@example.com/result','relative.html'])assert.throws(()=>sharing.links({...card,url}));
});
