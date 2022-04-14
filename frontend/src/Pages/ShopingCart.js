import React from 'react';
import '../Styles/shopingCart.css';
import Cart from '../components/Cart';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function ShoppingCart() {
  return (
    <>
      <NavBar />
      <div className='contShoping'>
        <div className='container-shoping'>
          <Cart />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ShoppingCart