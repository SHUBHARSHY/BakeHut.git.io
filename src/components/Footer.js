// Footer component for footer section
import React from "react";
import './Footer.css'

const Footer = () => {
    return (
         <div className='footer'>
      Made with <img src={require('../images/heart.png')} className='footer-heart'/> by Shubham Meena <img src={require('../images/copyright.png')} className='footer-heart'/> 2023 BakeHut
    </div>
    );
  };
  
  export default Footer;