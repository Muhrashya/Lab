import * as THREE from "./three.js/build/three.module.js"
import {GLTFLoader} from "./three.js/examples/jsm/loaders/GLTFLoader.js"
import {TextGeometry} from "./three.js/examples/jsm/geometries/TextGeometry.js"
import {OrbitControls} from "./three.js/examples/jsm/controls/OrbitControls.js"
import {FontLoader} from "./three.js/examples/jsm/loaders/FontLoader.js"

var scene, renderer, camera, freeCamera, currentCamera, control, loader

function ambientLight(){
    let light = new THREE.AmbientLight("#404040")
    scene.add(light)
}

const createSpot1 = () => {
    const spot1 = new THREE.SpotLight("#ffffff",1,300)
    spot1.position.set(-100,0,100)
    spot1.lookAt(0,50,0)
    spot1.castShadow = true
    scene.add(spot1)
}
const createSpot2 = () => {
    const spot2 = new THREE.SpotLight("#ffffff",1,300)
    spot2.position.set(-100,0,-100)
    spot2.lookAt(0,50,0)
    spot2.castShadow = true
    scene.add(spot2)
}
const createSpot3 = () => {
    const spot3 = new THREE.SpotLight("#ffffff",0.5,300)
    spot3.position.set(-100,0,-100)
    spot3.lookAt(0,0,0)
    spot3.castShadow = true
    spot3.angle = Math.PI/4 + Math.PI/6
    scene.add(spot3)
}

function spotsL(){
    let spotter = new THREE.SpotLight("#ffffff",0.5,300)
    spotter.position.set(0,200,0)
    spotter.lookAt(0,0,0)
    spotter.angle = Math.PI/4 + Math.PI/6
    spotter.castShadow = true
    scene.add(spotter)
}

function createPlane(){
    let geometry = new THREE.PlaneGeometry(1000,1000,150)
    let material = new THREE.MeshStandardMaterial({
        color: "#8c3b0c"
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(0, -5, 0)
    mesh.rotation.x = -Math.PI/2,0,0
    mesh.receiveShadow = true
    scene.add(mesh)
}


function createCrateA1(){
    const geometry = new THREE.BoxGeometry(10,10,10)
    const texture = loader.load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
        
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-30,0,-40)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createCrateA2(){
    const geometry = new THREE.BoxGeometry(5,5,5)
    const texture = loader.load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-30,-2,-48)
    mesh.rotation.x = Math.PI/6
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateA3(){
    const geometry = new THREE.BoxGeometry(10,15,10)
    const texture = loader.load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-40,2.5,30)
    mesh.rotation.y = -Math.PI/4
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateB1(){
    const geometry = new THREE.BoxGeometry(20,20,20)
    const texture = loader.load("./assets/texture/crate2.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(30,5,40)
    mesh.rotation.y = Math.PI/3
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateB2(){
    const geometry = new THREE.BoxGeometry(40,15,30)
    const texture = loader.load("./assets/texture/crate2.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(30,2.5,-60)
    mesh.rotation.y = -Math.PI/6
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
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


function buttonBox(){
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

function buttonClick(){
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

    function createText(){
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


function balonUdara(){
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
        scene.add(model)
        return model
    })
}

function createSkybox(){
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


function init(){
    scene = new THREE.Scene()

    const FOV = 50
    const ASPECT = window.innerWidth/window.innerHeight
    const NEAR = 1
    const FAR = 5000
    
    camera = new THREE.PerspectiveCamera(FOV,ASPECT,NEAR, FAR)
    camera.position.set(-180,30,0)
    camera.lookAt(0,30,0)

    freeCamera = new THREE.PerspectiveCamera(FOV,ASPECT,NEAR, FAR)
    freeCamera.position.set(-200,50,0)
    freeCamera.lookAt(0,0,0)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    document.body.appendChild(renderer.domElement)

    loader = new THREE.TextureLoader()

    currentCamera = camera
    control = new OrbitControls(freeCamera, renderer.domElement)

    createPlane()
    createCrateA1()
    createCrateA2()
    createCrateA3()
    createCrateB1()
    createCrateB2()
    createTire1()
    createTire2()
    createTire3()
    createTire4()
    createTire5()
    createPole1()
    createPole2()
    buttonBox()
    balonUdara()
    createText()
    ambientLight()
    createSpot1()
    createSpot2()
    createSpot3()
    spotsL()
    createSkybox()
    
    var button = buttonClick()
        window.button = button
}

function camAnimate(event){
    let keyCode = event.keyCode
    if (keyCode == 32) 
    {
        if (currentCamera == camera) {
            currentCamera = freeCamera
            cancelAnimationFrame(animationFrame)
        } else {
            currentCamera = camera
        }
    }
}

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

var ready = false
function buttonClk(){
    raycaster.setFromCamera(mouse,currentCamera)
    const intersects = raycaster.intersectObject(window.button)
    if (intersects.length > 0) {
        const object = intersects[0].object;
        if(ready){
            object.material.color.set("#32cd32");
            ready = false
        } else {
            object.material.color.set("#fada5e");
            ready = true
        }
    }
}

document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})

window.addEventListener('keydown', camAnimate)
window.addEventListener('click', buttonClk)

function render(){
    control.update()
    requestAnimationFrame(render)
    renderer.render(scene,currentCamera)
}

window.onload = function(){
    init();
    render();
}