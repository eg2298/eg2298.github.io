export const cloudFragmentShader = /* glsl */`
precision highp float;
precision highp sampler3D;

in vec3 vPosition;
out vec4 color;

uniform sampler3D map;
uniform vec3 lightDir; // normalized light direction
uniform vec3 voxelSize;
uniform vec3 vOrigin;

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
`;