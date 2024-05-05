import React from 'react'
import './Shimmer.css'

const Shimmer = () => {
  return (
    <div className='resturant-list'>

      <div className="shimmer-container">

<div className="shimmer-header"></div>
      <div className="shimmer-img"></div>
      </div>
        {Array(15).fill("").map((e,index)=>(
            <div key={index} className="Shimmer-card">
            <div></div>
            <h2></h2>
            <h3></h3>
            <h4></h4>
          </div>
            ))}
    </div>
  )
}

export default Shimmer




