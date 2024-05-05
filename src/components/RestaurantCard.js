
import React from "react";
import { IMG_CDN_URL } from "./Contants";
import './RestaurantCard.css'


const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  costForTwo,
  avgRating,
  availability
}) => {
  return (
    <div className="card">
      <img src={ IMG_CDN_URL + cloudinaryImageId} />
      <h3 className='name'>{name}</h3>
      <p className='cusine'>{cuisines.join(", ")}</p>
      <span className='details'>
        <h5 className='rating'
          style={
            avgRating < 4 ? { backgroundColor: "#db7c38" } : { color: "white" }
          }
          >
          <span className="material-symbols-outlined star">grade</span>
          {avgRating}
        </h5>
        {/* <div className='dot'>.</div> */}
        {/* <h5 className='distance'>{availability?.nextCloseTime}</h5> */}
        <div className='dot'>.</div>
        <h5 className='cost'>{costForTwo}</h5>
      </span>
          
      <div className='hr'></div>
      <div className='offer'><img src={require('../images/offers.png')} className='offer'/> 50% off | Use TRYNEW</div>
    </div>
  );
};

export default RestaurantCard;
