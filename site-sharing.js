/* Share destinations shared by flashcards and exam results. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AI200Sharing = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const message = data => `${data.title}\n${data.text}\n\n${data.url}`;
  function links(data) {
    const target = new URL(data.url);
    if (!['https:', 'http:'].includes(target.protocol) || target.username || target.password) throw new Error('Enter a valid site address.');
    const make = (base, parameters) => {
      const url = new URL(base);
      for (const [key, value] of Object.entries(parameters)) url.searchParams.set(key, value);
      return url.href;
    };
    return {
      email:'mailto:?subject='+encodeURIComponent(data.title)+'&body='+encodeURIComponent(message(data)),
      linkedin:make('https://www.linkedin.com/sharing/share-offsite/',{url:data.url}),
      whatsapp:make('https://wa.me/',{text:message(data)}),
      telegram:make('https://t.me/share/url',{url:data.url,text:data.title+'\n'+data.text}),
      x:make('https://twitter.com/intent/tweet',{url:data.url,text:data.title}),
    };
  }
  return {links, message};
});
