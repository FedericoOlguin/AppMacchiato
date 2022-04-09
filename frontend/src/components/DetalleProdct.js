import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import "../App.css";
import "../Styles/DetalleProduct.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import productActions from "../redux/actions/productActions";




const Detalle = (props) => {
    const {id} = useParams()
    const [prod, setProd] = useState(props.allProducts.filter(prod => prod._id === id)[0])

    useEffect(() => {
        if (props.allProducts.length < 1) {
            props.getOneProduct(id)
                .then(response =>setProd(response))
        }
        
    },[id])

    if(prod===undefined){
        return(
            <h1>
                {/* {console.table(props.allProducts.filter(prod => prod._id === id))} */}
                      {/* {console.log(prod)}
                {console.log(id)} */}
                Native no sirve 

            </h1>
        )
    }
    return (

        < div className="contDetalle">
            <NavBar />
            <div className="hero">


            </div >
            <div className="detalle">
                {console.log(prod)}
                {console.log(id)}
                <div className="product">
                    <p>Producto{prod.name}</p>
                    <p>Price{prod.price}</p>
                    <p>{prod.stock}</p>
                    <p>{prod.desciption}</p>
                </div>

            </div>



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