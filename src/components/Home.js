import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='outer-container'>
        
    <div className="home-up-img">
      <div className="home-mid-img">
        <img className="home-img" src={require('../images/home.jpg')}/>
        <div className="home-title">Bake<span style={{color:"#808927"}}>Hut</span></div>
        <div className="home-des">Find the best restaurants, cafés and bars in India</div>
      </div>
    </div>
    <div>
        <div className="home-low-img">Popular Recipes in <span><img className="flag" alt='indian flag' src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" /></span> India</div>
        <p className="low-desc">From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, BakeHut covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
    </div>
  </div>
  )
}

export default Home