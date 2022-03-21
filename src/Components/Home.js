import React from "react";
import pizzaSlice from '../image/logo512.png'

const Home = () => {
  return (
    <>
      
      <div className='container-navigation'>
      <div className="container-title"><p className='title-home'>My Pizza APP</p>
      </div>
      <div className='image-home'>
      <img src={pizzaSlice} alt="A pizza slice"></img>
      </div>
      <a className='button-home' href="/order">
        <button className='home-button'>Order</button>
      </a>
      <a className='button-home' href="/dashboard">
        <button className='home-button'>Order Dashboard</button>
      </a>
      </div>
    </>
  );
};

export default Home;
