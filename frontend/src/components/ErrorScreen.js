import React from "react";
import "../App.css";
import { Link as LinkRouter } from "react-router-dom"




const ErrorScreen = () => {
    return (

        < div className="errorScreen">
            < div className="otroError">
                <p className="numErr">404</p>
                <h1 className="tituloError"> You need authorization to access</h1>
                <LinkRouter className="toHome" to={"/"}> To home</LinkRouter>
            </div >
        </div >

    )
}

export default ErrorScreen