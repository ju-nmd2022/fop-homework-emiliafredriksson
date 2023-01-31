let lastX = 0;
let lastY = 0;
let mouseIsActive = false;

/* background(100);

function draw() {
  strokeWeight(5);
  stroke((mouseX / width) * 255, 0, (mouseY / height) * 255);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
} */

/* function mouseClicked() {
  stroke(255, 0, 255);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
} */

function draw() {
  stroke(255, 0, 255);
  strokeWeight(4);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      line(mouseX, mouseY, lastX, lastY);
    }

    lastX = mouseX;
    lastY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }
}
