import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { cloudVertexShader } from './cloudVertexShader.js';
import { cloudFragmentShader } from './cloudFragmentShader.js';
import { ParseVol } from "./ParseVol.js";
import { Pane } from 'tweakpane';

const PARAMS = {
  title: 'No file loaded',  // displays filename
  factor: 90,
  color: '#1c1f24ff',
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0
};

const pane = new Pane();
const paneElement = pane.element; // the root DOM element of the pane
paneElement.style.transition = 'background-color 0.3s'; 
pane.addBinding(PARAMS, 'title', {
  label: 'Title',
});

pane.addBinding(PARAMS, 'factor', {
  min: 0,
  max: 100,
  step: 1,
  label: 'Zoom',
});
pane.addBinding(PARAMS, 'color', {label: 'Color'}).on('change', (ev) => {
    paneElement.style.backgroundColor = ev.value;
});

pane.addFolder({ title: 'Rotation' })
  .addBinding(PARAMS, 'rotationX', { min: 0, max: 360, step: 1, label: 'X' });
pane.addFolder({ title: 'Rotation' })
  .addBinding(PARAMS, 'rotationY', { min: 0, max: 360, step: 1, label: 'Y' });
pane.addFolder({ title: 'Rotation' })
  .addBinding(PARAMS, 'rotationZ', { min: 0, max: 360, step: 1, label: 'Z' });

pane.addButton({ title: 'Load File' }).on('click', () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.vol,.raw';
  fileInput.onchange = (event) => {
    const file = event.target.files[0];
    if (!file) return;    
      PARAMS.title = file.name;
      pane.refresh();

      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        voxelData = ParseVol(arrayBuffer);

        // create texture
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

        const maxDim = Math.max(voxelData.x, voxelData.y, voxelData.z);

        // update shader
        cloudMaterial.uniforms.map.value = voxelTexture;
        cloudMaterial.uniforms.gridSize.value.set(voxelData.x, voxelData.y, voxelData.z);
        cloudMaterial.uniforms.voxelSize.value = 1.0 / maxDim;
        cloudMaterial.uniformsNeedUpdate = true;
        cloudMaterial.needsUpdate = true;

        // scale cube
        cube.scale.set(voxelData.x / maxDim, voxelData.y / maxDim, voxelData.z / maxDim);
        PARAMS.rotationX = 0;
        PARAMS.rotationY = 0;
        PARAMS.rotationZ = 0;
        pane.refresh();
      };

    reader.readAsArrayBuffer(file);
  };
  fileInput.click();
});




pane.addButton({ title: 'Reset View' }).on('click', () => {

  PARAMS.rotationX = 0;
  PARAMS.rotationY = 0;
  PARAMS.rotationZ = 0;


  // Reset camera zoom / factor
  PARAMS.factor = 90; // or whatever your default zoom factor is
  camera.position.z = 8 - (PARAMS.factor / 25);
  controls.target.set(0, 0, 0);
  controls.update();


  // Reset title
  PARAMS.title = 'No file loaded';

  // Reset the voxel texture to default stripes
  const startTexture = createStripes3DTexture(100);
  const startSize = startTexture.userData.size;
  const maxDim = Math.max(startSize[0], startSize[1], startSize[2]);

  cloudMaterial.uniforms.map.value = startTexture;
  cloudMaterial.uniforms.gridSize.value.set(startSize[0], startSize[1], startSize[2]);
  cloudMaterial.uniforms.voxelSize.value = 1.0 / maxDim;
  cloudMaterial.uniformsNeedUpdate = true;
  cloudMaterial.needsUpdate = true;

  cube.scale.set(startSize[0]/maxDim, startSize[1]/maxDim, startSize[2]/maxDim);

  // Refresh Tweakpane UI to reflect updated values
  pane.refresh();
});



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
  if (!file) return;

  PARAMS.title = file.name;
  pane.refresh();
  
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
camera.position.z = 8 - (PARAMS.factor / 25);

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
    gridSize: {value: new THREE.Vector3(startSize[0],startSize[1],startSize[2])},
    rotationMatrix: { value: new THREE.Matrix3() }

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




// Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();

  // Convert Euler angles from sliders into a rotation matrix
  const rotX = new THREE.Matrix4().makeRotationX(THREE.MathUtils.degToRad(PARAMS.rotationX));
  const rotY = new THREE.Matrix4().makeRotationY(THREE.MathUtils.degToRad(PARAMS.rotationY));
  const rotZ = new THREE.Matrix4().makeRotationZ(THREE.MathUtils.degToRad(PARAMS.rotationZ));

  const rotationMatrix = new THREE.Matrix3();
  rotationMatrix.setFromMatrix4(rotX.multiply(rotY).multiply(rotZ));

  // Update shader uniform
  cloudMaterial.uniforms.rotationMatrix.value.copy(rotationMatrix);

  const minZoom = 1;   // closest
  const maxZoom = 12;  // farthest

  // Use factor instead of zoom
  const t = PARAMS.factor / 100; 
  camera.position.z = maxZoom - t * (maxZoom - minZoom);

  // Ensure cameraPos is updated every frame, as it's used for vOrigin
  cloudMaterial.uniforms.vOrigin.value.copy(camera.position);
  renderer.autoClear = true;
  renderer.clear();
  renderer.render(screenScene, screenCamera);
  renderer.autoClear = false;
  renderer.render(scene, camera);
}
animate();