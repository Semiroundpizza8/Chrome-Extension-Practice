
console.log("Chrome extension is working");

window.addEventListener('mouseup', () => {
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if(selectedText.length > 0) {
    let message = {
      text: selectedText
    }
    chrome.runtime.sendMessage(message); // Sends a message to the background script
  }
});
