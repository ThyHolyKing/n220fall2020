let r, g, b;
let roll;
let die;

function setup() {
  createCanvas(720, 400);
  r = (255);
  g = (255);
  b = (255);
  roll = (0);
  die = [1,2,3,4]
}

function draw() {
  background(127);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

function mousePressed() {
    let roll = random(die);
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {    
    if (roll > 0) {
        r = (255);
        g = (0);
        b = (0);
    }
    if (roll > 1) {
        r = (0);
        g = (0);
        b = (255);

    }

    if (roll > 2) {
        r = (0);
        g = (255);
        b = (0);

    }
    if (roll > 3) {
        r = (255);
        g = (255);
        b = (255);

    }

  }
}