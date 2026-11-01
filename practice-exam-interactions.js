/* Accessible interactive answers: drag/drop plus button, keyboard and touch controls. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AI200ExamInteractions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function describe(question, answer = []) {
    const order = question.type === 'order';
    const accepted = order && [question.correctAnswers, ...(question.acceptedOrders || [])].some(values => values.length === answer.length && values.every((id, i) => id === answer[i]));
    return question.correctAnswers.map((expected, i) => {
      const options = question.type === 'dropdown' ? question.slots[i].options : question.options;
      const value = id => options.find(option => option.id === id)?.text || '';
      return {label: order ? String(i + 1) : question.slots[i].label,
        selected: value(answer[i]), expected: value(expected), correct: accepted || answer[i] === expected};
    });
  }
  function placeOrderStep(question, answer, id, index) {
    if (!Number.isInteger(index) || index < 0 || index >= question.correctAnswers.length || !question.options.some(option => option.id === id)) throw new Error('Invalid step placement.');
    const next = Array.from({length:question.correctAnswers.length}, (_, i) => answer[i] || '');
    const previous = next.indexOf(id), displaced = next[index];
    if (previous >= 0) next[previous] = displaced;
    next[index] = id;
    return next;
  }
  function render(container, question, answer, onChange) {
    const doc = container.ownerDocument, win = doc.defaultView;
    const ui = text => win.AI200Site?.t ? win.AI200Site.t(text) : text;
    const type = question.type;
    let state = type === 'order' ? Array.from({length:question.correctAnswers.length}, (_, i) => answer[i] || '') : question.slots.map((_, i) => answer[i] || '');
    let chosen = null, checked = false;
    const make = (tag, className, text) => {
      const element = doc.createElement(tag);
      if (className) element.className = className;
      if (text !== undefined) element.textContent = text;
      return element;
    };
    function button(label, key, action, visible = label) {
      const element = make('button', 'interaction-button', visible);
      element.type = 'button'; element.dataset.focus = key;
      element.setAttribute('aria-label', ui(label)); element.title = ui(label);
      element.addEventListener('click', action);
      return element;
    }
    function commit(next, focusKey) {
      if (onChange(next.slice()) === false) return;
      state = next; refresh();
      [...container.querySelectorAll('[data-focus]')].find(element => element.dataset.focus === focusKey)?.focus({preventScroll:true});
    }
    function draggable(element, id) {
      element.draggable = true;
      element.addEventListener('dragstart', event => {
        event.dataTransfer.effectAllowed = type === 'order' ? 'move' : 'copyMove';
        event.dataTransfer.setData('application/x-ai200-answer', JSON.stringify({question:question.id, id}));
        event.dataTransfer.setData('text/plain', id);
      });
    }
    function target(element, accept) {
      element.addEventListener('dragover', event => {
        if (!event.dataTransfer.types.includes('application/x-ai200-answer')) return;
        if (type === 'order') event.dataTransfer.dropEffect = 'move';
        event.preventDefault(); element.classList.add('drag-target');
      });
      element.addEventListener('dragleave', () => element.classList.remove('drag-target'));
      element.addEventListener('drop', event => {
        element.classList.remove('drag-target');
        let data;
        try { data = JSON.parse(event.dataTransfer.getData('application/x-ai200-answer')); } catch { return; }
        if (data.question !== question.id || !question.options.some(option => option.id === data.id)) return;
        event.preventDefault(); event.stopPropagation(); accept(data.id);
      });
    }
    function placeStep(id, index) {
      chosen = null;
      if (state[index] === id) {
        refresh();
        [...container.querySelectorAll('[data-focus]')].find(element => element.dataset.focus === 'step-' + index)?.focus({preventScroll:true});
        return;
      }
      commit(placeOrderStep(question, state, id, index), 'step-' + index);
    }
    function orderAnswer() {
      const layout = make('div', 'order-layout'), available = make('section', 'answer-pool'), selected = make('section', 'ordered-answer');
      available.append(make('h4', '', ui('Available steps')));
      const pool = make('div', 'step-pool');
      for (const option of question.options.filter(option => !state.includes(option.id))) {
        const add = button('Select step', 'choice-' + option.id, () => {
          chosen = chosen === option.id ? null : option.id; refresh();
          [...container.querySelectorAll('[data-focus]')].find(element => element.dataset.focus === 'choice-' + option.id)?.focus({preventScroll:true});
        }, option.text);
        add.setAttribute('aria-label', ui('Select step') + ': ' + option.text);
        add.setAttribute('aria-pressed', String(chosen === option.id)); add.classList.add('step-choice');
        draggable(add, option.id); pool.append(add);
      }
      available.append(pool);
      selected.append(make('h4', '', ui('Your order') + ` (${state.filter(Boolean).length}/${question.correctAnswers.length})`));
      const list = make('ol', 'step-answer');
      list.setAttribute('aria-label', ui('Your order'));
      state.forEach((id, index) => {
        const row = make('li', 'interactive-step order-slot' + (id ? '' : ' empty-step')); row.dataset.answerPart = index;
        const position = make('span', 'step-position', ui('Step ' + (index + 1)));
        const option = question.options.find(option => option.id === id);
        const area = button('Choose step position', 'step-' + index, () => {
          if (chosen) placeStep(chosen, index);
          else if (id) {
            chosen = id; refresh();
            [...container.querySelectorAll('[data-focus]')].find(element => element.dataset.focus === 'step-' + index)?.focus({preventScroll:true});
          }
        }, option?.text || ui('Drop a step here'));
        area.classList.add('step-target'); area.id = question.id + '-step-' + index;
        area.setAttribute('aria-label', ui('Step ' + (index + 1)) + ': ' + (option?.text || ui('Drop a step here')));
        area.setAttribute('aria-pressed', String(Boolean(id) && chosen === id));
        if (id) draggable(area, id);
        target(row, value => placeStep(value, index)); row.append(position, area);
        if (!id) { list.append(row); return; }
        const controls = make('span', 'step-controls');
        const up = button('Move up', 'up-' + id, () => {
          placeStep(id, index-1);
        }, '↑'); up.disabled = index === 0;
        const down = button('Move down', 'down-' + id, () => {
          placeStep(id, index+1);
        }, '↓'); down.disabled = index === state.length - 1;
        controls.append(up, down, button('Remove step', 'remove-' + id, () => {const next = state.slice(); next[index] = ''; chosen = null; commit(next, 'step-' + index);}, '×'));
        controls.querySelectorAll('button').forEach(control => control.setAttribute('aria-describedby', area.id));
        row.append(controls); list.append(row);
      });
      selected.append(list); layout.append(available, selected); container.append(layout);
    }
    function place(id, index) {
      let next = state.slice();
      if (!question.reuse) next = next.map(value => value === id ? '' : value);
      next[index] = id; commit(next, 'target-' + question.slots[index].id);
    }
    function matchingAnswer() {
      container.append(make('p', 'small', ui('Choose an option, then choose a target. You can also drag options.')));
      const pool = make('div', 'matching-pool'); pool.setAttribute('aria-label', ui('Answer choices'));
      for (const option of question.options) {
        const choice = button('Select option', 'choice-' + option.id, () => {
          chosen = option.id; refresh();
          [...container.querySelectorAll('[data-focus]')].find(element => element.dataset.focus === 'choice-' + option.id)?.focus({preventScroll:true});
        }, option.text);
        choice.setAttribute('aria-label', ui('Select option') + ': ' + option.text);
        choice.setAttribute('aria-pressed', String(chosen === option.id)); draggable(choice, option.id); pool.append(choice);
      }
      container.append(pool);
      const rows = make('div', 'matching-rows');
      question.slots.forEach((slot, index) => {
        const row = make('div', 'answer-slot'); row.dataset.answerPart = index;
        const label = make('span', 'slot-label', slot.label); label.id = question.id + '-label-' + slot.id;
        const choice = question.options.find(option => option.id === state[index]);
        const area = button('Place selected option', 'target-' + slot.id, () => { if (chosen) place(chosen, index); }, choice?.text || ui('Choose an option'));
        area.classList.add('match-target'); area.setAttribute('aria-describedby', label.id); target(area, id => place(id, index));
        const remove = button('Clear selection', 'clear-' + slot.id, () => {const next = state.slice(); next[index] = ''; commit(next, 'target-' + slot.id);}, '×');
        remove.setAttribute('aria-describedby', label.id); remove.disabled = !state[index];
        row.append(label, area, remove); rows.append(row);
      });
      container.append(rows);
    }
    function select(slot, index) {
      const element = make('select', 'answer-select'); element.dataset.focus = 'slot-' + slot.id;
      element.id = question.id + '-slot-' + slot.id; element.setAttribute('aria-label', slot.label);
      const empty = make('option', '', ui('Choose an option')); empty.value = ''; element.append(empty);
      for (const option of slot.options) {const item = make('option', '', option.text); item.value = option.id; element.append(item);}
      element.value = state[index];
      element.addEventListener('change', () => {const next = state.slice(); next[index] = element.value; commit(next, 'slot-' + slot.id);});
      return element;
    }
    function dropdownAnswer() {
      if (question.code) {
        const pre = make('pre', 'code-completion'), code = make('code');
        const template = question.code.join('\n'); let cursor = 0;
        for (const match of template.matchAll(/\{\{([a-zA-Z0-9-]+)\}\}/g)) {
          code.append(doc.createTextNode(template.slice(cursor, match.index)));
          const index = question.slots.findIndex(slot => slot.id === match[1]);
          const blank = make('span', 'code-slot'); blank.dataset.answerPart = index;
          blank.append(select(question.slots[index], index)); code.append(blank); cursor = match.index + match[0].length;
        }
        code.append(doc.createTextNode(template.slice(cursor))); pre.append(code); container.append(pre);
      } else {
        for (const [index, slot] of question.slots.entries()) {
          const row = make('div', 'answer-slot dropdown-slot'); row.dataset.answerPart = index;
          const label = make('label', 'slot-label', slot.label); label.htmlFor = question.id + '-slot-' + slot.id;
          row.append(label, select(slot, index)); container.append(row);
        }
      }
    }
    function feedback(value) {
      checked = value;
      const parts = describe(question, state);
      for (const row of container.querySelectorAll('[data-answer-part]')) {
        const correct = parts[Number(row.dataset.answerPart)].correct;
        row.classList.toggle('correct-option', checked && correct);
        row.classList.toggle('wrong-option', checked && !correct);
      }
    }
    function refresh() {
      container.replaceChildren();
      if (type === 'order') orderAnswer();
      else if (type === 'match') matchingAnswer();
      else dropdownAnswer();
      feedback(checked);
    }
    refresh();
    return {feedback};
  }
  return {render, describe, placeOrderStep};
});
