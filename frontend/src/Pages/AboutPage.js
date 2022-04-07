import React from 'react'
import '../Styles/aboutPage.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


function AboutPage() {
  return (
    <div className='fondo-AboutUs'>
      <NavBar />
      <div className='container-AboutPage'>
        <div className='img-aboutUsPage'></div>          
       
        <div className='container-ppal'>
          <div className='container-textoAbout'>
            <h1 className='tituloh1'>About Macchiato</h1>
            <p className='parrafo-About'>Macchiato is a chain of coffee shops of its own and artisanal
              production, whose brand experience is lived in its exclusive premises.
              Considered a French emblem brand, it occupies a privileged place in
              the sentiment of an entire country. It currently has more than 270
              coffee shop distributed throughout Europe, being present in more than
              12 countries.</p>
          </div>

          <div className='container-videoAbout'>
            <video 
            source={''}
            />
          </div>

          <div className='container-textoAbout'>
            <h2 className='tituloh2'>Get to know the Macchiato experience</h2>
            <p className='parrafo-About'>Being able to enjoy Macchiato products in a relaxed atmosphere, and at
              the same time sharing rewarding moments, were the reasons that gave
              rise to the creation of the Macchiato Coffee concept. Macchiato is a
              pioneer in the spread of specialized coffee Shop, places designed with
              all the comfort and a relaxed atmosphere so that the customer can
              enjoy the Premium quality of its products. Today the Macchiato Coffee
              are part of the urban geography of the main cities throughout France
              and other countries in the world. Macchiato is much more than the best
              coffee, it is a consumption experience in a warm, modern and
              innovative environment, the Macchiato Coffee. The ideal place to share
              the richest coffee with a wide range of naturally made products.
              Macchiato went from being the representation of Paris in the local
              market to being an icon of France in the international market. And one
              of the most representative ambassadors of France in the world.</p>
          </div>

          <div className='container-textoAbout'>
            <h2 className='tituloh2'>Vision</h2>
            <p className='parrafo-About'>We want to be a French company with a global reach, recognized for its
              raw materials and services, and excellence in the care of our Stores.</p>
          </div>

          <div className='container-textoAbout'>
            <h2 className='tituloh2'>Mission</h2>
            <p className='parrafo-About'>Elaborate all our products and services with high quality standards,
              maintaining their artisanal and ecological origin. We want to convey
              the Macchiato Experience through our service style: warmth, service
              and passion.</p>
          </div>
        </div>
      </div>

      <div className='contenedor-developers'>
        <h1 className='h1-developers'>Our passionate team of developers</h1>
        <div className='fotos-developers'>
          <div className='fotos-1ercontenedor'>
            <div className='contenedor-uno'>

            </div>
            <div className='contenedor-dos'>

            </div>
            <div className='contenedor-tres'>

            </div>
          </div>
          <div className='fotos-2ercontenedor'>
            <div className='contenedor-uno'>

            </div>
            <div className='contenedor-dos'>

            </div>
            <div className='contenedor-tres'>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage