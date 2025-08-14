export const cloudFragmentShader = /* glsl */`
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
`;