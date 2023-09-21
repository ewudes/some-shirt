import React from "react";

import "./slider.scss";

const Slider = () => {
  const slides = document.querySelectorAll(`.fade-slider__item`);
  const activeClass = `fade-slider__item--visible`;
  let index = 0;
  setInterval(function () {
    slides[index].classList.remove(activeClass);
    index++;
    if (index + 1 > slides.length) {
      index = 0;
    }
    slides[index].classList.add(activeClass);
  }, 5000);

  return (
    <ul className="fade-slider">
      <li className="fade-slider__item fade-slider__item--style-thirts fade-slider__item--visible">
        <div className="fade-slider__text">
          <h1 className="lined-text">
            <span className="lined-text__word">три</span>
            <span className="lined-text__word">футболки</span>
            <span className="lined-text__word lined-text__word--color-yellow">по цене</span>
            <span className="lined-text__word lined-text__word--color-yellow">двух</span>
          </h1>
        </div>
      </li>
      <li className="fade-slider__item fade-slider__item--style-games">
        <div className="fade-slider__text">
          <h1 className="lined-text">
            <div className="lined-text__word">Любимые игры</div>
            <div className="lined-text__word lined-text__word--color-yellow">на лучших футболках</div>
          </h1>
        </div>
      </li>
      <li className="fade-slider__item fade-slider__item--style-presents">
        <div className="fade-slider__text">
          <h1 className="lined-text">
            <div className="lined-text__word">Подарки</div>
            <div className="lined-text__word lined-text__word--color-yellow">для любимых</div>
          </h1>
        </div>
      </li>
    </ul>
  );
};

export default Slider;
