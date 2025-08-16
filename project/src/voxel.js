import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { cloudVertexShader } from './cloudVertexShader.js';
import { cloudFragmentShader } from './cloudFragmentShader.js';
import { ParseVol } from "./ParseVol.js";

// Vertex shader for fullscreen quad
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
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`;

let voxelData;
let voxelTexture;
let cloudMaterial;
let cube; // moved here so LoadVol can access it

const LoadVol = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    voxelData = ParseVol(arrayBuffer);

    // Create texture from voxel data
    voxelTexture = new THREE.Data3DTexture(
      voxelData.voxels,
      voxelData.x,
      voxelData.y,
      voxelData.z
    );
    voxelTexture.format = THREE.RedFormat;
    voxelTexture.type = THREE.UnsignedByteType;
    voxelTexture.minFilter = THREE.NearestFilter;
    voxelTexture.magFilter = THREE.NearestFilter;
    voxelTexture.unpackAlignment = 1;
    voxelTexture.needsUpdate = true;

    // Scale cube to match voxel dimensions
    const maxDim = Math.max(voxelData.x, voxelData.y, voxelData.z);

    // Apply to shader
    if (cloudMaterial) {
      cloudMaterial.uniforms.map.value = voxelTexture;
      // IMPORTANT: Update voxelSize here to match the loaded volume dimensions
      cloudMaterial.uniforms.gridSize.value.set(
        voxelData.x,
        voxelData.y,
        voxelData.z
      );
      cloudMaterial.uniforms.voxelSize.value = 1.0 / maxDim;
      cloudMaterial.uniformsNeedUpdate = true;
      cloudMaterial.needsUpdate = true; // Added for explicit material update
    }

    cube.scale.set(
      voxelData.x / maxDim,
      voxelData.y / maxDim,
      voxelData.z / maxDim
    );
  };
  reader.readAsArrayBuffer(file);
};

document.getElementById('binaryFileInput').addEventListener('change', LoadVol);

// Create default stripes texture
function createStripes3DTexture(size = 32) {
  const sizez = size + 16;
  const sizey = size + 32;
  const data = new Uint8Array(size * sizey * sizez);
  for (let z = 1; z < sizez-1; z++) {
    for (let y = 1; y < sizey-1; y++) {
      for (let x = 1; x < size-1; x++) {
        const index = x + y * size + z * size * sizey;
        data[index] = 255;
        
      }
    }
  }
  const texture = new THREE.Data3DTexture(data, size, sizey, sizez);
  texture.format = THREE.RedFormat;
  texture.type = THREE.UnsignedByteType;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.unpackAlignment = 1;
  texture.needsUpdate = true;
  texture.userData.size = [size , sizey, sizez];
  return texture;
}

function createMinimal3DTexture() {
  const size = 4;
  const sizey = 6;
  const sizez = 8;
  const data = new Uint8Array(size * sizey * sizez);
  data[29] = 255;
  data[30] = 255;
  data[33] = 255;
  data[34] = 255;
  data[53] = 255;
  data[54] = 255;
  data[57] = 255;
  data[58] = 255;
  const texture = new THREE.Data3DTexture(data, size, sizey, sizez);
  texture.format = THREE.RedFormat;
  texture.type = THREE.UnsignedByteType;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.unpackAlignment = 1;
  texture.needsUpdate = true;
  texture.userData.size = [size, sizey, sizez];
  return texture;
}


let rotationSpeed = 0.01;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Background scene
const screenScene = new THREE.Scene();
const screenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const quad = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({
    vertexShader: quadVertexShader,
    fragmentShader: gradientFragmentShader,
    depthWrite: false,
    depthTest: false
  })
);
screenScene.add(quad);

// Main scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const startTexture = createStripes3DTexture(100);
const startSize = startTexture.userData.size;
const maxDim = Math.max(startSize[0], startSize[1], startSize[2]);
cloudMaterial = new THREE.RawShaderMaterial({
  glslVersion: THREE.GLSL3,
  uniforms: {
    map: { value: startTexture },
    vOrigin: { value: new THREE.Vector3() },
    steps: { value: 100 },
    // NEW: Initialize voxelGridSize uniform here
    voxelSize: { value: 1.0/maxDim}, // Default to stripes texture size,
    gridSize: {value: new THREE.Vector3(startSize[0],startSize[1],startSize[2])}
  },
  vertexShader: cloudVertexShader,
  fragmentShader: cloudFragmentShader,
  transparent: true
});

cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), cloudMaterial);
cube.scale.x= startSize[0]/maxDim;
cube.scale.y= startSize[1]/maxDim;
cube.scale.z= startSize[2]/maxDim;
scene.add(cube);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

document.getElementById('speedSlider').addEventListener('input', (e) => {
  rotationSpeed = parseFloat(e.target.value);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  cube.rotation.set(0, 0, 0);
  camera.position.set(0, 0, 5);
  controls.target.set(0, 0, 0);
  controls.update();
  rotationSpeed = 0.01;
  document.getElementById('speedSlider').value = rotationSpeed;
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // Ensure cameraPos is updated every frame, as it's used for vOrigin
  cloudMaterial.uniforms.vOrigin.value.copy(camera.position);
  renderer.autoClear = true;
  renderer.clear();
  renderer.render(screenScene, screenCamera);
  renderer.autoClear = false;
  renderer.render(scene, camera);
}
animate();
