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
        <div> 

        <div className='cardProducto'>
            <p className='precio'> $19.99 </p>
            <img alt='cardPho' src={coffePack} className="imagenHeader" />
        <div className='txtCard'>
            <h2> COFFE X SPECIAL</h2>
            <h4> In our stores you can try a lot of different and exclusive coffees, as well as take some to your home and share with your family. </h4>
        </div>
    </div>



        <>
        <div className='container-cards'>
            {props.filtered?.map(products =>
                <Card className='card' key={products._id} sx={{ maxWidth: 400, margin: 3.5 }}>
                    <LinkRouter to={`/detalle/${products._id}`}>
                        <CardHeader className='textCenter'
                            title={products.name}
                        />
                        <CardMedia
                            component="img"
                            height="300"
                            image={products.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body1" color="white" fontSize="1rem" className='categoryTxt'>
                                Category: {products.category}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" className='icon'>
                                <FavoriteIcon />
                            </IconButton>

                            <IconButton aria-label="share" className='icon'>
                                <LoupeIcon />
                            </IconButton>

                        </CardActions>
                    </LinkRouter>
                </Card>

            )}
        </div>
        </>

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