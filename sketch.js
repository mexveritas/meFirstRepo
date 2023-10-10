let circleX = 100;

function setup() {
  createCanvas(400, 300);
}

function mousePressed() {
 circleX = 200;
}

function draw() {
  background(0);
  noStroke();
  fill(255)
  
  if (mouseX > 300) {
    fill(255,0,200)
  }
;
  circle(circleX, 150, 64);
  circleX = circleX - 10
}