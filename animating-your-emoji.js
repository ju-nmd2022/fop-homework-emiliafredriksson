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

/* let x = 100;
let direction = "forward"; */

/* function draw() {
  background(255);
  emoji(x, 100, 0.5);

  if (direction === "forward") {
    if (x <= 300) {
      x = x + 4;
    } else {
      direction = "backwards";
    }
  } else if (direction === "backwards") {
    if (x > 100) {
      x = x - 4;
    }
  }
} */

let x = 100;
let speed = 4;

function draw() {
  background(255);
  emoji(x, 100, 0.5);

  x = x + speed;
  if (x > 300 || x < 100) {
    speed = speed * -1;
  }
}
