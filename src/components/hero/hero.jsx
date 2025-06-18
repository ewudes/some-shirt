import React from "react";
import Header from "../header/header";
import Slider from "../slider/slider";
import Sidebar from "../sidebar/sidebar";

import "./hero.scss";

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero__content">
      <Slider />
    </div>
    <Sidebar />
  </section>
);

export default Hero;
