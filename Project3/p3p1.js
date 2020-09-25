function setup() {
    createCanvas(1500, 1500);
}

function draw() {
    background(200);
    var y = 100;
    // 25 black squares
    for (let i = 1; i < 25; ++ i) {
        let x = i*50; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            // sets the last blue square
            fill(0, 0, 255);
            square(x, y, 50);
        }
        else if (i % 5 === 0) {
            // sets the green squares should be on top
            fill(0, 255, 0);
            square(x, y, 50);
        }
        else if (i % 3 === 0) {
            // sets the purple circle
            fill(153, 31, 240);
            ellipse(x+25, y+25, 50, 50);
        }


        else {
            // black circle
            fill(0);
            ellipse(x+25, y+25, 50, 50);
        }
    }
}