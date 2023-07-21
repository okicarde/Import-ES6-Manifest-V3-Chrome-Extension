(async () => {
  const src = chrome.runtime.getURL('src/js/content_main.js');
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
