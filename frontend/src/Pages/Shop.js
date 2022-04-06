import { useEffect, useState } from "react";
import { connect } from "react-redux"; 
import productActions from "../redux/actions/productActions";
import ProductsCard from "../components/ProductsCard";
// import { Link as LinkRouter } from "react-router-dom";




function Shop(props) {
    //para usar despues cuando apliquee filtros
    //const [cardsToDisplay, setCards] = useState();
    
    useEffect(()=>{
        window.scrollTo(0,0)
        
        props.getAllProducts()

    },[])
    


    return(
        <>
        
            <h1>Soy el shop</h1>


                <ProductsCard products={props.allProducts}/>

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
