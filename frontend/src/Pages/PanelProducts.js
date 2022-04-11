
import React, { useState } from 'react'
import '../Styles/panelproducts.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link as LinkRouter } from "react-router-dom";
import { connect } from "react-redux"
import productActions from '../redux/actions/productActions';
import FormPanle from '../components/FormPanle';

function PanelProducts(props) {

  const [form, setForm] = useState(false)


  function openForm() {
    setForm(!form)
  }

  return (
    <div className='caja-panel'>
      <Navbar />
      <div className='centro-panel'></div>
      <div className='container-panel'>
        <h1 className='titulo-panel'>Update Products</h1>

        <div className='container-butonPanel'>
          <LinkRouter className="link-about" aria-current="page" to="#"><button onClick={openForm} className='boton-panelProduct'>Add product</button></LinkRouter>

          <LinkRouter className="link-about" aria-current="page" to="#"><button className='boton-panelProduct'>Modify products</button></LinkRouter>
        </div>

        <div className='card-panel'>

          <div className='panel-imgproducto'>
            <img
              src={'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/Shingeki-no-Kyojin-eren-cosplay.jpg?fit=1280%2C720&quality=80&ssl=1'}
              alt="producto"
              className='imagen-producto'
            />
          </div>
          <div className='items-producto'>
            <h2 className='subtitulo-producto'>Nombre producto</h2>
            <h2 className='respuesta-producto'> aqui va la respuesta</h2>
            <h2 className='subtitulo-producto'>Precio</h2>
            <h2 className='respuesta-producto'> aqui va la respuesta</h2>
          </div>
          <div className='items-producto'>
            <h2 className='subtitulo-producto'>Stock</h2>
            <h2 className='respuesta-producto'> aqui va la respuesta</h2>
            <h2 className='subtitulo-producto'>Sale</h2>
            <h2 className='respuesta-producto'> aqui va la respuesta</h2>
          </div>
        </div>

        <div className='boton-panel'>
          <button className='button-modify'><span class="text">Modificar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>

          <button className='button-elimintate'><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
        </div>
      </div>


      <FormPanle form={form} />
      <Footer />
    </div>
  )
}

// export default PanelProducts


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
  loadProduct: productActions.loadProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelProducts)