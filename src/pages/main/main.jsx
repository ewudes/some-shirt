import React from "react";
import Hero from "../../components/hero/hero";
import Filter from "../../components/filter/filter";
import Products from "../../components/products/products";
import Collections from "../../components/collections/collections";
import Navigation from "../../components/navigation/navigation";
import Extras from "../../components/extras/extras";

import "./main.scss";

const Main = () => (
  <>
    <Hero />

    <section className="products">
      <div className="container">
        <Filter />
        <Products />
      </div>
    </section>

    <section className="collections">
      <div className="container">
        <Collections />
      </div>
    </section>

    <footer className="footer">
      <div className="container footer__container">
        <Navigation />
        <Extras />
      </div>
    </footer>
  </>
);

export default Main;
