function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(230);

  let hr = hour();
  let min = minute();
  let sc = second();

  let hourAngle = 0;
  let minAngle = 0;
  let secAngle = 0;

  translate(windowWidth / 2, windowHeight / 2);
  rotate(-90);

  push();
    noStroke();
    fill(0);
    hourAngle = map(hr % 12, 0, 12, 0, 360);
    rotate(hourAngle);
    scale(8.0);
    rect(0, 0, 100,100);
  pop();

  push();
    noStroke();
    fill(60);
    minAngle = map(min, 0, 60, 0, 360);
    rotate(minAngle);
    scale(4.0);
    rect(0, 0, 75, 75);
  pop();

  push();
    noStroke();
    fill(80);
    secAngle = map(sc, 0, 60, 0, 360);
    rotate(secAngle);
    scale(2.0);
    rect(0, 0, 55, 55);
  pop();

}
