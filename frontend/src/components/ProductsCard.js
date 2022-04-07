import * as React from 'react';
import { useState, useEffect } from 'react';

import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcon from "./LoadingIcon"
import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'


const categories = [{ name: "Coffees", }, { name: "coffee maker", }, { name: "Accessories", }, { name: "Barista tools", }]

function ProductsCard(props) {


    const [eventInput, setEventInput] = useState("");
    const [eventSelect, setEventSelect] = useState("");
    // const [loaded, setLoaded] = useState(false);



    function filter(input, select) {
        console.log(input);
        console.log(select);

        // setLoaded(!loaded)
        props.filter(props.allProducts, input, select)

    }


    if (!props.filtered) {
        return (<LoadingIcon />)
    }

    return (
        <>
            <div className='contenedorCardsGeneral'>
                <div className='filters'>

                    <div className='input'>
                        <input
                            className='input-text'
                            placeholder='Search your product by name'
                            onChange={(event) => { setEventInput(event.target.value); filter(event.target.value, eventSelect) }} />
                    </div>

                    <div className='select'>
                        <select className="form-control select" onChange={(event) => { setEventSelect(event.target.value); filter(eventInput,event.target.value) }}>
                            <option value={""}>
                                {""}
                                -choose the category-
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

                    {props.filtered?.map(products =>
                        <div className='cardProducto' key={products._id}>
                            <LinkRouter to={`/detalle/${products._id}`} />
                            <p className='precio'> {"$" + products.price} </p>
                            <p className='flag'> {/* {"$" + products.flag} */} </p>
                            <img alt='cardPho' src={products.image} className="imagenHeader" />
                            <div className='txtCard'>
                                <h2> {products.name} </h2>
                                {/* <h4> Other property </h4> */}
                                <h5> Agregar al carrito </h5>
                            </div>
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
    }
}

const mapDispatchToProps = {
    filter: productActions.filter,
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard)