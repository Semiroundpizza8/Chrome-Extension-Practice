

var s = function (sketch) {
  var userInput;
  sketch.setup = function () {
    sketch.noCanvas();
    userInput = sketch.select('#userinput');
    userInput.input(newText) // Every time the user presses a key
  };

  function newText() {
    let params = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(params, tabs => {
      console.log(tabs)
      // Send a message to the content script.
      let message = userInput.value();
      let msg = {
        txt: message
      };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    });
  }
};

var myp5 = new p5(s);