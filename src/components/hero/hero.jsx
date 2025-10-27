import Header from "../header/header";
import Slider from "../slider/slider";
import Sidebar from "../sidebar/sidebar";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./hero.scss";

const Hero = () => {
  const scrollToProduct = (e) => {
    e.preventDefault();
    const productSection = document.getElementById(`products`);
    if (productSection) {
      productSection.scrollIntoView({behavior: `smooth`});
    }
  };

  return (
    <section className="hero">
      <Header />
      <div className="hero__content">
        <Slider />
      </div>
      <Sidebar />
      <a href="#" className="hero__arrow" onClick={scrollToProduct}>
        <svg className="hero__arrow-icon">
          <use xlinkHref={`${IconsSVG}#arrow`} />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
