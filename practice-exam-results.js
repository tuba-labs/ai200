(function () {
  'use strict';
  const rules=window.AI200Exam, share=window.AI200ExamShare, $=id=>document.getElementById(id);
  const sourceBanks=[window.AI200_EXAM_BANK,window.AI200_INTERACTIVE_BANK];
  const banks=sourceBanks.slice();
  const objectiveData=window.AI200_EXAM_OBJECTIVES;
  const objectiveById=new Map(objectiveData.objectives.map(objective=>[objective.id,objective]));
  const domainNames={1:'Containers',2:'AI data',3:'Integrations',4:'Security & monitoring'};
  let bank,attempt,questions,contexts,token,nativeShareBusy=false;
  const node = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (['case-context', 'review-title', 'review-option', 'source-explanation'].some(name => className?.split(' ').includes(name))) {
      el.dataset.keepEnglish = ''; el.lang = 'en'; el.setAttribute('translate', 'no');
    }
    if (value !== undefined) el.textContent = value;
    return el;
  };
  const selected = id => Array.isArray(attempt?.answers[id]) ? attempt.answers[id] : [];
  function externalLink(label, url) {
    const link = node('a', '', label);
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    return link;
  }
  const isChoice = question => rules.questionType(question) === 'choice';
  const referenceLabel = question => rules.questionSource(bank,question.id).kind === 'original' ? 'Reference documentation ↗' : 'Source question and explanation ↗';
  function caseBlock(id, open = true) {
    const c = contexts.get(id);
    if (!c) return null;
    const details = node('details', 'case-context'); details.open = open;
    details.append(node('summary', '', c.title), node('p', 'case-body', c.body));
    if (c.requirements.length) {
      const list = node('ul');
      c.requirements.forEach(requirement => list.append(node('li', '', requirement)));
      details.append(list);
    }
    return details;
  }
  function renderResults() {
    $('results-panel').hidden = false;
    const result = rules.grade(bank, attempt);
    document.title=resultShareData().title;
    $('result-percent').textContent = result.percent + '%';
    $('result-correct').textContent = result.correct;
    $('result-incorrect').textContent = result.total - result.correct - result.unanswered;
    $('result-unanswered').textContent = result.unanswered;
    const elapsed = Math.max(0, Math.round(((attempt.timedOut ? attempt.deadline : attempt.submittedAt) - attempt.startedAt) / 60000));
    $('result-reason').textContent = `${attempt.timedOut ? 'Time expired. Your saved answers were submitted automatically.' : 'Exam submitted.'} ${result.total} questions · ${elapsed} min.`;
    renderDomainResults(result, $('domain-results'));
    renderObjectiveResults();
    renderReview();
  }
  function renderQuestionObjectives(question, container) {
    container.replaceChildren();
    for (const id of objectiveData.questions[question.id].objectives) {
      const item = node('li'); item.append(window.AI200ObjectiveHelp.tag(objectiveById.get(id))); container.append(item);
    }
    container.hidden = !container.children.length;
  }
  function renderObjectiveResults() {
    const result = rules.gradeObjectives(bank, attempt, objectiveData);
    $('objective-results').replaceChildren();
    $('objective-supporting-note').hidden = result.supporting === 0;
    let domain = null;
    for (const score of result.objectives) {
      if (score.domain !== domain) {
        domain = score.domain;
        const row = node('tr', 'objective-domain'), heading = node('th', '', `Domain ${domain} · ${domainNames[domain]}`);
        heading.colSpan = 2; heading.scope = 'row'; row.append(heading); $('objective-results').append(row);
      }
      const row = node('tr'), title = node('th'), cell = node('td');
      title.append(window.AI200ObjectiveHelp.tag(objectiveById.get(score.id)));
      row.dataset.objectiveId = score.id; title.scope = 'row';
      cell.append(node('span', score.total ? 'objective-score' : 'small', score.total ? `${score.percent}% · ${score.correct}/${score.total} questions correct` : 'Not assessed'));
      if (score.unanswered) cell.append(node('span', 'small objective-unanswered', `${score.unanswered} unanswered`));
      row.append(title, cell); $('objective-results').append(row);
    }
  }
  function renderDomainResults(result, container) {
    container.replaceChildren();
    for (const [domain, score] of Object.entries(result.domains)) {
      const percent = Math.round(score.correct / score.total * 100), panel = node('div', 'domain-result');
      const bar = node('div', 'domain-bar'), fill = node('span'); fill.style.width = percent + '%'; bar.append(fill);
      bar.setAttribute('role', 'img'); bar.setAttribute('aria-label', `${percent}% correct in domain ${domain}`);
      panel.append(node('h3', '', `Domain ${domain} · ${domainNames[domain]}`), node('p', '', `${score.correct} / ${score.total} correct · ${percent}%`), bar);
      container.append(panel);
    }
  }
  function renderReview() {
    const filter = $('review-filter').value;
    $('answer-review').replaceChildren();
    const graded = rules.grade(bank, attempt).questions;
    for (const [index, item] of graded.entries()) {
      if (filter === 'incorrect' && item.correct || filter === 'unanswered' && !item.unanswered || filter === 'flagged' && !attempt.flagged.includes(item.id)) continue;
      const q = questions.get(item.id), details = node('details', 'review-card ' + (item.correct ? 'correct' : item.unanswered ? 'unanswered' : 'incorrect'));
      details.dataset.questionId = q.id;
      const summary = node('summary'), body = node('div', 'review-body');
      summary.append(node('span', 'review-status', item.correct ? 'Correct' : item.unanswered ? 'Unanswered' : 'Incorrect'), node('span', 'review-title', `${index + 1}. ${q.prompt}`));
      const caseDetails = caseBlock(q.contextId, false);
      if (caseDetails) body.append(caseDetails);
      body.append(node('p', 'small', `Domain ${q.domain} · ${q.service} · Source ID: ${q.id}`));
      const objectives = node('ul', 'review-objectives');
      renderQuestionObjectives(q, objectives);
      body.append(node('p', 'objective-review-heading', 'Learning objectives'), objectives);
      if (!objectives.children.length) body.append(node('p', 'small', 'Supporting knowledge outside these 27 learning objectives.'));
      if (isChoice(q)) for (const option of q.options) {
        const chosen = selected(q.id).includes(option.id), correct = q.correctAnswers.includes(option.id);
        const row = node('p', 'review-option' + (correct ? ' correct-option' : chosen ? ' wrong-option' : ''), `${option.id}. ${option.text}`);
        if (correct || chosen) row.append(node('span', 'option-note', [correct ? 'Correct answer' : '', chosen ? 'Your selection' : ''].filter(Boolean).join(' · ')));
        body.append(row);
      }
      else {
        for (const part of window.AI200ExamInteractions.describe(q, selected(q.id))) {
          const row = node('div', 'review-option ' + (part.correct ? 'correct-option' : 'wrong-option'));
          row.append(node('strong', '', part.label), node('p', '', part.selected || '—'), node('p', 'option-note', 'Correct answer: ' + part.expected));
          body.append(row);
        }
        if (q.code) {
          const pre = node('pre', 'code-completion');
          pre.textContent = q.code.join('\n').replace(/\{\{([a-zA-Z0-9-]+)\}\}/g, (_, id) => {
            const index = q.slots.findIndex(slot => slot.id === id);
            return q.slots[index].options.find(option => option.id === selected(q.id)[index])?.text || '[unanswered]';
          }); body.append(pre);
        }
      }
      if (item.unanswered) body.append(node('p', 'small', 'You did not answer this question.'));
      body.append(node('p', 'source-explanation', q.explanation), externalLink(referenceLabel(q), q.setUrl));
      details.append(summary, body); $('answer-review').append(details);
    }
    if (!$('answer-review').children.length) $('answer-review').append(node('p', 'small', 'No questions match this filter.'));
  }


  const ui=text=>window.AI200Site?.t?window.AI200Site.t(text):text;
  function resultShareData() {
    const result=rules.grade(bank,attempt);
    return {title:ui(`AI-200 practice exam: ${result.percent}% (${result.correct}/${result.total} correct)`),
      text:ui(`${result.total-result.correct-result.unanswered} incorrect · ${result.unanswered} unanswered.`),url:$('share-link').value};
  }
  function renderDate() {
    if (!attempt) return;
    const date=new Intl.DateTimeFormat(document.documentElement.lang==='nb'?'nb-NO':'en-GB',{dateStyle:'medium',timeStyle:'short'}).format(new Date(attempt.submittedAt));
    $('result-date').textContent=ui('Completed: '+date);
  }
  function unavailable(message, active=false) {
    $('results-panel').hidden=true; $('results-unavailable').hidden=false;
    $('results-message').textContent=message;
    $('practice-link').textContent=active?'Continue exam →':'Take a practice exam →';
    $('practice-link').href=active?'practice-exam.html':'practice-exam.html?new=1';
  }
  function updateShareLink() {
    const isFile=location.protocol==='file:';
    const data=resultShareData();
    $('share-heading').textContent=data.title;$('share-summary').textContent=data.text;
    $('result-share-copy-fallback').hidden=true;
    try {
      const base=isFile?new URL($('share-site').value):new URL(location.href);
      if(!['https:','http:'].includes(base.protocol)||base.username||base.password)throw new Error('Enter a valid site address.');
      if(isFile&&!base.pathname.endsWith('/')&&!/\.html?$/i.test(base.pathname))base.pathname+='/';
      const target=new URL('share/results/'+rules.grade(bank,attempt).percent+'.html',base);
      target.search='';target.hash='r='+token;
      $('share-link').value=target.href;
      for(const [service,href] of Object.entries(window.AI200Sharing.links({...data,url:target.href}))){
        const link=$('result-share-'+service);link.href=href;link.removeAttribute('aria-disabled');link.tabIndex=0;
      }
      $('copy-result-link').disabled=false;$('copy-result-summary').disabled=false;$('native-share').disabled=nativeShareBusy;
      $('share-status').textContent='';
    } catch {
      $('share-link').value='';$('copy-result-link').disabled=true;$('copy-result-summary').disabled=true;$('native-share').disabled=true;
      document.querySelectorAll('#share-dialog .share-links a').forEach(link=>{link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.tabIndex=-1;});
      $('share-status').textContent='Enter a valid site address.';
    }
  }
  $('review-filter').addEventListener('change',renderReview);
  document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();$('main').focus();$('main').scrollIntoView({block:'start'});});
  $('share-results').addEventListener('click',()=>{
    try {token ||= share.encode(bank,attempt);}
    catch(error){$('share-error').textContent=error.message;$('share-error').hidden=false;return;}
    $('share-site-label').hidden=location.protocol!=='file:';
    $('share-site').value ||= document.querySelector('meta[name="ai200-share-base"]').content;
    $('native-share').hidden=typeof navigator.share!=='function';
    updateShareLink();$('share-dialog').showModal();
  });
  $('share-site').addEventListener('input',updateShareLink);
  $('close-share').addEventListener('click',()=>$('share-dialog').close());
  $('share-dialog').addEventListener('close',()=>$('share-results').focus());
  async function copyResult(summary=false) {
    const value=summary?window.AI200Sharing.message(resultShareData()):$('share-link').value;
    try {
      if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      $('share-status').textContent=ui(summary?'Summary and link copied.':'Link copied.');
    } catch {
      const field=summary?$('result-share-copy-value'):$('share-link');
      if(summary)$('result-share-copy-fallback').hidden=false;
      field.value=value;field.focus();field.select();
      $('share-status').textContent=ui(summary?'Copy the selected text.':'Select and copy the link.');
    }
  }
  $('copy-result-link').addEventListener('click',()=>copyResult());
  $('copy-result-summary').addEventListener('click',()=>copyResult(true));
  $('native-share').addEventListener('click',async()=>{
    nativeShareBusy=true;$('native-share').disabled=true;
    $('share-status').textContent='';
    try {await navigator.share(resultShareData());$('share-status').textContent=ui('Link passed to the selected app.');}
    catch(error){if(error.name!=='AbortError')$('share-status').textContent=ui('Choose a service or copy the link to share this result.');}
    finally {nativeShareBusy=false;$('native-share').disabled=!$('share-link').value;}
  });
  window.addEventListener('site:languagechange',renderDate);
  window.addEventListener('hashchange',()=>location.reload());
  try {
    banks.push(rules.combineBanks(sourceBanks));
    banks.forEach(value=>rules.validateBank(value));rules.validateObjectives(objectiveData,sourceBanks);
    if(location.hash){
      const params=new URLSearchParams(location.hash.slice(1));
      if(params.size!==1||!params.has('r'))throw new Error('This result link is invalid or incomplete.');
      token=params.get('r');({bank,attempt}=share.decode(token,banks));
    } else {
      let saved;try {saved=JSON.parse(localStorage.getItem('ai200-practice-exam-attempt-v1')||'null');}catch{}
      bank=banks.find(value=>rules.validAttempt(saved,value));
      if(!bank){unavailable('No completed exam is available in this browser.');return;}
      if(saved.submittedAt===null){unavailable('Your exam is still in progress.',true);return;}
      attempt=saved;
    }
    questions=new Map(bank.questions.map(question=>[question.id,question]));contexts=new Map(bank.contexts.map(context=>[context.id,context]));
    renderResults();renderDate();
  } catch(error){unavailable(error.message);}
})();
