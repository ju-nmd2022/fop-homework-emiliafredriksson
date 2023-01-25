background(0, 255, 255);

function flappy() {
  // Legs behind
  fill(255);
  beginShape();
  vertex(265, 180);
  vertex(310, 195);
  bezierVertex(315, 195, 310, 220, 305, 220);
  vertex(265, 220);
  endShape();

  beginShape();
  vertex(105, 200);
  vertex(60, 220);
  bezierVertex(55, 220, 60, 245, 65, 245);
  vertex(115, 235);
  endShape();

  fill(0);
  beginShape();
  vertex(310, 195);
  bezierVertex(315, 195, 310, 220, 305, 220);
  vertex(315, 220);
  bezierVertex(320, 220, 325, 198, 320, 198);
  vertex(310, 195);
  endShape();

  beginShape();
  vertex(60, 220);
  bezierVertex(55, 220, 60, 245, 65, 245);
  vertex(55, 247);
  bezierVertex(50, 247, 45, 223, 50, 223);
  vertex(60, 220);
  endShape();

  //   The tail
  push();
  //   scale(1.2);
  fill("#FF1493");
  beginShape();
  vertex(115, 170);
  bezierVertex(110, 160, 80, 155, 70, 165);
  bezierVertex(60, 175, 45, 180, 35, 175);
  bezierVertex(45, 190, 95, 220, 105, 185);
  endShape();
  pop();

  // The body
  fill(255);
  beginShape();
  vertex(255, 145);
  bezierVertex(50, 115, 50, 280, 225, 255);
  bezierVertex(290, 245, 285, 180, 275, 165);
  endShape();

  //   Legs on this side
  fill(255);
  beginShape();
  vertex(110, 215);
  vertex(85, 270);
  bezierVertex(85, 275, 110, 285, 110, 280);
  vertex(150, 240);
  endShape();

  beginShape();
  vertex(260, 210);
  vertex(300, 255);
  bezierVertex(300, 260, 280, 275, 280, 270);
  vertex(230, 240);
  endShape();

  fill(0);
  beginShape();
  vertex(85, 270);
  bezierVertex(85, 275, 110, 285, 110, 280);
  vertex(102, 290);
  bezierVertex(102, 295, 80, 285, 80, 280);
  vertex(85, 270);
  endShape();

  beginShape();
  vertex(300, 255);
  bezierVertex(300, 260, 280, 275, 280, 270);
  vertex(288, 275);
  bezierVertex(293, 278, 306, 265, 306, 263);
  vertex(300, 255);
  endShape();

  //   The head
  fill(255);
  beginShape();
  vertex(200, 100);
  bezierVertex(160, 220, 340, 220, 300, 100);
  bezierVertex(330, 80, 300, 40, 280, 85);
  vertex(220, 85);
  bezierVertex(200, 40, 170, 80, 200, 100);
  endShape();

  //   The face
  fill(0);
  ellipse(240, 165, 5, 7);
  ellipse(260, 165, 5, 7);

  ellipse(225, 130, 15, 20);
  ellipse(275, 130, 15, 20);

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

  // The horn (problem somewhere but where????)
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

flappy();
