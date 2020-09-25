var XY = [];
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(200);
  noStroke();
  fill(1);
  for (var i = 0; i < XY.length; i++) {
    fill(XY[i][2]);
    rect(XY[i][0], XY[i][1], 50, 25);
    XY[i][1] += 1;
  }
}
function mousePressed() {
  XY.push([mouseX, mouseY, (1)]);
}