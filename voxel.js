import"./modulepreload-polyfill-.js";import{W as B,S as C,O as F,M as S,P as E,a as L,b as T,R as O,V as w,G as R,B as I,c as W,D,d as V,U as A,N as h,L as b}from"./OrbitControls-.js";const k=`
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
				`,G=`
precision highp float;
precision highp sampler3D;

in vec3 vOrigin;
in vec3 vPosition;
out vec4 color;

uniform sampler3D map;
uniform vec3 lightDir; // normalized light direction
uniform vec3 voxelSize;

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

const float eps = 0.0005;

float vecmin(in vec3 p ) { return min(p.x,min(p.y,p.z));}

void main() {
    vec3 rayDir = normalize(vPosition - vOrigin);
    vec2 bounds = hitBox(vOrigin, rayDir);

    if (bounds.x > bounds.y) discard;
    bounds.x = max(bounds.x, 0.0);

	vec3 rayDirVox = rayDir / voxelSize;
	vec3 dirAbs = max(abs(rayDirVox), vec3(1e-6));

    // Initial position in voxel coordinates 
    vec3 p0 = (vOrigin + bounds.x * rayDir)/voxelSize;

    vec3 p0abs = sign(rayDirVox) * p0;
    if(rayDirVox.x<0.0) p0abs.x += 1.0;
    if(rayDirVox.y<0.0) p0abs.y += 1.0;
    if(rayDirVox.z<0.0) p0abs.z += 1.0;

    color.a= 1.0;
          
    float t = 0.0;
	float maxT = bounds.y - bounds.x;

    while(t < maxT){
        // Current position and density sampling        
        vec3 texCoord = clamp( (p0 + t * rayDirVox + 0.5) * voxelSize + 0.5 , 0.0, 1.0);
        float density = densityAt(texCoord);

        if (density > 0.05) {
            vec3 lightColor = vec3(1.0, 0.9, 0.8);
            vec3 ambientColor = vec3(0.3);
            vec3 stepColor = ambientColor + 0.7 * (1.0-t * t / maxT) * lightColor;
            color = vec4(stepColor, 1.0);
            break;
        }
      vec3 pAbs = p0abs + dirAbs * t;
      vec3 deltas = (1.0-fract(pAbs)) / dirAbs;
      t += max(eps, vecmin(deltas));
    }

    if (t >= maxT) discard;
}
`;function H(e){const r=new DataView(e),o=8*r.getUint32(0,!0),a=r.getUint32(4,!0),s=r.getUint32(8,!0),i=o*a*s,m=new Uint8Array(i),v=12,u=new Uint8Array(e,v);let y=0;for(let _ of u)for(let f=0;f<8&&!(y>=i);f++){const M=(_&1<<f)!==0;m[y]=M?200:0,y++}return{x:o,y:a,z:s,voxels:m}}const N=`
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
`;let t,d,c,p;const q=e=>{const r=e.target.files[0],o=new FileReader;o.onload=a=>{const s=a.target.result;t=H(s),d=new D(t.voxels,t.x,t.y,t.z),d.format=V,d.type=A,d.minFilter=h,d.magFilter=h,d.unpackAlignment=1,d.needsUpdate=!0,c&&(c.uniforms.map.value=d,c.uniforms.voxelSize.value.set(1/t.x,1/t.y,1/t.z),c.uniformsNeedUpdate=!0,c.needsUpdate=!0);const i=Math.max(t.x,t.y,t.z);p.scale.set(t.x/i,t.y/i,t.z/i)},o.readAsArrayBuffer(r)};document.getElementById("binaryFileInput").addEventListener("change",q);function J(e=32){const r=new Uint8Array(e*e*e);for(let a=0;a<e;a++)for(let s=0;s<e;s++)for(let i=0;i<e;i++){const m=i+s*e+a*e*e,v=4,u=i%(2*v)<v?255:0;r[m]=u}const o=new D(r,e,e,e);return o.format=V,o.type=A,o.minFilter=b,o.magFilter=b,o.unpackAlignment=1,o.needsUpdate=!0,o}let g=.01;const n=new B({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);n.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(n.domElement);const P=new C,K=new F(-1,1,1,-1,0,1),Q=new S(new E(2,2),new L({vertexShader:N,fragmentShader:j,depthWrite:!1,depthTest:!1}));P.add(Q);const z=new C,l=new T(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=2;const X=J(32);c=new O({glslVersion:R,uniforms:{map:{value:X},cameraPos:{value:new w},steps:{value:100},voxelSize:{value:new w(1/32,1/32,1/32)}},vertexShader:k,fragmentShader:G,transparent:!0});p=new S(new I(1,1,1),c);z.add(p);const x=new W(l,n.domElement);x.enableDamping=!0;document.getElementById("speedSlider").addEventListener("input",e=>{g=parseFloat(e.target.value)});document.getElementById("resetBtn").addEventListener("click",()=>{p.rotation.set(0,0,0),l.position.set(0,0,5),x.target.set(0,0,0),x.update(),g=.01,document.getElementById("speedSlider").value=g});window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2))});function U(){requestAnimationFrame(U),x.update(),c.uniforms.cameraPos.value.copy(l.position),n.autoClear=!0,n.clear(),n.render(P,K),n.autoClear=!1,n.render(z,l)}U();
