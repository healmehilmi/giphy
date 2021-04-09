import React from 'react';
import {useState} from 'react';
import logo from '../images/logo.png';
import IconButton from "@material-ui/core/IconButton";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";
import Gif from './Gif.js';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Favorites(props) {
    
    const [favorites, setFavorites]=useState([]);

 


    return (
        <Wrapper>
        <Container>
       
            
             <h1>Hier your favourite Gifs..</h1>
             
            
        </Container>    
     </Wrapper> 
    )
}

export default Favorites



const Wrapper = styled.div`
display: inline-flex;
padding: 8px;
background-color:red;


`


const Container = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;



img{
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
    height: 200px;
    
   
}

`