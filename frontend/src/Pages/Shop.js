import React, { useEffect } from "react";
import { connect } from "react-redux";
import productActions from "../redux/actions/productActions";
import ProductsCard from "../components/ProductsCard";
// import { Link as LinkRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel"
import Detalle from "../components/detalleJS"





function Shop(props) {
    // const [cardsToDisplay, setCards] = useState();
    //para usar despues cuando apliquee filtros
    //const [cardsToDisplay, setCards] = useState();

    useEffect(() => {
        window.scrollTo(0, 0)
        props.getAllProducts()



    }, [])



    // async function filterByName(e){
    //     const filteredCards = cardsToDisplay.filter((product) =>
    //         product.name
    //         .toString()
    //         .trim()
    //         .toLowerCaser()
    //         .startsWith(e.target.value.trim().toLowerCaser())
    //         );
    //         setCards(filteredCards)
    // }


    return (
        <>
            <NavBar />

            <Carousel />
            <ProductsCard />
            <Detalle />

            {/* <LinkRouter to={'/home'}>
                <button> go back to home </button>
            </LinkRouter> */}
            <Footer />
        </>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         allProducts: state.productReducer.allProducts
//     }
// }

const mapDispatchToProps = {
    getAllProducts: productActions.getAllProducts
}


export default connect(null, mapDispatchToProps)(Shop);
