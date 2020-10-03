function setup() {
    createCanvas(windowWidth, windowHeight); // sets full window size
    noStroke(); // no outline on dots
    for (let i = 0; i < 100; i++) {
        fill(random(255), random(255), random(255), random(255));
        ellipse(random(windowWidth), random(windowHeight), random(100));
         //this loops starts the art with 100 random circles of random colors 
    }
  }
  function mouseClicked() { //When you click....
    for (let i = 0; i < 100; i++) {
        fill(random(255), random(255), random(255), random(255));
        ellipse(random(windowWidth), random(windowHeight), random(100));
    } //adds 100 more random sized and shaped circles! 
  }