import React from "react";
// import video from "../media/viaje1.mp4"
import "../Styles/hero.css"

function Hero() {
    return (
        <div className='App-header'>
            <div className="overlay"></div>
            <div className="heroTitulo">
                <span className="spanTitulo">
                The best coffee in the world,
                </span>
                <h1 className="h1">you find it in Macchiato</h1>
                <a href="#cities">
                    <div className="scroll-down"></div>
                </a>
            </div>
            <img alt="hero" className="videoHero" src="https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        </div>

    )
}

export default Hero