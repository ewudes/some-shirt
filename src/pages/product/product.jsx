import React from "react";
import {Link} from "react-router-dom";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./product.scss";

const headerTitleWords = [
  {text: `три`},
  {text: `футболки`},
  {text: `по цене`, yellow: true},
  {text: `двух`, yellow: true},
];

const sizes = [
  {label: `XXS`, disabled: true},
  {label: `XS`, disabled: true},
  {label: `S`, disabled: false},
  {label: `M`, disabled: false},
  {label: `L`, disabled: false},
  {label: `3XL`, disabled: true},
];

const colors = [
  {hex: `#2f2c25`, img: `./img/tshirts/tshirt_07.png`, checked: true},
  {hex: `#e0d9c8`, img: `./img/tshirts/tshirt_08.png`},
  {hex: `#529029`, img: `./img/tshirts/tshirt_09.png`},
  {hex: `#39498d`, img: `./img/tshirts/tshirt_10.png`},
  {hex: `#d82727`, img: `./img/tshirts/tshirt_11.png`},
];

const tabLinks = [
  {id: `desc`, label: `Описание`},
  {id: `sizes`, label: `таблица размеров`},
  {id: `delivery`, label: `условия доставки`},
  {id: `about`, label: `о бренде`},
];

const careInstructions = [
  {icon: `washing_01`, text: `Стирать при температуре 30°C`},
  {icon: `washing_02`, text: `Не отбеливать`},
  {icon: `washing_03`, text: `Гладить теплым утюгом с внутренней стороны`},
  {icon: `washing_04`, text: `Не подвергать химичисткой чистке`},
  {icon: `washing_05`, text: `Не сушить в барабане`},
];

const tableHeader = [`Мужские`, ``, `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL`];
const tableRows = [
  [`Размер RUS`, ``, `44`, `46`, `48`, `50`, `52`, `54`, `56`],
];

const footerData = [
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

const socialIcons = [`fb`, `twitter`, `insta`, `pin`];

const Product = () => (
  <div className="wrapper">
    <header className="inner-header">
      <div className="container inner-header__container">
        <Link to="/" className="logo">
          <img
            src="./img/content/logos/logo-main.png"
            alt="Логотип"
            className="logo__image"
          />
        </Link>

        <div className="inner-header__title">
          <h1 className="lined-text inner-header__title-text lined-text--small">
            {headerTitleWords.map(({text, yellow}, index) => (
              <span
                key={index}
                className={`lined-text__word${yellow && ` lined-text__word--yellow`}`}
              >
                {text}
              </span>
            ))}
          </h1>
        </div>

        <Link to="mailto:lostinspace@mail.ru" className="mail">
          <div className="mail__title">По всем вопросам пишите на:</div>
          <div className="mail__content">lostinspace@mail.ru</div>
        </Link>
      </div>
    </header>
    <main className="page-content">
      <div className="container page-content__container">
        <div className="product-showroom">
          <div className="product-showroom__pic">
            <img
              src="./img/tshirts/tshirt_07.png"
              alt="Футболка Rick and Morty"
              className="product-showroom__pic-image"
            />
          </div>

          <div className="product-showroom__info">
            <div className="product-showroom__info-row">
              <div className="product-showroom__type">Футболка Hurley</div>
              <div className="product-showroom__title">Rick and Morty</div>
              <div className="product-showroom__price">2 800</div>
            </div>

            <div className="product-showroom__info-row">
              <ul className="product-showroom__data">
                <li className="product-showroom__data-row">Состав: Хлопок 100%</li>
                <li className="product-showroom__data-row">Сезон: Мульти</li>
                <li className="product-showroom__data-row">Цвет: Черный</li>
                <li className="product-showroom__data-row">Узор: Рисунки и надписи</li>
                <li className="product-showroom__data-row">Страна производства: Россия</li>
                <li className="product-showroom__data-row">Артикул: MA002EWDOEZ6</li>
              </ul>
            </div>

            <div className="product-showroom__info-row">
              <div className="product-showroom__selector">
                <ul className="product-sizes">
                  {sizes.map(({label, disabled}) => (
                    <li
                      key={label}
                      className={`product-sizes__item${disabled && ` product-sizes__item--disabled`}`}
                    >
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          disabled={disabled}
                          className="product-sizes__switcher-control"
                        />
                        <div className="product-sizes__display">{label}</div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product__selector">
                <ul className="product-colors">
                  {colors.map(({hex, img, checked}) => (
                    <li key={hex} className="product-colors__item">
                      <label className="product-colors__block">
                        <input
                          type="radio"
                          name="color"
                          className="product-colors__radio"
                          data-imgpath={img}
                          defaultChecked={checked}
                        />
                        <div className="product-colors__display">
                          <div
                            className="product-colors__display-color"
                            style={{background: hex}}
                          />
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product__btns">
                <Link to="#" className="btn btn--big">
                  Купить
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tabs">
          <div className="product-tabs__selector">
            <ul className="products-filter">
              {tabLinks.map((tab, i) => (
                <li
                  key={tab.id}
                  className={`products-filter__item${i === 0 && ` products-filter__item--active`}`}
                >
                  <Link to={`#${tab.id}`} className="products-filter__link">
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="product-tabs__content">
            <li id="desc" className="product-tabs__content-item product-tabs__content-item--active">
              <div className="product-tabs__view product-desc">
                <ul className="product-desc__care-list">
                  {careInstructions.map(({icon, text}) => (
                    <li key={icon} className="product-desc__care-item">
                      <svg className="product-desc__icon">
                        <use xlinkHref={`${IconsSVG}#${icon}`} />
                      </svg>
                      <div className="product-desc__text">{text}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-tabs__text">
                <p>
                  Футболка из приятной ткани с качественным принтом, это одна
                  из самых универсальных вещей в гардеробе. Она подойдет и для
                  занятий спортом, и для прогулок, и для работы, если разрешен
                  свободный дресс-код.
                </p>
              </div>
            </li>

            <li id="sizes" className="product-tabs__content-item">
              <div className="product-tabs__view product-measure">
                <img src="./img/tshirts/tshirt_00.png" alt="" className="product-measure__pic" />
                <ol className="product-measure__list">
                  <li className="product-measure__item">
                    Измерьте ширину, см. (от подмышки до подмышки)
                  </li>
                  <li className="product-measure__item">
                    Измерьте длину, см. (от верхней точки плеча до низа)
                  </li>
                  <li className="product-measure__item">Сверьте данные с таблицей</li>
                </ol>
              </div>
              <div className="product-tabs__text product-tabs__text--without-paddings">
                {[...Array(2)].map((_, idx) => (
                  <table className="measures-table" key={idx}>
                    <thead>
                      <tr>
                        {tableHeader.map((head, i) => (
                          <th key={i}>{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            </li>

            <li id="delivery" className="product-tabs__content-item">
              <div className="product-tabs__view">
                <img src="./img/content/logos/harley.png" alt="" className="product-tabs__pic" />
              </div>
              <div className="product-tabs__text">
                <p>
                  Доставка по России и странам Ближнего Зарубежья (Украина, Белорусия, Молдавия, Польша и др.) — 400 руб.
                  Также доставка в США, Японию, Австралию, Англию, Италию, Испанию и др. — около 600 руб.
                  (Цена ориентировочная и может меняться в зависимости от региона и веса).
                </p>
              </div>
            </li>

            <li id="about" className="product-tabs__content-item">
              <div className="product-tabs__view">
                <img src="./img/content/logos/express.png" alt="" className="product-tabs__pic" />
              </div>
              <div className="product-tabs__text">
                <p>
                  Марка Hurley основана на любви к океану с его постоянством в этом изменчивом мире. Она сочетает музыку и
                  искусство в дизайне одежды, обуви и аксессуаров. Наполненная духом пляжной культуры продукция Hurley предлагает
                  новое восприятие комфорта и индивидуальности. Hurley выбирает только тот, кто страстно влюблён в свободу.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer className="footer">
      <div className="container footer__container">
        <nav className="footer-menu">
          <ul className="footer-menu__sections">
            {footerData.map(({title, links}) => (
              <li key={title} className="footer-menu__col">
                <div className="footer-menu__title">{title}</div>
                <ul className="footer-menu__list">
                  {links.map((text) => (
                    <li key={text} className="footer-menu__item">
                      <Link to="#" className="footer-menu__link">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="footer-menu__col">
              <div className="footer-menu__title">Контактная информация</div>
              <div className="footer-menu__text">
                <p>
                  Санкт-Петербург, <br />
                  ул. Жуковского, д. 12
                </p>
                <p>
                  Телефон: 8 (812) 315-72-35 <br />
                  Email: support@yourwebsite.com
                </p>
              </div>
            </li>
          </ul>
        </nav>

        <div className="adds">
          <div className="adds__col">
            <div className="adds__best">
              лучшие принты <br />
              2019 года
            </div>
          </div>
          <div className="adds__col">
            <div className="adds__col-socials">
              <ul className="socials">
                {socialIcons.map((icon) => (
                  <li key={icon} className="socials__item">
                    <Link to="#" className="socials__link">
                      <svg className="socials__icon">
                        <use xlinkHref={`${IconsSVG}#${icon}`}></use>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Product;
