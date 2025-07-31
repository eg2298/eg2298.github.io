import"./modulepreload-polyfill-.js";import{S as i,O as m,P as v,W as h,B as p,M as u,a as d,b as g,c as x,d as S}from"./OrbitControls-.js";const f=`
    precision highp float;
    varying vec2 vUv;

    void main() {
      vec3 color1 = vec3(1.0, 0.5, 0.2); // orange
      vec3 color2 = vec3(0.5, 0.0, 0.8); // purple
      float t = (vUv.x + vUv.y) * 0.5;
      vec3 col = mix(color1, color2, t);
      gl_FragColor = vec4(col, 1.0);
    }
  `,y=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;let t=.01;const o=document.getElementById("speedSlider");o.addEventListener("input",()=>{t=parseFloat(o.value)});const s=new i,c=new i,M=new m(-1,1,1,-1,0,1),n=new v(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const e=new h({antialias:!0});e.setSize(window.innerWidth,window.innerHeight);e.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(e.domElement);const P=new p(1,1,1),C=new u({color:16776960}),a=new d(P,C);s.add(a);const W=new g(2,2),b=new x({vertexShader:y,fragmentShader:f,depthWrite:!1,depthTest:!1,transparent:!0}),l=new d(W,b);l.renderOrder=-1;c.add(l);const r=new S(n,e.domElement);r.enableDamping=!0;r.dampingFactor=.05;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2))});function w(){requestAnimationFrame(w),a.rotation.x+=t,a.rotation.y+=t,r.update(),e.autoClear=!0,e.clear(),e.render(c,M),e.autoClear=!1,e.render(s,n)}w();
