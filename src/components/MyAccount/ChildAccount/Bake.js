import React from 'react'
import "./Bake.css"
const Bake = () => {
  return (
    <div className='bake-div'>
    <div className='bake-div-info'>
    <h2 style={{color:"#282c3f",fontWeight:"bold"}}>Bake One</h2>
    <div>
    <p style={{color:"#686b78",fontSize:"18px"}}>Get free delivery and extra discounts all across Swiggy.
    </p>
    <p style={{color:"#686b78",fontSize:"18px"}}>Your Bake One benefits can be availed only on the BakeHut App</p>
    </div>
    <div>
    <img className='apple-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv'/>
    <img className='play-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl'/>
    </div>
    </div>
    <div >
    <img className='bake-img'  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_660/swiggy_one/my_account_super'/>
    </div>
    </div>
  )
}

export default Bake