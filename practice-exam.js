(function () {
  'use strict';
  const rules = window.AI200Exam, $ = id => document.getElementById(id);
  const ATTEMPT_KEY = 'ai200-practice-exam-attempt-v1';
  const domainNames = {1: 'Containers', 2: 'AI data', 3: 'Integrations', 4: 'Security & monitoring'};
  let bank = null, attempt = null, questions = new Map(), contexts = new Map(), clock = null;
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
  const read = key => {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); }
    catch { return null; }
  };
  const write = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { $('storage-notice').hidden = false; }
  };
  const saveAttempt = () => write(ATTEMPT_KEY, attempt);
  function showError(id, error) { $(id).textContent = error.message; $(id).hidden = false; }
  function focus(el) { el.focus({preventScroll: true}); el.scrollIntoView({block: 'start', behavior: 'instant'}); }
  function externalLink(label, url) {
    const link = node('a', '', label);
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    return link;
  }
  function setBank(value) {
    rules.validateBank(value);
    bank = value;
    questions = new Map(bank.questions.map(q => [q.id, q]));
    contexts = new Map(bank.contexts.map(c => [c.id, c]));
    const downloaded = new Date(bank.source.downloadedAt);
    $('bank-status').textContent = `${bank.questions.length} questions · ${bank.contexts.length} case studies` +
      (Number.isNaN(downloaded.getTime()) ? '' : ` · downloaded ${downloaded.toISOString().slice(0, 10)}`);
    for (const domain of [1, 2, 3, 4]) $('domain-' + domain + '-count').textContent = `${bank.questions.filter(q => q.domain === domain).length} questions`;
    $('bank-error').hidden = true;
    updatePool();
    const saved = read(ATTEMPT_KEY);
    attempt = rules.validAttempt(saved, bank) ? saved : null;
    if (attempt) attempt.checked ||= [];
    if (attempt && attempt.submittedAt !== null) renderResults();
    else if (attempt) { showExam(); tick(); }
    else showSetup();
  }
  function includedPool() {
    const domains = [...document.querySelectorAll('input[name=domain]:checked')].map(el => Number(el.value));
    return {domains, count: bank ? bank.questions.filter(q => domains.includes(q.domain)).length : 0};
  }
  function updatePool() {
    const count = includedPool().count;
    $('pool-status').textContent = `${count} available questions`;
    $('question-count').max = count;
    if (Number($('question-count').value) > count && count > 0) $('question-count').value = Math.min(45, count);
    $('setup-form').querySelector('[type=submit]').disabled = count === 0;
    $('use-all').disabled = count === 0;
  }
  function showSetup() {
    clearInterval(clock);
    $('setup-panel').hidden = false;
    $('exam-panel').hidden = true; $('results-panel').hidden = true;
  }
  function showExam() {
    $('setup-panel').hidden = true;
    $('exam-panel').hidden = false; $('results-panel').hidden = true;
    renderQuestion(); clearInterval(clock); clock = setInterval(tick, 1000);
  }
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
  function renderQuestion() {
    const q = questions.get(attempt.ids[attempt.index]);
    $('question-domain').textContent = `Domain ${q.domain} · ${domainNames[q.domain]}`;
    $('question-service').textContent = q.service;
    $('question-source-id').textContent = `Source ID: ${q.id}`;
    $('case-context').replaceChildren();
    const context = caseBlock(q.contextId);
    if (context) $('case-context').append(context);
    $('question-prompt').textContent = q.prompt;
    const multi = q.correctAnswers.length > 1;
    $('question-instructions').textContent = `${multi ? `Select ${q.correctAnswers.length} answers.` : 'Select one answer.'}` +
      (q.instructions.length ? ' ' + q.instructions.join(' ') : '');
    $('answer-options').replaceChildren();
    for (const option of q.options) {
      const label = node('label', 'option'), input = node('input');
      input.type = multi ? 'checkbox' : 'radio'; input.name = 'answer'; input.value = option.id;
      input.checked = selected(q.id).includes(option.id);
      label.append(input, node('span', 'option-letter', option.id), node('span', 'option-text', option.text));
      $('answer-options').append(label);
    }
    $('flag-question').checked = attempt.flagged.includes(q.id);
    $('question-position').textContent = `${attempt.index + 1} of ${attempt.ids.length}`;
    $('previous-question').disabled = attempt.index === 0;
    $('next-question').disabled = attempt.index === attempt.ids.length - 1;
    renderFeedback();
    updateProgress();
  }
  function renderFeedback() {
    const q = questions.get(attempt.ids[attempt.index]), answer = selected(q.id);
    const checked = attempt.checked.includes(q.id);
    $('answer-feedback').hidden = !checked;
    for (const label of $('answer-options').children) {
      const input = label.querySelector('input'), chosen = answer.includes(input.value), correct = q.correctAnswers.includes(input.value);
      label.classList.toggle('correct-option', checked && correct);
      label.classList.toggle('wrong-option', checked && chosen && !correct);
      label.querySelectorAll('.option-note').forEach(el => el.remove());
      if (checked && (correct || chosen)) label.querySelector('.option-text').append(node('span', 'option-note', [correct ? 'Correct answer' : '', chosen ? 'Your selection' : ''].filter(Boolean).join(' · ')));
    }
    $('feedback-correct-options').replaceChildren();
    $('feedback-heading').textContent = '';
    $('feedback-summary').textContent = '';
    $('feedback-explanation').textContent = '';
    $('feedback-source').removeAttribute('href');
    if (!checked) return;
    const correct = rules.isCorrect(q, answer);
    $('answer-feedback').dataset.result = correct ? 'correct' : 'incorrect';
    $('feedback-heading').textContent = correct ? 'Correct' : 'Incorrect';
    $('feedback-summary').textContent = q.correctAnswers.length > 1
      ? 'Correct answers are shown below. Select every correct option and no incorrect options.'
      : 'Correct answer:';
    for (const option of q.options.filter(o => q.correctAnswers.includes(o.id))) $('feedback-correct-options').append(node('p', 'feedback-correct-option', `${option.id}. ${option.text}`));
    $('feedback-explanation').textContent = q.explanation;
    $('feedback-source').href = q.setUrl;
  }
  function updateProgress() {
    const answered = attempt.ids.filter(id => selected(id).length).length;
    $('attempt-progress').textContent = `${answered} of ${attempt.ids.length} answered · ${attempt.flagged.length} marked for review`;
    $('clear-answer').disabled = !selected(attempt.ids[attempt.index]).length;
    $('check-answer').disabled = !selected(attempt.ids[attempt.index]).length;
    $('question-navigation').replaceChildren();
    for (const [index, id] of attempt.ids.entries()) {
      const button = node('button', '', index + 1);
      button.type = 'button'; button.dataset.index = index;
      button.classList.toggle('answered', selected(id).length > 0);
      button.classList.toggle('flagged', attempt.flagged.includes(id));
      button.setAttribute('aria-current', index === attempt.index ? 'true' : 'false');
      button.setAttribute('aria-label', `Question ${index + 1}, ${selected(id).length ? 'answered' : 'unanswered'}${attempt.flagged.includes(id) ? ', marked for review' : ''}`);
      $('question-navigation').append(button);
    }
  }
  function navigate(index) {
    if (!attempt || attempt.submittedAt !== null || index < 0 || index >= attempt.ids.length) return;
    if (expired()) return;
    attempt.index = index; saveAttempt(); renderQuestion(); focus($('question-prompt'));
  }
  function expired() {
    if (attempt && attempt.submittedAt === null && rules.remainingSeconds(attempt) === 0) { submit(true); return true; }
    return false;
  }
  function tick() {
    if (!attempt || attempt.submittedAt !== null || expired()) return;
    const seconds = rules.remainingSeconds(attempt);
    $('time-remaining').textContent = seconds === null ? 'No timer' : `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    $('time-remaining').parentElement.classList.toggle('urgent', seconds !== null && seconds <= 300);
  }
  function submit(timedOut = false) {
    if (!attempt || attempt.submittedAt !== null) return;
    attempt.submittedAt = Date.now(); attempt.timedOut = timedOut;
    clearInterval(clock); saveAttempt();
    if ($('finish-dialog').open) $('finish-dialog').close();
    renderResults(); focus($('results-heading'));
  }
  function renderResults() {
    clearInterval(clock);
    $('setup-panel').hidden = true;
    $('exam-panel').hidden = true; $('results-panel').hidden = false;
    const result = rules.grade(bank, attempt);
    $('result-percent').textContent = result.percent + '%';
    $('result-correct').textContent = result.correct;
    $('result-incorrect').textContent = result.total - result.correct - result.unanswered;
    $('result-unanswered').textContent = result.unanswered;
    const elapsed = Math.max(0, Math.round(((attempt.timedOut ? attempt.deadline : attempt.submittedAt) - attempt.startedAt) / 60000));
    $('result-reason').textContent = `${attempt.timedOut ? 'Time expired. Your saved answers were submitted automatically.' : 'Exam submitted.'} ${result.total} questions · ${elapsed} min.`;
    $('domain-results').replaceChildren();
    for (const [domain, score] of Object.entries(result.domains)) {
      const percent = Math.round(score.correct / score.total * 100), panel = node('div', 'domain-result');
      const bar = node('div', 'domain-bar'), fill = node('span'); fill.style.width = percent + '%'; bar.append(fill);
      bar.setAttribute('role', 'img'); bar.setAttribute('aria-label', `${percent}% correct in domain ${domain}`);
      panel.append(node('h3', '', `Domain ${domain} · ${domainNames[domain]}`), node('p', '', `${score.correct} / ${score.total} correct · ${percent}%`), bar);
      $('domain-results').append(panel);
    }
    renderReview();
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
      for (const option of q.options) {
        const chosen = selected(q.id).includes(option.id), correct = q.correctAnswers.includes(option.id);
        const row = node('p', 'review-option' + (correct ? ' correct-option' : chosen ? ' wrong-option' : ''), `${option.id}. ${option.text}`);
        if (correct || chosen) row.append(node('span', 'option-note', [correct ? 'Correct answer' : '', chosen ? 'Your selection' : ''].filter(Boolean).join(' · ')));
        body.append(row);
      }
      if (item.unanswered) body.append(node('p', 'small', 'You did not answer this question.'));
      body.append(node('p', 'source-explanation', q.explanation), externalLink('Source question and explanation ↗', q.setUrl));
      details.append(summary, body); $('answer-review').append(details);
    }
    if (!$('answer-review').children.length) $('answer-review').append(node('p', 'small', 'No questions match this filter.'));
  }

  $('setup-form').addEventListener('submit', event => {
    event.preventDefault(); $('setup-error').hidden = true;
    try {
      attempt = rules.createAttempt(bank, {count: Number($('question-count').value), minutes: Number($('time-limit').value), domains: includedPool().domains, randomOrder: $('random-order').checked});
      saveAttempt(); $('review-filter').value = 'all'; showExam(); tick(); focus($('exam-heading'));
    } catch (error) { showError('setup-error', error); }
  });
  document.querySelectorAll('input[name=domain]').forEach(el => el.addEventListener('change', updatePool));
  $('use-all').addEventListener('click', () => { $('question-count').value = includedPool().count; });
  $('question-form').addEventListener('submit', event => event.preventDefault());
  $('answer-options').addEventListener('change', () => {
    if (expired() || attempt.submittedAt !== null) return;
    const id = attempt.ids[attempt.index];
    attempt.answers[id] = [...$('answer-options').querySelectorAll('input:checked')].map(input => input.value);
    attempt.checked = attempt.checked.filter(value => value !== id);
    saveAttempt(); renderFeedback(); updateProgress();
  });
  $('flag-question').addEventListener('change', event => {
    if (expired() || attempt.submittedAt !== null) return;
    const id = attempt.ids[attempt.index];
    attempt.flagged = attempt.flagged.filter(value => value !== id);
    if (event.target.checked) attempt.flagged.push(id);
    saveAttempt(); updateProgress();
  });
  $('clear-answer').addEventListener('click', () => {
    if (expired() || attempt.submittedAt !== null) return;
    delete attempt.answers[attempt.ids[attempt.index]];
    attempt.checked = attempt.checked.filter(id => id !== attempt.ids[attempt.index]);
    saveAttempt(); renderQuestion(); focus($('question-prompt'));
  });
  $('check-answer').addEventListener('click', () => {
    if (!attempt || attempt.submittedAt !== null || expired()) return;
    const id = attempt.ids[attempt.index];
    if (!selected(id).length) return;
    if (!attempt.checked.includes(id)) attempt.checked.push(id);
    saveAttempt(); renderFeedback(); focus($('feedback-heading'));
  });
  $('previous-question').addEventListener('click', () => navigate(attempt.index - 1));
  $('next-question').addEventListener('click', () => navigate(attempt.index + 1));
  $('question-navigation').addEventListener('click', event => {
    const button = event.target.closest('button[data-index]');
    if (button) navigate(Number(button.dataset.index));
  });
  $('finish-exam').addEventListener('click', () => {
    if (expired()) return;
    const unanswered = attempt.ids.filter(id => !selected(id).length).length;
    $('finish-summary').textContent = `${unanswered} unanswered question${unanswered === 1 ? '' : 's'} · ${attempt.flagged.length} marked for review.`;
    $('finish-dialog').showModal();
  });
  $('continue-exam').addEventListener('click', () => $('finish-dialog').close());
  $('submit-exam').addEventListener('click', () => { if (!expired()) submit(); });
  $('new-exam').addEventListener('click', () => { showSetup(); focus($('setup-heading')); });
  $('review-filter').addEventListener('change', renderReview);
  document.addEventListener('visibilitychange', tick);
  window.addEventListener('pageshow', tick);
  try { setBank(window.AI200_EXAM_BANK); }
  catch (error) { showError('bank-error', error); }
})();
