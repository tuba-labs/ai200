const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const rules=require('../practice-exam-core.js');
const source=fs.readFileSync(require.resolve('../site-analytics.js'),'utf8');
function boot(href='https://study.example/ai200/practice-exam-results.html?r=private#r=private',observe=true){
  const scripts=[],frames=[],listeners={},observers=[];
  const doc={visibilityState:'visible',referrer:'https://study.example/ai200/flashcards.html?card=private#card',
    head:{append:script=>scripts.push(script)},createElement:()=>({}),addEventListener:(name,fn)=>{listeners[name]=fn;}};
  const win={document:doc,location:new URL(href),innerWidth:1000,innerHeight:800,AI200Exam:rules,
    requestAnimationFrame:fn=>frames.push(fn),addEventListener:(name,fn)=>{listeners[name]=fn;}};
  if(observe)win.IntersectionObserver=class{constructor(callback){this.callback=callback;observers.push(this);}observe(){}disconnect(){}};
  const run=()=>vm.runInNewContext(source,{window:win,URL,Date});run();
  return {win,doc,scripts,listeners,observers,run,frame:()=>{while(frames.length)frames.shift()();},
    events:()=>JSON.parse(JSON.stringify((win.dataLayer||[]).filter(args=>args[0]==='event').map(args=>[...args])))};
}
function banks(){const context={window:{}};for(const name of ['practice-exam-data.js','practice-exam-interactive-data.js'])vm.runInNewContext(fs.readFileSync(require.resolve('../'+name),'utf8'),context);return JSON.parse(JSON.stringify([context.window.AI200_EXAM_BANK,context.window.AI200_INTERACTIVE_BANK]));}

test('Google tag loads once with the requested measurement ID and clean page/referrer URLs',()=>{
  const app=boot();app.run();
  assert.equal(app.scripts.length,1);assert.equal(app.scripts[0].async,true);
  assert.equal(app.scripts[0].src,'https://www.googletagmanager.com/gtag/js?id=G-T4V86T1NFD');
  const configs=app.win.dataLayer.filter(args=>args[0]==='config');assert.equal(configs.length,1);
  assert.equal(configs[0][1],'G-T4V86T1NFD');
  assert.equal(configs[0][2].page_location,'https://study.example/ai200/practice-exam-results.html');
  assert.equal(configs[0][2].page_referrer,'https://study.example/ai200/flashcards.html');
  assert.equal(configs[0][2].allow_google_signals,false);assert.equal(configs[0][2].allow_ad_personalization_signals,false);
  assert.equal(app.events().length,0,'The standard config supplies the page view; there is no duplicate manual event.');
});

test('local files and loopback hosts never load the tag or send study events',()=>{
  for(const href of ['file:///C:/java/ai200/index.html','http://localhost:8000/','http://127.0.0.1:8000/','http://127.0.0.2/','http://[::1]/','http://demo.localhost/','http://0.0.0.0/']){
    const app=boot(href);assert.equal(app.win.AI200Analytics.enabled,false);assert.equal(app.scripts.length,0);
    assert.equal(app.win.AI200Analytics.questionAnswered(null,null,null,'check_answer'),false);
    app.win.AI200Analytics.flashcardView(null,{id:'example'},1);assert.equal(app.win.dataLayer,undefined);
  }
});

test('question answers record first-pass correctness once per question per exam across saving and reloading',()=>{
  const bank=rules.combineBanks(banks()),a=rules.createAttempt(bank,{count:335,minutes:0}),app=boot();
  const ids=['p-acr-001','i-aks-order','i-kql-code'];
  ids.forEach((id,i)=>{const q=bank.questions.find(q=>q.id===id);a.answers[id]=i===0?q.correctAnswers.slice():i===1?q.correctAnswers.slice().reverse():q.correctAnswers.map((id,i)=>i?'':id);});
  for(const id of ids){const q=bank.questions.find(q=>q.id===id);assert.equal(app.win.AI200Analytics.questionAnswered(bank,a,q,'check_answer'),true);assert.equal(app.win.AI200Analytics.questionAnswered(bank,a,q,'navigation'),false);}
  const saved=JSON.parse(JSON.stringify(a)),next=boot();
  assert.equal(next.win.AI200Analytics.questionAnswered(bank,saved,bank.questions.find(q=>q.id===ids[0]),'finish'),false);
  const empty=bank.questions.find(q=>!ids.includes(q.id));assert.equal(app.win.AI200Analytics.questionAnswered(bank,a,empty,'finish'),false);
  const events=app.events();assert.deepEqual(events.map(event=>event[2].correct),[1,0,0]);
  assert.deepEqual(events.map(event=>event[2].question_type),['choice','order','dropdown']);
  assert.deepEqual(events.map(event=>event[2].question_bank),['AI-200 Prep','Interactive practice','Interactive practice']);
  assert.ok(events.every(event=>event[1]==='question_answered'&&event[2].send_to==='G-T4V86T1NFD'));
  assert.ok(events.every(event=>!('answer' in event[2])&&!('prompt' in event[2])));
  assert.ok(rules.validAttempt(saved,bank));
  const fresh=rules.createAttempt(bank,{count:335,minutes:0});fresh.answers[ids[0]]=a.answers[ids[0]];
  assert.equal(app.win.AI200Analytics.questionAnswered(bank,fresh,bank.questions.find(q=>q.id===ids[0]),'finish'),true);
});

test('tracking failures do not throw or mark an answer as recorded',()=>{
  const [bank]=banks(),a=rules.createAttempt(bank,{count:1,minutes:0,randomOrder:false}),q=bank.questions.find(q=>q.id===a.ids[0]),app=boot();
  a.answers[q.id]=q.correctAnswers.slice();app.win.gtag=()=>{throw new Error('Blocked');};
  assert.equal(app.win.AI200Analytics.questionAnswered(bank,a,q,'check_answer'),false);assert.equal(a.analyticsAnswered,undefined);
});

test('flashcards count when their heading is visible, without counting flips, empty results or background tabs',()=>{
  const app=boot(),card={id:'one',domain:1,category:'acr'},other={id:'two',domain:2,category:'postgres'};
  let top=900,hidden=false;
  const heading={getBoundingClientRect:()=>({left:0,right:400,top,bottom:top+100,width:400,height:100}),closest:()=>hidden?{}:null};
  app.win.AI200Analytics.flashcardView(heading,card,1);app.frame();assert.equal(app.events().length,0);
  top=760;app.observers[0].callback();assert.equal(app.events().length,0);
  top=740;app.observers[0].callback();assert.equal(app.events().length,1);
  app.win.AI200Analytics.flashcardView(heading,card,1);app.frame();app.observers[0].callback();assert.equal(app.events().length,1);
  app.doc.visibilityState='hidden';app.win.AI200Analytics.flashcardView(heading,other,2);app.frame();assert.equal(app.events().length,1);
  app.doc.visibilityState='visible';app.listeners.visibilitychange();assert.equal(app.events().length,2);
  hidden=true;app.win.AI200Analytics.flashcardView(heading,card,1);app.frame();assert.equal(app.events().length,2);
  hidden=false;app.observers[0].callback();assert.equal(app.events().length,3);
  assert.deepEqual(app.events().map(event=>event[2].card_id),['one','two','one']);
  assert.ok(app.events().every(event=>event[1]==='flashcard_view'&&event[2].card_number>0));
  app.win.AI200Analytics.flashcardView(heading,null,null);app.listeners.visibilitychange();assert.equal(app.events().length,3);
});

test('flashcard visibility falls back to scroll and resize without IntersectionObserver',()=>{
  const app=boot('https://study.example/flashcards.html',false);let top=900;
  const heading={getBoundingClientRect:()=>({left:0,right:400,top,bottom:top+100,width:400,height:100}),closest:()=>null};
  app.win.AI200Analytics.flashcardView(heading,{id:'one',domain:1,category:'acr'},1);app.frame();assert.equal(app.events().length,0);
  top=100;app.listeners.scroll();app.listeners.resize();assert.equal(app.events().length,1);
});
