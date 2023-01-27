background(0, 255, 255);

function flappy(x, y) {
  // Legs behind
  fill(255);
  beginShape();
  vertex(x + 65, y - 20);
  vertex(x + 110, y - 5);
  bezierVertex(x + 115, y - 5, x + 110, y + 20, x + 105, y + 20);
  vertex(x + 65, y + 20);
  endShape();

  beginShape();
  vertex(x - 95, y);
  vertex(x - 140, y + 20);
  bezierVertex(x - 145, y + 20, x - 140, y + 45, x - 135, y + 45);
  vertex(x - 85, y + 35);
  endShape();

  fill(0);
  beginShape();
  vertex(x + 110, y - 5);
  bezierVertex(x + 115, y - 5, x + 110, y + 20, x + 105, y + 20);
  vertex(x + 115, y + 20);
  bezierVertex(x + 120, y + 20, x + 125, y - 2, x + 120, y - 2);
  vertex(x + 110, y - 5);
  endShape();

  beginShape();
  vertex(x - 140, y + 20);
  bezierVertex(x - 145, y + 20, x - 140, y + 45, x - 135, y + 45);
  vertex(x - 145, y + 47);
  bezierVertex(x - 150, y + 47, x - 155, y + 23, x - 150, y + 23);
  vertex(x - 140, y + 20);
  endShape();

  //   The tail
  fill("#FF1493");
  beginShape();
  vertex(x - 85, y - 30);
  bezierVertex(x - 90, y - 40, x - 120, y - 45, x - 130, y - 35);
  bezierVertex(x - 140, y - 25, x - 155, y - 20, x - 165, y - 25);
  bezierVertex(x - 155, y - 10, x - 105, y + 20, x - 95, y - 15);
  endShape();

  // The body
  fill(255);
  beginShape();
  vertex(x + 55, y - 55);
  bezierVertex(x - 150, y - 85, x - 150, y + 80, x + 25, y + 55);
  bezierVertex(x + 90, y + 45, x + 85, y - 20, x + 75, y - 35);
  endShape();

  //   Legs on this side
  fill(255);
  beginShape();
  vertex(x - 90, y + 15);
  vertex(x - 115, y + 70);
  bezierVertex(x - 115, y + 75, x - 90, y + 85, x - 90, y + 80);
  vertex(x - 50, y + 40);
  endShape();

  beginShape();
  vertex(x + 60, y + 10);
  vertex(x + 100, y + 55);
  bezierVertex(x + 100, y + 60, x + 80, y + 75, x + 80, y + 70);
  vertex(x + 30, y + 40);
  endShape();

  fill(0);
  beginShape();
  vertex(x - 115, y + 70);
  bezierVertex(x - 115, y + 75, x - 90, y + 85, x - 90, y + 80);
  vertex(x - 98, y + 90);
  bezierVertex(x - 98, y + 95, x - 120, y + 85, x - 120, y + 80);
  vertex(x - 115, y + 70);
  endShape();

  beginShape();
  vertex(x + 100, y + 55);
  bezierVertex(x + 100, y + 60, x + 80, y + 75, x + 80, y + 70);
  vertex(x + 88, y + 75);
  bezierVertex(x + 93, y + 78, x + 106, y + 65, x + 106, y + 63);
  vertex(x + 100, y + 55);
  endShape();

  //   The head
  fill(255);
  beginShape();
  vertex(x, y - 100);
  bezierVertex(x - 40, y + 20, x + 140, y + 20, x + 100, y - 100);
  bezierVertex(x + 130, y - 120, x + 100, y - 160, x + 80, y - 115);
  vertex(x + 20, y - 115);
  bezierVertex(x, y - 160, x - 30, y - 120, x, y - 100);
  endShape();

  //   The face
  fill(0);
  ellipse(x + 40, y - 35, 5, 7);
  ellipse(x + 60, y - 35, 5, 7);

  ellipse(x + 25, y - 70, 15, 20);
  ellipse(x + 75, y - 70, 15, 20);

  fill(255);
  ellipse(227, 127, 7);
  ellipse(223, 134, 5);
  ellipse(277, 127, 7);
  ellipse(273, 134, 5);

  push();
  fill("#FEC5E5");
  noStroke();
  ellipse(205, 85, 15);
  ellipse(295, 85, 15);
  pop();

  //   The hair on the head
  fill("#FF1493");
  beginShape();
  vertex(280, 85);
  bezierVertex(270, 70, 230, 70, 220, 85);
  bezierVertex(220, 85, 220, 100, 235, 105);
  bezierVertex(245, 110, 250, 110, 245, 125);
  bezierVertex(260, 120, 280, 100, 280, 85);
  endShape();

  // The horn
  fill(255, 255, 0);
  beginShape();
  vertex(242, 85);
  bezierVertex(242, 95, 258, 95, 258, 85);
  bezierVertex(251, 15, 249, 15, 242, 85);
  endShape();

  fill(0);
  line(243, 80, 256, 75);
  line(244, 68, 255, 63);
  line(245, 56, 254, 51);
}

flappy(200, 200);
