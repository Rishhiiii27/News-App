import React,{useState,useEffect, useRef} from 'react';
import News from './News';
import './News.css'

function Newsapp() {
    const[query,setquery]=useState('india');

    const apikey='3aed244451234b9f90e5e6386c5db91d';
    const apiurl=`https://newsapi.org/v2/everything?q=${query}&from=2023-07-21&sortBy=publishedAt&apiKey=${apikey}`

    const[news,setnews]=useState([]);
   
    useEffect(()=>
    {
        fetchdata();
    },[query])

    async function fetchdata()
    {
        try{
        const response=await fetch(apiurl);
        
        const data=await response.json();
       
        setnews(data.articles);
    }
   catch(e)
{
    console.log(e,'error occured')
}
}
const queryinputref=useRef(null);

function handlesubmit(e)
{
    e.preventDefault();
    const queryvalue=queryinputref.current.value;
    setquery(queryvalue);
}

  return (
    <div >
         <form >
          <div className='heading-style'>
                <p>DAILY NEWS 4U</p>
               <input placeholder='write here' type='text' ref={queryinputref}/>
               <button className='newsapp-btn' onClick={handlesubmit}>Search</button>
         </div>
         <div className='main-card' onSubmit={handlesubmit}>
                {news.map(news=>{
                return  <News key={news.url} news={news}/>
               })}   
       </div>
       </form>
  </div>
  )
}

export default Newsapp