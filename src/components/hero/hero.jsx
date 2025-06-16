import React, {useState} from "react";
import {Link} from "react-router-dom";
import Header from "../header/header";
import Slider from "../slider/slider";
import Menu from "../menu/menu";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./hero.scss";

const Hero = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu((current) => !current);
  };

  return (
    <section className="hero">
      <Header />
      <div className="hero__content">
        <Slider />
      </div>
      <aside className={`${isShowMenu ? `sidebar--opened` : ``} sidebar`}>
        <Link to="" className="sidebar__hamburger" onClick={handleShowMenu}>
          <svg className="sidebar__hamburger-icon">
            <use xlinkHref={`${IconsSVG}#bars`}></use>
          </svg>
        </Link>
        <div className="sidebar__header">
          <div className="logo">
            <img
              src={require(`../../static/img/content/logos/logo-main.png`)}
              width={100}
              height={100}
              alt=""
              className="logo__image"
            ></img>
            <Link to="" className="sidebar__close" onClick={handleShowMenu}>
              <svg className="sidebar__close-icon">
                <use xlinkHref={`${IconsSVG}#cross`}></use>
              </svg>
            </Link>
          </div>
        </div>
        <Menu />
      </aside>
    </section>
  );
};

export default Hero;
