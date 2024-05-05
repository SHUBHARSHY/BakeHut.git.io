
import React from 'react'
import { useDispatch } from 'react-redux'
import { IMG_CDN_URL } from '../components/Contants'
import { removeItem } from './Cartslice'
import './Fooditems.css'

const Fooditems = ({name,imageId,price,}) => {
 const remove = useDispatch()

 const deleteitem = (name) =>{
     remove(removeItem(name))
 }

  return (
    <div className="Fooditems">
        <img className="cart-photo"src={IMG_CDN_URL + imageId}/>
        <div>{name}</div>
        <div>Rs {price/100}/-</div>
        <span style={{color:"red",cursor: "pointer"}}className="material-symbols-outlined" onClick={()=>deleteitem(name)}>delete</span>
</div>
  )
}

export default Fooditems