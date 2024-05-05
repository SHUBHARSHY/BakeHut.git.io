import React, { useState } from 'react'
import "./MyAccount.css"
import Order from './ChildAccount/Order'
import Payment from './ChildAccount/Payment'
import Settings from './ChildAccount/Settings'
import Bake from './ChildAccount/Bake'
import Favourites from './ChildAccount/Favourites'
import Address from './ChildAccount/Address'

const MyAccount = () => {
    const [selectedComponent, setSelectedComponent] = useState('Order');
    const storedData = localStorage.getItem('myData');

    //for css property
    const [selectedButton, setSelectedButton] = useState('Order');

    const customerDetails = JSON.parse(storedData)
    // console.log(customerDetails)
    const handleComponentChange = (componentName) => {
      setSelectedComponent(componentName);
      setSelectedButton(componentName);
    };
if(!customerDetails)return




  return (
    <div className='upr-profile' >
    <div className='local-info'>
    <div>
   
    <h1 style={{color:"#808927",marginBottom:0}}>{customerDetails[0]?.name.toUpperCase()}</h1>
    <div style={{display:"flex",gap:"20px",color:"whitesmoke"}}>
    <p>9532911687</p>
    <p>{customerDetails[0]?.email}</p>
    </div>
    </div>
    <div className="edit-info-cover">
    <button className="edit-info-btn">Edit Profile</button>
    </div>
    </div>


    <div className="my-profile" >
    <div className='side-bar'>
    <h4 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}} onClick={() => handleComponentChange("Order")} className={selectedButton === 'Order' ? 'selected' : ''}>
    <iconify-icon icon="teenyicons:bag-alt-solid"  style={{color:"#535665",border:"1px solid",borderRadius:"50%",padding:"4px",fontSize:"smaller"}}></iconify-icon><span className='title'>Order History</span>
    </h4>
    <h4 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}} onClick={() => handleComponentChange("BakeOne")} className={selectedButton === 'BakeOne' ? 'selected' : ''}><iconify-icon icon="token:bake"  style={{color:"#535665",fontSize: "x-large",border:"1px solid",borderRadius:"50%"}}></iconify-icon><span className='title'>Bake One</span></h4>
    <h4 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}} onClick={() => handleComponentChange("Favourites")} className={selectedButton === 'Favourites' ? 'selected' : ''}><iconify-icon icon="mdi:heart" style={{color:"#535665",fontSize: "large",border:"1px solid",borderRadius:"50%",padding:"2px"}} ></iconify-icon><span className='title'>Favourites</span></h4>
    <h4 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}  onClick={() => handleComponentChange("Address")} className={selectedButton === 'Address' ? 'selected' : ''}><iconify-icon icon="mdi:address-marker" style={{color:"#535665",fontSize: "larger",border:"1px solid",borderRadius:"50%",padding:"2px"}} ></iconify-icon><span className='title'>Address</span></h4>
    <h4 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}} onClick={() => handleComponentChange("Payment")} className={selectedButton === 'Payment' ? 'selected' : ''}><iconify-icon icon="material-symbols:payments-sharp" style={{color:"#535665",fontSize: "larger",border:"1px solid",borderRadius:"50%",padding:"2px"}} ></iconify-icon><span className='title'>Payments</span></h4>
    <h4 style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}} onClick={() => handleComponentChange("Settings")} className={selectedButton === 'Settings' ? 'selected' : ''}><iconify-icon icon="material-symbols:settings" style={{color:"#535665",fontSize: "larger",border:"1px solid",borderRadius:"50%",padding:"2px"}} ></iconify-icon><span className='title'>Settings</span></h4>

    </div>

    <div className='dy-container' >
    {selectedComponent === 'Order' && <Order/>}
    {selectedComponent === 'BakeOne' && <Bake/>}
    {selectedComponent === 'Favourites' && <Favourites/>}
    {selectedComponent === 'Payment' && <Payment />}
    {selectedComponent === 'Address' && <Address />}
    {selectedComponent === 'Settings' && <Settings />}
    </div>
    
    </div>

    </div>
  )
}

export default MyAccount