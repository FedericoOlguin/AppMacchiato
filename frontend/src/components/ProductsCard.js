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




function ProductsCard(props) {
    
    useEffect(()=>{

    },[])

    if (!props.filtered) {
        return (<LoadingIcon />)
    }
    
    return (
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
                            <Typography variant="body2" color="white" fontSize="1rem">
                                Category: {products.category}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>

                            <IconButton aria-label="share">
                                <LoupeIcon />
                            </IconButton>

                        </CardActions>
                    </LinkRouter>
                </Card>

            )}
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