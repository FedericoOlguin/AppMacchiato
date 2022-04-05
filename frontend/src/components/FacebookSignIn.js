import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import usuariosActions from "../redux/actions/usuariosActions"
import '../styles/signUp.css'

function FacebookSignIn(props) {

    const responseFacebook = async (res) => {
        // console.log(res)
        const userObj = {
            email: res.email,
            password: res.id,
            from: "facebook"
        }
        props.signIn(userObj)
    }

    return (
        <FacebookLogin
            cssClass="buttonFacebook"
            icon="fa-facebook"
            textButton=" SignIn with Facebook"
            appId="726721372045263"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
    );
}
const mapDispatchToProps = {
    signIn: usuariosActions.signIn

}

export default connect(null, mapDispatchToProps)(FacebookSignIn);

