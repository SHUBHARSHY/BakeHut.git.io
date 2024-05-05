import React from 'react'
import "./Order.css"
import { IMG_CDN_URL } from '../../Contants'


const Order = () => {

  const allOrder_local = localStorage.getItem("orderHistory")
const allOrder_json = JSON.parse(allOrder_local)
const allOrder = allOrder_json?.data?.allData
// console.log(allOrder)

// const result =allOrder.map((product)=>{
//   product.map((item)=>{
//     return item.items.name
//   })
// })
// console.log(result)

  return (

    <div className='order-sec'>
    {allOrder.length>0?(<div style={{width:"100%"}}>
      {allOrder.map((product)=>{
        return  product?.items.map((item)=>{

return(
  <div className='order-container'>
  
  <div style={{fontWeight:800,color:"#282c3f"}}>Order Placed on: {product?.date}</div>
  <hr style={{border:"none",borderTop:"1px solid #d5d9d9",width:"100%"}}></hr>
  <div className="Food-history" >
  <img className="cart-pic" src={IMG_CDN_URL + item?.imageId}/>
  <div className="order-details">
  <div className="order-item">{item?.name}</div>
  <div className='order-again'>
  <button className='add-btn'>Buy it again</button>
  <button className='add-btn'>View this Item</button>
  </div>
  </div>
  <div className="order-item">
  <p>
  Rs {item?.price/100}/-
  </p>
  </div>
  </div>
  </div>
)

        })
       
      
      })}
      </div>):(<div className='empty-order'>
      <div className='img-div'>
      <img className='order-img' src={require("../../../images/crousel-img/order.avif")}/>
      </div>
      <div className='order-text'>
      <h3>No Order</h3>
      <p style={{margin:0}}>You haven't placed any order yet. </p>
      </div>
      </div>)}
    
    </div>
  )
}

export default Order