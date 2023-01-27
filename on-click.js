// background(255);

// function myEllipse(x, y, s) {
//   fill(0);
//   ellipse(x, y, 10 * s);
// }

// let s = 1;

// function mouseClicked() {
//   myEllipse(300, 300, s);

//   s = s + 0.5;
// }

/* background(255);

let size = 10;

function mouseClicked() {
  size = size + 10;
}

function draw() {
  fill(255, 255, 50);
  noStroke();
  ellipse(width / 2, height / 2, size);
} */

function forms(x, y) {
  fill(0, 255, 255);
  ellipse(x, y, 20);
  rect(x + 20, y + 35, 30, 15);
}

function mouseClicked() {
  forms(mouseX, mouseY);
}
