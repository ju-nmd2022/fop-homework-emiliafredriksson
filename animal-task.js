background(255, 255, 255);

triangle(120, 140, 150, 115, 115, 85);
triangle(280, 140, 250, 115, 285, 85);
triangle(125, 135, 140, 120, 120, 100);
triangle(275, 135, 260, 120, 280, 100);

beginShape();
vertex(300, 425);
bezierVertex(300, 425, 405, 430, 400, 240);
bezierVertex(400, 240, 380, 160, 355, 240);
bezierVertex(355, 240, 380, 340, 310, 400);
endShape();

ellipse(200, 350, 250, 270);

beginShape();
vertex(140, 335);
bezierVertex(140, 335, 190, 700, 190, 335);
endShape();
beginShape();
vertex(260, 335);
bezierVertex(260, 335, 190, 700, 210, 335);
endShape();

ellipse(200, 200, 200);
triangle(200, 200, 210, 220, 190, 220);

beginShape();
vertex(200, 220);
bezierVertex(200, 220, 210, 260, 220, 240);
endShape();

beginShape();
vertex(200, 220);
bezierVertex(200, 220, 190, 260, 180, 240);
endShape();

fill(0, 0, 0);
ellipse(160, 175, 15);
ellipse(240, 175, 15);
