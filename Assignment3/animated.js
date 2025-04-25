function setup() {
  createCanvas(500, 500, WEBGL);

  strokeWeight(5);

  camera(750, -1000, 1000);

  perspective(1, 1.5);
}

function draw() {

  orbitControl();
  
  noStroke();

  background('#788585');
  
  let angle = frameCount * 0.01;
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);

  fill('#af280b');
  triangle(500, 500, 500, 0, 150, 250);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);

  fill('#ece4d7');
  triangle(375, 90, 150, 0, 150, 250);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);

  fill('#7e7a79');
  triangle(500, 0, 150, 0, 375, 90);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);

  fill('#c6cad5');
  triangle(500, 500, 150, 500, 150, 250);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);

  fill('#d7a601');
  triangle(75, 375, 0, 250, 0, 500);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);
  
  fill('#c6cad5');
  triangle(150, 0, 0, 0, 0, 250);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);
  
  fill('black');
  triangle(150, 500, 150, 0, 0, 250);
  
  rotateZ(angle);
  rotateY(angle);
  rotateX(angle);
  
  fill('#ece4d7');
  triangle(150, 500, 75, 375, 0, 500);
}