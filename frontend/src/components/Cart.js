
import * as React from 'react';

import empy from '../img/empy.svg'

import { connect } from 'react-redux';

import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'
import '../Styles/shopingCart.css'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';




const Cart = (props) => {

    let totalCompra = 0

    function sumar(suma) {
        totalCompra += suma
    }
    return (
        <>
            {/* {console.log(props)} */}
            <div className='txtCard-Cart'>
                <h1 className='titulo-shoping'> Shopping cart</h1>
            </div>
            <div className='row'>
                <div className='containerCart-Cart'>
                    {props.cart?.length !== 0 ? (
                        props.cart?.map((products, index) =>
                            <div className='cardProducto-Cart' key={index}>
                                {sumar(products.quantity * products.price)}

                                <div className='Container-imgCart'>
                                    <img alt='cardPho' src={products.image} className="imagenHeader-Cart" />

                                </div>


                                <div className='subtitulo-Cart'>
                                    <h2> {products.name} </h2>

                                    <div className='botons-Carts'>
                                        {/* {console.log(products._id)} */}
                                        {/* {console.log(props.cart)} */}
                                        <button className='botonShopping' onClick={() => props.addToCart(products._id)}><AiOutlinePlus className='iconoSho' /></button>
                                        <button className='botonShopping' onClick={() => props.removeOneFromCart(products._id)}> <AiOutlineMinus className='iconoSho' /></button>
                                        <button className='botonShopping' onClick={() => props.removeAllFromCart(products._id)}> <AiOutlineClose className='iconoSho' /></button>
                                    </div>
                                </div>



                                <div className='botonesCart-Cart'>

                                    <p className='precio-Cart'> {"$ " + products.price} </p>
                                    <div className='bandera-Cart'>
                                        <p className='nofound-h2-Cart ' >{products.quantity}</p>
                                    </div>
                                    <p className='nofound-h2-Shop' > Subtotal= $ {products.price * products.quantity}</p>
                                    {/* <div className='subtotal-shop'> */}
                                    {/* </div> */}
                                </div>



                            </div>

                        )) : (
                        <div className='nofound-Cart '>
                            <div className=' black'>
                                <h2 className='nofound-h2-Cart '>The cart is empty</h2>
                                <img alt='empy' src={empy} className='imagenVacia-Cart ' />
                            </div>
                        </div>
                    )}
                </div>
                <div className='totalCompra'>
                    <div className='totalCompraCentro'>
                        <h3>Total</h3>
                        <h3>$ {totalCompra}</h3>
                        <div>
                            <button className='botonvaciar-carrito vaciar' onClick={() => props.emptyCart()} >Empty cart</button>
                            <button className='botonvaciar-carrito finalizar' onClick={() => props.emptyCart()} >Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
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
