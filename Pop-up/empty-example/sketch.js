function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 240, 240);
}
