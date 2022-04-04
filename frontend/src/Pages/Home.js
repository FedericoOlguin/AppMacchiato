import '../App.css';
import Hero from "../components/Hero"

import React from 'react';


function Home() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <main key={"main"}>
        {/* <BotonCities /> */}
        {/* <Caraousel /> */}
      </main>
    </>
  );
}

export default Home;



