import React, { useEffect } from "react";
import { connect } from "react-redux";
import productActions from "../redux/actions/productActions";
import ProductsCard from "../components/ProductsCard";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../Styles/shop.css'






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
        <div className="container-shop">
            <NavBar />
            <div className="container-filterAndShop">
                <div className="container-cards">
            
                    <ProductsCard />
                </div>
            </div>
            <Footer />
        </div>
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
