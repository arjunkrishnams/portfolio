import { Canvas } from '@react-three/fiber';
import { OrbitControls,Stage, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import { Scene } from 'three';
import React from 'react';
import Vinyl from './Vinyl.jsx';

const Music = () => {
    return (
        <Canvas >
          
          <Stage environment="city" intensity={0.4}>
            <Vinyl/>
          </Stage>
          <OrbitControls enableZoom={false} />  
        </Canvas>
    );
};

export default Music;