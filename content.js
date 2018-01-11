
console.log("Chrome extension is working")

let paragraphs = document.getElementsByTagName('p');

// ES6 Loop
for (var elt of paragraphs) {
  elt.style['background-color'] = '#FF00FF';
}
