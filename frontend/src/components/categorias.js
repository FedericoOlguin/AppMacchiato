import React from 'react';
import '../Styles/categorias.css'
import coffePack from '../img/coffePack.png'
import machineCoffe from '../img/machineCoffe.png'
import creation from '../img/creations.png'

function Categorias() {
  return (
    <div id='container-categorias'>
      <div className='subcontainer-categorias'>
        <div className='primerContenedor'>
          <div className='container-imgcategorias'>
            <img src={coffePack} className='img-categorias' alt='productos' />
          </div>
        </div>
        <div className='segundoContenedor'>
          <h1 className='tituloCategorias'>
            coffee roasters </h1>
          <p className='parrafoCategorias'>
            We are manufacturers of coffee roasting machines. Contact us</p>
        </div>
        <div className='tercerContenedor'>
          <div className='container-imgcategorias'>
            <img src={creation} className='img-categorias' alt='productos' />
          </div>
        </div>
      </div>


      <div className='subcontainer-categorias1'>
        <div className='primerContenedor'>
          <h1 className='tituloCategorias'>specialty coffee</h1>
          <p className='parrafoCategorias'>Exclusive Coffes  and trademarks From Around the World.</p>
        </div>
        <div className='segundoContenedor'>
          <div className='container-imgcategorias'>
            <img src={"https://cdn.webshopapp.com/shops/40114/files/384661026/bialetti-new-moka-induction-coffee-maker-red-for-6.jpg"} className='img-categorias' alt='productos' />
          </div>
        </div>
        <div className='tercerContenedor'>
          <h1 className='tituloCategorias'>Coffee courses</h1>
          <p className='parrafoCategorias'>At Macchiato we have an educational system for baristas</p>
        </div>

      </div>
    </div>
  )
}

export default Categorias