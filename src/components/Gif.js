import React, {useState} from 'react'
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorites from './Favorites.js';

function Gif (props) {

    let {images} = props;
    const [liked,setLiked]=useState("");

    const addToFavs = () =>{
      
       
    }
     console.log(addToFavs)

       
    return (
        <Wrapper>
            <Container>
           
                
                 <img src={images.fixed_height.url}  alt="gifs" />
                 
                 <button type='button' onClick={addToFavs} >
                    <FavoriteIcon />
                </button>
                
            </Container>    
         </Wrapper> 
    )
   
}

export default Gif


    const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;

    
    `
    
    
    const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    position: relative;

   

    button{
       
        position: absolute;
        top: 13%;
        left: 85%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        background-color: #0000008c;
        color: white;
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 20px;
    }

    
   

    img{
        display: flex;
        width: 100%;
        border-radius: 16px;
        object-fit: cover;
        height: 200px;
        
       
     
            
        }

    `