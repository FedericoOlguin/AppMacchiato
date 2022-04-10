import "../Styles/slider.css";
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
        <p>We have the best human capital as the main input for our products.</p>
        <span>We are the only brand in the world that belongs to its producers, who day by day grow the best quality  coffee.</span>
        <LinkRouter className="link-about" aria-current="page" to="/shop"><button className='boton-aboutUs'>Shop now</button></LinkRouter>
      </div>
      <div className='card'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper-slide"
        >
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} /></SwiperSlide>
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} /></SwiperSlide>
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1494314671902-399b18174975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} /></SwiperSlide>
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1531584838419-d5d24b120bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} /></SwiperSlide>
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} /></SwiperSlide>
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"} /></SwiperSlide>

          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} /></SwiperSlide>
          <SwiperSlide><img alt="imgSlider" src={"https://images.unsplash.com/photo-1585349048087-e7363ae659ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"} /></SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}









        