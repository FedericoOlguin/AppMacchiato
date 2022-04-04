import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usuariosActions from "../redux/actions/usuariosActions"
import '../styles/signUp.css'

function GoogleSignUp(props) {

    const responseGoogle = async (res) => {
        console.log(res)

        const userData = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
            country: "Argentina",
            from: "google",
            // pais: props.pais
        }
        await props.signUp(userData)
    }

    return (
        <GoogleLogin
            className="buttonGoogle"
            clientId="842579371648-ndfge64fqe7fainh0mjbo2o5kf4ucivt.apps.googleusercontent.com"
            buttonText="SignUp with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

    );
}

const mapDispatchToProps = {
    signUp: usuariosActions.signUp,

}

export default connect(null, mapDispatchToProps)(GoogleSignUp);