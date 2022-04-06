import React from "react";
// import video from "../media/viaje1.mp4"
import "../Styles/hero.css"
import imgFondo from '../img/caffe2.jpg'

function Hero() {
    return (
        <div className='App-header'>
            {/* <div id='nav' className="overlay"></div> */}
            <div className="heroTitulo">
                <span className="spanTitulo">
                The best coffee in the world,
                </span>
                <h1 className="h1">you find it in Macchiato</h1>
                <a href="#">
                    <div className="scroll-down"></div>
                </a>
            </div>
            
            <img alt="hero" className="videoHero" src={imgFondo}/>
        </div>

    )
}

export default Hero