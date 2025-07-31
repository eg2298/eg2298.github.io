import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls; // Added controls for camera interaction
let arm1, arm2;
let material1, material2;

let angle1 = Math.PI / 2;
let angle2 = Math.PI / 4;
let vel1 = 0.5;
let vel2 = 2.5;
let acc1 = 0;
let acc2 = 0;

const g = 9.8;
let m1 = 1;
let m2 = 1;
const l1 = 1;
const l2 = 1;

let trailPoints = [];
let trailLine;
const maxTrailPoints = 750; // Increased trail length for better visibility (was 200 in your prompt)
const trailUpdateInterval = 1; // Update trail every frame for smoother look

let frameCount = 0; // To control when the trail updates (if using interval)

// UI: Reset Button
// Make sure this button exists in your HTML with id="reset-btn"
document.getElementById('reset-btn').addEventListener('click', () => {
    angle1 = Math.PI / 2;
    angle2 = Math.PI / 4;
    vel1 = 0.5;
    vel2 = 2.5;
    acc1 = 0;
    acc2 = 0;
    trailPoints = []; // Clear the stored points

    // --- CORRECTED RESET LOGIC FOR TRAIL ---
    // Instead of setFromPoints, directly manipulate the BufferAttribute
    if (trailLine && trailLine.geometry && trailLine.geometry.attributes.position) {
        trailLine.geometry.attributes.position.array.fill(0); // Fill the buffer with zeros
        trailLine.geometry.attributes.position.needsUpdate = true; // Tell Three.js to update the GPU buffer
        trailLine.geometry.setDrawRange(0, 0); // Set draw range to 0 to hide the line
    }
});

// UI: Set velocities
// Make sure these inputs and button exist in your HTML
document.getElementById('apply-velocities').addEventListener('click', () => {
    const v1 = parseFloat(document.getElementById('vel1-input').value);
    const v2 = parseFloat(document.getElementById('vel2-input').value);
    if (!isNaN(v1)) vel1 = v1;
    if (!isNaN(v2)) vel2 = v2;
});

// UI: Mass sliders
// Make sure these inputs and spans exist in your HTML
const mass1Slider = document.getElementById('mass1');
const mass2Slider = document.getElementById('mass2');
const mass1ValueSpan = document.getElementById('mass1-value');
const mass2ValueSpan = document.getElementById('mass2-value');

if (mass1Slider) { // Check if elements exist before adding listeners
    mass1Slider.addEventListener('input', (e) => {
        m1 = parseFloat(e.target.value);
        if (mass1ValueSpan) mass1ValueSpan.textContent = `${m1} kg`;
    });
}
if (mass2Slider) {
    mass2Slider.addEventListener('input', (e) => {
        m2 = parseFloat(e.target.value);
        if (mass2ValueSpan) mass2ValueSpan.textContent = `${m2} kg`;
    });
}

init();
animate();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e); // Dark background for better trail visibility

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5); // Position camera to view the pendulum from a distance

    // Make sure your HTML has a <canvas id="three-canvas"></canvas>
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add OrbitControls for camera interaction
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth camera movement
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false; // Prevents panning beyond limits
    controls.maxPolarAngle = Math.PI / 2; // Restrict vertical rotation

    material1 = new THREE.MeshBasicMaterial({ color: 0x8be9fd }); // Cyan color
    material2 = new THREE.MeshBasicMaterial({ color: 0xff79c6 }); // Pink color

    // --- Pendulum Arm 1 Setup ---
    const geom1 = new THREE.CylinderGeometry(0.05, 0.05, l1, 32);
    // Translate geometry so the pivot point (0,0,0) is at the top of the arm
    // and the arm extends downwards along the negative Y axis.
    geom1.translate(0, -l1 / 2, 0);
    arm1 = new THREE.Mesh(geom1, material1);
    // arm1 is directly added to the scene, its pivot is at scene (0,0,0)
    scene.add(arm1);

    // --- Pendulum Arm 2 Setup ---
    const geom2 = new THREE.CylinderGeometry(0.05, 0.05, l2, 32);
    // Translate geometry so the pivot point (0,0,0) is at the top of the arm
    // and the arm extends downwards along the negative Y axis.
    geom2.translate(0, -l2 / 2, 0);
    arm2 = new THREE.Mesh(geom2, material2);
    // arm2 is added as a child of arm1 -- THIS IS THE KEY CHANGE FOR HIERARCHY
    arm1.add(arm2); // Connect arm2 to arm1

    // --- Position arm2 relative to arm1 ---
    // arm2's pivot point (its local origin) should be at the end of arm1.
    // Since arm1 extends downwards along its local -Y axis from its pivot at (0,0,0),
    // the end of arm1 is at (0, -l1, 0) in arm1's local coordinate system.
    arm2.position.set(0, -l1, 0); // Position arm2's pivot at the end of arm1

    // --- TRAIL SETUP (CORRECTED) ---
    const trailGeometry = new THREE.BufferGeometry();
    // Pre-allocate buffer for maxTrailPoints * 3 (x, y, z) floats
    // This creates the Float32Array once and attaches it.
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxTrailPoints * 3), 3));
    const trailMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }); // Red trail, increased linewidth
    trailLine = new THREE.Line(trailGeometry, trailMaterial);
    scene.add(trailLine);

    // Handle window resizing
    window.addEventListener('resize', onWindowResize);

    // Initialize mass slider values on load
    // These checks prevent errors if the elements aren't found immediately
    if (mass1ValueSpan) mass1ValueSpan.textContent = `${mass1Slider.value} kg`;
    if (mass2ValueSpan) mass2ValueSpan.textContent = `${mass2Slider.value} kg`;
}

function animate() {
    requestAnimationFrame(animate);

    // Physics calculations (no changes here, same as your original)
    const num1 = -g * (2 * m1 + m2) * Math.sin(angle1);
    const num2 = -m2 * g * Math.sin(angle1 - 2 * angle2);
    const num3 = -2 * Math.sin(angle1 - angle2) * m2;
    const num4 = vel2 * vel2 * l2 + vel1 * vel1 * l1 * Math.cos(angle1 - angle2);
    const den = l1 * (2 * m1 + m2 - m2 * Math.cos(2 * angle1 - 2 * angle2));
    acc1 = (num1 + num2 + num3 * num4) / den;

    const num5 = 2 * Math.sin(angle1 - angle2);
    const num6 = vel1 * vel1 * l1 * (m1 + m2);
    const num7 = g * (m1 + m2) * Math.cos(angle1);
    const num8 = vel2 * vel2 * l2 * m2 * Math.cos(angle1 - angle2);
    const den2 = l2 * (2 * m1 + m2 - m2 * Math.cos(2 * angle1 - 2 * angle2));
    acc2 = (num5 * (num6 + num7 + num8)) / den2;

    const dt = 0.0167;
    vel1 += acc1 * dt;
    vel2 += acc2 * dt;

    vel1 *= 0.999999;
    vel2 *= 0.999999;

    const maxVel = 5;
    vel1 = THREE.MathUtils.clamp(vel1, -maxVel, maxVel);
    vel2 = THREE.MathUtils.clamp(vel2, -maxVel, maxVel);

    angle1 += vel1 * dt;
    angle2 += vel2 * dt;

    // --- Update arm positions and rotations ---
    arm1.rotation.z = angle1;
    arm2.rotation.z = angle2 - angle1; // Relative rotation for connected arm

    // Update color based on screen Y position
    updateColor(arm1, material1);
    updateColor(arm2, material2);

    // --- TRAIL UPDATE LOGIC (CORRECTED) ---
    frameCount++;
    if (frameCount % trailUpdateInterval === 0) { // Only update trail every X frames (or every frame if interval is 1)
        // Get the world position of the tip of the second pendulum arm
        const tipLocal = new THREE.Vector3(0, -l2, 0); // Tip of arm2 in its local space (due to geometry translation)
        const tipWorld = arm2.localToWorld(tipLocal.clone()); // Convert to world coordinates

        trailPoints.push(tipWorld.clone()); // Add the new point

        if (trailPoints.length > maxTrailPoints) {
            trailPoints.shift(); // Remove the oldest point if trail is too long
        }

        // Get the position attribute of the trail geometry
        const positionsAttribute = trailLine.geometry.attributes.position;
        const positionsArray = positionsAttribute.array;

        // Copy the current trailPoints into the Float32Array buffer
        for (let i = 0; i < trailPoints.length; i++) {
            positionsArray[i * 3] = trailPoints[i].x;
            positionsArray[i * 3 + 1] = trailPoints[i].y;
            positionsArray[i * 3 + 2] = trailPoints[i].z;
        }

        // Tell Three.js that the buffer data has changed and needs to be re-uploaded to the GPU
        positionsAttribute.needsUpdate = true;
        // Set the draw range to only draw the actual number of points currently in the array
        trailLine.geometry.setDrawRange(0, trailPoints.length);
    }
    // --- End Trail Update Logic ---

    controls.update(); // Update OrbitControls for camera movement
    renderer.render(scene, camera);
}

function updateColor(mesh, material) {
    const worldPosition = new THREE.Vector3();
    mesh.getWorldPosition(worldPosition); // Get world position of the mesh

    const screenPos = worldPosition.project(camera);
    const yScreen = (screenPos.y + 1) / 2; // Normalize to [0,1]
    const frequency = 4.0; // How fast colors cycle
    const color = new THREE.Color().setHSL((yScreen * frequency) % 1, 0.65, 0.5); // Adjusted lightness for better visibility
    material.color.copy(color);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Ensure initial mass slider values are displayed
// This runs once the window (and thus the HTML elements) are loaded
window.onload = function() {
    if (mass1ValueSpan) mass1ValueSpan.textContent = `${mass1Slider.value} kg`;
    if (mass2ValueSpan) mass2ValueSpan.textContent = `${mass2Slider.value} kg`;
};
