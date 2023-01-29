background(0, 255, 255);

function flappy(x, y, s) {
  // Legs behind
  fill(255);
  beginShape();
  vertex(x + 65 * s, y - 20 * s);
  vertex(x + 110 * s, y - 5 * s);
  bezierVertex(
    x + 115 * s,
    y - 5 * s,
    x + 110 * s,
    y + 20 * s,
    x + 105 * s,
    y + 20 * s
  );
  vertex(x + 65 * s, y + 20 * s);
  endShape();

  beginShape();
  vertex(x - 95 * s, y);
  vertex(x - 140 * s, y + 20 * s);
  bezierVertex(
    x - 145 * s,
    y + 20 * s,
    x - 140 * s,
    y + 45 * s,
    x - 135 * s,
    y + 45 * s
  );
  vertex(x - 85 * s, y + 35 * s);
  endShape();

  fill(0);
  beginShape();
  vertex(x + 110 * s, y - 5 * s);
  bezierVertex(
    x + 115 * s,
    y - 5 * s,
    x + 110 * s,
    y + 20 * s,
    x + 105 * s,
    y + 20 * s
  );
  vertex(x + 115 * s, y + 20 * s);
  bezierVertex(
    x + 120 * s,
    y + 20 * s,
    x + 125 * s,
    y - 2 * s,
    x + 120 * s,
    y - 2 * s
  );
  vertex(x + 110 * s, y - 5 * s);
  endShape();

  beginShape();
  vertex(x - 140 * s, y + 20 * s);
  bezierVertex(
    x - 145 * s,
    y + 20 * s,
    x - 140 * s,
    y + 45 * s,
    x - 135 * s,
    y + 45 * s
  );
  vertex(x - 145 * s, y + 47 * s);
  bezierVertex(
    x - 150 * s,
    y + 47 * s,
    x - 155 * s,
    y + 23 * s,
    x - 150 * s,
    y + 23 * s
  );
  vertex(x - 140 * s, y + 20 * s);
  endShape();

  //   The tail
  fill("#FF1493");
  beginShape();
  vertex(x - 85 * s, y - 30 * s);
  bezierVertex(
    x - 90 * s,
    y - 40 * s,
    x - 120 * s,
    y - 45 * s,
    x - 130 * s,
    y - 35 * s
  );
  bezierVertex(
    x - 140 * s,
    y - 25 * s,
    x - 155 * s,
    y - 20 * s,
    x - 165 * s,
    y - 25 * s
  );
  bezierVertex(
    x - 155 * s,
    y - 10 * s,
    x - 105 * s,
    y + 20 * s,
    x - 95 * s,
    y - 15 * s
  );
  endShape();

  // The body
  fill(255);
  beginShape();
  vertex(x + 55 * s, y - 55 * s);
  bezierVertex(
    x - 150 * s,
    y - 85 * s,
    x - 150 * s,
    y + 80 * s,
    x + 25 * s,
    y + 55 * s
  );
  bezierVertex(
    x + 90 * s,
    y + 45 * s,
    x + 85 * s,
    y - 20 * s,
    x + 75 * s,
    y - 35 * s
  );
  endShape();

  //   Legs on this side
  fill(255);
  beginShape();
  vertex(x - 90 * s, y + 15 * s);
  vertex(x - 115 * s, y + 70 * s);
  bezierVertex(
    x - 115 * s,
    y + 75 * s,
    x - 90 * s,
    y + 85 * s,
    x - 90 * s,
    y + 80 * s
  );
  vertex(x - 50 * s, y + 40 * s);
  endShape();

  beginShape();
  vertex(x + 60 * s, y + 10 * s);
  vertex(x + 100 * s, y + 55 * s);
  bezierVertex(
    x + 100 * s,
    y + 60 * s,
    x + 80 * s,
    y + 75 * s,
    x + 80 * s,
    y + 70 * s
  );
  vertex(x + 30 * s, y + 40 * s);
  endShape();

  fill(0);
  beginShape();
  vertex(x - 115 * s, y + 70 * s);
  bezierVertex(
    x - 115 * s,
    y + 75 * s,
    x - 90 * s,
    y + 85 * s,
    x - 90 * s,
    y + 80 * s
  );
  vertex(x - 98 * s, y + 90 * s);
  bezierVertex(
    x - 98 * s,
    y + 95 * s,
    x - 120 * s,
    y + 85 * s,
    x - 120 * s,
    y + 80 * s
  );
  vertex(x - 115 * s, y + 70 * s);
  endShape();

  beginShape();
  vertex(x + 100 * s, y + 55 * s);
  bezierVertex(
    x + 100 * s,
    y + 60 * s,
    x + 80 * s,
    y + 75 * s,
    x + 80 * s,
    y + 70 * s
  );
  vertex(x + 88 * s, y + 75 * s);
  bezierVertex(
    x + 93 * s,
    y + 78 * s,
    x + 106 * s,
    y + 65 * s,
    x + 106 * s,
    y + 63 * s
  );
  vertex(x + 100 * s, y + 55 * s);
  endShape();

  //   The head
  fill(255);
  beginShape();
  vertex(x, y - 100 * s);
  bezierVertex(
    x - 40 * s,
    y + 20 * s,
    x + 140 * s,
    y + 20 * s,
    x + 100 * s,
    y - 100 * s
  );
  bezierVertex(
    x + 130 * s,
    y - 120 * s,
    x + 100 * s,
    y - 160 * s,
    x + 80 * s,
    y - 115 * s
  );
  vertex(x + 20 * s, y - 115 * s);
  bezierVertex(x, y - 160 * s, x - 30 * s, y - 120 * s, x, y - 100 * s);
  endShape();

  //   The face
  fill(0);
  ellipse(x + 40 * s, y - 35 * s, 5 * s, 7 * s);
  ellipse(x + 60 * s, y - 35 * s, 5 * s, 7 * s);

  ellipse(x + 25 * s, y - 70 * s, 15 * s, 20 * s);
  ellipse(x + 75 * s, y - 70 * s, 15 * s, 20 * s);

  fill(255);
  ellipse(x + 27 * s, y - 73 * s, 7 * s);
  ellipse(x + 23 * s, y - 66 * s, 5 * s);
  ellipse(x + 77 * s, y - 73 * s, 7 * s);
  ellipse(x + 73 * s, y - 66 * s, 5 * s);

  push();
  fill("#FEC5E5");
  noStroke();
  ellipse(x + 5 * s, y - 115 * s, 15 * s);
  ellipse(x + 95 * s, y - 115 * s, 15 * s);
  pop();

  //   The hair on the head
  fill("#FF1493");
  beginShape();
  vertex(x + 80 * s, y - 115 * s);
  bezierVertex(
    x + 70 * s,
    y - 130 * s,
    x + 30 * s,
    y - 130 * s,
    x + 20 * s,
    y - 115 * s
  );
  bezierVertex(
    x + 20 * s,
    y - 115 * s,
    x + 20 * s,
    y - 100 * s,
    x + 35 * s,
    y - 95 * s
  );
  bezierVertex(
    x + 45 * s,
    y - 90 * s,
    x + 50 * s,
    y - 90 * s,
    x + 45 * s,
    y - 75 * s
  );
  bezierVertex(
    x + 60 * s,
    y - 80 * s,
    x + 80 * s,
    y - 100 * s,
    x + 80 * s,
    y - 115 * s
  );
  endShape();

  // The horn
  fill(255, 255, 0);
  beginShape();
  vertex(x + 42 * s, y - 115 * s);
  bezierVertex(
    x + 42 * s,
    y - 105 * s,
    x + 58 * s,
    y - 105 * s,
    x + 58 * s,
    y - 115 * s
  );
  bezierVertex(
    x + 51 * s,
    y - 185 * s,
    x + 49 * s,
    y - 185 * s,
    x + 42 * s,
    y - 115 * s
  );
  endShape();

  fill(0);
  line(x + 43 * s, y - 120 * s, x + 56 * s, y - 125 * s);
  line(x + 44 * s, y - 132 * s, x + 55 * s, y - 137 * s);
  line(x + 45 * s, y - 144 * s, x + 54 * s, y - 149 * s);
}

flappy(200, 200, 0.5);
