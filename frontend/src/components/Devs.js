import React from 'react';
import '../Styles/Devs.css'
import Daniel from '../img/Daniel.jpg'
import federico from '../img/Federico.jpg'
import Fernanda from '../img/Fernanda.png'
import Marcia from '../img/Marcia.jpg'
import Sebastian from '../img/Sebastian.jpeg'
import Hernan from '../img/Hernan.jpg'

function Devs() {
  return (
    <div className='container-categorias'>
      <div className='subcontainer-categorias'>
        <div className='primerContenedor'>
          <img src={Daniel}  className='img-categorias' alt='Dev'/>
          <h1 className='tituloCategorias'>
            Daniel Martínez </h1>
        </div>
        <div className='segundoContenedor'>
        <img src={federico}  className='img-categorias' alt='Dev'/>
          <h1 className='tituloCategorias'>
            Federico Olguín </h1>
        </div>
        <div className='tercerContenedor'>
          <img src={Fernanda} className='img-categorias' alt='Dev' />
          <h1 className='tituloCategorias'>
            Fernanda </h1>
        </div>
      </div>

      <div className='subcontainer-categorias1'>
      <div className='primerContenedor'>
          <img src={Marcia}  className='img-categorias' alt='Dev'/>
          <h1 className='tituloCategorias'>
            Marcia Montivero </h1>
        </div>
        <div className='segundoContenedor'>
        <img src={Sebastian}  className='img-categorias' alt='Dev'/>
          <h1 className='tituloCategorias'>
            Sebastian Londoño </h1>
        </div>
        <div className='tercerContenedor'>
          <img src={Hernan} className='img-categorias' alt='Dev' />
          <h1 className='tituloCategorias'>
            Hernan Funes </h1>
        </div>
      </div>
    </div>
  )
}

export default Devs