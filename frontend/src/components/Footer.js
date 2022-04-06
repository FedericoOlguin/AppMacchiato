import React from "react";
import "../Styles/FooterM.css"

import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as LinkRouter } from "react-router-dom"
import logo from '../img/logo.png'



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
        <img src={logo} alt="logo" className="imgFooter"/>
      </div>
      <div className="divIcon">
        <ul>
          
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="mailto:macchiatoweb10@hmail.com"><MailOutlineIcon className="iconFooter" /></a></li>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.instagram.com/"><InstagramIcon className="iconFooter" /></a></li>
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.whatsapp.com/"><WhatsAppIcon className="iconFooter"/></a></li>
        </ul>

      </div>
      <div className="divCopy">
        <h6 >Copyrigth&copy; 2022 All rights reserved</h6>
      </div>
    </footer>
  )
}
export default Footer