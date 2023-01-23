let lastX = 0;
let lastY = 0;

background(100);

function draw() {
  stroke(mouseX, 0, mouseY);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
