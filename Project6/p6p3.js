
let ball = {
x:100,
y:100,

};
function setup() {
    background(254,254,254); 
    createCanvas(512, 512);
    fill(100, 220, 90);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    ball.x -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ball.x += 2;
  }

  if (keyIsDown(UP_ARROW)) {
    ball.y -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ball. y += 2;
  }

  clear();
  ellipse(ball.x, ball.y, 50, 50);
}