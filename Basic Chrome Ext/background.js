console.log("Background Running");


chrome.browserAction.onClicked.addListener(buttonClicked);

// Custom callback to dictate action
  // tab callback gives information about current tab
function buttonClicked(tab) {
  let message = {
    text: 'hello',
  };

  chrome.tabs.sendMessage(tab.id, message.text);
}