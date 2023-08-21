import React from 'react'
import './News.css'
import {Card} from 'antd'

function News({news}) {
  return (
    <>
    <Card>
    <div className='news-card'>
        <img src={news.urlToImage} alt={news.title}/>
        <h2>{news.title}</h2>
        <button className='news-btn' onClick={()=> window.open(news.url)}>Read More</button>
        
    </div>
    </Card>
    </>
  )
}

export default News