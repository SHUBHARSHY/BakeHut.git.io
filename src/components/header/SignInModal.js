import React, { useState } from 'react';
import "./SignInModal.css"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import {  addUser } from '../../utils/Userslice';







const SignInModal = ({ handleClose, setToggle,toggle }) => {
const navigate = useNavigate()
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')
const [errMsg,setErrMsg] = useState('')

const URL ='https://bakehutserver.onrender.com'
    const dispatch = useDispatch()
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
      if ( email && password){
        const Datas = await axios.post(`${URL}/login`,{email,password})
        
        
        const ans = Datas.data.success
        
        console.log(Datas.data)
        if(ans==="success"){
          const customerInfo = Datas.data.data
          const customerAddress = Datas.data.address
          // const orderHistory = Datas.data.allData

          navigate("/home")
          console.log(customerInfo)
          const StringAddress = JSON.stringify(customerAddress)
             localStorage.setItem("storedAddress",StringAddress)
             const stringOrder = JSON.stringify(Datas)
             localStorage.setItem("orderHistory",stringOrder)
            handleClose()
             dispatch(addUser(customerInfo))
        
        }else{
          const msg = Datas.data
          setErrMsg(msg)
        }
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
      <h1 className="In"> Login</h1>
      <div className='close-x' onClick={handleClose}>
      <span className="material-symbols-outlined">close</span>
      </div> 
      </div>
      <form className='signIn' onSubmit={handleSubmit}>
    <input className='input' type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    <input className='input' type="password" placeholder='******' onChange={(e)=>setPassword(e.target.value)} />
    <p style={{margin:"0"}}> {errMsg}</p>
    <button className='sign-btn' > Sign Up</button>
    </form>

    <div>
    <Link to="forgotPassword"  style={{cursor:"pointer",textDecoration:"none",color:"#808927"}} onClick={handleClose}> Forgot Password ?</Link>
    </div>
      <hr style={{width:" 99%",
        color: "grey",
        margin: "20px 1px 20px 1px",}}/>
      <div className='switch'>
      <span style={{color:"black"}}>New to Swiggy ?</span><span onClick={()=>setToggle(!toggle)}>create an account</span>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SignInModal;

