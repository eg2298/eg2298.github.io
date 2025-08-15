import"./modulepreload-polyfill-.js";import{W as O,S as C,O as E,M as A,P as L,a as T,b as R,R as I,V as S,G as W,B as k,c as G,D as P,d as _,U as M,N as h,L as D}from"./OrbitControls-.js";const H=`
					in vec3 position;
					uniform mat4 modelMatrix;			
					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;					
					out vec3 vPosition;

					void main() {
						vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
						vPosition = (modelMatrix * vec4( position,1.0)).xyz;
						gl_Position = projectionMatrix * mvPosition;
					}
				`,N=`
precision highp float;
precision highp sampler3D;

in vec3 vPosition;
out vec4 color;

uniform sampler3D map;
uniform vec3 lightDir; // normalized light direction
uniform vec3 gridSize;
//cubic voxel only.
uniform float voxelSize;
uniform vec3 vOrigin;

//box_min = 0.
vec2 hitBox(vec3 orig, vec3 dir, vec3 box_max) {    
    vec3 inv_dir = 1.0 / dir;
    vec3 tmin_tmp = (- orig) * inv_dir;
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
    vec3 box_max = gridSize * vec3(voxelSize);
    vec3 O = vOrigin + gridSize * vec3(0.5 * voxelSize);
    vec2 bounds = hitBox(O, rayDir, box_max);

    if (bounds.x > bounds.y) discard;
    bounds.x = max(bounds.x, 0.0);

	vec3 dirAbs = max(abs(rayDir), vec3(1e-6));

    // Initial position in voxel coordinates 
    vec3 p0 = (O + bounds.x * rayDir)/voxelSize;

    vec3 p0abs = sign(rayDir) * p0;
    if(rayDir.x<0.0) p0abs.x += gridSize.x;
    if(rayDir.y<0.0) p0abs.y +=  gridSize.y;
    if(rayDir.z<0.0) p0abs.z +=  gridSize.z;

    color.a= 1.0;
    //color.rgb = voxelSize * p0;
    //return;
    float t = 0.0;
    bounds.x/=voxelSize;
    bounds.y/=voxelSize;
	float maxT = bounds.y - bounds.x;

    while(t <= maxT){
        // Current position and density sampling        
        vec3 texCoord = clamp( (p0 + t * rayDir) / gridSize, 0.0, 1.0);
        float density = densityAt(texCoord);

        if (density > 0.05) {
            vec3 lightColor = vec3(1.0, 0.9, 0.8);
            vec3 ambientColor = vec3(0.3);
            vec3 stepColor = ambientColor + 0.7 * (1.0-t / maxT) * lightColor;
            color = vec4(stepColor, 1.0);
            break;
        }
      vec3 pAbs = p0abs + dirAbs * t;
      vec3 deltas = (1.0-fract(pAbs)) / dirAbs;
      t += max(eps, vecmin(deltas));
    }

    if (t > maxT) discard;
}
`;function j(e){const a=new DataView(e),o=8*a.getUint32(0,!0),l=a.getUint32(4,!0),i=a.getUint32(8,!0),r=o*l*i,x=new Uint8Array(r),u=12,f=new Uint8Array(e,u);let p=0;for(let z of f)for(let w=0;w<8&&!(p>=r);w++){const F=(z&1<<w)!==0;x[p]=F?200:0,p++}return{x:o,y:l,z:i,voxels:x}}const q=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,J=`
  varying vec2 vUv;
  void main() {
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`;let t,c,d,v;const K=e=>{const a=e.target.files[0],o=new FileReader;o.onload=l=>{const i=l.target.result;t=j(i),c=new P(t.voxels,t.x,t.y,t.z),c.format=_,c.type=M,c.minFilter=h,c.magFilter=h,c.unpackAlignment=1,c.needsUpdate=!0;const r=Math.max(t.x,t.y,t.z);d&&(d.uniforms.map.value=c,d.uniforms.gridSize.value.set(t.x,t.y,t.z),d.uniforms.voxelSize.value=1/r,d.uniformsNeedUpdate=!0,d.needsUpdate=!0),v.scale.set(t.x/r,t.y/r,t.z/r)},o.readAsArrayBuffer(a)};document.getElementById("binaryFileInput").addEventListener("change",K);function Q(e=32){const a=e+16,o=e+32,l=new Uint8Array(e*o*a);for(let r=0;r<a;r++)for(let x=0;x<o;x++)for(let u=0;u<e;u++){const f=u+x*e+r*e*o,p=4,z=u%(2*p)<p?255:0;l[f]=z}const i=new P(l,e,o,a);return i.format=_,i.type=M,i.minFilter=D,i.magFilter=D,i.unpackAlignment=1,i.needsUpdate=!0,i.userData.size=[e,o,a],i}let b=.01;const n=new O({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);n.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(n.domElement);const U=new C,X=new E(-1,1,1,-1,0,1),Y=new A(new L(2,2),new T({vertexShader:q,fragmentShader:J,depthWrite:!1,depthTest:!1}));U.add(Y);const V=new C,m=new R(75,window.innerWidth/window.innerHeight,.1,1e3);m.position.z=2;const s=Q(32),g=Math.max(s.userData.size[0],s.userData.size[1],s.userData.size[2]);d=new I({glslVersion:W,uniforms:{map:{value:s},vOrigin:{value:new S},steps:{value:100},voxelSize:{value:1/g},gridSize:{value:new S(s.userData.size[0],s.userData.size[1],s.userData.size[2])}},vertexShader:H,fragmentShader:N,transparent:!0});v=new A(new k(1,1,1),d);v.scale.x=s.userData.size[0]/g;v.scale.y=s.userData.size[1]/g;v.scale.z=s.userData.size[2]/g;V.add(v);const y=new G(m,n.domElement);y.enableDamping=!0;document.getElementById("speedSlider").addEventListener("input",e=>{b=parseFloat(e.target.value)});document.getElementById("resetBtn").addEventListener("click",()=>{v.rotation.set(0,0,0),m.position.set(0,0,5),y.target.set(0,0,0),y.update(),b=.01,document.getElementById("speedSlider").value=b});window.addEventListener("resize",()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2))});function B(){requestAnimationFrame(B),y.update(),d.uniforms.vOrigin.value.copy(m.position),n.autoClear=!0,n.clear(),n.render(U,X),n.autoClear=!1,n.render(V,m)}B();
