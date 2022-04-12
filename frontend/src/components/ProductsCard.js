import * as React from 'react';
import { useState } from 'react';
import empy from '../img/empy.svg'
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcon from "./LoadingIcon"
import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import lupa from "../img/VerMas.svg"




const categories = [{ name: "Coffees", }, { name: "Coffee maker", }, { name: "Accessories", }, { name: "Barista tools", }]

function ProductsCard(props) {


    const [eventInput, setEventInput] = useState("");
    const [eventSelect, setEventSelect] = useState("");



    function filter(input, select) {
        console.log(input);
        console.log(select);

        props.filter(props.allProducts, input, select)

    }


    if (!props.filtered) {
        return (<LoadingIcon />)
    }

    return (
        <>
            <div className='contenedorCardsGeneral'>
                <LinkRouter className="link-about1" aria-current="page" to="/aboutUs"> <p> If you want to know more about us click here </p> </LinkRouter>
                <div className='sliderPromocion'>
                    <h1 className='titleStore'>Shop</h1>
                </div>

                <div className='filters'>
                    <div className='input'>
                        <input
                            className='input-text'
                            placeholder='Search your product'
                            color='#000'
                            onChange={(event) => { setEventInput(event.target.value); filter(event.target.value, eventSelect) }} />
                    </div>

                    <div className='selectShop'>
                        <select className="form-control" onChange={(event) => { setEventSelect(event.target.value); filter(eventInput, event.target.value) }}>
                            <option value={""}>
                                {""}
                                Choose the category
                            </option>
                            {categories.map((category) => {
                                return (
                                    <option key={category.name} value={category.name}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                </div>



                <div className='ContainerStore'>
                    {props.filtered?.length !== 0 ? (
                        props.filtered?.map(products =>
                            <div className='cardProducto' key={products._id}>

                                <p className='precio'> {"$" + products.price} </p>
                                <div className='bandera'>
                                    <img alt="flag" src={products.flag} className='flag' />
                                </div>
                                <img alt='cardPho' src={products.image} className="imagenHeader" />
                                <div className='txtCard'>
                                    <h2> {products.name} </h2>
                                    <div className='botonesShop'>
                                        <LocalGroceryStoreIcon onClick={() => props.addToCart(products._id)} className='iconShop' />
                                        <LinkRouter className="link-carta" to={`/detalle/${products._id}`} >
                                            <img src={lupa} alt='lupa' className='lupaView' />
                                        </LinkRouter>
                                    </div>
                                </div>
                            </div>

                        )) : (
                        <div className='nofound'>
                            <h2 className='nofound-h2'>Sorry we did not find your search</h2>
                            <img alt='empy' src={empy} className='imagenVacia' />
                        </div>
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard)