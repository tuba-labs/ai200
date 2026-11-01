/* Preview pages open the card or preserve a result's client-side fragment. */
(function () {
  'use strict';
  const link=document.querySelector('[data-share-target]');
  if(link?.dataset.shareTarget==='result')link.hash=location.hash;
  if(link)location.replace(link.href);
})();
