import React from "react";
import { Link, NavLink } from "react-router-dom";
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
  return (
    <div className="wrapper">
      <section className="hero">
        <Header />
        <div className="hero__content">
          <Slider />
        </div>
        <aside className="sidebar">
          <Link to="" className="sidebar__hamburger">
            <svg>
              <use xlinkHref={`${IconsSVG}#bars`}></use>
            </svg>
          </Link>
          <div className="sidebar__header">
            <NavLink href="#" className="logo">
              <img src={require("../../static/img/content/logos/logo-main.png")} alt="" className="logo__image"></img>
              
              <Link to="" className="sidebar__close">
                <svg className="sidebar__close-icon">
                  <use xlinkHref={`${IconsSVG}#cross`}></use>
                </svg>
              </Link>
            </NavLink>
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
}

export default Main;