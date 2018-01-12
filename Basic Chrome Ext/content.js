
console.log("Chrome extension is working")

let paragraphs = document.getElementsByTagName('p');

// ES6 Loop
// for (var elt of paragraphs) {
//   elt.style['background-color'] = '#FF00FF';
// }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  if (message === "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['background-color'] = '#FF00FF';
    }
  }
}