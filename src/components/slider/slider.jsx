import React, {useEffect, useRef} from "react";
import "./slider.scss";

const Slider = () => {
  const sliderRef = useRef(null);
  const activeClass = `fade-slider__item--visible`;

  useEffect(() => {
    const slides = sliderRef.current.querySelectorAll(`.fade-slider__item`);
    let index = 0;

    const intervalId = setInterval(() => {
      slides[index].classList.remove(activeClass);
      index = (index + 1) % slides.length;
      slides[index].classList.add(activeClass);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ul className="fade-slider" ref={sliderRef}>
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
            <span className="lined-text__word">Любимые игры</span>
            <span className="lined-text__word lined-text__word--color-yellow">на лучших футболках</span>
          </h1>
        </div>
      </li>
      <li className="fade-slider__item fade-slider__item--style-presents">
        <div className="fade-slider__text">
          <h1 className="lined-text">
            <span className="lined-text__word">Подарки</span>
            <span className="lined-text__word lined-text__word--color-yellow">для любимых</span>
          </h1>
        </div>
      </li>
    </ul>
  );
};

export default Slider;
