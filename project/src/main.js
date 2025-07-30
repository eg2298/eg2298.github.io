import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // For camera controls

// 1. Scene setup
const scene = new THREE.Scene();

// 2. Camera setup
const camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
);
camera.position.z = 5; // Move camera back to see the cube

// 3. Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias for smoother edges
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // For high-DPI screens
document.body.appendChild(renderer.domElement); // Add the canvas to the HTML body



// 4. Create a geometry (shape)
const geometry = new THREE.BoxGeometry(1, 1, 1); // A 1x1x1 unit cube

// 5. Create a material (how the surface looks)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false }); // Green, not wireframe
// For more realistic lighting, you'd use MeshStandardMaterial and add lights:
// const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// 6. Create a mesh (geometry + material)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Add the cube to the scene

// --- After adding cube to scene ---

// Fullscreen quad
const quadGeometry = new THREE.PlaneGeometry(2, 2);

// Shader material
const raymarchMaterial = new THREE.ShaderMaterial({
  uniforms: {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
  },
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
    uniform float iTime;
    uniform vec3 iResolution;

    float sphere(vec3 p, float r) {
      return length(p) - r;
    }

    float map(vec3 p) {
      return sphere(p - vec3(0.0, 0.0, 2.5 + sin(iTime)), 1.0);
    }

    float raymarch(vec3 ro, vec3 rd) {
      float t = 0.0;
      for (int i = 0; i < 64; i++) {
        vec3 p = ro + rd * t;
        float d = map(p);
        if (d < 0.001) return t;
        t += d * 0.5;
        if (t > 10.0) break;
      }
      return t;
    }

    void main() {
      vec2 uv = (vUv - 0.5) * 2.0;
      uv.x *= iResolution.x / iResolution.y;

      vec3 ro = vec3(0.0, 0.0, -3.0);
      vec3 rd = normalize(vec3(uv, 1.5));

      float d = raymarch(ro, rd);
      vec3 col = vec3(0.0);
      if (d < 10.0) {
        col = mix(vec3(0.2, 0.7, 1.0), vec3(1.0, 0.5, 0.2), d * 0.1);
      }

      gl_FragColor = vec4(col, 1.0);
    }
  `,
  depthWrite: false,
});

// Add quad to scene
const quad = new THREE.Mesh(quadGeometry, raymarchMaterial);
scene.add(quad);



// 7. Add Lights (if using MeshStandardMaterial or other light-reactive materials)
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// directionalLight.position.set(1, 1, 1);
// scene.add(directionalLight);

// 8. Add OrbitControls (optional, for rotating camera with mouse)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth out camera movement
controls.dampingFactor = 0.05;

// 9. Handle window resizing
window.addEventListener('resize', () => {
    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 10. Animation Loop
const animate = () => {
    requestAnimationFrame(animate); // Call animate on the next frame

    // Update cube rotation (example animation)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update(); // Only required if controls.enableDamping or autoRotate are set to true

    renderer.render(scene, camera); // Render the scene
};

animate(); // Start the animation loop