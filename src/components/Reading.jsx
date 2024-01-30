import React from 'react';
import Book from './Book.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Stage, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import { Scene } from 'three';
const Reading = () => {
    return (
        <Canvas >
          
          <Stage environment="city" intensity={0.4}>
            <Book/>
          </Stage>
          <OrbitControls enableZoom={false} />  
        </Canvas>
    );
};

export default Reading;
