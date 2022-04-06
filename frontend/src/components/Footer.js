import React from 'react'
import "../Styles/FooterM.css"
/* import ImagenHeder from "../img/imagenHeader.png" */
/* import FondoFooter from "../img/fondoHeader.jpg" */
import { Link as LinkRouter } from 'react-router-dom';
import footerBack from "../img/footer.jpg";
import logo from "../img/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBitcoin, faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (

    <div className='globalFooter'>
      
      <img src={footerBack} className="imagenFooter"/>

      <div className='footerContainer'>

        <div className='primerElemento'>
          <img src={logo} /> 
          <h3>Our Stores:</h3>
          <p>Buenos Aires, Arg.</p>
          <p>Medellín, Col.</p>
          <p>Lima, Per.</p>
        </div>

        <div className='socialMedia'>
          <h3>Follow us on social media</h3>
          <div className='iconsMedia'>
            <FontAwesomeIcon className='iconoMedia' icon={faFacebook} />
            <FontAwesomeIcon className='iconoMedia' icon={faInstagram} />
            <FontAwesomeIcon className='iconoMedia' icon={faWhatsapp} />
            <FontAwesomeIcon className='iconoMedia' icon={faBitcoin} />
          </div>
        </div>

        <div className='explore'>
          <h3>Explore:</h3>
          <a href="#" className='enlace' id='home'> <LinkRouter to="/inicio" >HOME</LinkRouter></a>
          <a href="#" className='enlace'>  <LinkRouter to="/cities" >COFFE</LinkRouter> </a> 
          <a href="#" className='enlace'>  <LinkRouter to="/cities" >STORE</LinkRouter> </a> 
        </div>
        

      </div>
            <h2>MACCHIATTO STORES © 2022</h2>
    </div>



  )
}

export default Footer