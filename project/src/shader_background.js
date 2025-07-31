import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const uniforms = {
  uColor1: { value: new THREE.Color('#ff7e5f') },
  uColor2: { value: new THREE.Color('#feb47b') },
  uDirection: { value: 1.0 },
  uUseTexture: { value: 0.0 },
  uTexture: { value: null },
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uImageScale: { value: new THREE.Vector2(0.5, 0.5) },
  uTextureSize: { value: new THREE.Vector2(1, 1) },
};

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision mediump float;

    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uDirection;
    uniform float uUseTexture;
    uniform sampler2D uTexture;
    uniform vec2 uResolution;
    uniform vec2 uImageScale;
    uniform vec2 uTextureSize;

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;

      float canvasAspect = uResolution.x / uResolution.y;
      float imageAspect = uTextureSize.x / uTextureSize.y;

      vec2 scale;
      if (canvasAspect > imageAspect) {
        scale.x = (imageAspect / canvasAspect) * uImageScale.x;
        scale.y = uImageScale.y;
      } else {
        scale.x = uImageScale.x;
        scale.y = (canvasAspect / imageAspect) * uImageScale.y;
      }

      vec2 centeredUV = (uv - 0.5) / scale + 0.5;
      bool outside = centeredUV.x < 0.0 || centeredUV.x > 1.0 || centeredUV.y < 0.0 || centeredUV.y > 1.0;

      float t = uDirection == 1.0 ? uv.y : 1.0 - uv.y;
      vec3 gradColor = mix(uColor1, uColor2, t);

      vec3 texColor = outside ? vec3(0.0) : texture2D(uTexture, centeredUV).rgb;

      // Edge fade mask (soft fade around image edges)
      float edgeFade = smoothstep(0.0, 0.4, centeredUV.x) *
                       smoothstep(0.0, 0.4, centeredUV.y) *
                       smoothstep(1.0, 0.6, centeredUV.x) *
                       smoothstep(1.0, 0.6, centeredUV.y);

      float fadeAmount = uUseTexture * edgeFade;
      vec3 finalColor = mix(gradColor, texColor, fadeAmount);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
  depthWrite: false,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
scene.add(plane);

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
});

// UI elements
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const imageInput = document.getElementById('imageInput');
const resetBtn = document.getElementById('resetBtn');
const fadeRange = document.getElementById('fadeRange');
const scaleRange = document.getElementById('scaleRange');

color1.addEventListener('input', (e) => {
  uniforms.uColor1.value.set(e.target.value);
  uniforms.uUseTexture.value = 0.0;
  fadeRange.value = 0;
});

color2.addEventListener('input', (e) => {
  uniforms.uColor2.value.set(e.target.value);
  uniforms.uUseTexture.value = 0.0;
  fadeRange.value = 0;
});

direction.addEventListener('change', (e) => {
  uniforms.uDirection.value = parseFloat(e.target.value);
  uniforms.uUseTexture.value = 0.0;
  fadeRange.value = 0;
});

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    textureLoader.load(url, (tex) => {
      uniforms.uTexture.value = tex;
      uniforms.uTextureSize.value.set(tex.image.width, tex.image.height);
      uniforms.uUseTexture.value = 0.0;
      fadeRange.value = 0;
    });
  }
});

resetBtn.addEventListener('click', () => {
  uniforms.uUseTexture.value = 0.0;
  uniforms.uTexture.value = null;
  imageInput.value = '';
  fadeRange.value = 0;
});

fadeRange.addEventListener('input', (e) => {
  uniforms.uUseTexture.value = parseFloat(e.target.value);
});

scaleRange.addEventListener('input', (e) => {
  let v = parseFloat(e.target.value);
  uniforms.uImageScale.value.set(v, v);
});
