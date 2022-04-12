import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import usersActions from '../redux/actions/userAction';
import '../Styles/signin.css';

function FacebookSignIn(props) {

    const responseFacebook = async (res) => {
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
            textButton="Facebook"
            appId="726721372045263"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
    );
}
const mapDispatchToProps = {
    signIn: usersActions.signIn

}

export default connect(null, mapDispatchToProps)(FacebookSignIn);

