import"./modulepreload-polyfill-.js";import{W as b,S as h,O as P,P as F,a as x,M as f,b as M,B as D,c as T,D as R,R as W,U as B,L as w,d as v}from"./OrbitControls-.js";const U=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,E=`
  varying vec2 vUv;
  void main() {
    // vertical gradient from dark blue to light blue
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`,G=`
  varying vec3 vPos;
  varying vec3 vNormal;
  void main() {
    vPos = position;
    vNormal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,L=`
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
`;function q(e=32){const o=new Uint8Array(e*e*e*4);for(let c=0;c<e;c++)for(let m=0;m<e;m++)for(let s=0;s<e;s++){const d=4*(s+m*e+c*e*e),u=4,g=s%(2*u)<u?255:0;o[d]=g,o[d+1]=255-g,o[d+2]=128,o[d+3]=255}const r=new R(o,e,e,e);return r.format=W,r.type=B,r.minFilter=w,r.magFilter=w,r.unpackAlignment=1,r.wrapS=v,r.wrapT=v,r.wrapR=v,r.needsUpdate=!0,r}let a=.01;const t=new b({antialias:!0});t.setSize(window.innerWidth,window.innerHeight);t.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(t.domElement);const S=new h,A=new P(-1,1,1,-1,0,1),H=new F(2,2),N=new x({vertexShader:U,fragmentShader:E,depthWrite:!1,depthTest:!1,transparent:!1}),_=new f(H,N);S.add(_);const y=new h,n=new M(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const k=new D(1,1,1),O=q(32),V=new x({vertexShader:G,fragmentShader:L,uniforms:{stripesTexture:{value:O}}}),l=new f(k,V);y.add(l);const i=new T(n,t.domElement);i.enableDamping=!0;i.dampingFactor=.05;const p=document.getElementById("speedSlider");p.addEventListener("input",()=>{a=parseFloat(p.value)});const j=document.getElementById("resetBtn");j.addEventListener("click",()=>{l.rotation.set(0,0,0),n.position.set(0,0,5),i.target.set(0,0,0),i.update(),a=.01,p.value=a});window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2))});function C(){requestAnimationFrame(C),l.rotation.x+=a,l.rotation.y+=a,i.update(),t.autoClear=!0,t.clear(),t.render(S,A),t.autoClear=!1,t.render(y,n)}C();
