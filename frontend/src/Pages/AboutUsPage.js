import * as React from "react";
import "../Styles/aboutUsPage.css";
import imgFondo from "../img/About.jpg";
import NavBar from '../components/NavBar';
import Devs from "../components/Devs.js";

function AboutUsPage() {
  return (
    <>
    <NavBar />
    <div className="App-header">
      <div className="HeroTitulo">
        <span className="spanTitulo">About Us</span>
        <h3 className="h3">
          Macchiato is a chain of coffee shops of its own and artisanal
          production, whose brand experience is lived in its exclusive premises.
          Considered a French emblem brand, it occupies a privileged place in
          the sentiment of an entire country. It currently has more than 270
          coffee shop distributed throughout Europe, being present in more than
          12 countries.
        </h3>
        <span className="spanSubtitulo">
          Get to know the Macchiato experience
        </span>
        <h3 className="h3">
          Being able to enjoy Macchiato products in a relaxed atmosphere, and at
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
          of the most representative ambassadors of France in the world.
        </h3>
        <span className="Vision">Vision</span>
        <h3 className="h3">
          We want to be a French company with a global reach, recognized for its
          raw materials and services, and excellence in the care of our Stores.
        </h3>
        <span className="Mission">Mission</span>
        <h3 className="h3">
          Elaborate all our products and services with high quality standards,
          maintaining their artisanal and ecological origin. We want to convey
          the Macchiato Experience through our service style: warmth, service
          and passion.
        </h3>
      </div>

      <img alt="hero" className="videoHero" src={imgFondo} />
    </div>
    <Devs/>
    </>
  );
}

export default AboutUsPage;
