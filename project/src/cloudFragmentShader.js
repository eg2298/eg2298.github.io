export const cloudFragmentShader = /* glsl */`
precision highp float;
precision highp sampler3D;

in vec3 vPosition;
out vec4 color;

uniform sampler3D map;
uniform vec3 gridSize;
//cubic voxel only.
uniform float voxelSize;
uniform vec3 vOrigin;

//box_min = 0.
vec3 hitBox(vec3 orig, vec3 dir, vec3 box_max) {    
    vec3 inv_dir = 1.0 / dir;
    vec3 tmin_tmp = (- orig) * inv_dir;
    vec3 tmax_tmp = (box_max - orig) * inv_dir;
    vec3 tmin = min(tmin_tmp, tmax_tmp);
    vec3 tmax = max(tmin_tmp, tmax_tmp);
    float t0 = max(max(tmin.x, tmin.y), tmin.z);
    float t1 = min(min(tmax.x, tmax.y), tmax.z);
    float  axis = 0.0;
    if(tmin.x < tmin.y){
      if(tmin.z<tmin.y){
        axis = 1.0;
      }else{
        axis = 2.0;
      } 
    }else if(tmin.x<tmin.z){
      axis = 2.0;
    }
    return vec3(t0, t1, axis);
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
const vec3 lightDir = vec3(-0.3,0.948,0.1);
float vecmin(in vec3 p ) { return min(p.x,min(p.y,p.z));}

void main() {
    vec3 rayDir = normalize(vPosition - vOrigin);
    vec3 box_max = gridSize * vec3(voxelSize);
    vec3 O = vOrigin + gridSize * vec3(0.5 * voxelSize);
    vec3 bounds = hitBox(O, rayDir, box_max);

    if (bounds.x > bounds.y) discard;
    bounds.x = max(bounds.x, 0.0);

  	vec3 dirAbs = abs(rayDir);

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
    int minAxis = int(bounds.z);
    while(t <= maxT){
        // Current position and density sampling        
        vec3 texCoord = clamp( (p0 + (t +0.001) * rayDir) / gridSize, 0.0, 1.0);
        float density = densityAt(texCoord);

        if (density > 0.05) {
            vec3 normal = vec3(-1.0, 0.0, 0.0);
            if(minAxis == 0){
              if(rayDir.x<0.0){
                normal.x=1.0;
              }
            }else if(minAxis == 1){
              normal = vec3(0.0,-1.0,0.0);
              if(rayDir.y<0.0){
              normal.y = 1.0;
              }
            }else{
              normal = vec3(0.0,0.0,-1.0);
               if(rayDir.z<0.0){
               normal.z = 1.0;
               }
            }

            vec3 lightColor = vec3(1.0, 0.9, 0.8);
            float diffuse = abs(dot(normal, lightDir));
            vec3 ambientColor = vec3(0.3);
            vec3 stepColor = ambientColor + diffuse * lightColor;
            color = vec4(stepColor, 1.0);
            break;
        }
      vec3 pAbs = p0abs + dirAbs * t;
      vec3 fr =  (1.0-fract(pAbs));
      vec3 deltas = vec3(2.0 * maxT);
      if(dirAbs.x>0.0){
        deltas.x = fr.x/dirAbs.x;
      }
      if(dirAbs.y>0.0){
        deltas.y = fr.y/dirAbs.y;
      }
      if(dirAbs.z>0.0){
        deltas.z = fr.z/dirAbs.z;
      }
      minAxis = 0;
      if(deltas.y < deltas.x){
        minAxis = 1;
        if(deltas.z<deltas.y){
          minAxis = 2;
        }
      }else if(deltas.z<deltas.x){
        minAxis = 2;
      }
      t += max(eps, vecmin(deltas));
    }

    if (t > maxT) discard;
}
`;