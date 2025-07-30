import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


let rotationSpeed = 0.01;
const speedSlider = document.getElementById('speedSlider');
speedSlider.addEventListener('input', () => {
  rotationSpeed = parseFloat(speedSlider.value);
});


// 1. Scenes
const scene = new THREE.Scene();
const screenScene = new THREE.Scene(); // For full-screen quad
const screenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); // 2D quad

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
renderer.setClearColor(0x222222); // Optional for debug
document.body.appendChild(renderer.domElement);

// 4. Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Fullscreen quad
const quadGeometry = new THREE.PlaneGeometry(2, 2);

// ✅ Fallback shader (color gradient)
const raymarchMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;
    varying vec2 vUv;

    void main() {
  vec3 color1 = vec3(1.0, 0.5, 0.2); // Orange
  vec3 color2 = vec3(0.5, 0.0, 0.8); // Purple
  float t = (vUv.x + vUv.y) * 0.5;
  vec3 col = mix(color1, color2, t);
  gl_FragColor = vec4(col, 1.0);
}

  `,
  depthWrite: false,
  depthTest: false,
  transparent: true
});

const quad = new THREE.Mesh(quadGeometry, raymarchMaterial);
quad.renderOrder = -1; // Ensures it's drawn before cube
screenScene.add(quad);

// 6. Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// 7. Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 8. Animate
const clock = new THREE.Clock();

const animate = () => {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();

  cube.rotation.x += rotationSpeed;
  cube.rotation.y += rotationSpeed;


  controls.update();

  // ✅ Render raymarched quad first (background)
  renderer.autoClear = true;
  renderer.clear();
  renderer.render(screenScene, screenCamera);

  // ✅ Render cube scene on top
  renderer.autoClear = false;
  renderer.render(scene, camera);
};

animate();
