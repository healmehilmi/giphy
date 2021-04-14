
import axios from "axios";


export default axios.create({
    baseUrl:"https://api.giphy.com/v1/gifs/",
    params: {
      
       api_key: "your api key",
       limit:30,
       
    }

})




     
  



    
    
   


