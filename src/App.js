import Header from './components/Header.js';
import Mainboard from './components/Mainboard.js';
import './App.css';
import Favorites from "./components/Favorites.js";
import {BrowserRouter as Router,Switch ,Route} from "react-router-dom"
import giphy from "././api/giphy.js";
import React, { useState,useEffect } from 'react';
function App() {





  

  const [gifs, setNewGifs] = useState([])

  const getGifs = (term) => {

   return giphy.get("https://api.giphy.com/v1/gifs/search" , {
     params: { 
       q: term }
   })
  };



  
  const onSearchSubmit = (term) => {
   
    getGifs(term).then((res)=>{
      let results = res.data.data;
   
      let newGifs = [
        ...results,
        ...gifs,
      ]

      newGifs.sort(function(a, b) {
        return 0.5 - Math.random();

      });
      setNewGifs(newGifs);
    })
  }

  

  return (

    <Router>
      <div className="app">
          <Switch>
              <Route  path="/favorites">
                  
                   
                 
                   <Header onSubmit={onSearchSubmit}/>
                   <Favorites />
           
                  
                  
              </Route>
              <Route exact path="/">
                <Header onSubmit={onSearchSubmit}/>
                <Mainboard gifs={gifs}/>
              </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
