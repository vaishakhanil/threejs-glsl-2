# :goggles: THREEJS + GLSL - Shader on Text
> Shader Materials with Text Geometry!

Black + White | MultiColor 
------------ | ------------- 
![Black/White](https://res.cloudinary.com/vaishakhanil/image/upload/v1600025945/githubImages/1_rzvqnq.webp) | ![multicolor](https://res.cloudinary.com/vaishakhanil/image/upload/v1600026278/githubImages/2_1_s5aj22.webp)

### Fragment Shader & Vertex Shader
> Fragment Shader from Lewis Lepton Shader Series [Shader](https://www.youtube.com/watch?v=aW_GW5uwWRM)

:small_orange_diamond: Vertex Shader
```
varying vec2 vUv;
void main()	
    {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
```
:small_orange_diamond: Fragment Shader
```
varying vec2 vUv;
uniform float time;

void main()	{
    vec2 container = - 1.0 + 8.0 * vUv;
    float a = time * 40.0;
    for(int n=1;n<6;n++){
        float i = float(n);
        container += vec2(0.7/i*sin(i*container.y+time+0.3*i)*1.8,0.4/i*sin(container.x+time+0.3*i)*3.6);
    }
    vec3 color = vec3(sin(container.x+container.y)+0.5,sin(container.x+container.y)+0.5,sin(container.x+container)+0.5);
    gl_FragColor = vec4(color,1.0);
}
```
:small_orange_diamond: Loading Font in Threejs
```
    let loader = new THREE.FontLoader();
    loader.load('fonts/Poppins_Regular.json',function(font){
        geometry = new THREE.TextGeometry('TEXT',{Parameters});
        // Material Setup
        // Build Mesh from Text & Material
    }
```

