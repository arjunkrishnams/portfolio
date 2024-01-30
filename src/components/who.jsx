import React from "react";
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Text, RenderTexture, PerspectiveCamera } from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import Box from './box.jsx';
const Section = styled.div`
    height : 100vh;
    scroll-snap-align : center;
    display : flex;
    align-items : center;
    justify-content: center;
    `

    const Container = styled.div`
    height : 100%;
    width : 1400px;
    display : flex;
    align-items : centre;
    justify-content: space-between;

    `
    const Left = styled.div`
    flex:1;
    display : flex;
    flex-direction : column;
    justify-content : center;
    `;
    const Right = styled.div`
    flex:1;
    display : flex;
    flex-direction : column;
    justify-content : center;     
    `;
    const Title = styled.h1`
    font-size : 60px;
    ${'' /* color : #12372A; */}
    `;
    const Subheading = styled.h2`
    font-size : 40px;
    ${'' /* color : #436850; */}
    
    `;
    const Desc = styled.p`
    ${'' /* color : #ADBC9F"; */}
    font-size : 20px;

    `;
const Who = () => {
    return(
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{fov:25, position:[5,5,5] }}>
                    <OrbitControls autoRotate = {true} enableZoom = {false} />
                    <ambientLight intensity ={1}/>
                    <directionalLight position={[3, 2, 1]}/>
                    <Box/>
                    </Canvas>
                </Left>
                <Right>
                    <Title>I'm a passionate student in NITC</Title>
                    <Subheading>Currently pursuing B.Tech in Computer Science and Engineering</Subheading>
                    <Desc>Always looking forward to learn and improve</Desc>
                </Right>
            </Container>
        </Section>
    )
    }

export default Who;