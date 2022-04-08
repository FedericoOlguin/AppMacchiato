import { func } from 'joi'
import React from 'react'
import '../Styles/panelproducts.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


function PanelProducts() {
  return (
    <div className='caja-panel'>
      <Navbar />
      <div className='centro-panel'></div>
      <div className='container-panel'>
        <h1 className='titulo-panel'>Update Products</h1>
        <div className='card-panel'>

        </div>
        <div className='boton-panel'>
          <button className='button-modify'><span class="text">Modificar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>

          <button className='button-elimintate'><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PanelProducts

