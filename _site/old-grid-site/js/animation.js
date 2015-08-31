// window.onload = function(){
//         console.log("Template rendered");
//         var scene = new THREE.Scene();
//         var WIDTH = window.innerWidth / 3;
//         var HEIGHT = window.innerHeight/3;
//         var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
//         var renderer = new THREE.WebGLRenderer();
//         renderer.setSize(WIDTH, HEIGHT);
//         document.getElementById("animation").appendChild(renderer.domElement);
//         var geometry = new THREE.BoxGeometry(1, 1, 1);
//         var material = new THREE.MeshBasicMaterial({
//             color: 0x00ff00
//         });
//         cube = new THREE.Mesh(geometry, material);
//         scene.add(cube);

//         camera.position.z = 5;

//         var render = function() {
//             requestAnimationFrame(render);

//             cube.rotation.x += 0.1;
//             cube.rotation.y += 0.1;

//             renderer.render(scene, camera);
//         };

//         render();
// }


var container;
var camera, scene, renderer;
var particleMaterial;
var count;
var CAMZ = 150;

var WIDTH = window.innerWidth / 3;
var HEIGHT = window.innerHeight / 3;
var currentInput = "cos"
window.onload = function(){
    init();
    animate();
}

function init() {

    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1, 1000);
    camera.position.x = -10
    camera.position.y = 0
    camera.position.z = CAMZ;
    scene = new THREE.Scene();
    count = 0;
    var PI2 = Math.PI * 2;

    particleMaterial = new THREE.ParticleCanvasMaterial({
        color: 0x66FF66,
        program: function(context) {
            context.beginPath();
            context.arc(0, 0, 1, 0, PI2, true);
            context.fill();
        }
    });
    particles = [];
    var initialParticle = new THREE.Particle(particleMaterial.clone());
    initialParticle.position.x = -11;
    initialParticle.position.y = 0;
    initialParticle.position.z = 0;
    scene.add(initialParticle);
    particles.push(initialParticle);
    for (var i = 0; i < 250; i++) {
        var tempParticle = new THREE.Particle(particleMaterial.clone());
        tempParticle.position.x = Math.random() * 100 - 50;
        tempParticle.position.y = Math.random() * 100 - 50;
        tempParticle.position.z = Math.random() * (200) - CAMZ;
        scene.add(tempParticle);
        particles.push(tempParticle);
    }


    renderer = new THREE.CanvasRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    document.getElementById("animation").appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    for (var index in particles) {
        particles[index].material.color = new THREE.Color().setHSL((count / 100) % 1, 0.5, 0.5);
        particles[index].position.x += 1;
        if (particles[index].position.x > 100) {
            particles[index].position.x = -100;
        }
        if(currentInput == "csc"){
            particles[index].position.y = 10 * (1 / (Math.sin((particles[index].position.x) / 15)));
        }
        else if(currentInput == "sec"){
            particles[index].position.y = 10 * (1 / (Math.cos((particles[index].position.x) / 15)));
        }
        else if(currentInput == "cot"){
            particles[index].position.y = 10 * (1 / (Math.tan((particles[index].position.x) / 15)));
        }
        else if(currentInput == "cos"){
            particles[index].position.y = 10 * (1 * (Math.cos((particles[index].position.x) / 15)));
        }
        else{
            particles[index].position.y = 10 * (1 * (Math.cos((particles[index].position.x) / 15)));
        }
        particles[index].position.z += 1;
        if (particles[index].position.z > CAMZ) {
            particles[index].position.z = 0;
        }
    }

    renderer.setClearColor(
        particles[0].material.color.clone().offsetHSL(0.5, 0, 0)
    );

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    count++;
}