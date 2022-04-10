import React from 'react';
import '../Styles/shopingCart.css';
import Cart from '../components/Cart';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function ShoppingCart() {
  return (
    <div className='contDetalle'>
      <NavBar />
      <div className='container-shoping'>
        <Cart />
      </div>
      <Footer />
    </div>
  )
}

export default ShoppingCart