import * as THREE from 'three';



let scene, camera, renderer;

let arm1, arm2;

let angle1 = Math.PI / 2;

let angle2 = Math.PI / 4;

let vel1 = 0.5; //m/s

let vel2 = 2.5;

let acc1 = 0; //m/s^2

let acc2 = 0;



const g = 9.8; // gravity m/s^2

const m1 = 1; //kg

const m2 = 1;

const l1 = 1; //m

const l2 = 1;



init();

animate();

document.getElementById('reset-btn').addEventListener('click', () => {
  angle1 = Math.PI / 2;
  angle2 = Math.PI / 4;
  vel1 = 0.5;
  vel2 = 2.5;
  acc1 = 0;
  acc2 = 0;

document.getElementById('apply-velocities').addEventListener('click', () => {
  const v1 = parseFloat(document.getElementById('vel1-input').value);
  const v2 = parseFloat(document.getElementById('vel2-input').value);

  if (!isNaN(v1)) vel1 = v1;
  if (!isNaN(v2)) vel2 = v2;

});



});

function init() {

 scene = new THREE.Scene();

 scene.background = new THREE.Color(0xeeeeee);



 camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

 camera.position.z = 5;



 renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });

 renderer.setSize(window.innerWidth, window.innerHeight);



 const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });



 const geom1 = new THREE.CylinderGeometry(0.05, 0.05, l1, 32);
 arm1 = new THREE.Mesh(geom1, material);

 arm1.geometry.translate(0, -l1 / 2, 0);

 scene.add(arm1);



 const geom2 = new THREE.CylinderGeometry(0.05, 0.05, l2, 32);

 arm2 = new THREE.Mesh(geom2, material);

 arm2.geometry.translate(0, -l2 / 2, 0);

 scene.add(arm2);

}



function animate() {

 requestAnimationFrame(animate);



 // Equations from physics of double pendulum

 const num1 = -g * (2 * m1 + m2) * Math.sin(angle1);

 const num2 = -m2 * g * Math.sin(angle1 - 2 * angle2);

 const num3 = -2 * Math.sin(angle1 - angle2) * m2;

 const num4 = vel2 * vel2 * l2 + vel1 * vel1 * l1 * Math.cos(angle1 - angle2);

 const den = l1 * (2 * m1 + m2 - m2 * Math.cos(2 * angle1 - 2 * angle2));

 acc1 = (num1 + num2 + num3 * num4) / den;



 const num5 = 2 * Math.sin(angle1 - angle2);

 const num6 = vel1 * vel1 * l1 * (m1 + m2);

 const num7 = g * (m1 + m2) * Math.cos(angle1);

 const num8 = vel2 * vel2 * l2 * m2 * Math.cos(angle1 - angle2);

 const den2 = l2 * (2 * m1 + m2 - m2 * Math.cos(2 * angle1 - 2 * angle2));

 acc2 = (num5 * (num6 + num7 + num8)) / den2;

 const dt = 0.0167;

 vel1 += acc1*dt;

 vel2 += acc2*dt;



// ✅ Add damping to simulate friction/air resistance

 vel1 *= 0.999999;

 vel2 *= 0.999999;



// ✅ Optional: Clamp the maximum velocity to prevent explosion

 const maxVel = 5;

 vel1 = THREE.MathUtils.clamp(vel1, -maxVel, maxVel);

 vel2 = THREE.MathUtils.clamp(vel2, -maxVel, maxVel);



// ✅ Then update the angles

 angle1 += vel1 * dt;

 angle2 += vel2 * dt;




 const x1 = l1 * Math.sin(angle1);

 const y1 = -l1 * Math.cos(angle1);



 const x2 = x1 + l2 * Math.sin(angle2);

 const y2 = y1 - l2 * Math.cos(angle2);



 arm1.position.set(0, 0, 0);

 arm1.rotation.z = angle1;



 arm2.position.set(x1, y1, 0);

 arm2.rotation.z = angle2;



 renderer.render(scene, camera);

}