
import * as React from 'react';
import { useState, useEffect } from 'react';
import empy from '../img/empy.svg'
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcon from "./LoadingIcon"
import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DetailsIcon from '@mui/icons-material/Details';





const Cart = (props) => {


    return (
        <>
            <h1 className='txtCard'> -------------  carrito --------------</h1>
            <div className='containerCart'>
                {props.cart?.length !== 0 ? (
                    props.cart?.map((products, index) =>
                        <div className='cardProducto' key={index}>

                            <p className='precio'> {"$" + products.price} </p>
                            <div className='bandera'>
                                <img alt="flag" src={products.flag} className='flag' />
                                <p className='nofound-h2' >{products.quantity}</p>
                            </div>
                            <img alt='cardPho' src={products.image} className="imagenHeader" />
                            <div className='txtCard'>
                                <h2> {products.name} </h2>
                                {/* <h4> Other property </h4> */}
                                <div className='botonesCart'>
                                    <button onClick={() => props.removeOneFromCart(products._id)}> Eliminar un producto</button>
                                    <button onClick={() => props.removeAllFromCart(products._id)}> Eliminar todos</button>
                                    <button onClick={() => props.addToCart(products._id)}>sumar uno</button>

                                </div>
                                <p className='nofound-h2' >${products.price} X { products.quantity} = ${products.price*products.quantity}</p>
                            </div>
                        </div>

                    )) : (
                    <div className='nofound'>
                        <h2 className='nofound-h2'>El carrito esta vacio</h2>
                        <img alt='empy' src={empy} className='imagenVacia' />
                    </div>
                )}
            </div>
            <button onClick={() => props.emptyCart()} > Vaciar carrito</button>
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
