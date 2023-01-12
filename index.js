import * as THREE from "./three.js/build/three.module.js"
import {FontLoader} from "./three.js/examples/jsm/loaders/FontLoader.js"
import {TextGeometry} from "./three.js/examples/jsm/geometries/TextGeometry.js"
import {OrbitControls} from "./three.js/examples/jsm/controls/OrbitControls.js"
import {GLTFLoader} from "./three.js/examples/jsm/loaders/GLTFLoader.js"

var scene, FixedCamera, FreeCamera, currentCam, control, renderer, loader

function Skybox() {
    let geometry = new THREE.BoxGeometry(1000,1000,1000)
    let loader = new THREE.TextureLoader()

    let right = loader.load("./assets/skybox/dawn_right.png")
    let left = loader.load("./assets/skybox/dawn_left.png")
    let top = loader.load("./assets/skybox/dawn_top.png")
    let bottom = loader.load("./assets/skybox/dawn_bottom.png")
    let front = loader.load("./assets/skybox/dawn_front.png")
    let back = loader.load("./assets/skybox/dawn_back.png")

    let material = [
        new THREE.MeshBasicMaterial({
            map: right,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: left,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: top,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: bottom,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: front,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: back,
            side: THREE.BackSide
        })
    ]
    let mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)
}

function ground() {
    let geometry = new THREE.PlaneGeometry(1000,1000,150)
    let material = new THREE.MeshStandardMaterial({
        color: "#8c3b0c",
        side: THREE.DoubleSide
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(0, -5, 0)
    mesh.rotation.set(-Math.PI/2,0,0)
    mesh.receiveShadow = true

    scene.add(mesh)
}

function ballon(){
    let loader = new GLTFLoader()

    loader.load('./assets/model/scene.gltf',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(1/11)
        model.position.y = 1
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });

        // console.log(gltf)
        scene.add(model)
        return model
    })
}

function crate(w,h,d,pX,pY,pZ,rX,rY,rZ,load) {
    let geometry = new THREE.BoxGeometry(w,h,d)
    let material = new THREE.MeshPhongMaterial({
        map: loader.load(load)
    })
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(pX,pY,pZ)
    mesh.rotation.set(rX,rY,rZ)
    mesh.castShadow = true
    mesh.receiveShadow = true

    scene.add(mesh)
    return mesh
}

function createTire1(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-70,-5,0)
    mesh.rotation.y = Math.PI/2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire2(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-65,-5,20)
    mesh.rotation.y = Math.PI/2 + Math.PI / 9 * 1
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire3(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-65,-5,-20)
    mesh.rotation.y = -Math.PI/2 + -Math.PI / 9 * 1
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire4(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-55,-5,40)
    mesh.rotation.y = -Math.PI/2 + Math.PI / 9 * 2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createTire5(){
    const geometry = new THREE.TorusGeometry(5, 2.5, 16,100)
    const material = new THREE.MeshStandardMaterial({
        color: "#3e444c"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-55,-5,-40)
    mesh.rotation.y = -Math.PI/2 + -Math.PI / 9 * 2
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
}

function createPole1(){
    const geometry = new THREE.CylinderGeometry(1,1,50,16)
    const material = new THREE.MeshStandardMaterial({
        color: "#646FD4"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,15,35)
    mesh.rotation.x = -Math.PI/6
    mesh.receiveShadow = true
    scene.add(mesh)
}

function createPole2(){
    const geometry = new THREE.CylinderGeometry(1,1,50,16)
    const material = new THREE.MeshStandardMaterial({
        color: "#646FD4"
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,15,-35)
    mesh.rotation.x = Math.PI/6
    mesh.receiveShadow = true
    scene.add(mesh)
}

function buttonBox() {
    let geometry = new THREE.BoxGeometry(10,16.5,14.5)
    let material = new THREE.MeshPhongMaterial({
        color: "#848482"
    })
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-43, 3, 65)
    mesh.rotation.set(0, -Math.PI/6, 0)
    mesh.castShadow = true
    mesh.receiveShadow = true

    scene.add(mesh)
}

function buttonClick() {
    let geometry = new THREE.SphereGeometry(4.5,32,16)
    let material = new THREE.MeshPhongMaterial({
        color: "#dc143c"
    })
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-46, 3, 63)
    mesh.castShadow = true
    mesh.receiveShadow = true

    scene.add(mesh)
    return mesh
}

function text() {
    let loader = new FontLoader()
    loader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json',
    function (font1){
        let geometry = new TextGeometry('Click Me!',{
            font:font1,
            size:7,
            height:9
        })
        let material = [
            new THREE.MeshPhongMaterial({
                color: "#FF5B00",
                side: THREE.FrontSide
            }),
            new THREE.MeshPhongMaterial({
                color: "#990000",
                side: THREE.BackSide
            })]
        let mesh = new THREE.Mesh(geometry,material)
        mesh.position.set(-35, 25, 50)
        mesh.rotation.set(0, Math.PI*3 + 1, 0)
        mesh.castShadow = true
        mesh.receiveShadow = true
        
        scene.add(mesh)
        return mesh
    })
}

function AmbientLight() {
    let light = new THREE.AmbientLight("#404040")
    scene.add(light)
}

function Spotlight(x,y,z) {
    let light = new THREE.SpotLight("#ffffff",1,300)
    light.position.set(x,y,z)
    light.lookAt(0,50,0)
    light.castShadow = true
    scene.add(light)
}

function Spotlight3() {
    let light = new THREE.SpotLight("#ffffff",0.5,300,Math.PI/4 + Math.PI/6)
    light.position.set(0,200,0)
    light.lookAt(0,0,0)
    light.castShadow = true
    scene.add(light)
}

function init() {
    scene = new THREE.Scene()

    let width = window.innerWidth
    let height = window.innerHeight
    const ASPECT = width/height
    FixedCamera = new THREE.PerspectiveCamera(50,ASPECT, 1, 5000)
    FixedCamera.position.set(-180,30,0)
    FixedCamera.lookAt(0,30,0)

    FreeCamera = new THREE.PerspectiveCamera(50,ASPECT, 1, 5000)
    FreeCamera.position.set(-200,50,0)
    FreeCamera.lookAt(0,0,0)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(width,height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    document.body.appendChild(renderer.domElement)

    loader = new THREE.TextureLoader()

    currentCam = FixedCamera
    control = new OrbitControls(FreeCamera, renderer.domElement)

    AmbientLight()
    Spotlight(-100,0,100)
    Spotlight(-100,0,-100)
    Spotlight3()
    Skybox()
    ground()
    createTire1()
    createTire2()
    createTire3()
    createTire4()
    createTire5()
    createPole1()
    createPole2()

    var hotairballon = ballon()
        window.hotairballon = hotairballon

    -48,
        Math.PI/6,0,crate(10,10,10,
        -30,0,-40,
        0,0,0,
        "./assets/texture/crate1.jpeg")
    crate(5,5,5,
        -30,-2,0,
        "./assets/texture/crate1.jpeg")
    crate(10,15,10,
        -40,2.5,30,
        0,-Math.PI/4,0,
        "./assets/texture/crate1.jpeg")

    crate(20,20,20,
        30,5,40,
        0,Math.PI/3,0,
        "./assets/texture/crate2.jpeg")
    crate(40,15,30,
        30,2.5,-60,
        0,-Math.PI/6,0,
        "./assets/texture/crate2.jpeg")


    buttonBox()
    var button = buttonClick()
        window.button = button

    text()
}

var animationFrame
let i = -Math.PI/6
function animationPole() {
    let createPole1 = window.createPole1
    let createPole2 = window.createPole2
    animationFrame = requestAnimationFrame(animationPole)

    i += 0.01
    if(i < 0) {
        createPole1.rotation.x += 0.01
        createPole2.rotation.x += -0.01
    } else {
        cancelAnimationFrame(animationFrame)
    }

    console.log("yes")
    renderer.render(scene, currentCam)
}

let j = 0
function ballonAnimate() {
    requestAnimationFrame(ballonAnimate)
    let ballon = window.hotairballon
    
    j += 1
    if(i < 1000) {
        ballon.position.y += 1
    } else {
        cancelAnimationFrame(animationFrame)
    }
    
    console.log("yes")
    renderer.render(scene, currentCam);
}


function moveCam(event){
    let keyCode = event.keyCode
    if (keyCode == 32) 
    {
        if (currentCam == FixedCamera) {
            currentCam = FreeCamera
            cancelAnimationFrame(animationFrame)
        } else {
            currentCam = FixedCamera
        }
    }
}

const mouse = new THREE.Vector2()
const raycaster = new THREE.Raycaster()

document.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})

var ready = false
function btnAnimate() {
    raycaster.setFromCamera(mouse,currentCam)
    const intersects = raycaster.intersectObject(window.button)
    if (intersects.length > 0) {
        const object = intersects[0].object;
        if(ready){
            console.log("Ballons")
            object.material.color.set("#32cd32");
            ready = false
        } else {
            console.log("Poles")
            animationPole()
            object.material.color.set("#fada5e");
            console.log("done")
            ready = true
        }
    }
}

window.addEventListener('keydown', moveCam)
window.addEventListener('click', btnAnimate)

function render() {
    control.update()
    requestAnimationFrame(render)
    renderer.render(scene,currentCam)
}

window.onload = function (){
    init();
    render();
}