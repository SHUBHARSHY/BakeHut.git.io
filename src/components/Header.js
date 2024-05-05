import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { Link} from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import {  useDispatch, useSelector } from "react-redux";
import Mobile from "./header/Mobile";
import SignInModal from "./header/SignInModal";
import SignUpModal from "./header/SignUpModal";
import {useNavigate} from "react-router-dom"
import { clearUser } from "../utils/Userslice";
// Title component for display logo
const Title = () => (



  <a href="/">
    <img className="logo" src={logo} alt="Food Fire Logo" />
  </a>
);

const Header = () => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [toggle,setToggle]= useState(true)
  const navigate = useNavigate()
const dispatch = useDispatch()
  
  


   const userData = useSelector(Store=>Store.user.items)
   if(userData.length>0){
     localStorage.setItem('myData',JSON.stringify(userData))
   }

   const handleSignOut = ()=>{
    dispatch(clearUser([])); // Clear user data from Redux store
    localStorage.removeItem("myData"); // Clear user data from localStorage
    localStorage.removeItem("storedAddress"); // Clear user data from localStorage
    localStorage.removeItem("orderHistory"); // Clear user data from localStorage
    navigate("/home"); // Navigate to home page
   }
   const storedData = localStorage.getItem('myData');
   const customerDetails = JSON.parse(storedData)

   

  const openSignInModal = () => {
    setSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };


  const isonline = useOnline();

  const cartItems = useSelector((Store) => Store.cart.items);
  console.log(cartItems);

  const [isOpen,setIsopen]= useState(false)

  return (
    <div className="header">
      <Title />

      <div className="upr-nav-items">
        <div className="nav-items">
          <ul>
            <Link to="/home" className="li">
              <li className="le">Home</li>
            </Link>
            <Link to="/about" className="li">
              <li className="le">About</li>
            </Link>
            <Link to="/contact" className="li">
              <li className="le">Contact</li>
            </Link>

           <div className="li">

          {(customerDetails)?<Link to="/my-account" className="li">
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
        
            
          </ul>
          {signInModalOpen && ( toggle? <SignInModal handleClose={closeSignInModal} toggle={toggle} setToggle={setToggle}/> : <SignUpModal handleClose={closeSignInModal} toggle={toggle} setToggle={setToggle}/>)}
        </div>


<div className="online-cart">

        <Link to="/cart" className="cart">
              <li className="in-cart">
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartItems.length === 0 ? (
                  <span className="cart-length"></span>
                ) : (
                  <span className="cart-length">{cartItems.length}</span>
                )}
              </li>
            </Link>

        <p className="on-off" >
              {isonline ? (
                <img
                  src="https://img.icons8.com/parakeet/48/null/online.png"
                  style={{ height: "17px", width: "17px" }}
                />
              ) : (
                <img
                  src={require("../images/offline.png")}
                  style={{ height: "17px", width: "17px" }}
                />
              )}
            </p>

      <div className="mobile-menu">
          <div className="open-btn" onClick={()=>setIsopen(true)}>
          <span className="material-symbols-outlined">menu</span></div>
          {isOpen&& <Mobile isOpen={isOpen} setIsopen={setIsopen}/>}
        </div>
      </div>
</div>


    </div>
  );
};

export default Header;





