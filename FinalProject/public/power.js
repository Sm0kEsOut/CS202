document.addEventListener('DOMContentLoaded', () => {
    // Verify THREE is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js not loaded!');
        return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        depth: true
    });
    const textureLoader = new THREE.TextureLoader();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Planet data storage
    const planetData = {

        mercury: {
            name: "Mercury",
            diameter: "4,879.4 km",
            distance: "46 million km",
            orbit: "88 Earth days",
            fact: "Smallest planet in our solar system",
            icon: "./textures/mercury_icon.jpg"
        },
        venus: {
            name: "Venus",
            diameter: "12,104 km",
            distance: "108.92 million km",
            orbit: "225 Earth days",
            fact: "A day on Venus is longer than a year",
            icon: "./textures/venus_icon.jpg"
        },
        earth: {
            name: "Earth",
            diameter: "12,756 km",
            distance: "149.6 million kilometers",
            orbit: "365 Earth days",
            fact: "the Earth is tilted 23.4 degrees on its axis",
            icon: "./textures/earth_icon.jpg"
        },
        mars: {
            name: "Mars",
            diameter: "6,779 km",
            distance: "228 million kilometers",
            orbit: "687 Earth days",
            fact: "Mars is called the Red Planet because of all the iron in the soil",
            icon: "./textures/mars_icon.jpg"
        },
        jupiter: {
            name: "Jupiter",
            diameter: "139,820 km",
            distance: "767.84 million kilometers",
            orbit: "4,333 Earth days",
            fact: "Jupiter is the biggest planet in our solar system",
            icon: "./textures/jupiter_icon.png"
        },
        saturn: {
            name: "Saturn",
            diameter: "120,500 km",
            distance: "1.4 billion km",
            orbit: "10,759 Earth days",
            fact: "Has the most extensive ring system",
            icon: "./textures/saturn_icon.jpg"
        },
        uranus: {
            name: "Uranus",
            diameter: "50,724 km",
            distance: "2.9201 billion km",
            orbit: "30,687 Earth days",
            fact: "Uranus is surrounded by a set of 13 rings",
            icon: "./textures/uranus_icon.jpg"
        },
        neptune: {
            name: "Neptune",
            diameter: "49,244 km",
            distance: "4.471 billion km",
            orbit: "60,190 Earth days",
            fact: "Neptune has a thick, windy atmosphere",
            icon: "./textures/neptune_icon.web"
        }

    };

    const planetPanel = document.getElementById('planet-panel');
    const planetName = document.getElementById('planet-name');
    const planetIcon = document.getElementById('planet-icon');
    const diameter = document.getElementById('diameter');
    const distance = document.getElementById('distance');
    const orbit = document.getElementById('orbit');
    const fact = document.getElementById('fact');
    const closeBtn = document.getElementById('close-panel');

    // Add orbit contorls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
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
    const venusMaterial = new THREE.MeshBasicMaterial({
        map: venusTexture,
    });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(20, 0, 0);
    scene.add(venus);

    const venusCloudGeometry = new THREE.SphereGeometry(2.02, 32, 32);
    const venusCloudMaterial = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('textures/4k_venus_atmosphere.jpg'),
        transparent: true,
        opacity: 0.3
    });
    const venusClouds = new THREE.Mesh(venusCloudGeometry, venusCloudMaterial);
    venus.add(venusClouds);

    const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
    const earthTexture = textureLoader.load('./textures/8k_earth_daymap.jpg');
    const earthMaterial = new THREE.MeshBasicMaterial({
        map: earthTexture,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(30, 0, 0);
    scene.add(earth);

    const earthCloudGeometry = new THREE.SphereGeometry(2.02, 32, 32);
    const earthCloudMaterial = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('./textures/8k_earth_clouds.jpg'),
        transparent: true,
        opacity: 0.3
    });
    const earthClouds = new THREE.Mesh(earthCloudGeometry, earthCloudMaterial);
    earth.add(earthClouds);

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

    // Add particle ring (optional)
    const ringParticles = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 4.5 + Math.random() * 1.5;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    ringParticles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleSystem = new THREE.Points(
        ringParticles,
        new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.02,
            transparent: true
        })
    );
    saturn.add(particleSystem);

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
            new THREE.EllipseCurve(0, 0, 32, 32, 0, Math.PI * 2, false).getPoints(100)
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

    window.addEventListener('click', (event) => {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            const planet = intersects[0].object;
            const planetKey = getPlanetKey(planet);

            if (planetKey && planetData[planetKey]) {
                // Show planet data
                showPlanetData(planetKey);

                // Stop any existing animations
                gsap.killTweensOf(camera.position);
                gsap.killTweensOf(controls.target);

                // Calculate target position (5 units above planet)
                const targetPosition = {
                    x: planet.position.x,
                    y: planet.position.y + 5,
                    z: planet.position.z + 10
                };

                // Move camera to planet
                gsap.to(camera.position, {
                    x: targetPosition.x,
                    y: targetPosition.y,
                    z: targetPosition.z,
                    duration: 1.5,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        // Make camera look at planet during movement
                        controls.target.copy(planet.position);
                        controls.update();
                    },
                    onComplete: () => {
                        // Start auto-follow
                        startPlanetFollow(planet);
                    }
                })
            } else {
                // Reset view if clicking empty space
                planetPanel.classList.add('hidden');
                resetCameraView();
            }
        }
    });

    function getPlanetKey(planet) {
        if (planet === sun) return 'sun';
        if (planet === mercury) return 'mercury';
        if (planet === venus) return 'venus';
        if (planet === earth) return 'earth';
        if (planet === mars) return 'mars';
        if (planet === jupiter) return 'jupiter';
        if (planet === saturn) return 'saturn';
        if (planet === uranus) return 'uranus';
        if (planet === neptune) return 'neptune';
        return null;
    }

    function showPlanetData(planetKey) {
        const data = planetData[planetKey];
        planetName.textContent = data.name;
        planetIcon.src = data.icon;
        diameter.textContent = data.diameter;
        distance.textContent = data.distance;
        orbit.textContent = data.orbit;
        fact.textContent = data.fact;
        planetPanel.classList.remove('hidden');

        // Animation
        gsap.from(planetPanel, {
            duration: 0.5,
            opacity: 0,
            y: 50,
            ease: "back.out"
        });
    }

    let followInterval;
    function startPlanetFollow(planet) {
        if (followInterval) clearInterval(followInterval);

        followInterval = setInterval(() => {
            const offset = new THREE.Vector3(10, 5, 10);

            const newCameraPos = planet.position.clone().add(offset);
            gsap.to(camera.position, {
                x: newCameraPos.x,
                y: newCameraPos.y,
                z: newCameraPos.z,
                duration: 0.2,
                ease: "power1.out"
            });

            // Make camera look at the planet
            controls.target.copy(planet.position);
            controls.update();
        }, 16); // ~60fps
    }

    function resetCameraView() {
        gsap.killTweensOf(camera.position);
        gsap.killTweensOf(controls.target);
        if (followInterval) clearInterval(followInterval);

        gsap.to(camera.position, {
            x: 0,
            y: 20,
            z: 50,
            duration: 1.5,
            onUpdate: () => {
                controls.target.set(0, 0, 0);
                controls.update();
            }
        });
    }

    const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(29, 0, 0);
    scene.add(moon);

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starsVertices = [];
    for (let i = 500; i < 2000; i++) {
        starsVertices.push(
            THREE.MathUtils.randFloatSpread(2000),
            THREE.MathUtils.randFloatSpread(2000),
            THREE.MathUtils.randFloatSpread(2000)
        );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    renderer.shadowMap.enabled = true;
    saturn.castShadow = true;

    closeBtn.addEventListener('click', (event) => {
        planetPanel.classList.add('hidden');
        resetCameraView();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'escape') {
            closeBtn.click();
        }
    });

    const orbitLines = [
        mercuryOrbit, venusOrbit, earthOrbit,
        marsOrbit, jupiterOrbit, saturnOrbit,
        uranusOrbit, neptuneOrbit
    ];

    let orbitsVisible = true;

    const toggleOrbitsBtn = document.getElementById('toggle-orbits');

    toggleOrbitsBtn.addEventListener('click', () => {
        orbitsVisible = !orbitsVisible;

        orbitLines.forEach(orbit => {
            orbit.visible = orbitsVisible;
        });

        // Update button text
        toggleOrbitsBtn.textContent = orbitsVisible ?
            'Hide Orbits (O)' : 'Show Orbits (O)';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'o') {
            toggleOrbitsBtn.click();
        }
    });

    function animate() {
        const time = Date.now() * 0.0001;

        // Rotate Planets around the Sun
        mercury.position.x = Math.cos(time * 2) * 10;
        mercury.position.z = Math.sin(time * 2) * 10;

        venus.position.x = Math.cos(time * 1.75) * 20;
        venus.position.z = Math.sin(time * 1.75) * 20;

        earth.position.x = Math.cos(time * 1.5) * 32;
        earth.position.z = Math.sin(time * 1.5) * 32;

        mars.position.x = Math.cos(time * 1.25) * 40;
        mars.position.z = Math.sin(time * 1.25) * 40;

        jupiter.position.x = Math.cos(time * 1) * 50;
        jupiter.position.z = Math.sin(time * 1) * 50;

        saturn.position.x = Math.cos(time * 0.75) * 60;
        saturn.position.z = Math.sin(time * 0.75) * 60;

        uranus.position.x = Math.cos(time * 0.5) * 70;
        uranus.position.z = Math.sin(time * 0.5) * 70;

        neptune.position.x = Math.cos(time * 0.25) * 80;
        neptune.position.z = Math.sin(time * 0.25) * 80;

        // Rotate Earth on its axis
        sun.rotation.y += 0.00001;
        mercury.rotation.y += 0.0001;
        venus.rotation.y += 0.0001;
        earth.rotation.y += 0.0001;
        mars.rotation.y += 0.00001;
        jupiter.rotation.y += 0.00005;
        saturn.rotation.y += 0.00005;
        uranus.rotation.y += 0.00005;
        neptune.rotation.y += 0.00005;

        moon.position.x = earth.position.x + Math.cos(Date.now() * 0.005) * 3;
        moon.position.z = earth.position.z + Math.sin(Date.now() * 0.005) * 3;

        requestAnimationFrame(animate);

        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    renderer.setAnimationLoop(animate);
});