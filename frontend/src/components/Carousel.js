import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import '../Styles/carousel.css'
import productActions from "../redux/actions/productActions";
import { Autoplay, Pagination, Navigation, Grid } from "swiper";



function Carousel(props) {
 

  useEffect(() => {
  }, [])

  return (

    <>

      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2
        }}
        slidesPerGroup={2}

        spaceBetween={10}
      
        autoplay={{
          delay: 4400,
          disableOnInteraction: true
        }}


        modules={[Autoplay, Pagination, Navigation, Grid]}
        className="mySwiper"
      >
        {props.todosProductos?.map(products =>
          <SwiperSlide key={products._id} className="SwiperSlide">
            <img alt="productIMG" className="imgCarousel" src={products.image} />
            <p className="nombreImagen">{products.name}</p>
          </SwiperSlide>

        )}
        <h2> Checkout our new stock </h2>
      </Swiper>

    </>

  );
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.productReducer.allProducts,
    filtered: state.productReducer.filtered,
  }
}

const mapDispatchToProps = {
  filter: productActions.filter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)