import React from 'react';
import '../Styles/aboutUs.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link as LinkRouter } from "react-router-dom";
import Slider from '../components/slider'




function AboutUs() {
  return (
    <>
      <div className='cards-city'>
        <div className='card' >
          <img src={"https://images.unsplash.com/photo-1472495010058-65576a9959e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="Farmer" className='img-card' />
          <div className='description'>
            <h3>From the field for you</h3>
          </div>
        </div>
        <div className='card-text'>
          <h1>About Macchiato</h1>
          <p>We have the best human capital as the main input for our products.</p>
          <span>We are the only brand in the world that belongs to its producers, who day by day grow the best quality  coffee.</span>
          <LinkRouter className="link-about" aria-current="page" to="/aboutUs"><button className='boton-aboutUs'>See more</button></LinkRouter>
        </div>
      </div>
      
      <Slider />
    </>
  )
}

export default AboutUs