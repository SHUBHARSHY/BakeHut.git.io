import React from 'react'
import { IMG_CDN_URL } from '../Contants';

const CurrentOrder = () => {

    const currentOrder = localStorage.getItem('orderHistory');
const NewCurrentOrder= JSON.parse(currentOrder)
console.log(NewCurrentOrder)
if(!NewCurrentOrder?.data?.data[0]?.items){
     return (
        <div style={{display:'flex',flexFlow:'column',justifyContent:"center",alignItems:"center"}}>
        <div>
        <img style={{ width:"150px"}} src={require("../../images/delivery.png")}/>
        </div>
        <h2 style={{color:"#535665"}}>At your DoorSteps in 30 Mins</h2>
        </div>
     ) 
}else{
    return (
        <div>{NewCurrentOrder.data?.data.map((product)=>{
    
           
    
           return product?.items?.map((item)=>{
             return(<div>
               <div style={{fontWeight:800,color:"#282c3f"}}>Comming at your door steps in 30 min</div>
               <hr style={{border:"none",borderTop:"1px solid #d5d9d9",width:"100%"}}></hr>
               <div className="Food-history" >
               <img className="cart-pic" src={IMG_CDN_URL + item.imageId}/>
               <div className="order-details">
               <div className="order-item">{item.name}</div>
               <div className='order-again'>
               </div>
               </div>
               <div className="order-item">
               <p>
               Rs {item.price/100}/-
               </p>
               </div>
               </div>
               </div>
             )
           })
           
         })}</div>
      )

}
 
}

export default CurrentOrder