function button(x, y) {
  fill(0, 255, 255);
  rect(x - 100, y - 30, 200, 60);

  fill(0);
  text("change color", x - 35, y);
}

let buttonIsClicked = false;

function draw() {
  if (buttonIsClicked) {
    background(255, 255, 0);
  } else {
    background(255, 0, 255);
  }

  button(width / 2, height / 2);
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 250 + 200 && mouseY > 270 && mouseY < 270 + 60) {
    buttonIsClicked = true;
  }
}

function mouseReleased() {
  buttonIsClicked = false;
}
