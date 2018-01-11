# Chrome Extension Notes

## Manifest.json
The Manifest.json is a json file that sets the standard for how your extension should be used. This file contains information such as version, name, and what other files should be refered to.

```javascript
{
  "manifest_version": 2,
  "name": "Chrome Extension Practice",
  "version": "0.01"
  "content_scripts": [
    {
      "js": ["content.js"]
    }
  ]
}
```
## Content Script
Javascript code that will execute whenever the page loads. After the page is finished, it will alter the dode of the page it is on. Must then be referenced in manifest.json
Ex: Whenever the word computer appears, the content script replace it with the word flower.

```javascript
{ 
  // ...Rest of manifest.json here
  "content_scripts": [
    {
      // Matches dictates which urls to work with
      "matches": [
        // Works for anything google, wild cards are *
        "http://google.com/*"
        "https://google.com/*"
        // For all URLs: "<all_urls>"
      ],
      // js dictates which file to be run
      "js": ["content.js"]
    }
  ]
}
```
### Content Script Inside for Reference

```javascript

console.log("Chrome extension is working")

let paragraphs = document.getElementsByTagName('p');

// ES6 Loop
for (var elt of paragraphs) {
  elt.style['background-color'] = '#FF00FF';
}
```