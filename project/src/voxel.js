import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { voxelFragmentShader } from "./voxel_fragment_shader.js";
import { quadVertexShader } from "./quad_vertex_shader.js";

let rotationSpeed = 0.01;
const speedSlider = document.getElementById('speedSlider');
speedSlider.addEventListener('input', () => {
  rotationSpeed = parseFloat(speedSlider.value);
});

// 1. Main scene and camera
const scene = new THREE.Scene();
const screenScene = new THREE.Scene(); // for full-screen background
const screenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// 2. Perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// 4. Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // yellow
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Fullscreen quad with gradient background
const quadGeometry = new THREE.PlaneGeometry(2, 2);

// Fallback shader (color gradient)
const raymarchMaterial = new THREE.ShaderMaterial({
  vertexShader: quadVertexShader,
  fragmentShader: voxelFragmentShader,
  depthWrite: false,
  depthTest: false,
  transparent: true
});
const quad = new THREE.Mesh(quadGeometry, raymarchMaterial);
quad.renderOrder = -1;
screenScene.add(quad);

// 6. Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// 7. Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 8. Animation loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += rotationSpeed;
  cube.rotation.y += rotationSpeed;

  controls.update();

  renderer.autoClear = true;
  renderer.clear();
  renderer.render(screenScene, screenCamera); // background
  renderer.autoClear = false;
  renderer.render(scene, camera); // cube
}

animate();
