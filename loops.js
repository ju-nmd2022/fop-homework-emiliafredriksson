function form(x, y) {
  ellipse(x + 50, y, 50);
}
/* 
let count = 0;

while (count < 4) {
  form(count * 100, 100);
  count++;
} */

for (let count = 0; count < 4; count++) {
  form(count * 100, 100);
}
