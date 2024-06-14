import { useEffect, useState } from "react";
import yelp from "../api/yelp";
 
export default ()=>{

    const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');
    
    const searchApi=async() => {
      console.log('Hi there!')
      try{
      const response = await yelp.get('/search',{
        params:{
            limit:50,
            term,
            location:'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err){
     setErrorMessage('Somethinh went wrong')
    }
  }

    useEffect(()=>{
      searchApi('pasta')
    },[searchApi,results,errorMessage])
}