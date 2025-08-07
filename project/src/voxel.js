import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { cloudVertexShader } from './cloudVertexShader.js';
import { cloudFragmentShader } from './cloudFragmentShader.js';
import {ParseVol} from "./ParseVol.js"
// Vertex shader for fullscreen quad (simple pass-through)
const quadVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Fragment shader for gradient background
const gradientFragmentShader = `
  varying vec2 vUv;
  void main() {
    // vertical gradient from dark blue to light blue
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Cube vertex shader (standard transform + pass UV and position)
const cubeVertexShader = `
  varying vec3 vPos;
  varying vec3 vNormal;
  void main() {
    vPos = position;
    vNormal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Cube fragment shader with sampler3D stripes texture simulation
const cubeFragmentShader = `
  precision highp float;
  varying vec3 vPos;
  varying vec3 vNormal;

  uniform sampler3D stripesTexture;

  void main() {
    // Transform position from [-0.5,0.5] to [0,1] for sampling 3D texture
    vec3 texCoords = vPos + 0.5;

    // Sample 3D texture stripes
    vec4 stripeColor = texture(stripesTexture, texCoords);

    // Simple lighting: diffuse based on normal and light direction
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(normalize(vNormal), lightDir), 0.0);

    vec3 finalColor = stripeColor.rgb * diff;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

let voxelData;
const LoadVol=(event)=>{
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    voxelData = ParseVol(arrayBuffer);
  };
  // Read the file as an ArrayBuffer
  reader.readAsArrayBuffer(file);
}

const fileInput = document.getElementById('binaryFileInput');
fileInput.addEventListener('change', LoadVol);

// Create 3D stripes texture programmatically (32x32x32)
function createStripes3DTexture(size = 32) {
  const data = new Uint8Array(size * size * size); // 1 byte per voxel

  for (let z = 0; z < size; z++) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const index =  (x + y * size + z * size * size);

        // Create stripes pattern along x axis
        const stripeWidth = 4;
        const stripe = ((x % (2 * stripeWidth)) < stripeWidth) ? 255 : 0;

        data[index] = stripe;       // R
      }
    }
  }

  // Create Data3DTexture
  const texture = new THREE.Data3DTexture(data, size, size, size);
  texture.format = THREE.RedFormat;
  texture.type = THREE.UnsignedByteType;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.unpackAlignment = 1;
  texture.needsUpdate = true;

  return texture;
}

let rotationSpeed = 0.01;

// Renderer & DOM setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Background scene and camera (orthographic for fullscreen quad)
const screenScene = new THREE.Scene();
const screenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// Create fullscreen quad with gradient background shader
const quadGeometry = new THREE.PlaneGeometry(2, 2);
const gradientMaterial = new THREE.ShaderMaterial({
  vertexShader: quadVertexShader,
  fragmentShader: gradientFragmentShader,
  depthWrite: false,
  depthTest: false,
  transparent: false,
});
const quad = new THREE.Mesh(quadGeometry, gradientMaterial);
screenScene.add(quad);

// Main scene and perspective camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create cube geometry and material with sampler3D stripes texture
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const stripesTexture = createStripes3DTexture(32);

const cubeMaterial = new THREE.ShaderMaterial({
  vertexShader: cubeVertexShader,
  fragmentShader: cubeFragmentShader,
  uniforms: {
    stripesTexture: { value: stripesTexture }
  },
});

const cloudMaterial = new THREE.RawShaderMaterial({
    glslVersion: THREE.GLSL3,
    uniforms: {
        base: { value: new THREE.Color(0x798aa0) },
        map: { value: stripesTexture },
        cameraPos: { value: new THREE.Vector3() },
        threshold: { value: 0.25 },
        opacity: { value: 0.25 },
        range: { value: 0.1 },
        steps: { value: 100 },
        frame: { value: 0 }
    },
    vertexShader: cloudVertexShader,
    fragmentShader: cloudFragmentShader,
    side: THREE.BackSide,
    transparent: true
});

const cube = new THREE.Mesh(cubeGeometry, cloudMaterial);
scene.add(cube);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Rotation speed UI (assumes you have <input type="range" id="speedSlider"> in your HTML)
const speedSlider = document.getElementById('speedSlider');
speedSlider.addEventListener('input', () => {
  rotationSpeed = parseFloat(speedSlider.value);
});

// Reset button behavior
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  // Reset cube rotation
  cube.rotation.set(0, 0, 0);

  // Reset camera position and controls
  camera.position.set(0, 0, 5);
  controls.target.set(0, 0, 0);
  controls.update();

  // Reset rotation speed
  rotationSpeed = 0.01;
  speedSlider.value = rotationSpeed;
});


// Handle resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += rotationSpeed;
  cube.rotation.y += rotationSpeed;

  controls.update();

  // Render background first
  renderer.autoClear = true;
  renderer.clear();
  renderer.render(screenScene, screenCamera);

  // Render cube on top
  renderer.autoClear = false;
  renderer.render(scene, camera);
}

animate();
