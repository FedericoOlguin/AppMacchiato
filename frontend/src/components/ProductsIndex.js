import React from 'react'
import machineCoffe from "../img/machineCoffe.jpg"
import coffePack from "../img/coffePack.jpg"
import barista from "../img/barista.jpg"
import creations from "../img/creations.jpg"
import "../Styles/productsIndex.css"

const ProductsIndex = () => {

    return (

        <div className='productsIndex'>

            <h1> What do you find in our stores ?</h1>

            <div className='section'>
                <img alt='cardPho' src={coffePack} className="imagenHeader" />
                <div className='txtCard'>
                    <h2> Exclusive Coffes From Around the World</h2>
                    <h4> In our stores you can try a lot of different and exclusive coffees, as well as take some to your home and share with your family. </h4>
                </div>
            </div>

            <div className='section'>
                <div className='txtCard'>
                    <h2> Professional Coffe Maker </h2>
                    <h4> Give your bussines the best tool to get the btter tastie and texture coffes, prepair in a few minutes Capuccinos, Moccachinos, or inclusive some delicius Macchiatos </h4>
                </div>
                <img alt='cardPho' src={machineCoffe} className="imagenHeader" />
            </div>

            <div className='section'>
                <img alt='cardPho' src={barista} className="imagenHeader" />
                <div className='txtCard'>
                    <h2> Baristas Team </h2>
                    <h4> We have to you a special team of experts baristas that will be ready to your special events, or to give you a class of how to do the specials types of coffee that your business require. </h4>
                </div>
            </div>

            <div className='section'>
                <div className='txtCard'>
                    <h2> Late Art Show </h2>
                    <h4> Enjoy of the beautifull creations that we have to you, our barista's team are prepared to attend and give you the pretier and artistic creations into your Late, choose into different kinds of images. </h4>
                </div>
                <img alt='cardPho' src={creations} className="imagenHeader" />
            </div>

        </div>

    )
}

export default ProductsIndex