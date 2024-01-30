import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Stage, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import { Scene } from 'three';
import Laptop from './Laptop.jsx';

const WebDesign = () => {
    return (
        // <Canvas camera={{fov:1000, position:[100,10,10] }}>
        // <OrbitControls autoRotate = {true} enableZoom = {false} />
        // <ambientLight intensity ={1}/>
        // <directionalLight position={[3, 2, 1]}/>
        // <Laptop/>
        // </Canvas>

        <Canvas >
          
          <Stage environment="city" intensity={0.4}>
            <Laptop/>
          </Stage>
          <OrbitControls enableZoom={false} />  
        </Canvas> 
    );
};

export default WebDesign;

        <Canvas >
          
          <Stage environment="city" intensity={0.4}>
            <Laptop/>
          </Stage>
          <OrbitControls enableZoom={false} />  
        </Canvas> 