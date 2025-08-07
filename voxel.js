import"./modulepreload-polyfill-.js";import{W as V,S as h,O as _,P as B,a as w,M as y,b as F,B as U,R as T,c as R,V as E,C as L,G,d as O,D as W,e as A,U as I,L as g}from"./OrbitControls-.js";const k=`
					in vec3 position;

					uniform mat4 modelMatrix;
					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;
					uniform vec3 cameraPos;

					out vec3 vOrigin;
					out vec3 vDirection;

					void main() {
						vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

						vOrigin = vec3( inverse( modelMatrix ) * vec4( cameraPos, 1.0 ) ).xyz;
						vDirection = position - vOrigin;

						gl_Position = projectionMatrix * mvPosition;
					}
				`,j=`
					precision highp float;
					precision highp sampler3D;

					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;

					in vec3 vOrigin;
					in vec3 vDirection;

					out vec4 color;

					uniform vec3 base;
					uniform sampler3D map;

					uniform float threshold;
					uniform float range;
					uniform float opacity;
					uniform float steps;
					uniform float frame;

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

					float shading( vec3 coord ) {
						float step = 0.01;
						return sample1( coord + vec3( - step ) ) - sample1( coord + vec3( step ) );
					}

					vec4 linearToSRGB( in vec4 value ) {
						return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
					}

					void main(){
						vec3 rayDir = normalize( vDirection );
						vec2 bounds = hitBox( vOrigin, rayDir );

						if ( bounds.x > bounds.y ) discard;

						bounds.x = max( bounds.x, 0.0 );

						vec3 p = vOrigin + bounds.x * rayDir;
						vec3 inc = 1.0 / abs( rayDir );
						float delta = min( inc.x, min( inc.y, inc.z ) );
						delta /= steps;

						
						vec4 ac = vec4( base, 0.0 );

						for ( float t = bounds.x; t < bounds.y; t += delta ) {

							float d = sample1( p + 0.5 );

							d = smoothstep( threshold - range, threshold + range, d ) * opacity;

							float col = shading( p + 0.5 ) * 3.0 + ( ( p.x + p.y ) * 0.25 ) + 0.2;

							ac.rgb += ( 1.0 - ac.a ) * d * col;

							ac.a += ( 1.0 - ac.a ) * d;

							if ( ac.a >= 0.95 ) break;

							p += rayDir * delta;

						}

						color = linearToSRGB( ac );

						if ( color.a == 0.0 ) discard;

					}
				`;function q(e){const r=new DataView(e),t=8*r.getUint32(0,!0),a=r.getUint32(4,!0),n=r.getUint32(8,!0),i=t*a*n,d=new Uint8Array(i),m=12,u=new Uint8Array(e,m);let p=0;for(let P of u)for(let x=0;x<8&&!(p>=i);x++){const M=(P&1<<x)!==0;d[p]=M?1:0,p++}return{x:t,y:a,z:n,voxels:d}}const H=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,N=`
  varying vec2 vUv;
  void main() {
    // vertical gradient from dark blue to light blue
    vec3 topColor = vec3(0.1, 0.2, 0.5);
    vec3 bottomColor = vec3(0.0, 0.0, 0.1);
    vec3 color = mix(bottomColor, topColor, vUv.y);
    gl_FragColor = vec4(color, 1.0);
  }
`,z=`
  varying vec3 vPos;
  varying vec3 vNormal;
  void main() {
    vPos = position;
    vNormal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,J=`
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
`,K=e=>{const r=e.target.files[0],t=new FileReader;t.onload=a=>{const n=a.target.result;q(n)},t.readAsArrayBuffer(r)},Q=document.getElementById("binaryFileInput");Q.addEventListener("change",K);function X(e=32){const r=new Uint8Array(e*e*e);for(let a=0;a<e;a++)for(let n=0;n<e;n++)for(let i=0;i<e;i++){const d=i+n*e+a*e*e,m=4,u=i%(2*m)<m?255:0;r[d]=u}const t=new W(r,e,e,e);return t.format=A,t.type=I,t.minFilter=g,t.magFilter=g,t.unpackAlignment=1,t.needsUpdate=!0,t}let c=.01;const o=new V({antialias:!0});o.setSize(window.innerWidth,window.innerHeight);o.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(o.domElement);const b=new h,Y=new _(-1,1,1,-1,0,1),Z=new B(2,2),$=new w({vertexShader:H,fragmentShader:N,depthWrite:!1,depthTest:!1,transparent:!1}),ee=new y(Z,$);b.add(ee);const S=new h,s=new F(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=5;const te=new U(1,1,1),D=X(32);new w({vertexShader:z,fragmentShader:J,uniforms:{stripesTexture:{value:D}}});const oe=new T({glslVersion:G,uniforms:{base:{value:new L(7965344)},map:{value:D},cameraPos:{value:new E},threshold:{value:.25},opacity:{value:.25},range:{value:.1},steps:{value:100},frame:{value:0}},vertexShader:k,fragmentShader:j,side:R,transparent:!0}),v=new y(te,oe);S.add(v);const l=new O(s,o.domElement);l.enableDamping=!0;l.dampingFactor=.05;const f=document.getElementById("speedSlider");f.addEventListener("input",()=>{c=parseFloat(f.value)});const re=document.getElementById("resetBtn");re.addEventListener("click",()=>{v.rotation.set(0,0,0),s.position.set(0,0,5),l.target.set(0,0,0),l.update(),c=.01,f.value=c});window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2))});function C(){requestAnimationFrame(C),v.rotation.x+=c,v.rotation.y+=c,l.update(),o.autoClear=!0,o.clear(),o.render(b,Y),o.autoClear=!1,o.render(S,s)}C();
