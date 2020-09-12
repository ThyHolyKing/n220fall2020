let dot = 0;
let fr = 100;
let clr;

function setup() {
  createCanvas(800, 600);
  background(254,254,254);
  frameRate(fr); 
  clr = color(255, 0, 0);
}

function draw() {
  background(200);
  dot = dot += 1;
  if (dot > 800) { 
    dot = 0;
  }

  fill(clr);
  ellipse(dot, 70, 70, 70);
}