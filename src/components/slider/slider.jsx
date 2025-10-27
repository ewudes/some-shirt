import {useEffect, useState} from "react";
import "./slider.scss";

const slides = [
  {
    id: 1,
    className: `slider__item--style-thirts`,
    text: (
      <>
        <span className="lined-text__word">три</span>
        <span className="lined-text__word">футболки</span>
        <span className="lined-text__word lined-text__word--color-yellow">по цене</span>
        <span className="lined-text__word lined-text__word--color-yellow">двух</span>
      </>
    ),
  },
  {
    id: 2,
    className: `slider__item--style-games`,
    text: (
      <>
        <span className="lined-text__word">Любимые игры</span>
        <span className="lined-text__word lined-text__word--color-yellow">на лучших футболках</span>
      </>
    ),
  },
  {
    id: 3,
    className: `slider__item--style-presents`,
    text: (
      <>
        <span className="lined-text__word">Подарки</span>
        <span className="lined-text__word lined-text__word--color-yellow">для любимых</span>
      </>
    ),
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ul className="slider">
      {slides.map((slide, index) => (
        <li
          key={slide.id}
          className={`slider__item ${slide.className} ${index === activeIndex && `slider__item--visible`}`}
        >
          <div className="slider__text">
            <h1 className="lined-text">{slide.text}</h1>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Slider;
