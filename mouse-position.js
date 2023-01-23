function draw() {
  background(80, 80, 80, 100);
  fill(0, 255, 255);
  noStroke();
  ellipse(width / 2, height / 2, Math.max(0.1, (mouseX / width) * 100));
}
