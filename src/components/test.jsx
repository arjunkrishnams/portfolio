import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Text, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import Box from './box.jsx';

const Container = styled.div`
    height : 100vh;
    width : 100%;
    scroll-snap-align : center;
`;


const Test = () => {
    return(
        <Container>
            <Canvas>
                <OrbitControls enableZoom = {false} />
                <ambientLight intensity ={1}/>
                <directionalLight position={[3, 2, 1]}/>
                <Box/>
            </Canvas>
        </Container>
    )
}

export default Test;