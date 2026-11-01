/* Shared full-wording tooltips for numbered learning objectives. */
(() => {
  'use strict';
  const objectives = window.AI200_LEARNING_OBJECTIVES || window.AI200_EXAM_OBJECTIVES?.objectives;
  if (!objectives) return;
  const byId = new Map(objectives.map(objective => [objective.id, objective]));
  const ui = text => window.AI200Site?.t ? window.AI200Site.t(text) : text;
  const popup = document.createElement('div');
  popup.id = 'objective-tooltip'; popup.className = 'objective-tooltip'; popup.hidden = true;
  popup.setAttribute('role', 'tooltip'); popup.dataset.noJargon = '';
  const heading = document.createElement('strong'), description = document.createElement('p');
  popup.append(heading, description); document.body.append(popup);
  let active = null, pinned = false, closeTimer;
  function tag(objective) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'objective-tag'; button.dataset.objectiveHelp = objective.id; button.dataset.noJargon = '';
    button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-controls', popup.id);
    const number = document.createElement('span'); number.className = 'objective-number'; number.textContent = objective.number + '.';
    const label = document.createElement('span'); label.textContent = ui(objective.short.en);
    button.append(number, document.createTextNode(' '), label);
    return button;
  }
  function position() {
    if (!active || popup.hidden) return;
    const rect = active.getBoundingClientRect(), width = popup.getBoundingClientRect().width;
    popup.style.left = Math.max(12, Math.min(rect.left, innerWidth - width - 12)) + 'px';
    const height = popup.getBoundingClientRect().height;
    const top = rect.bottom + height + 10 <= innerHeight ? rect.bottom + 8 : rect.top - height - 8;
    popup.style.top = Math.max(12, Math.min(top, innerHeight - height - 12)) + 'px';
  }
  function hide() {
    clearTimeout(closeTimer);
    if (active) {active.setAttribute('aria-expanded', 'false'); active.removeAttribute('aria-describedby');}
    active = null; pinned = false; popup.hidden = true;
  }
  function show(trigger, pin = false) {
    const objective = byId.get(trigger?.dataset.objectiveHelp);
    if (!objective || !trigger.isConnected) return;
    clearTimeout(closeTimer);
    if (active !== trigger) hide();
    active = trigger; pinned = pin || pinned;
    trigger.removeAttribute('title'); trigger.setAttribute('aria-expanded', 'true'); trigger.setAttribute('aria-describedby', popup.id);
    heading.textContent = objective.number + '. ' + ui(objective.short.en);
    description.textContent = ui(objective.label.en);
    popup.hidden = false; position();
  }
  const trigger = target => target.closest?.('[data-objective-help]');
  const scheduleClose = () => {clearTimeout(closeTimer); if (!pinned && document.activeElement !== active) closeTimer = setTimeout(hide, 180);};
  document.addEventListener('pointerover', event => {const button = trigger(event.target); if (button && !button.contains(event.relatedTarget)) show(button);});
  document.addEventListener('pointerout', event => {const button = trigger(event.target); if (button && !button.contains(event.relatedTarget)) scheduleClose();});
  popup.addEventListener('pointerenter', () => clearTimeout(closeTimer));
  popup.addEventListener('pointerleave', scheduleClose);
  document.addEventListener('focusin', event => {const button = trigger(event.target); if (button) show(button); else hide();});
  document.addEventListener('focusout', event => {if (trigger(event.target) && !event.target.contains(event.relatedTarget)) hide();});
  document.addEventListener('click', event => {
    const button = trigger(event.target);
    if (button) {if (active === button && pinned) hide(); else show(button, true);}
    else if (!popup.contains(event.target)) hide();
  });
  document.addEventListener('keydown', event => {if (event.key === 'Escape' && active) {hide(); event.stopPropagation();}});
  window.addEventListener('scroll', () => {
    if (!active) return;
    const rect = active.getBoundingClientRect();
    if ((rect.bottom < 0 || rect.top > innerHeight) && document.activeElement !== active) hide(); else position();
  }, true);
  window.addEventListener('resize', hide);
  window.addEventListener('site:beforelanguagechange', hide);
  new MutationObserver(() => {if (active && (!active.isConnected || active.closest('[hidden]'))) hide();}).observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['hidden']});
  document.querySelectorAll('[data-objective-help]').forEach(button => {button.removeAttribute('title'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-controls', popup.id);});
  window.AI200ObjectiveHelp = {tag};
})();
