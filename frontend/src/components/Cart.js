
import * as React from 'react';
import { useState, useEffect } from 'react';
import empy from '../img/empy.svg'
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcon from "./LoadingIcon"
import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'
import '../Styles/shopingCart.css'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';



const Cart = (props) => {






    return (
        <>
        {console.log(props)}
            <h1 className='txtCard-Cart'> -------------  carrito --------------</h1>
            <div className='containerCart-Cart'>
                {props.cart?.length !== 0 ? (
                    props.cart?.map((products, index) =>
                        <div className='cardProducto-Cart' key={index}>

                            <div className='Container-imgCart'>
                                <img alt='cardPho' src={products.image} className="imagenHeader-Cart" />
                                <img alt="flag" src={products.flag} className='flag-Cart' />
                            </div>

                            <div className='container-mayor'>
                                <div className='subtitulo-Cart'>
                                    <h2> {products.name} </h2>
                                    <p className='precio-Cart'> {"$ " + products.price} </p>
                                </div>



                                <div className='botonesCart-Cart'>
                                    <div className='botons-Carts'>
                                        <button className='botonShopping' onClick={() => props.addToCart(products._id)}><AiOutlinePlus className='iconoSho' /></button>
                                        <button className='botonShopping' onClick={() => props.removeOneFromCart(products._id)}> <AiOutlineMinus className='iconoSho' /></button>
                                        <button className='botonShopping' onClick={() => props.removeAllFromCart(products._id)}> <AiOutlineClose className='iconoSho' /></button>
                                    </div>
                                    <div className='bandera-Cart'>
                                        <p className='nofound-h2-Cart' >{products.quantity}</p>
                                    </div>
                                </div>

                                <div className='subtotal-shop'>
                                    <p className='nofound-h2-Shop' > Subtotal = $ {products.price * products.quantity}</p>
                                </div>
                            </div>

                        </div>

                    )) : (
                    <div className='nofound-Cart'>
                        <h2 className='nofound-h2-Cart'>El carrito esta vacio</h2>
                        <img alt='empy' src={empy} className='imagenVacia-Cart' />
                    </div>
                )}
            </div>
            <button className='botonvaciar-carrito' onClick={() => props.emptyCart()} > Vaciar carrito</button>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        allProducts: state.productReducer.allProducts,
        filtered: state.productReducer.filtered,
        cart: state.productReducer.cart
    }
}

const mapDispatchToProps = {
    filter: productActions.filter,
    addToCart: productActions.addToCart,
    removeOneFromCart: productActions.removeOneFromCart,
    removeAllFromCart: productActions.removeAllFromCart,
    emptyCart: productActions.emptyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
