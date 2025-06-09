import React, {useState} from "react";
import {Link} from "react-router-dom";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Menu from "../../components/menu/menu";
import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";
import Collections from "../../components/collections/collections";
import Navigation from "../../components/navigation/navigation";
import Extras from "../../components/extras/extras";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./main.scss";

const Main = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu((current) => !current);
  };

  return (
    <div className="wrapper">
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
              <img src={require(`../../static/img/content/logos/logo-main.png`)} width={100} height={100} alt="" className="logo__image"></img>
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

      <section className="products">
        <div className="container">
          <Filter />
          <Products />
        </div>
      </section>

      <div className="collections">
        <div className="container">
          <Collections />
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__container">
          <Navigation />
          <Extras />
        </div>
      </footer>
    </div>
  );
};

export default Main;
