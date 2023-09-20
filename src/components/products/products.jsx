import React from "react";
import { Link } from "react-router-dom";

import "./products.scss";

const Products = () => {
  return (
    <ul className="products__list">
      <li className="products__item new bestsellers">
        <div className="products__price">
          <div className="products__price-amount">1 800</div>
        </div>
        <div className="products__content">
          <img src={require("../../static/img/tshirts/tshirt_01.png")} alt="bo-jack tshirt" className="products__img"></img>
          <div className="products__desc">
            <div className="products__desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <Link to="" className="btn">Подробнее</Link>
          </div>
        </div>
      </li>
      <li className="products__item new specials soon">
        <div className="products__price">
          <div className="products__price-amount">1 800</div>
        </div>
        <div className="products__content">
          <img src={require("../../static/img/tshirts/tshirt_02.png")} alt="bo-jack tshirt" className="products__img"></img>
          <div className="products__desc">
            <div className="products__desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <Link to="" className="btn">Подробнее</Link>
          </div>
        </div>
      </li>
      <li className="products__item products__item--color-black products__item--size-double soon bestsellers">
        <div className="products__price">
          <div className="products__price-amount">1 800</div>
        </div>
        <div className="products__content">
          <img src={require("../../static/img/tshirts/tshirt_03.png")} alt="bo-jack tshirt" className="products__img"></img>
          <div className="products__desc">
            <div className="products__desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <Link to="" className="btn">Подробнее</Link>
          </div>
        </div>
      </li>
      <li className="products__item products__item--color-black products__item--size-double specials">
        <div className="products__price">
          <div className="products__price-amount">1 800</div>
        </div>
        <div className="products__content">
          <img src={require("../../static/img/tshirts/tshirt_04.png")} alt="bo-jack tshirt" className="products__img"></img>
          <div className="products__desc">
            <div className="products__desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <Link to="" className="btn">Подробнее</Link>
          </div>
        </div>
      </li>
      <li className="products__item specials popular bestsellers">
        <div className="products__price">
          <div className="products__price-amount">1 800</div>
        </div>
        <div className="products__content">
          <img src={require("../../static/img/tshirts/tshirt_05.png")} alt="bo-jack tshirt" className="products__img"></img>
          <div className="products__desc">
            <div className="products__desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <Link to="" className="btn">Подробнее</Link>
          </div>
        </div>
      </li>
      <li className="products__item soon popular">
        <div className="products__price">
          <div className="products__price-amount">1 800</div>
        </div>
        <div className="products__content">
          <img src={require("../../static/img/tshirts/tshirt_06.png")} alt="bo-jack tshirt" className="products__img"></img>
          <div className="products__desc">
            <div className="products__desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <Link to="" className="btn">Подробнее</Link>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Products;