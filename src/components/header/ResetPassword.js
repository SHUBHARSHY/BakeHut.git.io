import React, { useState } from 'react';
import "./SignInModal.css"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';







const ResetPassword = () => {
const [password,setPassword]= useState('')
const navigate = useNavigate()
const {id,token}= useParams()
const URL='https://bakehutserver.onrender.com'
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      if ( password){
        const Datas = await axios.post(`${URL}/reset-password/${id}/${token}`,{password})
        
        alert(Datas.data.msg)
        

        navigate("/home")
   
      }
      else{
    
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
      <h2 className="In"> Update Password</h2>
      
      </div>
      <form className='signIn' onSubmit={handleSubmit}>
    <input className='input' type="password" placeholder='Enter New Password' onChange={(e)=>setPassword(e.target.value)} />
  
    <button className='sign-btn' >Update</button>
    </form>

      <hr style={{width:" 99%",
        color: "grey",
        margin: "20px 1px 20px 1px",}}/>
      
      </div>
      </div>
    </div>
  );
};

export default ResetPassword;

