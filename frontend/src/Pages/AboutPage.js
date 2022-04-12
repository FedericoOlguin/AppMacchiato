import React from 'react'
import '../Styles/aboutPage.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import VideoMacchiato from '../img/videoMacchiato.mp4';
import fernanda from '../img/fernanda.jpg';
import marcia from '../img/marcia.jpg'
import fede from '../img/federico.jpg'
import sebas from '../img/sebastian.jpg'
import dani from '../img/daniel.jpg'
import hernan from '../img/hernan.jpg'


function AboutPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


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
              autoPlay
              loop
              muted
              className='video-AboutUs'
            >
              <source src={VideoMacchiato} type='video/mp4' />
            </video>
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

          <div className='container-textoAbout'>
            <h2 className='tituloh2'>Get to know the Macchiato experience</h2>
            <p className='parrafo-About'>Being able to enjoy Macchiato products in a relaxed atmosphere, and at
              the same time sharing rewarding moments, were the reasons that gave
              rise to the creation of the Macchiato Coffee concept. Macchiato is a
              pioneer in the spread of specialized coffee Shop, places designed with
              all the comfort and a relaxed atmosphere so that the customer can
              enjoy the Premium quality of its products.</p>
          </div>


        </div>
      </div>

      <h1 className='h1-developers'>Our passionate team of developers</h1>
      <div className='contenedor-developers'>
        <div className='fotos-developers'>

          <div className='fotos-contenedor'>

            <div className='contenedorLinkedIn'>
              <a target="_blank" rel="noreferrer nopener" href="https://www.linkedin.com/in/marcia-montivero-gutierrez-383009207/"><img src={marcia} alt='desarrollador' className='img-dev' /></a>
              <h3 className='nombreDesarrollador'>Marcia Montivero</h3>
            </div>

            <div className='contenedorLinkedIn'>
              <a target="_blank" rel="noreferrer nopener" href="https://www.linkedin.com/in/federico-olgu%C3%ADn-1b405b201/"><img src={fede} alt='desarrollador' className='img-dev' /></a>
              <h3 className='nombreDesarrollador'>Federico Olguín</h3>
            </div>

            <div className='contenedorLinkedIn'>
              <a target="_blank" rel="noreferrer nopener" href="https://www.linkedin.com/in/hernan-funes-50301421b/"><img src={hernan} alt='desarrollador' className='img-dev' /></a>
              <h3 className='nombreDesarrollador'>Hernán Funes</h3>
            </div>

          </div>

          <div className='fotos-contenedor'>

            <div className='contenedorLinkedIn'>
              <a target="_blank" rel="noreferrer nopener" href="https://www.linkedin.com/in/fernanda-arrieta-755665b0/"><img src={fernanda} className='img-dev' alt='desarrollador' /></a>
              <h3 className='nombreDesarrollador'>Fernanda Arrieta</h3>
            </div>

            <div className='contenedorLinkedIn'>
              <a target="_blank" rel="noreferrer nopener" href="https://www.linkedin.com/in/juan-sebastian-londo%C3%B1o-cossio-9444781b7/"><img src={sebas} alt='desarrollador' className='img-dev' /></a>
              <h3 className='nombreDesarrollador'>Sebastian Londoño</h3>
            </div>

            <div className='contenedorLinkedIn'>
              <a target="_blank" rel="noreferrer nopener" href="https://www.linkedin.com/in/daniel-mart%C3%ADnez-casta%C3%B1eda-8b363b15a/"><img src={dani} alt='desarrollador' className='img-dev' /></a>              <h3 className='nombreDesarrollador'>Daniel Martinez</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage