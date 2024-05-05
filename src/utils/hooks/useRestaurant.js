import React, { useState,useEffect } from 'react'
import { SwiggyMenu_API_URL } from '../../components/Contants';

const UseRestaurant = (id) => {
    const [restaurant, setRestaurant]=useState(null);
  const diningMenu = require("../hooks/diningMenu.json")
    useEffect(() => {
        getRestaurantinfo();
      }, []);
    
      async function getRestaurantinfo() {
  

    const newdata = diningMenu.find((product) => {
               return product.cards[2]?.card.card.info.id == id
              });
setRestaurant(newdata.cards)
        // const data = await fetch(SwiggyMenu_API_URL+id)
        // const json = await data?.json();
        // setRestaurant(json?.data?.cards);
      }


      return restaurant
  
}

export default UseRestaurant