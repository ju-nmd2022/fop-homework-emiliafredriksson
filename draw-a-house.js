const x = 200;
const y = 200;

background(0, 0, 0);

noStroke();
fill(0, 255, 255);

beginShape();
vertex(x - 100, x + 100);
bezierVertex(x - 100, y + 100, x, y - 450, x + 100, y + 100);
endShape();

triangle(x - 100, y + 100, x - 150, y + 100, x - 85, y + 40);
triangle(x + 100, y + 100, x + 150, y + 100, x + 85, y + 40);

triangle(x - 45, y - 80, x - 80, y - 85, x - 30, y - 115);
triangle(x + 45, y - 80, x + 80, y - 85, x + 30, y - 115);
