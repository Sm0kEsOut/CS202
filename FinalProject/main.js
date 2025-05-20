import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { WebGLRenderer } from "./node_modules/three/src/renderers/WebGLRenderer.js";
import { gsap } from './node_modules/gsap/gsap-core.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer({
    powerPreference: "high-performance",
    antialias: true,
    stencil: false,
    depth: true
});
const textureLoader = new THREE.TextureLoader();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add orbit contorls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth camera movement
camera.position.set(0, 20, 50);
controls.update();

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// Add directional light
const DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(ambientLight);

// Create Planet/Star Geometry
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunTexture = textureLoader.load('./textures/8k_sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture,
    // Add glow effect later
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const mercuryGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const mercuryTexture = textureLoader.load('./textures/8k_mercury.jpg');
const mercuryMaterial = new THREE.MeshBasicMaterial({
    map: mercuryTexture,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(10, 0, 0);
scene.add(mercury);

const venusGeometry = new THREE.SphereGeometry(2, 32, 32);
const venusTexture = textureLoader.load('./textures/8k_venus_surface.jpg');
const venusAtmosphere = textureLoader.load('./textures/4k_venus_atmosphere.jpg');
const venusMaterial = new THREE.MeshBasicMaterial({
    map: venusTexture,
    map: venusAtmosphere,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(20, 0, 0);
scene.add(venus);

const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthTexture = textureLoader.load('./textures/8k_earth_daymap.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(30, 0, 0);
scene.add(earth);

const marsGeometry = new THREE.SphereGeometry(1.7, 32, 32);
const marsTexture = textureLoader.load('./textures/8k_mars.jpg');
const marsMaterial = new THREE.MeshBasicMaterial({
    map: marsTexture,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(40, 0, 0);
scene.add(mars);

const jupiterGeometry = new THREE.SphereGeometry(4, 32, 32);
const jupiterTexture = textureLoader.load('./textures/8k_jupiter.jpg');
const jupiterMaterial = new THREE.MeshBasicMaterial({
    map: jupiterTexture,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(50, 0, 0);
scene.add(jupiter);

const saturnGeometry = new THREE.SphereGeometry(3.5, 32, 32);
const saturnTexture = textureLoader.load('./textures/8k_saturn.jpg');
const saturnMaterial = new THREE.MeshBasicMaterial({
    map: saturnTexture,
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(60, 0, 0);
scene.add(saturn);

const uranusGeometry = new THREE.SphereGeometry(2, 32, 32);
const uranusTexture = textureLoader.load('./textures/2k_uranus.jpg');
const uranusMaterial = new THREE.MeshBasicMaterial({
    map: uranusTexture,
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(70, 0, 0);
scene.add(uranus);

const neptuneGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const neptuneTexture = textureLoader.load('./textures/2k_neptune.jpg');
const neptuneMaterial = new THREE.MeshBasicMaterial({
    map: neptuneTexture,
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(80, 0, 0);
scene.add(neptune);

// Planet Orbits
const mercuryOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 10, 10, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
mercuryOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(mercuryOrbit);

const venusOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 20, 20, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
venusOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(venusOrbit);

const earthOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 30, 30, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
earthOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(earthOrbit);

const marsOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 40, 40, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
marsOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(marsOrbit);

const jupiterOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 50, 50, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
jupiterOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(jupiterOrbit);

const saturnOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 60, 60, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
saturnOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(saturnOrbit);

const uranusOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 70, 70, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
uranusOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(uranusOrbit);

const neptuneOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 80, 80, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
neptuneOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(neptuneOrbit);

const planetLabel = document.getElementById('planet-label');

// Raycaster to detect mouse hover
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0 && intersects[0].object === earth) {
        planetLabel.textContent = "Earth";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === mercury) {
        planetLabel.textContent = "Mercury";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === venus) {
        planetLabel.textContent = "Venus";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === mars) {
        planetLabel.textContent = "Mars";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === jupiter) {
        planetLabel.textContent = "Jupiter";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === saturn) {
        planetLabel.textContent = "Saturn";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === uranus) {
        planetLabel.textContent = "Uranus";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === neptune) {
        planetLabel.textContent = "Neptune";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else if (intersects.length > 0 && intersects[0].object === sun) {
        planetLabel.textContent = "Sun";
        planetLabel.style.display = "block";
        planetLabel.style.left = `${event.clientX}px`;
        planetLabel.style.top = `${event.clientY}px`;
    } else {
        planetLabel.style.display = "none";
    }
});

window.addEventListener('click', () => {

    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0 && intersects[0].object === earth) {

        gsap.to(camera.position, { x: earth.position.x, y: earth.position.y + 5, z: earth.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === mercury) {

        gsap.to(camera.position, { x: mercury.position.x, y: mercury.position.y + 5, z: mercury.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === venus) {

        gsap.to(camera.position, { x: venus.position.x, y: venus.position.y + 5, z: venus.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === mars) {

        gsap.to(camera.position, { x: mars.position.x, y: mars.position.y + 5, z: mars.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === jupiter) {

        gsap.to(camera.position, { x: jupiter.position.x, y: jupiter.position.y + 5, z: jupiter.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === saturn) {

        gsap.to(camera.position, { x: saturn.position.x, y: saturn.position.y + 5, z: saturn.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === uranus) {

        gsap.to(camera.position, { x: uranus.position.x, y: uranus.position.y + 5, z: uranus.position.z + 10, duration: 1 });

    } else if (intersects.length > 0 && intersects[0].object === neptune) {

        gsap.to(camera.position, { x: neptune.position.x, y: neptune.position.y + 5, z: neptune.position.z + 10, duration: 1 });

    }

})

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);