import * as React from 'react';
import { useEffect } from 'react';
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcon from "./LoadingIcon"
import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'
import { Autoplay, Pagination, Navigation, Grid } from "swiper";


function ProductsCard(props) {
    console.log(props)
    
    useEffect(()=>{
    },[])

    if (!props.filtered) {
        return (<LoadingIcon />)
    }
    
    return (

            
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