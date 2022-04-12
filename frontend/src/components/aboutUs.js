import React from 'react';
import '../Styles/aboutUs.css';
import { Link as LinkRouter } from "react-router-dom";
import Slider from '../components/slider'




function AboutUs() {
  return (
    <>
      <div className='cards-city'>
        <div className='card' >
          <img src={"https://images.unsplash.com/photo-1462690417829-5b41247f6b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="Farmer" className='img-card' />
          <div className='description'>
            <h3>From the field for you</h3>
          </div>
        </div>
        <div className='card-text'>
          <h1>About Us</h1>
          <p className='parrafoCard'>After harvesting the fruits of the coffee trees, they are induced to a wet process where they take approximately one day to ferment.</p>
          <span>Once the beans are sorted by size and weight, they can be roasted and, if desired, ground. </span>
          <LinkRouter className="link-about" aria-current="page" to="/aboutUs"><button className='boton-aboutUs'>See more</button></LinkRouter>
        </div>
      </div>
      
      <Slider />
    </>
  )
}

export default AboutUs