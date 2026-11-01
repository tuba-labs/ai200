/* Shared GA4 page views and explicit study events. */
(function (win) {
  'use strict';
  if (win.AI200Analytics) return;
  const ID = 'G-T4V86T1NFD', doc = win.document;
  const hostname = win.location.hostname.toLowerCase();
  const enabled = ['http:', 'https:'].includes(win.location.protocol) &&
    !['localhost', '[::1]', '::1', '0.0.0.0'].includes(hostname) && !/^127(?:\.\d{1,3}){3}$/.test(hostname) && !hostname.endsWith('.localhost');
  const cleanURL = value => {
    try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.origin + url.pathname : ''; }
    catch { return ''; }
  };
  const page = {page_location:cleanURL(win.location.href), page_referrer:cleanURL(doc.referrer)};
  function event(name, parameters) {
    if (!enabled) return false;
    try { win.gtag('event', name, {...parameters, ...page, send_to:ID}); return true; }
    catch { return false; }
  }
  const cardParameters = (card, number) => ({card_id:card.id, card_number:number, domain:card.domain, category:card.category});
  function questionParameters(bank, question) {
    const rules = win.AI200Exam;
    return {question_id:question.id, question_type:rules.questionType(question),
      question_bank:rules.questionSource(bank,question.id).kind === 'original' ? 'Interactive practice' : 'AI-200 Prep', domain:question.domain};
  }
  function questionPosition(attempt, question) {
    return {question_number:attempt.ids.indexOf(question.id)+1, total_questions:attempt.ids.length};
  }
  function flashcardAction(action, card, number, fromCardId) {
    try {
      if (!card || !['next','previous','show_answer','show_question'].includes(action)) return false;
      return event('flashcard_interaction', {...cardParameters(card,number), action, ...(fromCardId ? {from_card_id:fromCardId} : {})});
    } catch { return false; }
  }
  let viewedQuestion = null;
  function questionView(bank, attempt, question) {
    try {
      if (viewedQuestion?.attempt === attempt && viewedQuestion.id === question.id) return false;
      const sent = event('question_view', {...questionParameters(bank,question), ...questionPosition(attempt,question)});
      if (sent) viewedQuestion = {attempt, id:question.id};
      return sent;
    } catch { return false; }
  }
  function questionAction(action, bank, attempt, question, fromQuestionId) {
    try {
      if (!['next','previous','jump','answer_change','clear_answer','check_answer'].includes(action)) return false;
      const rules = win.AI200Exam, answer = attempt.answers[question.id] || [];
      return event('question_interaction', {...questionParameters(bank,question), ...questionPosition(attempt,question), action,
        answered:rules.hasAnswer(answer)?1:0, ...(fromQuestionId ? {from_question_id:fromQuestionId} : {}),
        ...(action === 'check_answer' ? {correct:rules.isCorrect(question,answer)?1:0} : {})});
    } catch { return false; }
  }
  function questionAnswered(bank, attempt, question, method) {
    try {
      const rules = win.AI200Exam, answer = attempt.answers[question.id] || [];
      const answered = Array.isArray(attempt.analyticsAnswered) ? attempt.analyticsAnswered : [];
      if (!enabled || !rules.hasAnswer(answer) || answered.includes(question.id)) return false;
      const sent = event('question_answered', {...questionParameters(bank,question), correct:rules.isCorrect(question,answer)?1:0, method});
      if (sent) attempt.analyticsAnswered = [...answered, question.id];
      return sent;
    } catch { return false; }
  }
  let current = null, heading = null, observer = null;
  function checkFlashcard() {
    if (!current || current.viewed || !heading || doc.visibilityState !== 'visible') return;
    const style = win.getComputedStyle?.(heading);
    if (style?.visibility === 'hidden' || style?.display === 'none') return;
    const rect = heading.getBoundingClientRect();
    if (!rect.width || !rect.height || heading.closest('[hidden]')) return;
    const width = Math.max(0, Math.min(rect.right,win.innerWidth) - Math.max(rect.left,0));
    const height = Math.max(0, Math.min(rect.bottom,win.innerHeight) - Math.max(rect.top,0));
    if (width*height < rect.width*rect.height/2) return;
    current.viewed = event('flashcard_view', current.parameters);
  }
  function flashcardView(element, card, number) {
    if (!enabled) return;
    if (!card) { current = null; return; }
    if (current?.id !== card.id) current = {id:card.id, viewed:false,
      parameters:cardParameters(card,number)};
    if (heading !== element) {
      observer?.disconnect(); heading = element;
      if (win.IntersectionObserver) {
        observer = new win.IntersectionObserver(checkFlashcard, {threshold:[0,0.5,1]});
        observer.observe(heading);
      }
    }
    if (win.requestAnimationFrame) win.requestAnimationFrame(checkFlashcard); else checkFlashcard();
  }
  win.AI200Analytics = {enabled, questionAnswered, questionView, questionAction, flashcardView, flashcardAction};
  if (!enabled) return;
  win.dataLayer = win.dataLayer || [];
  win.gtag = win.gtag || function () { win.dataLayer.push(arguments); };
  win.gtag('js', new Date());
  // The standard config sends the page view. Do not send a second manual one.
  win.gtag('config', ID, {...page, allow_google_signals:false, allow_ad_personalization_signals:false});
  const script = doc.createElement('script');
  script.async = true; script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  doc.head.append(script);
  doc.addEventListener('visibilitychange', checkFlashcard);
  win.addEventListener('site:languagechange', () => win.requestAnimationFrame ? win.requestAnimationFrame(checkFlashcard) : checkFlashcard());
  if (!win.IntersectionObserver) {
    win.addEventListener('scroll', checkFlashcard, {passive:true});
    win.addEventListener('resize', checkFlashcard, {passive:true});
  }
})(window);
