

var s = function (sketch) {
  var userInput;
  sketch.setup = function () {
    noCanvas();

    let backgroundPage = chrome.extension.backgroundPage();
    let word = bgpage.word;

    let url = `http://api.wordnik.com:80/v4/word.json/${word}/definitions
                ?limit=1&includeRelated=false&sourceDictionaries=webster&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
  };
};

var myp5 = new p5(s);
