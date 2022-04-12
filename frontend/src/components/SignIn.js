import React from 'react';
import usersActions from '../redux/actions/userAction';
import '../Styles/signin.css';
import { useRef } from 'react';
import { connect } from 'react-redux'
import { Link as LinkRouter } from "react-router-dom";
import VideoFormulario2 from '../img/VideoFormulario2.mp4';
import FacebookSignIn from '../components/FacebookSignIn';
import GoogleSignIn from '../components/GoogleSignIn'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function SignIn(props) {
  const form = useRef()
  window.scrollTo(0, 0)

  function send(event) {
    event.preventDefault()
    form.current.focus()
    let datosInp = new FormData(form.current)

    let userObj = {
      email: datosInp.get("email"),
      password: datosInp.get("password"),
      from: "signup",
    }
    props.signIn(userObj)
    form.current.reset()
  }
  return (
    <div id='container-signup'>
      <LinkRouter className="scrollback" to={"/"}><ArrowBackIosNewIcon className='iconoBack' />
      </LinkRouter>
      <div id='form-signin'>
        <div id='video-signup'>
          <video
            autoPlay
            loop
            muted
            className='video'
          >
            <source src={VideoFormulario2} type='video/mp4' />
          </video>
        </div>
        <main className="mainFormin">
          <div className="formContainer">
            <form action="" className="form" onSubmit={send} ref={form} id="form">
              <h2 className='subtitle-signup'>Macchiato</h2>

              <fieldset className="fieldsetFrom">

                <label className="labelForm" htmlFor="name">
                  <span className='span-signup'>E-mail</span>
                  <input className="inputFrom" type="email" id="email" name="email" required />
                </label>
                <label className="labelForm" htmlFor="lastName">
                  <span className='span-signup'>Password</span>
                  <input className="inputFrom" type="password" id="password" name="password" />
                </label>

                <div className='contenedor-butonsocial'>
                  <label className="labelForm" >
                    <FacebookSignIn />
                  </label>
                  <label className="labelForm" >
                    <GoogleSignIn />
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
                  <span>Sign In</span>
                </button>
                <span className='linkSingIn'>You don't have an account?<LinkRouter className="linkSingIn" to={"/signUp"} > Sign Up</LinkRouter></span>
              </fieldset>
            </form>
          </div>

        </main>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  signIn: usersActions.signIn
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)