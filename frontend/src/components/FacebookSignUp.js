import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import usuariosActions from "../redux/actions/usuariosActions"
import '../styles/signUp.css'

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    // console.log(res)
    let nombre = res.name.split(" ")
    const userObj = {
      firstName: nombre[0],
      lastName: nombre[1],
      email: res.email,
      imageUrl: res.picture.data.url,
      password: res.id,
      country:"Argentina",
      from: "facebook"
    }
    props.signUp(userObj)
  }

  return (
    <FacebookLogin
      cssClass="buttonFacebook"
      icon="fa-facebook"
      textButton=" SignUp with Facebook"
      appId="726721372045263"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signUp: usuariosActions.signUp,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);

