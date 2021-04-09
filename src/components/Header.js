import React from 'react';
import {useState} from 'react';
import logo from '../images/logo.png';
import IconButton from "@material-ui/core/IconButton";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";


function Header(props) {
   
    const[input,setInput] = useState("");
   
    const onSearchSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit(input);
       
    }
    
    return (
       
            <Wrapper>
                  
                <LogoWrapper>
                    <IconButton>
                        <Link to="/">
                           <img src={logo} className="App-logo" alt="logo" />
                         </Link>
                    </IconButton>
                </LogoWrapper> 
               
                <SearchWrapper>
                    <SearchBarWrapper>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>  
                        <form>
                            <input  type="text" onChange={(e)=>setInput(e.target.value)}/>
                            <button type="submit" onClick={onSearchSubmit}></button>
                        </form>   

                    </SearchBarWrapper>  
                </SearchWrapper>  
            
                <FavoriteButton>
                    <Link to="/Favorites">Favorites
                    </Link>
                    
                   
                </FavoriteButton>  
                 
             
            </Wrapper>


    )
}

export default Header


const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height: 56px;
    padding: 12px 12px 4px 12px;
    background-color:white;
    color:black;
`
const LogoWrapper = styled.div`
    .App-logo{
    height:40px;
    cursor:pointer;
    }
`
const FavoriteButton = styled.div`
    display:flex;
    height:48px;
    min-width:123px;
    align-items:center;
    justify-content:center;
    border-radius:30px;
    cursor:pointer;
    background-color:rgb(17, 17, 17);

    a {
        text-decoration:none;
        color:white;
        font-weight:700;
    }
    :hover{
        background-color: rgb(60 59 59);;
        
    }
 

`
const SearchWrapper = styled.div`

   flex:1;
`
const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display:flex;
    height:48px;
    border-radius:40px;
    border:none;
    padding-left:10px;

    form{
        display:flex;
        flex:1;
    }

    form > input {
        background-color: transparent;
        border:none;
        width:100%;
        margin-left:5px;
        font-size:16px;

    }
    form > button {
        display:none;
    }
    input:focus {
        outline:none;
    }

`