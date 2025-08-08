import"./modulepreload-polyfill-.js";import{W as C,S as b,O as E,M as S,P as L,a as O,b as R,R as A,V as W,G as I,B as T,c as k,D as P,d as D,U,N as y,L as h}from"./OrbitControls-.js";const G=`
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
				`,z=`
					precision highp float;
					precision highp sampler3D;

					in vec3 vOrigin;
                    in vec3 vPosition;
					out vec4 color;

					uniform sampler3D map;
					uniform float steps;

					vec2 hitBox( vec3 orig, vec3 dir ) {
						const vec3 box_min = vec3( - 0.5 );
						const vec3 box_max = vec3( 0.5 );
						vec3 inv_dir = 1.0 / dir;
						vec3 tmin_tmp = ( box_min - orig ) * inv_dir;
						vec3 tmax_tmp = ( box_max - orig ) * inv_dir;
						vec3 tmin = min( tmin_tmp, tmax_tmp );
						vec3 tmax = max( tmin_tmp, tmax_tmp );
						float t0 = max( tmin.x, max( tmin.y, tmin.z ) );
						float t1 = min( tmax.x, min( tmax.y, tmax.z ) );
						return vec2( t0, t1 );
					}

					float sample1( vec3 p ) {
						return texture( map, p ).r;
					}

					void main(){
						vec3 rayDir = normalize( vPosition - vOrigin );
						vec2 bounds = hitBox( vOrigin, rayDir );

						if ( bounds.x > bounds.y ) discard;

						bounds.x = max( bounds.x, 0.0 );

						vec3 p = vOrigin + bounds.x * rayDir;
						vec3 inc = 1.0 / abs( rayDir );
						float delta = min( inc.x, min( inc.y, inc.z ) );
						delta /= steps;

						for ( float t = bounds.x; t < bounds.y; t += delta ) {
							float d = sample1( p + 0.5);
							if(d>0.5){
							  float c = 1.0 - (t-bounds.x);
						      color = vec4(c,c,c,1);
							  break;
							}
							p += rayDir * delta;

						}

						if ( color.a == 0.0 ) discard;

					}
				`;function H(e){const a=new DataView(e),t=8*a.getUint32(0,!0),r=a.getUint32(4,!0),s=a.getUint32(8,!0),n=t*r*s,l=new Uint8Array(n),v=12,x=new Uint8Array(e,v);let w=0;for(let B of x)for(let f=0;f<8&&!(w>=n);f++){const F=(B&1<<f)!==0;l[w]=F?200:0,w++}return{x:t,y:r,z:s,voxels:l}}const j=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,q=`
  varying vec2 vUv;
  void main() {
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`;let o,c,d,p;const N=e=>{const a=e.target.files[0],t=new FileReader;t.onload=r=>{const s=r.target.result;o=H(s),c=new P(o.voxels,o.x,o.y,o.z),c.format=D,c.type=U,c.minFilter=y,c.magFilter=y,c.unpackAlignment=1,c.needsUpdate=!0,d&&(d.uniforms.map.value=c,d.uniformsNeedUpdate=!0,d.needsUpdate=!0);const n=Math.max(o.x,o.y,o.z);p.scale.set(o.x/n,o.y/n,o.z/n)},t.readAsArrayBuffer(a)};document.getElementById("binaryFileInput").addEventListener("change",N);function J(e=32){const a=new Uint8Array(e*e*e);for(let r=0;r<e;r++)for(let s=0;s<e;s++)for(let n=0;n<e;n++){const l=n+s*e+r*e*e,v=4,x=n%(2*v)<v?255:0;a[l]=x}const t=new P(a,e,e,e);return t.format=D,t.type=U,t.minFilter=h,t.magFilter=h,t.unpackAlignment=1,t.needsUpdate=!0,t}let g=.01;const i=new C({antialias:!0});i.setSize(window.innerWidth,window.innerHeight);i.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(i.domElement);const _=new b,K=new E(-1,1,1,-1,0,1),Q=new S(new L(2,2),new O({vertexShader:j,fragmentShader:q,depthWrite:!1,depthTest:!1}));_.add(Q);const M=new b,m=new R(75,window.innerWidth/window.innerHeight,.1,1e3);m.position.z=3;const X=J(32);d=new A({glslVersion:I,uniforms:{map:{value:X},cameraPos:{value:new W},steps:{value:100}},vertexShader:G,fragmentShader:z,transparent:!0});p=new S(new T(1,1,1),d);M.add(p);const u=new k(m,i.domElement);u.enableDamping=!0;document.getElementById("speedSlider").addEventListener("input",e=>{g=parseFloat(e.target.value)});document.getElementById("resetBtn").addEventListener("click",()=>{p.rotation.set(0,0,0),m.position.set(0,0,5),u.target.set(0,0,0),u.update(),g=.01,document.getElementById("speedSlider").value=g});window.addEventListener("resize",()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2))});function V(){requestAnimationFrame(V),u.update(),d.uniforms.cameraPos.value.copy(m.position),i.autoClear=!0,i.clear(),i.render(_,K),i.autoClear=!1,i.render(M,m)}V();
