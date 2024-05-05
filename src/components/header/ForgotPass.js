import React, { useState } from 'react';
import "./SignInModal.css"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import {  addUser } from '../../utils/Userslice';







const ForgotPassword = () => {
const navigate = useNavigate()
const [email,setEmail]= useState('')
const [errMsg,setErrMsg] = useState('')
const URL ='https://bakehutserver.onrender.com'

    const dispatch = useDispatch()
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      if ( email){
        const Datas = await axios.post(`${URL}/forgotPassword`,{email})
        
        
        // const ans = Datas.data.success
        
        console.log(Datas)
        // if(ans==="success"){
        // //   const customerInfo = Datas.data.data
        // //   const customerAddress = Datas.data.address
        //   // const orderHistory = Datas.data.allData

        //   navigate("/home")
        // //   console.log(customerInfo)
        // //   const StringAddress = JSON.stringify(customerAddress)
        // //      localStorage.setItem("storedAddress",StringAddress)
        // //      const stringOrder = JSON.stringify(Datas)
        // //      localStorage.setItem("orderHistory",stringOrder)
        
        //     //  dispatch(addUser(customerInfo))
        
        // }else{
        // //   const msg = Datas.data
        // //   setErrMsg(msg)
        // }
      }
      else{
        setErrMsg("fill all required fields")
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className="modals">
      <div className="modal-contents">
      <div className='inr-Modal'>
      <div className='upr-bar'>
      <h1 className="In"> Forgot Password</h1>
      
      </div>
      <form className='signIn' onSubmit={handleSubmit}>
    <input className='input' type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    <p style={{margin:"0"}}> {errMsg}</p>
    <button className='sign-btn' > Send</button>
    </form>

      <hr style={{width:" 99%",
        color: "grey",
        margin: "20px 1px 20px 1px",}}/>
      
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

