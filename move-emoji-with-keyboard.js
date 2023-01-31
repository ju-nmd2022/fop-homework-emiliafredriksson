function emoji(x, y, s) {
  angleMode(DEGREES);

  // The emoji background
  fill(255, 255, 0);
  stroke(0);
  ellipse(x, y, 300 * s);

  //   The eyebrows
  fill("#A48A53");
  noStroke();
  beginShape();
  vertex(x - 90 * s, y - 60 * s);
  bezierVertex(
    x - 80 * s,
    y - 80 * s,
    x - 60 * s,
    y - 95 * s,
    x - 30 * s,
    y - 85 * s
  );
  bezierVertex(
    x - 30 * s,
    y - 85 * s,
    x - 60 * s,
    y - 90 * s,
    x - 90 * s,
    y - 60 * s
  );
  endShape();

  beginShape();
  vertex(x + 90 * s, y - 60 * s);
  bezierVertex(
    x + 80 * s,
    y - 80 * s,
    x + 60 * s,
    y - 95 * s,
    x + 30 * s,
    y - 85 * s
  );
  bezierVertex(
    x + 30 * s,
    y - 85 * s,
    x + 60 * s,
    y - 90 * s,
    x + 90 * s,
    y - 60 * s
  );
  endShape();

  //   The blush
  fill(255, 0, 0, 60);
  noStroke();
  push();
  translate(x - 80 * s, y + 40 * s);
  rotate(345);

  ellipse(0, 0, 80 * s, 65 * s);
  ellipse(0, 0, 70 * s, 55 * s);
  ellipse(0, 0, 60 * s, 45 * s);
  ellipse(0, 0, 50 * s, 35 * s);
  pop();

  push();
  translate(x + 80 * s, y + 40 * s);
  rotate(15);

  ellipse(0, 0, 80 * s, 65 * s);
  ellipse(0, 0, 70 * s, 55 * s);
  ellipse(0, 0, 60 * s, 45 * s);
  ellipse(0, 0, 50 * s, 35 * s);
  pop();

  // The eyes of the emoji
  fill(255);
  stroke(0);
  ellipse(x - 55 * s, y - 5 * s, 85 * s);
  ellipse(x + 55 * s, y - 5 * s, 85 * s);

  fill(0);
  ellipse(x - 55 * s, y - 5 * s, 35 * s);
  ellipse(x + 55 * s, y - 5 * s, 35 * s);

  //   The mouth of the emoji
  fill("#8B0000");
  noStroke();
  beginShape();
  vertex(x - 25 * s, y + 60 * s);
  vertex(x + 25 * s, y + 60 * s);
  bezierVertex(
    x + 45 * s,
    y + 60 * s,
    x + 45 * s,
    y + 85 * s,
    x + 25 * s,
    y + 85 * s
  );
  vertex(x - 25 * s, y + 85 * s);
  bezierVertex(
    x - 45 * s,
    y + 85 * s,
    x - 45 * s,
    y + 60 * s,
    x - 25 * s,
    y + 60 * s
  );
  endShape();
}

let x = 250;
let y = 250;
const speed = 4;

function draw() {
  if (keyIsDown(38)) {
    y = y - speed;
  } else if (keyIsDown(40)) {
    y = y + speed;
  } else if (keyIsDown(39)) {
    x = x + speed;
  } else if (keyIsDown(37)) {
    x = x - speed;
  }

  background(255);
  emoji(x, y, 0.5);
}
