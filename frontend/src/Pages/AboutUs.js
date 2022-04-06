import * as React from 'react';
import "../Styles/AboutUs.css"
import imgFondo from '../img/image2.jpg';

function AboutUs() {
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
            
            <img alt="hero" className="videoHero" src={imgFondo}/>
        </div>

    )
}

export default AboutUs