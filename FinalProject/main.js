import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { MapControls } from 'three/addons/controls/MapControls.js';


// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias:true });
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
    roughness: 1.0,
    // Add glow effect later
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthTexture = textureLoader.load('./textures/8k_earth_daymap.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture,
    roughness: 0.8,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(15, 0, 0);
scene.add(earth);

// Planet Orbits
const earthOrbit = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, 15, 15, 0, Math.PI * 2, false).getPoints(100)
    ),
    new THREE.LineBasicMaterial({ color: 0x555555 })
);
earthOrbit.rotation.x = Math.PI / 2; // Make it horizontal
scene.add(earthOrbit);

function animate() {
    renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );