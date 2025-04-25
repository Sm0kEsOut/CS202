let triangles = [];

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    // Define each triangle with a center and relative points
    triangles = [
        {
            center: { x: 350, y: 250 },
            points: [
                { x: 150, y: 250 },
                { x: 500, y: 0 },
                { x: 500, y: 500 }
            ],
            color: '#af280b'
        },
        {
            center: { x: 225, y: 115 },
            points: [
                { x: 150, y: 0 },
                { x: 375, y: 90 },
                { x: 150, y: 250 }
            ],
            color: '#ece4d7'
        },
        {
            center: { x: 275, y: 45 },
            points: [
                { x: 150, y: 0 },
                { x: 500, y: 0 },
                { x: 375, y: 90 }
            ],
            color: '#7e7a79'
        },
        {
            center: { x: 325, y: 375 },
            points: [
                { x: 150, y: 250 },
                { x: 500, y: 500 },
                { x: 150, y: 500 }
            ],
            color: '#c6cad5'
        },
        {
            center: { x: 37, y: 375 },
            points: [
                { x: 0, y: 250 },
                { x: 75, y: 375 },
                { x: 0, y: 500 }
            ],
            color: '#d7a601'
        },
        {
            center: { x: 75, y: 125 },
            points: [
                { x: 0, y: 250 },
                { x: 150, y: 0 },
                { x: 0, y: 0 }
            ],
            color: '#c6cad5'
        },
        {
            center: { x: 75, y: 250 },
            points: [
                { x: 0, y: 250 },
                { x: 150, y: 0 },
                { x: 150, y: 500 }
            ],
            color: 'black'
        },
        {
            center: { x: 75, y: 437 },
            points: [
                { x: 0, y: 500 },
                { x: 150, y: 500 },
                { x: 75, y: 375 }
            ],
            color: '#ece4d7'
        }
    ];

    // Add rotation state to each triangle
    for (let tri of triangles) {
        tri.angle = 0;
        tri.originalAngle = 0;
    }
}

function draw() {
    background('#788585');
    noStroke();

    for (let tri of triangles) {
        let cx = tri.center.x;
        let cy = tri.center.y;
        let targetAngle = tri.originalAngle;

        // Only rotate if mouse is inside the canvas
        if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
            targetAngle = atan2(mouseY - cy, mouseX - cx);
        }

        // Smoothly interpolate current angle toward the target
        tri.angle = lerpAngle(tri.angle, targetAngle, 0.05);

        push();
        translate(cx, cy);
        rotate(tri.angle);

        fill(tri.color);
        triangle(
            tri.points[0].x - cx, tri.points[0].y - cy,
            tri.points[1].x - cx, tri.points[1].y - cy,
            tri.points[2].x - cx, tri.points[2].y - cy
        );
        pop();
    }
}


function lerpAngle(a, b, t) {
    let diff = ((b - a + 180) % 360) - 180;
    return a + diff * t;
}