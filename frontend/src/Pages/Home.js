import '../App.css';
import Hero from "../components/Hero"
import NavBar from '../components/NavBar'
import React,{useState} from 'react';
import AboutUs from '../components/aboutUs';
import scrollUp from '../img/scrollUp.svg';
import ProductsIndex from '../components/ProductsIndex';
import Footer from '../components/Footer';

function Home() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [color, setColor] = useState(false)
  const changeColor = () => {
      if (window.scrollY <= 500) {
          setColor(true)
      } else {
          setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <>
      <div className='main'>
        <NavBar />
        <Hero />
        <AboutUs />
        {/* <ProductsIndex/> */}
        
        <a href="#nav">

          <img alt='scroll' src={scrollUp} className={color ? ('scarollUp') : ("scarollUp2")} />
        </a>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default Home;



