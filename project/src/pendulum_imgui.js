import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;
let arm1, arm2;
let material1, material2;

let angle1 = Math.PI / 2;
let angle2 = Math.PI / 4;
let vel1 = 0.5;
let vel2 = 2.5;
let acc1 = 0;
let acc2 = 0;

const g = 9.8;
let m1 = 1;
let m2 = 1;
const l1 = 1;
const l2 = 1;


const initialState = {
    angle1: Math.PI / 2, 
    angle2: Math.PI / 4,
    vel1: 0.5,
    vel2: 0.5,
    m1: 1,
    m2: 1
};

let trailPoints = [];
let trailLine;
const maxTrailPoints = 750;
const trailUpdateInterval = 1;
let frameCount = 0;
let font = null;
let clear_color = null;
let mouseOverImgui = false;
await init();
animate();

async function LoadArrayBuffer(url) {
    const response = await fetch(url);
    return response.arrayBuffer();
}

async function AddFontFromFileTTF(url, size_pixels, font_cfg = null, glyph_ranges = null) {
    font_cfg = font_cfg || new ImGui.FontConfig();
    font_cfg.Name = font_cfg.Name || `${url.split(/[\\\/]/).pop()}, ${size_pixels.toFixed(0)}px`;
    return ImGui.GetIO().Fonts.AddFontFromMemoryTTF(await LoadArrayBuffer(url), size_pixels, font_cfg, glyph_ranges);
}
async function init() {
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    material1 = new THREE.MeshBasicMaterial({ color: 0x8be9fd });
    material2 = new THREE.MeshBasicMaterial({ color: 0xff79c6 });

    const geom1 = new THREE.CylinderGeometry(0.05, 0.05, l1, 32);
    geom1.translate(0, -l1 / 2, 0);
    arm1 = new THREE.Mesh(geom1, material1);
    scene.add(arm1);

    const geom2 = new THREE.CylinderGeometry(0.05, 0.05, l2, 32);
    geom2.translate(0, -l2 / 2, 0);
    arm2 = new THREE.Mesh(geom2, material2);
    arm1.add(arm2);
    arm2.position.set(0, -l1, 0);

    const trailGeometry = new THREE.BufferGeometry();
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxTrailPoints * 3), 3));
    const trailMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
    trailLine = new THREE.Line(trailGeometry, trailMaterial);
    scene.add(trailLine);
        
    await ImGui.default();
    const canvas = document.getElementById('three-canvas');
    ImGui.CreateContext();
    const io = ImGui.GetIO();    
    io.Fonts.AddFontDefault();    
    font = await AddFontFromFileTTF("./assets/CourierPrime-Regular.ttf", 16.0);
    if (font) { io.Fonts.Build(); }
    ImGui.StyleColorsDark();
    ImGui_Impl.Init(canvas);
    clear_color = new ImGui.ImVec4(0.3, 0.3, 0.3, 1.00);

    window.addEventListener('resize', onWindowResize);

}

let isPaused = false;

function drawImGUI(time) {
    if (ImGui.GetCurrentContext() === null) {
        //be patient
        return;
    }
    ImGui_Impl.NewFrame(time);
    ImGui.NewFrame();
    let pushedFont = false;
    if (font) {
        ImGui.PushFont(font);
        pushedFont = true;
    }

    // so that we can disable orbit control if needed.
    mouseOverImgui= ImGui.IsWindowHovered(ImGui.ImGuiHoveredFlags["AnyWindow"]);
    
    ImGui.SetNextWindowPos(new ImGui.ImVec2(20, 20), ImGui.Cond.FirstUseEver);
    ImGui.SetNextWindowSize(new ImGui.ImVec2(294, 140), ImGui.Cond.FirstUseEver);
    ImGui.Begin("Double Pendulum UI");

    ImGui.ColorEdit4("clear color", clear_color);
    ImGui.Separator();
    ImGui.Text(`Scene: ${scene.uuid.toString()}`);
    ImGui.Separator();
    ImGui.Text(`Material: ${material1.uuid.toString()}`);
    ImGui.ColorEdit3("color", material1.color);

    ImGui.Separator();
    ImGui.Text(`Angular Velocity 1: ${vel1.toFixed(3)} rad/s`);
    ImGui.Text(`Angular Velocity 2: ${vel2.toFixed(3)} rad/s`);

    ImGui.Separator();
    const vel1Ref = [vel1];
    const vel2Ref = [vel2];
    if (ImGui.SliderFloat("Velocity 1", vel1Ref, -10.0, 10.0)) {
        vel1 = vel1Ref[0];
    }
    if (ImGui.SliderFloat("Velocity 2", vel2Ref, -10.0, 10.0)) {
        vel2 = vel2Ref[0];
    }


    ImGui.Separator();
    const mass1Ref = [m1];
    const mass2Ref = [m2];
    if (ImGui.SliderFloat("Mass 1", mass1Ref, 0.5, 5.0)) {
        m1 = mass1Ref[0];
    }
    if (ImGui.SliderFloat("Mass 2", mass2Ref, 0.5, 5.0)) {
        m2 = mass2Ref[0];
    }

    if (ImGui.Button("Reset Pendulum")) {
        angle1 = initialState.angle1;
        angle2 = initialState.angle2;
        vel1   = initialState.vel1;
        vel2   = initialState.vel2;
        m1     = initialState.m1;
        m2     = initialState.m2;
            
        
        
        trailPoints = [];
        if (trailLine && trailLine.geometry && trailLine.geometry.attributes.position) {
            trailLine.geometry.attributes.position.array.fill(0);
            trailLine.geometry.attributes.position.needsUpdate = true;
            trailLine.geometry.setDrawRange(0, 0);
        }
    }

    if(pushedFont){
        ImGui.PopFont();

    }
    
    ImGui.End();

    ImGui.EndFrame();
    ImGui.Render();
}

function animate(time ) {

    requestAnimationFrame(animate);

    drawImGUI(time);

    // Physics
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
    vel1 += acc1 * dt;
    vel2 += acc2 * dt;

    vel1 *= 0.999999;
    vel2 *= 0.999999;

    const maxVel = 5;
    vel1 = THREE.MathUtils.clamp(vel1, -maxVel, maxVel);
    vel2 = THREE.MathUtils.clamp(vel2, -maxVel, maxVel);

    angle1 += vel1 * dt;
    angle2 += vel2 * dt;

    // Update arms
    arm1.rotation.z = angle1;
    arm2.rotation.z = angle2 - angle1;

    // Update color from screen Y
    //updateColor(arm1, material1);
    updateColor(arm2, material2);

    // Trail
    frameCount++;
    if (frameCount % trailUpdateInterval === 0) {
        const tipLocal = new THREE.Vector3(0, -l2, 0);
        const tipWorld = arm2.localToWorld(tipLocal.clone());
        trailPoints.push(tipWorld.clone());
        if (trailPoints.length > maxTrailPoints) trailPoints.shift();

        const positions = trailLine.geometry.attributes.position.array;
        for (let i = 0; i < trailPoints.length; i++) {
            positions[i * 3] = trailPoints[i].x;
            positions[i * 3 + 1] = trailPoints[i].y;
            positions[i * 3 + 2] = trailPoints[i].z;
        }
        trailLine.geometry.attributes.position.needsUpdate = true;
        trailLine.geometry.setDrawRange(0, trailPoints.length);
    }

    // right now, orbit control enable solely depends on if mouse is over imgui.
    if(mouseOverImgui){
        controls.enabled = false;
    }else{
        controls.enabled = true;
    }
    controls.update();
    renderer.render(scene, camera);
    if (ImGui.GetCurrentContext() != null && ImGui.GetDrawData()!=null) {
        ImGui_Impl.RenderDrawData(ImGui.GetDrawData());
        // TODO: restore WebGL state in ImGui Impl
        renderer.state.reset();
    }
}

function updateColor(mesh, material) {
    const worldPosition = new THREE.Vector3();
    mesh.getWorldPosition(worldPosition);
    const screenPos = worldPosition.project(camera);
    const yScreen = (screenPos.y + 1) / 2;
    const frequency = 4.0;
    const color = new THREE.Color().setHSL((yScreen * frequency) % 1, 0.65, 0.5);
    material.color.copy(color);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.onload = function() {
    if (mass1ValueSpan) mass1ValueSpan.textContent = `${mass1Slider.value} kg`;
    if (mass2ValueSpan) mass2ValueSpan.textContent = `${mass2Slider.value} kg`;
};
