let lastX = 0;
let lastY = 0;

background(100);

function draw() {
  strokeWeight(5);
  stroke((mouseX / width) * 255, 0, (mouseY / height) * 255);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
