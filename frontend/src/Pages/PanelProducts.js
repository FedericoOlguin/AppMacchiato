
import React from 'react'
import '../Styles/panelproducts.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link as LinkRouter } from "react-router-dom";

function PanelProducts() {
  return (
    <div className='caja-panel'>
      <Navbar />
      <div className='centro-panel'></div>
      <div className='container-panel'>
        <h1 className='titulo-panel'>Update Products</h1>

        <div className='container-butonPanel'>
          <LinkRouter className="link-about" aria-current="page" to="#"><button className='boton-panelProduct'>Add product</button></LinkRouter>

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



      <div id='form-signup-panelProducts'>
        <main className="mainForm-panelProducts">
          <h2 className='subtitle-signup-panelProducts'>Add new product </h2>
          <div className="formContainer-panelProducts">
            <form action="" className="form-panelProducts" /* onSubmit={""} ref={""} */ id="form">

              <fieldset className="fieldsetFrom-panelProducts">

                <label className="labelForm-seetings" htmlFor="nameItem">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Name item</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="nameItem" name="nameItem" required />
                </label>

                <label className="labelForm-panelProducts" htmlFor="ItemPhotoUrl">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Item photoURL</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="ItemPhotoUrl" name="ItemPhotoUrl" />
                </label>

                <label className="labelForm-panelProducts" htmlFor="category">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Category</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="category" name="category" />
                </label>


                <label className="labelForm-panelProducts" htmlFor="stock">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Stock</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="stock" name="stock" />
                </label>


                <label className="labelForm-panelProducts" htmlFor="description">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Description</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="description" name="description" />
                </label>

                <label className="labelForm-panelProducts" htmlFor="sale">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Sale</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="sale" name="sale" />
                </label>

                <label className="labelForm-panelProducts" htmlFor="flag">
                  <div className='container-panelProduct'>
                    <span className='span-signup-panelProducts'>Flag photoURL</span>
                  </div>
                  <input className="inputFrom-panelProducts" type="text" id="flag" name="flag" />
                </label>

                <button className="button-panelProducts" type="submit">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </fieldset>
            </form>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  )
}

export default PanelProducts

