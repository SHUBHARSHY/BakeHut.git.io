import React, {  useState } from 'react'
import './Address.css'
import axios from 'axios'
const Address = () => {
  const binaryAddress = localStorage.getItem("storedAddress")
    let storedAddress = JSON.parse(binaryAddress)


  const [toggle,settoggle]= useState(false)
  const[address,setAddress]=useState(false)
  const[addDetails,setAddDetails]=useState(storedAddress)
  const URL = 'https://bakehutserver.onrender.com'



async function handleSubmit(e){
  e.preventDefault()
  const Mydata = await axios.post(`${URL}/updateAddress`,{addDetails})
  if(Mydata.data){
   const user =  JSON.stringify(Mydata.data)
    localStorage.setItem("storedAddress",user)
    settoggle(!toggle)
    
  }
}



async function handleRemove(){
  const delData = await axios.post(`${URL}/removeAddress`,{addDetails})
  localStorage.removeItem("storedAddress")
  storedAddress =null
  setAddress(!address)
}

  return (
    <div>
{storedAddress?( toggle?(
  <div className="location-inr-card">
<iconify-icon icon="material-symbols:close"  style={{fontSize:"18px", cursor:"pointer",marginLeft:"190px",border:"1px solid #d4d5d9",color:"#d4d5d9"}} onClick={()=>{
 settoggle(!toggle)
}}></iconify-icon>
<h3>Save delivery address</h3>
<div class="wrapper">
<form onSubmit={handleSubmit}>
<div className="input-cover">
<input placeholder="Name" className="add-input"  required type="text" value={addDetails.Name} onChange={(e)=>setAddDetails({ ...addDetails, Name: e.target.value })} />
</div>
<div className="input-cover">
<input placeholder="Street Address" className="add-input" type="text"   required value={addDetails.Address}  onChange={(e)=>setAddDetails({...addDetails,Address:e.target.value})}  />

</div>
<div className="input-cover">
<input placeholder="Postal Code" className="add-input" required value={addDetails.pinCode}  onChange={(e)=>setAddDetails({...addDetails,pinCode :e.target.value})} />
</div>
<div className="input-cover">
<input placeholder="City" className="add-input" required type="text" value={addDetails.city}  onChange={(e)=>setAddDetails({...addDetails,city :e.target.value})} />
</div>
<div>

</div>
<button className="add-btn" >Save Address</button>
</form>
</div>

  
  </div>):( <div>

    <h2 style={{color:"#282c3f"}}>Manage Address</h2>
    <div className='MyAddress'>

    <div style={{display:"flex"}}>
  <div className='icon'>
  <iconify-icon icon="material-symbols-light:home-outline"  style={{color:"#535665",fontSize:"xx-large"}}></iconify-icon>
  </div>
  
  <div className='add-details'>
  <h3 style={{margin:0,color:"#3d4152"}}>Home</h3>
    <div>
  
    <h3 className='add-margin'>{storedAddress.Name}</h3>
    </div>
    
    <div>
   
    <h4 className='add-margin'>{storedAddress.Address}</h4>
    </div>
    
    <div>
  
    <p className='add-margin'>{storedAddress.pinCode}</p>
    </div>
    
    <div>
  
    <p className='add-margin'>{storedAddress.city}</p>
    </div>
    </div>
    </div>

    <div className='address-btn'>
    <button onClick={()=>settoggle(!toggle)} className='add-btnn'>Update Address</button>
    <button onClick={()=>handleRemove()} className='add-btnn'>Remove Address</button>
    </div>
  
    </div>
  
    </div>) 
 
):( <div className='no-address'>
  
<img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_252/NoSavedAddress_ttsdqs'/>
<div className='no-text'>
<h4>Can't find a door to knock</h4>
<p>You don't have an address to deliver.</p>
</div>
  </div>)}
   
    </div>
  )
}

export default Address