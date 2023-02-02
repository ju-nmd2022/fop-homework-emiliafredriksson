/* let count = 0;

while (count <= 100) {
  console.log(count);
  count = count + 1;
} */

let secondCount = 10;

while (secondCount <= 42) {
  console.log(secondCount);
  secondCount = secondCount + 2;
}

background(255);

let x = 0;
let y = 0;
const size = 40;

while (x < width) {
  line(x, 0, x, height);
  x = x + size;
}

while (y < height) {
  line(0, y, width, y);
  y = y + size;
}
