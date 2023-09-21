import React from "react";
import {Link} from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="site-menu">
      <ul className="site-menu__sections">
        <li className="site-menu__col">
          <h3 className="site-menu__title">Информация</h3>
          <ul className="site-menu__list">
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">О магазине</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Адреса магазинов</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Как сделать заказ?</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Обмен и возврат</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Отзывы</Link>
            </li>
          </ul>
        </li>
        <li className="site-menu__col">
          <h3 className="site-menu__title">Футболки</h3>
          <ul className="site-menu__list">
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Популярное</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Новинки</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Бестселлеры</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Специальные предложения</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Скоро в продаже</Link>
            </li>
          </ul>
        </li>
        <li className="site-menu__col">
          <h3 className="site-menu__title">Коллекции</h3>
          <ul className="site-menu__list">
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Детская коллекция</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Женская коллекция</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Мужская коллекция</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Лучшие принты 2018 года</Link>
            </li>
            <li className="site-menu__item">
              <Link to="" className="site-menu__link">Лучшие принты 2019 года</Link>
            </li>
          </ul>
        </li>
        <li className="site-menu__col">
          <h3 className="site-menu__title">Контактная информация</h3>
          <div className="site-menu__text">
            Санкт-Петербург, <br/>
            ул.Жуковского, д.12
          </div>
          <div className="site-menu__text">
            <Link to="tel:+78123157235" className="site-menu__text-row">
              Телефон: 8(812)315-72-35
            </Link>
            <Link to="mailto:support@yourwebsite.com" className="site-menu__text-row">
              Email: support@yourwebsite.com
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
