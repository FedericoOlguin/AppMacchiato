import React from "react";
import "../Styles/FooterM.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as LinkRouter } from "react-router-dom"
import logo from '../img/logo.png'



const Footer = () => {
  return (
    <footer>
      <div className="divNavFooter">
        <ul>
          <li className=""><LinkRouter className="footerNav" aria-current="page" to={"/"}>Home</LinkRouter></li>
          <li className=""><LinkRouter className="footerNav " to={"/shop"}>Store</LinkRouter></li>
          <li><LinkRouter className="footerNav" to={"/signIn"}>Sign In</LinkRouter></li>
          <li><LinkRouter className="footerNav" to={"/signUp"}>Sign Up</LinkRouter></li>

        </ul>
      </div>
      <div className="diVFooter">
        <img src={logo} alt="logo" className="imgFooter"/>
      </div>
      <div className="divIcon">
        <ul>
          
          <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.google.es/maps/place/ONI+Coffee+Shop/@48.8688602,2.3555228,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e0e33f60c7b:0x509e16fe7178f322!8m2!3d48.8688567!4d2.3577115?hl=es"><RoomIcon className="iconFooter"/></a></li>

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