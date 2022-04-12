import React, { useState } from 'react';
import usersActions from '../redux/actions/userAction';
import '../Styles/signin.css';
import { useRef } from 'react';
import { connect } from 'react-redux'
import { Link as LinkRouter } from "react-router-dom";
import VideoFormulario from '../img/VideoFormulario.mp4';
import FacebookSignUp from '../components/FacebookSignUp';
import GoogleSignUp from '../components/GoogleSignUp'
import countries from '../components/apiCountry';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function SignUp(props) {
  window.scrollTo(0, 0)
  const form = useRef()

  async function send(event) {
    event.preventDefault()
    form.current.focus()
    let datosInp = new FormData(form.current)


    let userObj = {
      firstName: datosInp.get("name"),
      lastName: datosInp.get("lastName"),
      email: datosInp.get("email"),
      password: datosInp.get("password"),
      photoURL: datosInp.get("imageUrl"),
      country: datosInp.get("pais"),
      from: "signup",
      rol: 'undefined',
    }
    console.table(userObj);

    props.signUp(userObj)
  }



  return (
    <div id='container-signup'>
      <div id='form-signup'>
        <main className="mainForm">
          <LinkRouter className="scrollback" to={"/"}><ArrowBackIosNewIcon className='iconoBack' />
          </LinkRouter>
          <h2 className='subtitle-signup'>Macchiato</h2>
          <div className="formContainer">
            <form action="" className="form" onSubmit={send} ref={form} id="form">

              <fieldset className="fieldsetFrom">

                <label className="labelForm" htmlFor="name">
                  <span className='span-signup'>First Name</span>
                  <input className="inputFrom" type="text" id="name" name="name" required />
                </label>
                <label className="labelForm" htmlFor="lastName">
                  <span className='span-signup'>Last Name</span>
                  <input className="inputFrom" type="text" id="lastName" name="lastName" />
                </label>
                <label className="labelForm" htmlFor="email">
                  <span className='span-signup'>E-mail</span>
                  <input className="inputFrom" type="text" id="email" name="email" />
                </label>



                <label className="labelForm" htmlFor="password" >
                  <span className='span-signup'>Password</span>
                  <input className="inputFrom" type="password" id="password" name="password" />
                </label>

                <label className="labelForm" htmlFor="imageUrl">
                  <span className='span-signup'>Image URL</span>
                  <input className="inputFrom"  type="text" id="imageUrl" name="imageUrl" />
                </label>

                <label className="labelForm" htmlFor="pais">
                  <span className='span-signup'>Country</span>
                  <select className="inputFrom" defaultValue={"default"} name="pais" id="pais">
                    <option value="default">Select your Country</option>
                    {countries.map(country => {

                      return (<option key={country.code} value={country.name}>{country.name}</option>)
                    })}

                  </select>
                </label>


                <div className='contenedor-butonsocial'>
                  <label className="labelForm" >
                    <FacebookSignUp />
                  </label>
                  <label className="labelForm" >
                    <GoogleSignUp />
                  </label>
                </div>

                <button className="button" type="submit">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>Sign Up</span>
                </button>
                <span className='linkSingIn'>Do you already have an account with us?<LinkRouter className="linkSingIn" to={"/signIn"} > Singn In</LinkRouter></span>
              </fieldset>
            </form>
          </div>

        </main>
        <div id='video-signup'>
          <video
            autoPlay
            loop
            muted
            className='video'
          >
            <source src={VideoFormulario} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}


const mapDispatchToProps = {
  signUp: usersActions.signUp
}


export default connect(null, mapDispatchToProps)(SignUp)