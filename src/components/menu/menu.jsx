import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = () => {
  return (
    <nav className="side-menu sidebar__menu">
      <ul className="side-menu__list">
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Детская коллекция</Link>
        </li>
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Мужская коллекция</Link>
        </li>
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Женская коллекция</Link>
        </li>
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Популярные принты</Link>
        </li>
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Новые принты</Link>
        </li>
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Специальные предложения</Link>
        </li>
        <li className="side-menu__item">
          <Link to="" className="side-menu__link">Скоро в продаже</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
