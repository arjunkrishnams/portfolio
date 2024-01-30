import React from "react";
import styled from 'styled-components';
import { useState } from "react";
// import Laptop from './Laptop.jsx';
import Book from './Book.jsx';
import Reading from "./Reading.jsx";
import WebDesign from "./WebDesign.jsx";
// import Drawing from './Drawing.jsx';
import Music from './Music.jsx';    
const Data =[
    "Web dev",
    "Reading",
    "Drawing",
]
const Section = styled.div`
    height : 100vh;
    scroll-snap-align : center;
    display : flex;
    justify-content:center;
    `

const Container = styled.div`
    width : 1400px;
    display: flex;
    justify-content : space-between;
`;

const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    justify-content : center;
`;

const Right = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    justify-content : center;
`;

const List = styled.ul`
    list-style : none;
    display : flex;
    flex-direction : column;
    gap : 20px;

`;
const Listitem= styled.li`


    font-size : 100px;
    font-weight : bold;
    cursor : pointer;
    color :transparent;
    -webkit-text-stroke : 1px black;
    position : relative;
    

    &::after{

        content : "${(props) => props.text}";
        position : absolute;
        top : 0 ;
        left : 0;
        color : pink;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }
    &:hover{
        &::after{
        animation : moveText 1s linear both;


        @keyframes moveText{
            to{
                width : 100%;
        }
        }
        }
    }
    
`;



const What = () => {
    const [hover, setHover] = useState("none");
    return(
        <Section>
            <Container >
                <Left>
                    <List>
                        {Data.map((item) => (<Listitem key={item} text= {item} onMouseEnter={()=>{setHover(item)}} >{item}</Listitem>))}
                    </List>
                </Left>
                <Right>
                    {/* <Reading/> */}
                    {hover === "Web dev" ?(<WebDesign/>): hover === "Reading" ?( <Reading/> ): hover === "Drawing" ?(<Music/>):(<div></div>) }
                </Right>
            </Container>
        </Section>
    )
    }

export default What;