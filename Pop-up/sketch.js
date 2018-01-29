

var s = function (sketch) {
  this.on = false;

  sketch.setup = function () {
    let h = document.body.clientHeight;
    console.log(h)
    let c = sketch.createCanvas(sketch.windowWidth, h);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
  };

  sketch.draw = function () {
    if (this.on) {
      sketch.stroke(0);
      sketch.strokeWeight(4);
      if (sketch.mouseIsPressed) sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY)
    }
  };

  sketch.keyPressed = function () {
    if (sketch.keyCode === sketch.ESCAPE) {
      this.on = !this.on;
      sketch.clear();
    }
  };
};

var myp5 = new p5(s);