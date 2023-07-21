# What is this?

A working example of this Medium Article

[How to use ES6 “import” with Chrome Extension - Hiromu OCHIAI - Medium](https://medium.com/@otiai10/how-to-use-es6-import-with-chrome-extension-bd5217b9c978)

Star this repo if you like 😉

# Updated to Manifest V3 by Okicarde

# Changes inside content_script.js

```
(async () => {
  const src = chrome.extension.getURL('src/js/content_main.js');
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
```
To
```
(async () => {
  const src = chrome.runtime.getURL('src/js/content_main.js');
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();
```

# Changes inside manifest.json

```
{
    "manifest_version": 2,
    "permissions": ["<all_urls>"],
    "web_accessible_resources": ["src/js/*"]
}
```
To
```
{
  "manifest_version": 3,
  "permissions": ["scripting"],
  "web_accessible_resources": [
    {
      "matches": ["<all_urls>"],
      "resources": ["src/*"]
    }
  ]
}
```

