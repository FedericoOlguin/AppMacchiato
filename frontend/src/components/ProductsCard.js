import * as React from 'react';
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




function ProductsCard(props) {
 
    if (!props.products) {
        return (<LoadingIcon />)
    }
    return (
        <>
            {(props?.products).map(products =>
                <Card className='card' key={products._id} sx={{ maxWidth: 400, margin: 3.5 }}>
                    <LinkRouter to={`/detalle/${products._id}`}>
                        <CardHeader className='textCenter'
                            title={products.ciudad}
                        />
                        <CardMedia
                            component="img"
                            height="300"
                            image={process.env.PUBLIC_URL + `../imagenes/${products.imagen}`}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="white" fontSize="1rem">
                                Country: {products.pais}
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
        </>
    )
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsCard)