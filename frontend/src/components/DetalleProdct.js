import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import "../App.css";
import "../Styles/detalleProduct.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import productActions from "../redux/actions/productActions";
import LoadingIcon from "./LoadingIcon"




const Detalle = (props) => {
    const { id } = useParams()
    const [prod, setProd] = useState(props.allProducts.filter(prod => prod._id === id)[0])

    useEffect(() => {
        if (props.allProducts.length < 1) {
            props.getOneProduct(id)
                .then(response => setProd(response))
        }

    }, [id])

    if (prod === undefined) {
        return (
            <LoadingIcon />
        )
    }
    return (

        < div className="contDetalle">
            <NavBar />
            {console.log(prod)}
            <div className="hero">
                
                <div className="product">
                    <div className="primercontenedor-detalle">
                        <h1 className="titulo-detalle">{prod.name}</h1>
                        <img
                            alt="DetalleProducto"
                            src={prod.image}
                            className="imagen-detalle"
                        />
                    </div>
                    <div className="p-detalle">
                        <p>{prod.description}</p>
                    </div>
                    <div className="priceStock-detalle">
                        <p>$ {prod.price}</p>
                        <p>Stock: {prod.stock}</p>
                    </div>

                    <div className="buy-detalle">
                        <button className='button-detalle'><span class="text">Add Store</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                    </div>
                </div>

            </div >
            <Footer />
        </div >

    )
}



// export default (Detalle)
const mapDispachToProps = {
    getOneProduct: productActions.getOneProduct
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.productReducer.allProducts
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Detalle)