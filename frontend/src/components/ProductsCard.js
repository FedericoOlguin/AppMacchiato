import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoupeIcon from '@mui/icons-material/Loupe';
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcon from "./LoadingIcon"
import productActions from "../redux/actions/productActions";
import '../Styles/ProductsCards.css'
import coffePack from "../img/coffePack.png"


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