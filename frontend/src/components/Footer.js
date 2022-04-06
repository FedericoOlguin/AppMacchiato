import React from "react";
import "../Styles/FooterM.css"
import facebook from "../img/IconFacebook.png"
import instagram from "../img/IconInstagram.png"
import twitter from "../img/IconTwitter.png"
import whatsapp from "../img/IconWhatsapp.png"
import { Link as LinkRouter } from "react-router-dom"




const Footer = () => {
  return (
    <footer>
      <div className="divNavFooter">
        <ul>
          <li className=""><LinkRouter className="footerNav" aria-current="page" to="/">Home</LinkRouter></li>
          <li className=""><LinkRouter className="footerNav " to="/cities">Cities</LinkRouter></li>
          <li><LinkRouter className="footerNav" to="#">Log In</LinkRouter></li>
          <li><LinkRouter className="footerNav" to="#">Sign Up</LinkRouter></li>

        </ul>
      </div>
      <div className="diVFooter">

        <p><LinkRouter className="navbar-brand linkLogo" to="/">MyTinerary</LinkRouter></p>
        <p>Contact: <a className="mail" href="http://gmail.com/" target="_blank" rel="nopener noreferrer">xxxxx@gmail.com</a></p>
        <p>Adress: San Martín 4598  Capital Federal.</p>


      </div>
      <div className="divIcon">
        <ul>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://facebook.com/"><img className="iconFooter" src={facebook} alt="iconoFacebook" /></a></li>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://twitter.com/"><img className="iconFooter" src={twitter} alt="iconoTwitter" /></a></li>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.instagram.com/"><img className="iconFooter" src={instagram} alt="iconoInstagram" /></a></li>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.whatsapp.com/"><img className="iconFooter" src={whatsapp} alt="iconoWhatsapp" /></a></li>
        </ul>

      </div>
      <div className="divCopy">
        <h6 >Copyrigth&copy; 2022 All rights reserved</h6>
      </div>
    </footer>
  )
}
export default Footer