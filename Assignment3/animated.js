let triangles = [];
let transitionSpeed = 0.01;

function setup() {
  createCanvas(500, 500);

  triangles = [
    { points: [500, 500, 500, 0, 150, 250], currentColor: randomColor(), targetColor: randomColor() },
    { points: [375, 90, 150, 0, 150, 250], currentColor: randomColor(), targetColor: randomColor() },
    { points: [500, 0, 150, 0, 375, 90], currentColor: randomColor(), targetColor: randomColor() },
    { points: [500, 500, 150, 500, 150, 250], currentColor: randomColor(), targetColor: randomColor() },
    { points: [150, 500, 0, 250, 0, 500], currentColor: randomColor(), targetColor: randomColor() },
    { points: [150, 0, 0, 0, 0, 250], currentColor: randomColor(), targetColor: randomColor() },
    { points: [150, 500, 150, 0, 0, 250], currentColor: randomColor(), targetColor: randomColor() },
    { points: [150, 500, 75, 375, 0, 500], currentColor: randomColor(), targetColor: randomColor() }
  ];
}

function draw() {
  background('#788585');

  // Draw and animate each triangle
  for (let t of triangles) {
    // Interpolate current color toward target color
    t.currentColor = lerpColor(t.currentColor, t.targetColor, transitionSpeed);

    fill(t.currentColor);
    triangle(...t.points);
  }

  // Occasionally pick new random target colors
  if (frameCount % 120 === 0) {
    for (let t of triangles) {
      t.targetColor = randomColor();
    }
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}