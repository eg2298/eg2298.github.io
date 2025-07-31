export const voxelFragmentShader = /*glsl*/`
    precision highp float;
    varying vec2 vUv;

    void main() {
      vec3 color1 = vec3(1.0, 0.5, 0.2); // orange
      vec3 color2 = vec3(0.5, 0.0, 0.8); // purple
      float t = (vUv.x + vUv.y) * 0.5;
      vec3 col = mix(color1, color2, t);
      gl_FragColor = vec4(col, 1.0);
    }
  `;
