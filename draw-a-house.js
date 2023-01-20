background(0, 0, 0);

noStroke();
fill(0, 255, 255);

beginShape();
vertex(100, 300);
bezierVertex(100, 300, 200, -250, 300, 300);
endShape();

triangle(100, 300, 50, 300, 115, 240);
triangle(300, 300, 350, 300, 285, 240);

triangle(155, 120, 120, 115, 170, 85);
triangle(245, 120, 280, 115, 230, 85);
