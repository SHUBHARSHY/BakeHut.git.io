import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../utils/Cartslice";
import Fooditems from "../../utils/Fooditems";
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { IMG_CDN_URL } from "../Contants";
import CurrentOrder from "./CurrentOrder";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);;
  const dispatch = useDispatch();
  const [address,setAddress] = useState(true)
  const [addDetails,setAddDetails] = useState({
  Name:'',
  Address:'',
  pinCode:'',
  city:''
})
const [fetchAddress,setFetchAddress]= useState(null)
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [toggle,setToggle]= useState(true)
  const [showHeading, setShowHeading] = useState(false);
 
  const storedData = localStorage.getItem('myData');
  const customerDetails = JSON.parse(storedData)
const URL='https://bakehutserver.onrender.com'

  const handleclearcart = () => {
    dispatch(clearCart());
  };



if (fetchAddress){
  const StringAddress = JSON.stringify(fetchAddress)
  localStorage.setItem("storedAddress",StringAddress)
}
const binaryAddress = localStorage.getItem("storedAddress")
const storedAddress = JSON.parse(binaryAddress)

const openSignInModal = () => {
  setSignInModalOpen(true);
};

const closeSignInModal = () => {
  setSignInModalOpen(false);
};

  let total = 0;
  let Charges = 39;
  let Delivery = 19;
  // const store = useSelector((store)=> store)
let data = [...cartItems,{
  name:"GST",price:Delivery*100},{name:"Delivery Charges",price:Charges*100}]

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

const OrderHistory =async ()=>{
  const {email} = customerDetails[0]
  if(cartItems.length>0){
    const Mydata = await axios.post(`${URL}/orderHistory`,{cartItems,email})
    const StringAddress = JSON.stringify(Mydata)
    localStorage.setItem("orderHistory",StringAddress)
    console.log(Mydata)
  }else{
    console.log("order history not found")
  }

}








useEffect(() => {
  const timerValue = sessionStorage.getItem('timerValue');
  const startTime = sessionStorage.getItem('startTime');

  if (timerValue && startTime) {
    const elapsedTime = Date.now() - parseInt(startTime);
    if (elapsedTime < parseInt(timerValue)) {
      setShowHeading(true);
      setTimeout(() => {
        setShowHeading(false);
      }, parseInt(timerValue) - elapsedTime);
    } else {
      setShowHeading(false);
      sessionStorage.removeItem('timerValue');
      sessionStorage.removeItem('startTime');
    }
  }
}, []);




  const handlePay = async () => {
    // Logic to handle payment based on selectedOption
    // For demonstration purposes, just routing to success page
    
    if(selectedOption === "COD"){

      handleclearcart()

      setShowHeading(true);
    const timerValue =  10000; // 30 minutes in milliseconds
    sessionStorage.setItem('timerValue', timerValue);
    sessionStorage.setItem('startTime', Date.now().toString());
    setTimeout(() => {
      setShowHeading(false);
      sessionStorage.removeItem('timerValue');
      sessionStorage.removeItem('startTime');
    }, timerValue);

      OrderHistory()
    }else if(selectedOption === "Debit Card"){

      setShowHeading(true);
      const timerValue = 30 * 60 * 1000; // 30 minutes in milliseconds
      sessionStorage.setItem('timerValue', timerValue);
      sessionStorage.setItem('startTime', Date.now().toString());
      setTimeout(() => {
        setShowHeading(false);
        sessionStorage.removeItem('timerValue');
        sessionStorage.removeItem('startTime');
      }, timerValue);

      OrderHistory()
      const stripe = await loadStripe("pk_test_51P2F0WSDWHs1tezgFhEToWSdr0mCAmIV0UlqXjOaHTZBDFHMxU0quoVBTiHR3wyJtdYpfFqg5bd3i02EoAeHccqa0063oGWUgp")
const body ={
  products: data
}
const headers= {
  "Content-Type":"application/json"
}
const response = await fetch(`${URL}/api/create-checkout-session`,{
  method:"POST",
  headers:headers,
  body:JSON.stringify(body)
})

const session = await response.json()

const result = stripe.redirectToCheckout({
  sessionId:session.id
})

if(result.error){
  console.log(result.error)
}
     
    }else if(selectedOption === "PhonePe"){
      const body ={
        products: cartItems
      }
        let res = await axios.post(`${URL}/order`, body).then(res => {

            console.log(res)
            if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
                window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
            }
        })
            .catch(error => {
                console.error(error);
                alert("PhonePe server not connected")
            });

 





    }
    else if(selectedOption === "PayTm"){
      alert("service unavailable")
    }
    else{
      alert("choose payment Options")
    }
  };
 
const handleSubmit =async (e)=>{
  e.preventDefault()

  try {
   
    const {Name,city,Address,pinCode}= addDetails
    const {email} = customerDetails[0]
    console.log(email)
    console.log(Name.length>0 && city.length>0 && Address.length>0 && pinCode.length>0)
if(Name.length>0 && city.length>0 && Address.length>0 && pinCode.length>0){
  const Mydata = await axios.post(`${URL}/registerAddress`,{Name,Address,pinCode,city,email})
  setFetchAddress(Mydata.data.data)
  
}else{
  alert("fill details first")
}
  } catch (error) {
    console.log(error)
  }

}

const lableStyle = { 
  backgroundColor: '#fcf5ee',
  padding: "3px 100px 3px 0px",
 border:"1px solid #fbd8b4",
 borderRadius:"5px",
 color:"#565959"
 
}



  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        

        

        <div style={{background:"white"}}>

        {showHeading ? (
          <CurrentOrder/>
        ) : (<div style={{paddingBottom:"20px"}}>
          <img
            alt="Empty"
            src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
           
            className="empty-img"
          />
          <div className="cart-text">Your cart is empty </div>
          <div className="cart-des">
            You can go to home page to view more restaurants{" "}
          </div>
          <Link
            to="/home"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="btn-home">SEE RESTAURANTS NEAR YOU</div>
          </Link>
          </div>
        )}

          
        </div>
      ) : (
        <div>

        {customerDetails ? <div>
          {storedAddress?<div className="location-container" style={{cursor:"pointer"}}>
<div style={{display:"flex",marginBottom:"30px"}}>
<iconify-icon icon="carbon:location"  style={{color:"red",fontSize:"25px"}}></iconify-icon>
<h2 style={{color:"#282c3f",margin:0}}> Select delivery address</h2>
</div>
<div className="location-inr-card">
<h3 style={{marginTop:0}}>Add New Address</h3>
<div className="my-address">
<p style={{margin:0,color:"#93959f"}}>{storedAddress.Name}</p>
<p style={{margin:0,color:"#93959f"}}>{storedAddress.Address}</p>
<div style={{display:"flex",gap:"10px",color:"#93959f"}}>
<span style={{margin:0,color:"#93959f"}}>{storedAddress.pinCode}</span>
<span style={{margin:0,color:"#93959f"}}>{storedAddress.city}</span>
</div>
</div>
<button className="add-btn">Add New</button>
</div>
</div>:  

<div className="location-container">

<h2 style={{color:"#282c3f"}}> Select delivery address</h2>
{!address?(
  <div className="location-inr-card">
<iconify-icon icon="material-symbols:close"  style={{fontSize:"18px", cursor:"pointer",marginLeft:"190px",border:"1px solid #d4d5d9",color:"#d4d5d9"}} onClick={()=>{
  setAddress(!address)
  setAddDetails({
    Name:'',
    Address:'',
    pinCode:'',
    city:''
  })
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

  
  </div>):(<div className="location-inr-card" >
  <div className="location">
  <iconify-icon icon="carbon:location"  style={{color:"red"}}></iconify-icon>
  <h4 style={{margin:0}}>Add New Address</h4>
  </div>
  <button className="add-btn" onClick={()=>setAddress(!address)}>Add New</button>
  </div>)}

</div>}
          </div> :null}

 <div className="empty-cart">
          <button className="add-btn" onClick={() => handleclearcart()}>
            Clear Cart
          </button>

          <div className="Fooditems">
            <div>Item</div>
            <div>Description</div>
            <div>Price</div>
            <div>Remove</div>
          </div>
          <hr />
          {cartItems.map((item) => {
            var { price } = item;
            total = total + price;
            return <Fooditems key={item.id} {...item} />;
          })}
          <hr />
          <div className="order-container">
            <div></div>
            <div></div>
            <div className="My-order">
              <div className="Bill-deatils">Bill Details</div>
              <div className="Food-container">
                <div className="subtotal">Item Total:</div>
                <div className="subtotal">Rs {total / 100}/-</div>
              </div>
              <div className="Food-container">
                <div className="subtotal">Delivery partner fee:</div>
                <div className="subtotal">Rs {Delivery}/-</div>
              </div>
              <div className="line"></div>
              <div className="Food-container">
                <div className="subtotal">Govt Taxes & Other Charges:</div>
                <div className="subtotal">Rs {Charges}/-</div>
              </div>
              <hr />
              <div className="Food-container">
                <div className="totalorder">TO PAY:</div>
                <div className="totalorder">
                  Rs {total / 100 + Charges + Delivery}/-
                </div>
              </div>
            </div>
            
          </div>
             
{(customerDetails)?
  <div>
  <button className="placeorder" onClick={() => {
    if(storedAddress){

      setShowModal(true)
    }else{
      alert("Dilivery Address Needed")
    }
  
  }}>Checkout</button>
{showModal && (
  <div className="modal">
      <div className="modal-content">
      <div className="pay-head">
      <p className="close" onClick={() => setShowModal(false)}>
      &times;
      </p>
      <h2 style={{marginTop:"40px"}}>Select Payment Option</h2>
      </div>
        <form className="pay-form">
          <label style={selectedOption === 'COD' ? lableStyle : {}}>
            <span style={{fontWeight:"bolder",paddingRight: "12px"}}>COD</span>
            <input
              type="radio"
              value="COD"
              checked={selectedOption === 'COD'}
              onChange={() => setSelectedOption('COD')}
            />
            Cash on Delivery
          </label>
          <br />
          <label style={selectedOption === 'Debit Card' ? lableStyle : {}}>
          <span><img src={require("../../images/rupay.png")} style={{width:"40px"}}/></span>
            <input
              type="radio"
              value="Debit Card"
              checked={selectedOption === 'Debit Card'}
              onChange={() => setSelectedOption('Debit Card')}
            />
            Credit or Debit Card
          </label>
          <br />
          <label style={selectedOption === 'Paytm' ? lableStyle : {}}>
          <span><img src={require("../../images/paytm.png")} style={{width:"40px"}}/></span>
           
            <input
              type="radio"
              value="Paytm"
              checked={selectedOption === 'Paytm'}
              onChange={() => setSelectedOption('Paytm')}
            />
            Pay with Paytm
          </label>
          <br />
          <label style={selectedOption === 'PhonePe' ? lableStyle : {}}>
          <span><img src={require("../../images/phonepe.png")} style={{width:"17px",padding:"0px 11px 0px 12px"}}/></span>
            <input
              type="radio"
              value="PhonePe"
              checked={selectedOption === 'PhonePe'}
              onChange={() => setSelectedOption('PhonePe')}
            />
            Pay with PhonePe
          </label>
          <br />
          <button className="payorder" type="button" onClick={handlePay}>
            Place your order
          </button>
        </form>
      </div>
    </div>
)}</div>:<div className="add-btn" onClick={openSignInModal}>Sign In</div>}



      {signInModalOpen && ( toggle? <SignInModal handleClose={closeSignInModal} toggle={toggle} setToggle={setToggle}/> : <SignUpModal handleClose={closeSignInModal} toggle={toggle} setToggle={setToggle}/>)}
       </div>
       </div>
      )}
    </div>
  );
};

export default Cart;
