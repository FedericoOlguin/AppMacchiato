import "../Styles/slider.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link as LinkRouter } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="container-Slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}        
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1535738224937-509ad241df9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1537130508299-46ab547b4be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1534422646206-3cf5a7d4a1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" /></SwiperSlide>
      </Swiper>
      <div className="card-text2">
        <h1>About Macchiato</h1>
        <p>We have the best human capital as the main input for our products.</p>
        <span>We are the only brand in the world that belongs to its producers, who day by day grow the best quality  coffee.</span>
        <LinkRouter className="link-about" aria-current="page" to="/shop"><button className='boton-aboutUs'>Shop now</button></LinkRouter>
      </div>
    </div>
  );
}
