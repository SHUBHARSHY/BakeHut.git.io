import React, { useState } from 'react';
import axios from 'axios'
import { checkValidData } from '../../utils/Validate';
import "./SignUpModal.css"

const SignUpModal = ({ handleClose, setToggle,toggle }) => {
const [checkName,setCheckName]= useState('')
const [checkEmail,setCheckEmail]= useState('')
const [checkPassword,setCheckPassword]= useState('')
const [errMessage, setErrMessage] = useState(null);

const handleSubmit=async (e)=>{
  e.preventDefault()
  try {
    const name = checkName
    const email = checkEmail
    const password = checkPassword
    const message = checkValidData(email,password,name)
   const URL ='https://bakehutserver.onrender.com'
    setErrMessage(message)
    if(message) return
  

    if (name && email && password){
      const data = await axios.post(`${URL}/register`,{name,email,password})
     setToggle(!toggle)
      console.log(data)
    }
    else{
      alert("Fill all the required fields")
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
    <h1 className="In">Sign Up</h1>
    <div className='close-x' onClick={handleClose}>
    <span className="material-symbols-outlined">close</span>
    </div> 
    </div>
    <form className='signIn' onSubmit={handleSubmit}>
    <input className='input' type="text" placeholder='Username' onChange={(e)=>setCheckName(e.target.value)}/>
    <input className='input' type="text" placeholder='Email' onChange={(e)=>setCheckEmail(e.target.value)} />
    <input className='input' type="password" placeholder='******' onChange={(e)=>setCheckPassword(e.target.value)} />
    <p style={{margin:"0"}}>{errMessage}</p>
    <button className='sign-btn' > Sign Up</button>
    </form>
    <hr style={{width:" 99%",
      color: "grey",
      margin: "20px 1px 20px 1px",}}/>
    <div className='switch'>
    <span style={{color:"black"}}>Already have an account?</span><span onClick={()=>setToggle(!toggle)}>Login</span>
    <p className='google'>  <img style={{width:"20px"}} src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'/> Sign Up With Google </p>
    </div>
    </div>
    </div>
  </div>
  );
};

export default SignUpModal;

