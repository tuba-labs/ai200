'use strict';
const byId = id => document.getElementById(id);
async function api(path, options = {}) {
  const response = await fetch(path, options);
  if (!response.ok) throw new Error('Request failed (' + response.status + '). Check sign-in, CSRF token, and Products logs.');
  return response.json();
}
const productBody = byId('products-body');
if (productBody) {
  const update = async () => {
    try {
      const products = await api('/api/products');
      productBody.replaceChildren(...products.map(product => {
        const row = document.createElement('tr');
        for (const value of [product.name, product.status, product.error || '']) {
          const cell = document.createElement('td'); cell.textContent = value; row.append(cell);
        }
        return row;
      }));
      byId('products-status').textContent = '';
    } catch (error) { byId('products-status').textContent = error.message; }
  };
  setInterval(update, 3000);
}
const form = byId('chat-form');
if (form) {
  let pollTimer;
  function render(result) {
    byId('result').hidden = false;
    byId('request-state').textContent = result.status + (result.error ? ': ' + result.error : '');
    byId('answer').textContent = result.answer || 'Waiting for the asynchronous worker…';
    byId('request-id').textContent = 'Request ' + result.id + ' · correlation ' + result.correlationId;
    byId('sources').replaceChildren(...result.sources.map(source => {
      const item = document.createElement('li'), title = document.createElement('strong'), quote = document.createElement('blockquote');
      title.textContent = '[' + source.reference + '] ' + source.productName + ' · chunk ' + source.chunkIndex;
      quote.textContent = source.excerpt;
      const detail = document.createElement('small'); detail.textContent = 'Manual ' + source.manualId;
      item.append(title, quote, detail); return item;
    }));
  }
  async function poll(id, until = Date.now() + 9 * 60 * 1000) {
    clearTimeout(pollTimer);
    try {
      const result = await api('/api/questions/' + encodeURIComponent(id)); render(result);
      if (['queued', 'processing'].includes(result.status) && Date.now() < until) {
        pollTimer = setTimeout(() => poll(id, until), 2000);
      } else {
        byId('ask').disabled = false;
        if (Date.now() >= until) byId('request-state').textContent = 'Polling timed out. Refresh to read the persisted request status.';
      }
    } catch (error) { byId('request-state').textContent = error.message + ' Refresh to retry polling.'; byId('ask').disabled = false; }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault(); byId('ask').disabled = true;
    try {
      const csrf = await api('/api/csrf');
      const result = await api('/api/questions', {method: 'POST', headers: {'Content-Type': 'application/json', [csrf.headerName]: csrf.token},
        body: JSON.stringify({question: byId('question').value, productId: byId('product').value || null})});
      const url = new URL(location.href); url.searchParams.set('request', result.id); history.replaceState(null, '', url);
      render(result); poll(result.id);
    } catch (error) { byId('result').hidden = false; byId('request-state').textContent = error.message; byId('ask').disabled = false; }
  });
  const request = new URLSearchParams(location.search).get('request');
  if (request && /^[0-9a-f-]{36}$/.test(request)) { byId('ask').disabled = true; poll(request); }
}
