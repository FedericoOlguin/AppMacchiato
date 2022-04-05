import '../App.css';
import Hero from "../components/Hero"
import NavBar from '../components/NavBar'
import React from 'react';
import AboutUs from '../components/aboutUs';


function Home() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar/>
      <Hero />
      <AboutUs/>
      <main key={"main"}>
        {/* <BotonCities /> */}
        {/* <Caraousel /> */}
      </main>
    </>
  );
}

export default Home;



