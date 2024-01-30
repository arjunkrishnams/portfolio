import React from "react";
import styled from 'styled-components';
import Navbar from './navbar.jsx';
import { OrbitControls,Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';



const Section = styled.div`
    height : 100vh;
    scroll-snap-align : center;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: space-between;
    `;

const Container = styled.div`
    height : 100% ;
    scroll-snap-align : center;
    width : 1400px;
    display : flex;
    justify-content : space-between;
    ${'' /* scroll-snap-align : center; */}
`;

const Left = styled.div`
    flex:2;
    display : flex;
    flex-direction : column;
    justify-content : center;
`;

const Title = styled.h1`
    font-size : 60px;
`;

const Whatwedo = styled.div`
display : flex;
align-items : center;
`;

const Line = styled.img`
width : 10px;
`;

const Subtitle = styled.h2`
`;

const Desc = styled.p`
`;

const Button = styled.button`
    width : 150px;
    border-radius : 5px;
    background-color : #FFA447;
    padding : 10px 20px;
    border : none;
    font-weight : bold;
    ${'' /* align-self : center; */}
`;

const Right = styled.div`
    flex:3;
    position : relative;

`;

const Img = styled.img`
    width : 800px;
    height : 600px;
    object-fit : contain;
    position : absolute;
    top : 0;
    right : 0;
    bottom : 0;
    left : 0;
    margin : auto;
    animation : animate 2s infinite ease alternate;

    @keyframes animate{
        100%{
            transform : translateY(20px);
        }
    }

`;
const Hero = () => {
    return(
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Eat Sleep Repeat</Title>
                    <Whatwedo>
                        <Line src="./images/arrow.png"/>
                        <Subtitle>What we do</Subtitle>
                    </Whatwedo>
                    <Desc>Create what can imagine</Desc>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                <Canvas camera={{fov:25, position:[5,5,5] }}>
                    <OrbitControls autoRotate = {true} enableZoom = {false} />
                    <ambientLight intensity ={1}/>
                    <directionalLight position={[3, 2, 1]}/>
                    <Sphere args={[1,100,200]} scale = {1.6}>
                    <MeshDistortMaterial 
                        color = "#FFA447"
                        attach="material"
                        distort={0.4}
                        speed={2}
                    />
                    </Sphere>
                    </Canvas>
                    <Img src="./images/hero_2.png" alt="hero_img"/>
                </Right>
            </Container>
        </Section>
    )
    }

export default Hero;