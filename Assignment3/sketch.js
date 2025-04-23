function setup() {
  createCanvas(500, 500);
}

function draw() {

  noStroke();
  background('black');

  fill('#af280b');
  triangle(500, 500, 500, 0, 150, 250);

  fill('#ece4d7');
  triangle(375, 90, 150, 0, 150, 250);

  fill('#7e7a79');
  triangle(500, 0, 150, 0, 375, 90);

  fill('#c6cad5');
  triangle(500, 500, 150, 500, 150, 250);

  fill('#d7a601');
  triangle(150, 500, 0, 250, 0, 500);
  
  fill('#c6cad5');
  triangle(150, 0, 0, 0, 0, 250);
  
  fill('black');
  triangle(150, 500, 150, 0, 0, 250);
  
  fill('#ece4d7');
  triangle(150, 500, 75, 375, 0, 500);
}