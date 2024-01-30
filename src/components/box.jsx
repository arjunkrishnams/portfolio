import {useFrame} from '@react-three/fiber';
import React, { useRef } from 'react';
import {Text, RenderTexture, PerspectiveCamera } from '@react-three/drei';

const Box = () => {

    const textRef = useRef();
    useFrame((state)=>{
        textRef.current.position.x = Math.sin(state.clock.getElapsedTime());
    });
    return(
        <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 2]}/>
                <color attach="background" args={['lightpink']}/>
                <Text ref={textRef} fontSize= {0.5} color= "black" >
                Hello World
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
    )};

export default Box;