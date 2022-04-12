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
    window.scrollTo(0, 0);
    props.getAllProducts();
  }, []);

   /*  }, []) */

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



const mapDispatchToProps = {
  getAllProducts: productActions.getAllProducts,
};

export default connect(null, mapDispatchToProps)(Shop);
