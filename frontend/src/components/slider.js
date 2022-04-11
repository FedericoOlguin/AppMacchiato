/* import "../Styles/slider.css";
import { Link as LinkRouter } from "react-router-dom";
import "../Styles/aboutUs.css"; */
/* import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'; */

import "../Styles/slider.css";
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link as LinkRouter } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "../Styles/aboutUs.css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function Slider() {
  return (
    <div className="cards-city">
      <div className="card-text">
        <h1>Products</h1>
        <p>We focus on having the best human capital as the main input for our products.</p>
        <span>We are the only brand in the world that produces its own coffee, obtaining the best quality coffee every day.</span>
        <LinkRouter className="link-about" aria-current="page" to="/shop"><button className='boton-aboutUs'>Shop now</button></LinkRouter>
      </div>
      <div className='card'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img alt="imgSlider" src={"https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} />
          </SwiperSlide>
          
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1584306625941-56b1139bf030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"} /></SwiperSlide>

          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} /></SwiperSlide>

          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1515388293731-e768737d41e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} /></SwiperSlide>

          
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1501346220112-1dbcb625301c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} /></SwiperSlide>

          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1609073470762-cd7e5f7d3cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} /></SwiperSlide>

          
        </Swiper>
        {/* <Carousel fade className="ejemplo-carousel">
          <Carousel.Item className="contenedor-ejemplo">
            <img
              className="d-block w-100 imgEjmplo"
              src={"https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
              alt="Productos Macchiato"
            />

          </Carousel.Item>
          <Carousel.Item className="contenedor-ejemplo">
            <img
              className="d-block w-100 imgEjmplo"
              src={"https://images.unsplash.com/photo-1447347974530-d7c185559683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"}
              alt="Productos Macchiato"
            />


          </Carousel.Item>
          <Carousel.Item className="contenedor-ejemplo">
            <img
              className="d-block w-100  imgEjmplo"
              src={"https://images.unsplash.com/photo-1500912708295-4cf8b060f381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
              alt="Productos Macchiato"
            />
          </Carousel.Item>

          <Carousel.Item className="contenedor-ejemplo">
            <img
              className="d-block w-100  imgEjmplo"
              src={"https://images.unsplash.com/photo-1515388293731-e768737d41e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
              alt="Productos Macchiato"
            />
          </Carousel.Item>

          <Carousel.Item className="contenedor-ejemplo">
            <img
              className="d-block w-100  imgEjmplo"
              src={"https://images.unsplash.com/photo-1501346220112-1dbcb625301c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
              alt="Productos Macchiato"
            />
          </Carousel.Item>

          <Carousel.Item className="contenedor-ejemplo">
            <img
              className="d-block w-100  imgEjmplo"
              src={"https://images.unsplash.com/photo-1609073470762-cd7e5f7d3cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
              alt="Productos Macchiato"
            />
          </Carousel.Item>

        </Carousel> */}
      </div>

    </div>
  );
}









        