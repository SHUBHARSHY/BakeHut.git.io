import React, { useState } from 'react'
import './Mobile.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../utils/Userslice'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

const Mobile = ({isOpen,setIsopen}) => {

  const [signInModalOpen, setSignInModalOpen] = useState(false);
  
  const [toggle,setToggle]= useState(true)
  const navigate = useNavigate()
const dispatch = useDispatch()


const openSignInModal = () => {
  setSignInModalOpen(true);
};
const closeSignInModal = () => {
  setSignInModalOpen(false);
};

  const handleSignOut = ()=>{
    dispatch(clearUser([])); // Clear user data from Redux store
    localStorage.removeItem("myData"); // Clear user data from localStorage
    localStorage.removeItem("storedAddress"); // Clear user data from localStorage
    localStorage.removeItem("orderHistory"); // Clear user data from localStorage
    navigate("/home"); // Navigate to home page
   }


  const storedData = localStorage.getItem('myData');
   const customerDetails = JSON.parse(storedData)
  return (
    <div>

<div className='mobile'>
        <div className='close-icon' onClick={()=> setIsopen(!isOpen)}>
        <span className="material-symbols-outlined">close</span>
        </div> 
        <div className='mobile-option'>
        <div className='mobile-options'>
          
          <Link to="/home" onClick={()=> setIsopen(!isOpen)} className='link' >
              <li className="le">Home</li>
            </Link>
      </div>

      <div className='mobile-options'>
          
          <Link to="/about" onClick={()=> setIsopen(!isOpen)} className='link' >
              <li className="le">About</li>
            </Link>
      </div>

      <div className='mobile-options'>
          
          <Link to="/contact" onClick={()=> setIsopen(!isOpen)} className='link'  >
              <li className="le">Contact</li>
            </Link>
      </div>

      <div className='mobile-options'>
      <div >

      {(customerDetails)?<Link to="/my-account" className="li" style={{fontWeight:"700",fontSize:"x-large"}}>
      <div class="paste-button">
<li class="login-button">{customerDetails[0].name}</li>
<div class="dropdown-content">
<a id="top" href="#" onClick={(e) => {
  e.preventDefault(); // Prevent default link behavior
  handleSignOut(); // Handle sign-out action
}}>Log Out</a>

</div>
</div>

    </Link> :<li className="le" onClick={openSignInModal}>Sign In</li>} 
       </div> 
         
      </div>
        </div>
        {signInModalOpen && ( toggle? <SignInModal handleClose={closeSignInModal} toggle={toggle} setToggle={setToggle}/> : <SignUpModal handleClose={closeSignInModal} toggle={toggle} setToggle={setToggle}/>)}
        
    </div>
    </div>
  )
}

export default Mobile