import React from 'react'
import "./Favorites.css"
const Favourites = () => {
  return (
    <div className='order-sec'>
    
    <div className='empty-order'>
    <div className='img-div'>
    <img className='order-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87'/>
    </div>
    <div className='order-text'>
    <h3>No Order</h3>
    <p style={{margin:0}}>No Favourates to 
    add. </p>
    </div>
    </div>
    </div>
  )
}

export default Favourites