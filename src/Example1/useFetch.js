import React,{useEffect,useState} from 'react'

function useFetch(url) {
    const[data,setData]=useState(null);

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch((err)=>console.log(err))
  },[url])

  return [data];
   
}

export default useFetch;
