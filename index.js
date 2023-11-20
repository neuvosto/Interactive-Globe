// Initialize variables
let scene, camera, renderer, globe;

// Function to initialize the scene
function init() {
    // Create scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the HTML container
    document.getElementById('globe-container').appendChild(renderer.domElement);

    // Create globe
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/2048px-The_Earth_seen_from_Apollo_17.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    globe = new THREE.Mesh(geometry, material);

    // Add globe to the scene
    scene.add(globe);
}

// Function to animate the globe
function animate() {
    requestAnimationFrame(animate);

    // Add animation logic here (e.g., rotation, transitions)

    // Render the scene
    renderer.render(scene, camera);
}

// Call the init and animate functions
init();
animate();
