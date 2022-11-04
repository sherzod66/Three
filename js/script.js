import { OrbitControls } from 'https://unpkg.com/three@0.145.0/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
	window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement)

const axexHelper = new THREE.AxesHelper(3);
scene.add(axexHelper)



//scene.add(cube);
camera.position.set(0, 0, 20)
controls.update();

const sphere = new THREE.SphereGeometry(10, 100, 100);
const material = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	map: new THREE.TextureLoader().load('./img/globe.jpg'),
})
const shapeEarth = new THREE.Mesh(sphere, material);
scene.add(shapeEarth)


const moonSphere = new THREE.SphereGeometry(5, 50, 50);
const moonMaterial = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	map: new THREE.TextureLoader().load('./img/moon.png')
})
const moon = new THREE.Mesh(moonSphere, moonMaterial);
moon.position.set(0, 20, 30)
scene.add(moon)

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0.2, 0.2, 1)
scene.add(light)


function animate() {
	requestAnimationFrame(animate)
	shapeEarth.rotation.y += 0.004
	moon.rotation.y += 0.004

	renderer.render(scene, camera)
}
animate()


/*flatShading: true,
	map: new THREE.TextureLoader().load('./img/globe.jpg')*/
