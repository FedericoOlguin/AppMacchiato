import { useEffect, useState } from "react";
import { connect } from "react-redux"; 
import productActions from "../redux/actions/productActions";
// import { Link as LinkRouter } from "react-router-dom";




function Shop(props) {


    useEffect(()=>{
        window.scrollTo(0,0)
        
        props.getAllProducts()

    },[])
    console.log(props.allProducts);

    return(
        <>
        
            <h1>Soy el shop</h1>

            {/* <LinkRouter to={'/home'}>
                <button> go back to home </button>
            </LinkRouter> */}
        </>
    )    

}

const mapStateToProps = (state) => {
    return {
        allProducts: state.productReducer.allProducts
    }
}

const mapDispatchToProps = {
    getAllProducts: productActions.getAllProducts
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);
