import React, {useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import "./Body.css"
import { Link } from 'react-router-dom'
import filterData from '../utils/Helper'
import useSwiggy from '../utils/hooks/useSwiggy'
import useOnline from '../utils/hooks/useOnline'
import { SwiggyRestaurant_API_URL } from './Contants'
import NoInternetConnection from './error/NoInternetConnection'

const Body = () => {

    const [searchInput,setsearchInput] = useState("");
    const AllRestaurant = useSwiggy()
    const [FilteredRestaurant,setFilteredRestaurant] = useState();

 console.log(FilteredRestaurant)

    useEffect(()=>{
//API call

getRestaurant()
    },[])

    async function getRestaurant(){
        // const data =await fetch(SwiggyRestaurant_API_URL)
        // const json = await data?.json()
        const json =require("../utils/hooks/mydining.json")
        
    console.log(json)
    const result1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    const result2 =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(result1)
    console.log(result2)
        setFilteredRestaurant(result2);      
    }

    const isonline=useOnline();

if (!setFilteredRestaurant)return

    if(!isonline){
return <NoInternetConnection/>
    }
    

    //conditional rendering

    // if (!AllRestaurant) return null;
    
    // if (FilteredRestaurant?.length === 0)
    // return <h1>No Restaurant Matches your Filter!!</h1>

  return AllRestaurant?.length=== 0 ? (

    <>
    <div className='search-container'>

<div className='search-input'>
<input className="input" type='text'  placeholder="Search for restaurants..." value={searchInput} onChange={(e)=>{
    setsearchInput(e.target.value);}}/>
    <span className="material-symbols-outlined" onClick={()=>{
        const data= filterData(searchInput,AllRestaurant);
        setFilteredRestaurant(data);
      }}>
search
</span>
    </div>
    </div>
  <Shimmer/>
  </>
  ) :(
      <div className="parent-container">


                  <div className="restaurant-list">
      <div className='search-container'>

          <div className='search-input'>
          <input className="input" type='text'  placeholder="Search for restaurants..." value={searchInput} onChange={(e)=>{
              setsearchInput(e.target.value);}}/>
              <span className="material-symbols-outlined" onClick={()=>{
                  const data= filterData(searchInput,AllRestaurant);
                  setFilteredRestaurant(data);
                }}>
          search
          </span>
              </div>
          
          
      </div>



<div className='top-heading'>
      <h1 className='heading'>Mouth watering Indian cuisine</h1>
    <div className='defination'>Indian cuisine is the best kind of takeout for a reason. Take your pick from oriental favourites nearby.</div>
</div>


<div className="imgcrousel">
    <div className="imgslider">
    </div>
</div>

<div className='middle-heading'>
    <h2 className='top-results'>15 Restaurant to explore</h2>

    <div className='top-table' >
        <div className="Chevron"></div>
        <ul className='table' >
        
            <li className='filters'>Relevance</li>
            <li className='filters'>Delivery Time </li>
            <li className='filters'>Rating</li>
            <li className='filters'>Cost: Low to High</li>
            <li className='filters'>Cost: High to Low</li>
            <li className='filters'>Filter <span className="material-symbols-outlined png">
tune
</span></li>
            
            </ul>
        <div className="Chevron"></div>
</div>
    <h2 className='top-results2'>15 Restaurant to explore</h2>


    </div>


<div className='dash'></div>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:"center"}}>
{FilteredRestaurant?.map((restaurant)=>{
            
            return <Link className='LinkRes' to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard {...restaurant?.info} /></Link>
        
        })}
</div>
       
    </div>
    </div>
  )
}

export default Body