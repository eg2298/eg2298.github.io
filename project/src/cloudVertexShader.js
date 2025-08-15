export const cloudVertexShader = /* glsl */`
					in vec3 position;					
					uniform mat4 modelViewMatrix;
					uniform mat4 projectionMatrix;					
					out vec3 vPosition;

					void main() {
						vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
						vPosition = position;
						gl_Position = projectionMatrix * mvPosition;
					}
				`;