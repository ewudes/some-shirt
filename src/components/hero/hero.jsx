import React from "react";
import Header from "../header/header";
import Slider from "../slider/slider";
import Sidebar from "../sidebar/sidebar";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./hero.scss";

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero__content">
      <Slider />
    </div>
    <Sidebar />
    <a href="#" className="hero__arrow">
      <svg className="hero__arrow-icon">
        <use xlinkHref={`${IconsSVG}#arrow`} />
      </svg>
    </a>
  </section>
);

export default Hero;
