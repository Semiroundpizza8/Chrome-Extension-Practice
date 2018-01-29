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
i.e. Whenever the word computer appears, the content script replace it with the word flower.

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

## Background Script
Allows you to listen for user actions and affect the page because of it
i.e. Browser has a button, when button is pressed x happens

```javascript
{
  // ... Rest of manifest.json
  "background": {
    "scripts": ["background.js"]
  }
}
```
While content script runs on the webpage itself, allowing it to log to console, the background script is running as part of the browser as a whole. It does not communicate the to the pages console, instead logging to the extension page itself under "Inspect Views: background page"

![Inspect Views](/assets/images/inspect-views.png)

### Browser Action

```javascript
{
  "browser_action": {
    "default_icon": "xyz.png"
  }
}
```
### chrome.browserAction

You can then add browserActions onto chrome itself to dictate what happens on a certain action. An example of this is buttonClicked, which triggers a callback.

```javascript
chrome.browserAction.onClicked.addListener(buttonClicked)

// Custom callback to dictate action
  // tab callback gives information about current tab
function buttonClicked(tab) {
  console.log("Button Clicked!", tab);
}
```

This triggers off of multiple apis in chrome, such as chrome.browserAction and messaging.

### messaging
Allows you to send a message to a particular tab. Once the message is sent by an action, it must then be recieved.

```javascript
// Within the Background Script
function buttonClicked(tab) {
  let message = {
    txt: "hello"
  }

  chrome.tabs.sendMessage(tab.id, message.txt);
}
```

```javascript
// Within the Content Script
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt)
  if (message === "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['background-color'] = '#FF00FF';
    }
  }
}
```

After recieving a message, you can then use that message to trigger changes to your content based on the extensions content script.