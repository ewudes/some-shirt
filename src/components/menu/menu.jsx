import React from "react";
import {Link} from "react-router-dom";

import "./menu.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="" className="menu__link">Детская коллекция</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="menu__link">Мужская коллекция</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="menu__link">Женская коллекция</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="menu__link">Популярные принты</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="menu__link">Новые принты</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="menu__link">Специальные предложения</Link>
        </li>
        <li className="menu__item">
          <Link to="" className="menu__link">Скоро в продаже</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
