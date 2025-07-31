import"./modulepreload-polyfill-.js";import*as t from"https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js";const l=new t.Scene,s=new t.OrthographicCamera(-1,1,1,-1,0,1),u=new t.WebGLRenderer;u.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(u.domElement);const d=new t.TextureLoader,e={uColor1:{value:new t.Color("#ff7e5f")},uColor2:{value:new t.Color("#feb47b")},uDirection:{value:1},uUseTexture:{value:0},uTexture:{value:null},uResolution:{value:new t.Vector2(window.innerWidth,window.innerHeight)},uImageScale:{value:new t.Vector2(.5,.5)},uTextureSize:{value:new t.Vector2(1,1)}},v=new t.ShaderMaterial({uniforms:e,vertexShader:`
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
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
  `,depthWrite:!1}),m=new t.Mesh(new t.PlaneGeometry(2,2),v);l.add(m);u.setAnimationLoop(()=>{u.render(l,s)});window.addEventListener("resize",()=>{u.setSize(window.innerWidth,window.innerHeight),e.uResolution.value.set(window.innerWidth,window.innerHeight)});const g=document.getElementById("color1"),f=document.getElementById("color2"),x=document.getElementById("direction"),i=document.getElementById("imageInput"),p=document.getElementById("resetBtn"),o=document.getElementById("fadeRange"),w=document.getElementById("scaleRange");g.addEventListener("input",n=>{e.uColor1.value.set(n.target.value),e.uUseTexture.value=0,o.value=0});f.addEventListener("input",n=>{e.uColor2.value.set(n.target.value),e.uUseTexture.value=0,o.value=0});x.addEventListener("change",n=>{e.uDirection.value=parseFloat(n.target.value),e.uUseTexture.value=0,o.value=0});i.addEventListener("change",n=>{const a=n.target.files[0];if(a){const c=URL.createObjectURL(a);d.load(c,r=>{e.uTexture.value=r,e.uTextureSize.value.set(r.image.width,r.image.height),e.uUseTexture.value=0,o.value=0})}});p.addEventListener("click",()=>{e.uUseTexture.value=0,e.uTexture.value=null,i.value="",o.value=0});o.addEventListener("input",n=>{e.uUseTexture.value=parseFloat(n.target.value)});w.addEventListener("input",n=>{let a=parseFloat(n.target.value);e.uImageScale.value.set(a,a)});
