import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/userAction';
import '../Styles/signin.css';

function GoogleSignIn(props) {

    const responseGoogle = async (res) => {

        const userData = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            from: "google",
        }
        await props.signIn(userData)
    }

    return (
        <GoogleLogin
            className="buttonGoogle"
            clientId="842579371648-ndfge64fqe7fainh0mjbo2o5kf4ucivt.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

    );
}

const mapDispatchToProps = {
    signIn: usersActions.signIn,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn);