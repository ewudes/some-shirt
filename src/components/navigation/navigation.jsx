import React from "react";
import {Link} from "react-router-dom";

import "./navigation.scss";

const menuData = [
  {
    title: `Информация`,
    links: [
      `О магазине`,
      `Адреса магазинов`,
      `Как сделать заказ?`,
      `Обмен и возврат`,
      `Отзывы`,
    ],
  },
  {
    title: `Футболки`,
    links: [
      `Популярное`,
      `Новинки`,
      `Бестселлеры`,
      `Специальные предложения`,
      `Скоро в продаже`,
    ],
  },
  {
    title: `Коллекции`,
    links: [
      `Детская коллекция`,
      `Женская коллекция`,
      `Мужская коллекция`,
      `Лучшие принты 2018 года`,
      `Лучшие принты 2019 года`,
    ],
  },
];

const contactInfo = {
  address: [`Санкт-Петербург,`, `ул.Жуковского, д.12`],
  phone: {href: `tel:+78123157235`, text: `Телефон: 8(812)315-72-35`},
  email: {href: `mailto:support@yourwebsite.com`, text: `Email: support@yourwebsite.com`},
};

const Navigation = () => (
  <nav className="site-menu">
    <ul className="site-menu__sections">
      {menuData.map(({title, links}) => (
        <li key={title} className="site-menu__col">
          <h3 className="site-menu__title">{title}</h3>
          <ul className="site-menu__list">
            {links.map((text) => (
              <li key={text} className="site-menu__item">
                <Link to="" className="site-menu__link">{text}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
      <li className="site-menu__col">
        <h3 className="site-menu__title">Контактная информация</h3>
        <div className="site-menu__text">
          {contactInfo.address.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="site-menu__text">
          <Link to={contactInfo.phone.href} className="site-menu__text-row">
            {contactInfo.phone.text}
          </Link>
          <Link to={contactInfo.email.href} className="site-menu__text-row">
            {contactInfo.email.text}
          </Link>
        </div>
      </li>
    </ul>
  </nav>
);

export default Navigation;
