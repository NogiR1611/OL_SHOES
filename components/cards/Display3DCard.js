import React from 'react';
import * as THREE from 'three';
import GLTFLoader from './3D/GLTFLoader.js';
import OrbitControls from './3D/OrbitControls.js';

export default class Display3DProduct extends React.Component{
    componentDidMount(){
            let scene = new THREE.Scene();
            let camera =  new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
            camera.rotation.y = 45/180*Math.PI;
            camera.position.x = 800;
            camera.position.y = 100;
            camera.position.z = 1000;

            let hlight = new THREE.AmbientLight(0x404040,100);
            scene.add(hlight);

            let directionalLight = new THREE.DirectionalLight(0xffffff,100);
            directionalLight.position.set(0,1,0);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            let light = new THREE.PointLight(0xc4c4c4,10);
            light.position.set(0,300,500);
            scene.add(light);

            let light2 = new THREE.PointLight(0xc4c4c4,10);
            light2.position.set(500,100,0);
            scene.add(light2);

            let light3 = new THREE.PointLight(0xc4c4c4,10);
            light3.position.set(0,100,-500);
            scene.add(light3);

            let light4 = new THREE.PointLight(0xc4c4c4,10);
            light4.position.set(-500,300,0);
            scene.add(light4); 
        
            let renderer = new THREE.WebGLRenderer({antialias:true});
            renderer.setSize( window.innerWidth*0.2, window.innerHeight*0.2 );
            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            this.mount.appendChild( renderer.domElement );
            /*
            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
            camera.position.z = 5;
            var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
            };
            animate();
            */
            let loader = new GLTFLoader();
            loader.load('./3D/scene.gltf',function(gltf){
                car = gltf.scene.children[0];
                car.scale.set(0.5,0.5,0.5);
                scene.add(gltf.scene);
                renderer.render(scene,camera);   
            })
    }

    render(){
        return (
            <div className="flex justify-center">
                <div ref={ref => (this.mount = ref)} />
            </div>
        );
    }
}