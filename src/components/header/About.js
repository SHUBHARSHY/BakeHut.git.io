import { Outlet } from "react-router";
import "./About.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="about">
      <div className="about-container">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              {" "}
              Show My Profile
            </button>
          </Link>
        )}
      <Outlet />
      </div>
      <div>
        <div className='about-whole'>
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />{" "}
              <span>Tasty & Fresh Food</span>
            </h1>
            <h4>"Better you will feel if you eat a Bake<span style={{color:"#808927"}}>Hut</span> healthy meal"</h4>
          </div>
          <img className='about-right' src={require("../about/about-img/latte.png")} />
        </div>
        
<div className="dashes"></div>

          <div className='inner-bottom'>
            <img className='img-btm' src={require('../about/about-img/backimg.jpg')}/>
            <div className="bottom-details">
            <h2 className='btm-heading'>Bake<span style={{color:"#808927"}}>Hut</span> - Discover the best food & drinks</h2>
            <p className='about-btm'>BakeHut is an online and mobile food ordering system which we have developed for restaurant owners and food lovers. Through Foodring we are helping customers to discover the best restaurants in city. If you are restaurant owner, you can easily register your restaurant and upload restaurant menu to start receiving online orders through this fast growing portal without any cost.</p>
            </div>
          </div>
          <div className='inner-bottom'>
            <div className="bottom-details">
            <h2 className='btm-heading'>Vision</h2>
            <p className='about-btm'>For food lovers who want to order food from local restaurants online, the Food Ordering System will be an Internet-based application that will accept individual or group meal orders, process payments, and trigger delivery of the prepared meals to a designated location. For Restaurant owner who wants to take and grow their business online, with low budget can start their online restaurant business and get orders from many more customers.</p>
            </div>
            <img className='img-btm' src={require('../about/about-img/delivery.png')}/>
          </div>
        
      </div>
    </div>
  );
};

export default About;
