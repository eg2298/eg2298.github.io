import{S as o,O as v,P as m,W as p,B as h,M as u,a as d,b as g,c as f,d as x}from"./OrbitControls-.js";let t=.01;const r=document.getElementById("speedSlider");r.addEventListener("input",()=>{t=parseFloat(r.value)});const s=new o,c=new o,y=new v(-1,1,1,-1,0,1),n=new m(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const e=new p({antialias:!0});e.setSize(window.innerWidth,window.innerHeight);e.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(e.domElement);const S=new h(1,1,1),M=new u({color:16776960}),a=new d(S,M);s.add(a);const P=new g(2,2),C=new f({vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    varying vec2 vUv;

    void main() {
      vec3 color1 = vec3(1.0, 0.5, 0.2); // orange
      vec3 color2 = vec3(0.5, 0.0, 0.8); // purple
      float t = (vUv.x + vUv.y) * 0.5;
      vec3 col = mix(color1, color2, t);
      gl_FragColor = vec4(col, 1.0);
    }
  `,depthWrite:!1,depthTest:!1,transparent:!0}),l=new d(P,C);l.renderOrder=-1;c.add(l);const i=new x(n,e.domElement);i.enableDamping=!0;i.dampingFactor=.05;window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2))});function w(){requestAnimationFrame(w),a.rotation.x+=t,a.rotation.y+=t,i.update(),e.autoClear=!0,e.clear(),e.render(c,y),e.autoClear=!1,e.render(s,n)}w();
