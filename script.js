let container;
let camera, scene, renderer;
let uniforms;
let material;
let geometry;
let mesh;
init();
animate();

function init() {
    container = document.getElementById( 'container' );

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 10;

    scene = new THREE.Scene();
    uniforms = {
        "time": { value: 1.0 }
    };

    let loader = new THREE.FontLoader();
    loader.load('fonts/Poppins_Regular.json',function(font){
    geometry = new THREE.TextGeometry('VAISHAKH',{font:font,size:2,height:1,bevelEnabled:false});
    
  
    material = new THREE.ShaderMaterial( {

        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );

    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(-7,-1,10);
    mesh.rotation.x = -0.4;
    scene.add( mesh );
});
    
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild( renderer.domElement );
    renderer.setClearColor(0x000000,1.0);
    onWindowResize();

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate( timestamp ) {

    requestAnimationFrame( animate );

    uniforms[ "time" ].value = timestamp / 1000;
    if(mesh.position.z != 1 && mesh.position.z > 1){
        mesh.position.z -= 0.05;
    }
   
   console.log(mesh.position.z);

    renderer.render( scene, camera );

}