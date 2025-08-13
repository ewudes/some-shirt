import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import "./products.scss";

const productData = [
  {
    id: 1,
    price: 1300,
    image: `tshirt_01.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `new bestsellers`,
  },
  {
    id: 2,
    price: 1800,
    image: `tshirt_02.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `new specials soon`,
  },
  {
    id: 3,
    price: 2000,
    image: `tshirt_03.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `products__item--color-black products__item--size-double soon bestsellers`,
  },
  {
    id: 4,
    price: 1800,
    image: `tshirt_04.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `products__item--color-black products__item--size-double specials`,
  },
  {
    id: 5,
    price: 1800,
    image: `tshirt_05.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `specials popular bestsellers`,
  },
  {
    id: 6,
    price: 1800,
    image: `tshirt_06.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `soon popular`,
  },
];

const ProductItem = ({price, image, desc, className}) => (
  <li className={`products__item ${className}`}>
    <div className="products__price">
      <div className="products__price-amount">{price.toLocaleString(`ru-RU`)}</div>
    </div>
    <div className="products__content">
      <img
        src={require(`../../static/img/tshirts/${image}`)}
        alt="bo-jack tshirt"
        className="products__img"
      />
      <div className="products__desc">
        <div className="products__desc-text">{desc}</div>
        <Link to="/product" className="btn">Подробнее</Link>
      </div>
    </div>
  </li>
);

const Products = () => (
  <ul className="products__list">
    {productData.map((product) => (
      <ProductItem key={product.id} {...product} />
    ))}
  </ul>
);

ProductItem.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Products;
