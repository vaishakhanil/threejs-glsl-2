let mesh;

/* Scene Setup */
let container = document.getElementById( 'container' );
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 10;
let scene = new THREE.Scene();

/* Defining Uniforms*/
uniforms = {
    "time": { value: 1.0 }
};

/* Text Geometry Setup*/
let loader = new THREE.FontLoader();
loader.load('fonts/Poppins_Regular.json',function(font){
    let geometry = new THREE.TextGeometry('VAISHAKH',{font:font,size:2,height:0.8,bevelEnabled:false});

    let material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent
    });

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(-7,-1,12);
    mesh.rotation.x = -0.4;
    scene.add( mesh );
});

/* Renderer setup*/
let renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setPixelRatio( window.devicePixelRatio );
container.appendChild( renderer.domElement );
renderer.setClearColor(0x000000,1.0);

/* On Window Resize */
onWindowResize();
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
    renderer.setSize( window.innerWidth, window.innerHeight );
}

/* Render Loop*/
animate();
function animate( timestamp ) {

    requestAnimationFrame( animate );

    uniforms[ "time" ].value = timestamp / 1000;

    if(mesh.position.z != 1 && mesh.position.z > 1){
        mesh.position.z -= 0.05;
    }
    
    renderer.render( scene, camera );
}