import React from 'react'
import styled from 'styled-components';
import Gif from './Gif.js';

function Mainboard(props) {
    let { gifs } = props;
    
   
    return (
        <Wrapper>
            <Container>
                
                {gifs.map(gif=>{
                    
                   
                   let {images} = gif;
                   
               
                    return  <Gif key={gif.id} images={images}  />
                 })}
            </Container>    
        </Wrapper>    
    )
}

export default Mainboard

const Wrapper = styled.div`
background-color: white;
display:flex;
width:100%;
height:100%;
justify-content:center;

`
const Container = styled.div`


background-color:white;

margin:0 auto;
height:100%;



`