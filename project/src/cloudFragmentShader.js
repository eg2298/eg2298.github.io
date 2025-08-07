export const cloudFragmentShader = /* glsl */`
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
				`;