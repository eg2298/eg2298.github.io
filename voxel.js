import"./modulepreload-polyfill-.js";import{W as B,S as D,O as F,M,P as O,a as E,b as L,R,V as h,G as I,B as W,c as k,D as b,d as z,U as P,N as w,L as C}from"./OrbitControls-.js";const G=`
					in vec3 position;

					uniform mat4 modelMatrix;
					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;
					uniform vec3 cameraPos;

					out vec3 vOrigin;
					out vec3 vPosition;

					void main() {
						vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

						vOrigin = vec3( inverse( modelMatrix ) * vec4( cameraPos, 1.0 ) ).xyz;
						vPosition = position;
						gl_Position = projectionMatrix * mvPosition;
					}
				`,T=`
precision highp float;
precision highp sampler3D;

in vec3 vOrigin;
in vec3 vPosition;
out vec4 color;

uniform sampler3D map;
uniform float steps;
uniform vec3 lightDir; // normalized light direction

vec2 hitBox(vec3 orig, vec3 dir) {
    const vec3 box_min = vec3(-0.5);
    const vec3 box_max = vec3(0.5);
    vec3 inv_dir = 1.0 / dir;
    vec3 tmin_tmp = (box_min - orig) * inv_dir;
    vec3 tmax_tmp = (box_max - orig) * inv_dir;
    vec3 tmin = min(tmin_tmp, tmax_tmp);
    vec3 tmax = max(tmin_tmp, tmax_tmp);
    float t0 = max(max(tmin.x, tmin.y), tmin.z);
    float t1 = min(min(tmax.x, tmax.y), tmax.z);
    return vec2(t0, t1);
}

float densityAt(vec3 texCoord) {
    return texture(map, texCoord).r;
}

vec3 computeNormal(vec3 texCoord, float stepSize) {
    float o = stepSize;
    float dx = densityAt(texCoord + vec3(o,0,0)) - densityAt(texCoord - vec3(o,0,0));
    float dy = densityAt(texCoord + vec3(0,o,0)) - densityAt(texCoord - vec3(0,o,0));
    float dz = densityAt(texCoord + vec3(0,0,o)) - densityAt(texCoord - vec3(0,0,o));
    return normalize(vec3(dx, dy, dz));
}

void main() {
    vec3 rayDir = normalize(vPosition - vOrigin);
    vec2 bounds = hitBox(vOrigin, rayDir);

    if (bounds.x > bounds.y) discard;
    bounds.x = max(bounds.x, 0.0);

    vec3 pos = vOrigin + bounds.x * rayDir;
    vec4 finalColor = vec4(0.0);
    
    // DDA Setup:
    // This scales the ray direction to the voxel grid size.
    vec3 invDir = 1.0 / rayDir;
    vec3 step = sign(rayDir);

    // Initial position in voxel coordinates (from 0 to steps)
    vec3 voxelPos = floor((pos + 0.5) * steps);

    // tMax is the distance to the next voxel boundary along each axis.
    vec3 tMax;
    tMax.x = length((voxelPos.x + step.x * 0.5) / steps - pos.x) / length(rayDir.x);
    tMax.y = length((voxelPos.y + step.y * 0.5) / steps - pos.y) / length(rayDir.y);
    tMax.z = length((voxelPos.z + step.z * 0.5) / steps - pos.z) / length(rayDir.z);

    // tDelta is the distance to travel to cross one full voxel.
    vec3 tDelta = step * invDir / steps;
    float t = 0.0;
    
    for (int i = 0; i < 256; i++) {
        // Break if ray leaves the bounding box
        if (t > bounds.y) break;

        // Current position and density sampling
        vec3 texCoord = clamp(pos + 0.5, 0.0, 1.0);
        float density = densityAt(texCoord);

        if (density > 0.05) {
            // Calculate step opacity based on the size of the current step
            float stepDistance = min(tMax.x, min(tMax.y, tMax.z));
            float stepOpacity = density * stepDistance * 25.0; 

            // Calculate normal and lighting
            vec3 normal = computeNormal(texCoord, stepDistance);
            float diff = max(dot(normal, lightDir), 0.0);
            
            vec3 lightColor = vec3(1.0, 0.9, 0.8);
            vec3 ambientColor = vec3(0.3);
            vec3 stepColor = ambientColor + lightColor * diff;

            // Volumetric accumulation
            finalColor.rgb += stepColor * stepOpacity * (1.0 - finalColor.a);
            finalColor.a += stepOpacity;

            if (finalColor.a > 0.99) break;
        }

        // DDA Step: advance the ray to the next cell boundary
        if (tMax.x < tMax.y) {
            if (tMax.x < tMax.z) {
                t = tMax.x;
                tMax.x += tDelta.x;
                voxelPos.x += step.x;
            } else {
                t = tMax.z;
                tMax.z += tDelta.z;
                voxelPos.z += step.z;
            }
        } else {
            if (tMax.y < tMax.z) {
                t = tMax.y;
                tMax.y += tDelta.y;
                voxelPos.y += step.y;
            } else {
                t = tMax.z;
                tMax.z += tDelta.z;
                voxelPos.z += step.z;
            }
        }
        pos = vOrigin + t * rayDir;
    }

    color = finalColor;
    if (color.a == 0.0) discard;
}
`;function N(e){const a=new DataView(e),o=8*a.getUint32(0,!0),r=a.getUint32(4,!0),s=a.getUint32(8,!0),i=o*r*s,x=new Uint8Array(i),v=12,u=new Uint8Array(e,v);let y=0;for(let V of u)for(let f=0;f<8&&!(y>=i);f++){const _=(V&1<<f)!==0;x[y]=_?200:0,y++}return{x:o,y:r,z:s,voxels:x}}const H=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,j=`
  varying vec2 vUv;
  void main() {
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`;let t,l,c,p;const q=e=>{const a=e.target.files[0],o=new FileReader;o.onload=r=>{const s=r.target.result;t=N(s),l=new b(t.voxels,t.x,t.y,t.z),l.format=z,l.type=P,l.minFilter=w,l.magFilter=w,l.unpackAlignment=1,l.needsUpdate=!0,c&&(c.uniforms.map.value=l,c.uniforms.voxelGridSize.value.set(t.x,t.y,t.z),c.uniformsNeedUpdate=!0,c.needsUpdate=!0);const i=Math.max(t.x,t.y,t.z);p.scale.set(t.x/i,t.y/i,t.z/i)},o.readAsArrayBuffer(a)};document.getElementById("binaryFileInput").addEventListener("change",q);function J(e=32){const a=new Uint8Array(e*e*e);for(let r=0;r<e;r++)for(let s=0;s<e;s++)for(let i=0;i<e;i++){const x=i+s*e+r*e*e,v=4,u=i%(2*v)<v?255:0;a[x]=u}const o=new b(a,e,e,e);return o.format=z,o.type=P,o.minFilter=C,o.magFilter=C,o.unpackAlignment=1,o.needsUpdate=!0,o}let g=.01;const n=new B({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);n.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(n.domElement);const S=new D,K=new F(-1,1,1,-1,0,1),Q=new M(new O(2,2),new E({vertexShader:H,fragmentShader:j,depthWrite:!1,depthTest:!1}));S.add(Q);const A=new D,d=new L(75,window.innerWidth/window.innerHeight,.1,1e3);d.position.z=2;const X=J(32);c=new R({glslVersion:I,uniforms:{map:{value:X},cameraPos:{value:new h},steps:{value:100},voxelGridSize:{value:new h(32,32,32)}},vertexShader:G,fragmentShader:T,transparent:!0});p=new M(new W(1,1,1),c);A.add(p);const m=new k(d,n.domElement);m.enableDamping=!0;document.getElementById("speedSlider").addEventListener("input",e=>{g=parseFloat(e.target.value)});document.getElementById("resetBtn").addEventListener("click",()=>{p.rotation.set(0,0,0),d.position.set(0,0,5),m.target.set(0,0,0),m.update(),g=.01,document.getElementById("speedSlider").value=g});window.addEventListener("resize",()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2))});function U(){requestAnimationFrame(U),m.update(),c.uniforms.cameraPos.value.copy(d.position),n.autoClear=!0,n.clear(),n.render(S,K),n.autoClear=!1,n.render(A,d)}U();
