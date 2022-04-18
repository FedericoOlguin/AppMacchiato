
import React, { useEffect, useState } from 'react'
import '../Styles/panelproducts.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link as LinkRouter } from "react-router-dom";
import { connect } from "react-redux"
import productActions from '../redux/actions/productActions';
import FormPanle from '../components/FormPanel';
import CardModify from '../components/CardModify';

function PanelProducts(props) {

  useEffect(() => {
    props.getAllProducts()
    window.scrollTo(0, 0)
  }, [])

  const [form, setForm] = useState(true)
  const [form2, setForm2] = useState(false)



  function openForm() {
    setForm(!form)
  }

  function openForm2() {
    setForm2(!form2)
  }

  return (
    <div className='caja-panel'>
      <Navbar />
      <div className='centro-panel'></div>
      <div className='container-panel'>
        <div className='container-tituloPanel'>
          <h1 className='titulo-panel'>Update Products</h1>
        </div>

        <div className='container-butonPanel'>
          <LinkRouter className="link-about" aria-current="page" to="#"><button onClick={openForm} className='boton-panelProduct'>Add product</button></LinkRouter>

          <LinkRouter className="link-about" aria-current="page" to="#"><button onClick={openForm2} className='boton-panelProduct'>Modify products</button></LinkRouter>
        </div>

        {props.allProducts.map(product =>
          <CardModify key={product._id} product={product} form2={form2} />)}
           <FormPanle form={form} />
      </div>


     
      <Footer />
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    allProducts: state.productReducer.allProducts,
    filtered: state.productReducer.filtered,
    user: state.userReducer.user,

  }
}

const mapDispatchToProps = {
  filter: productActions.filter,
  addToCart: productActions.addToCart,
  removeOneFromCart: productActions.removeOneFromCart,
  removeAllFromCart: productActions.removeAllFromCart,
  emptyCart: productActions.emptyCart,
  loadProduct: productActions.loadProduct,
  getAllProducts: productActions.getAllProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelProducts)