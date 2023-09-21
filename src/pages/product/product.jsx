import React from "react";
import {Link} from "react-router-dom";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./product.scss";

const Product = () => {
  return (
    <div className="wrapper">
      <header className="inner-header">
        <div className="container inner-header__container">
          <Link to="/" className="logo">
            <img
              src="./img/content/logos/logo-main.png"
              alt=""
              className="logo__image"
            />
          </Link>
          <div className="inner-header__title">
            <h1 className="lined-text inner-header__title-text lined-text--small">
              <span className="lined-text__word">три</span>
              <span className="lined-text__word">футболки</span>
              <span className="lined-text__word lined-text__word--yellow">
                по цене
              </span>
              <span className="lined-text__word lined-text__word--yellow">
                двух
              </span>
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
                alt=""
                className="product-showroom__pic-image"
              />
            </div>
            <div className="product-showroom__info">
              <div className="product-showroom__info-row">
                <div className="product-showroom__type">Футболка Hurley</div>
                <div className="product-showroom__title">Rick and Morty</div>
                <div className="product-showroom__price"> 2 800</div>
              </div>
              <div className="product-showroom__info-row">
                <ul className="product-showroom__data">
                  <li className="product-showroom__data-row">
                    Состав: Хлопок 100%
                  </li>
                  <li className="product-showroom__data-row">Сезон: Мульти</li>
                  <li className="product-showroom__data-row">Цвет: Черный</li>
                  <li className="product-showroom__data-row">
                    Узор: Рисунки и надписи
                  </li>
                  <li className="product-showroom__data-row">
                    {` `}
                    Страна производства: Россия
                  </li>
                  <li className="product-showroom__data-row">
                    Артикул: MA002EWDOEZ6
                  </li>
                </ul>
              </div>
              <div className="product-showroom__info-row">
                <div className="product-showroom__selector">
                  <ul className="product-sizes">
                    <li className="product-sizes__item product-sizes__item--disabled">
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          disabled
                          className="product-sizes__switcher-control"
                        />
                        <div className="product-sizes__display">XXS</div>
                      </label>
                    </li>
                    <li className="product-sizes__item product-sizes__item--disabled">
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          className="product-sizes__switcher-control"
                          disabled
                        />
                        <div className="product-sizes__display">XS</div>
                      </label>
                    </li>
                    <li className="product-sizes__item">
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          className="product-sizes__switcher-control"
                        />
                        <div className="product-sizes__display">S</div>
                      </label>
                    </li>
                    <li className="product-sizes__item">
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          className="product-sizes__switcher-control"
                        />
                        <div className="product-sizes__display">M</div>
                      </label>
                    </li>
                    <li className="product-sizes__item">
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          className="product-sizes__switcher-control"
                        />
                        <div className="product-sizes__display">L</div>
                      </label>
                    </li>
                    <li className="product-sizes__item product-sizes__item--disabled">
                      <label className="product-sizes__switcher">
                        <input
                          type="radio"
                          name="size"
                          className="product-sizes__switcher-control"
                          disabled
                        />
                        <div className="product-sizes__display">3XL</div>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="product__selector">
                  <ul className="product-colors">
                    <li className="product-colors__item">
                      <label className="product-colors__block">
                        <input
                          type="radio"
                          name="color"
                          className="product-colors__radio"
                          data-imgpath="./img/tshirts/tshirt_07.png"
                          checked
                        />
                        <div className="product-colors__display">
                          <div
                            className="product-colors__display-color"
                            style="background: #2f2c25"
                          ></div>
                        </div>
                      </label>
                    </li>
                    <li className="product-colors__item">
                      <label className="product-colors__block">
                        <input
                          type="radio"
                          name="color"
                          className="product-colors__radio"
                          data-imgpath="./img/tshirts/tshirt_08.png"
                        />
                        <div className="product-colors__display">
                          <div
                            className="product-colors__display-color"
                            style="background: #e0d9c8"
                          ></div>
                        </div>
                      </label>
                    </li>
                    <li className="product-colors__item">
                      <label className="product-colors__block">
                        <input
                          type="radio"
                          name="color"
                          className="product-colors__radio"
                          data-imgpath="./img/tshirts/tshirt_09.png"
                        />
                        <div className="product-colors__display">
                          <div
                            className="product-colors__display-color"
                            style="background: #529029"
                          ></div>
                        </div>
                      </label>
                    </li>
                    <li className="product-colors__item">
                      <label className="product-colors__block">
                        <input
                          type="radio"
                          name="color"
                          className="product-colors__radio"
                          data-imgpath="./img/tshirts/tshirt_10.png"
                        />
                        <div className="product-colors__display">
                          <div
                            className="product-colors__display-color"
                            style="background: #39498d"
                          ></div>
                        </div>
                      </label>
                    </li>
                    <li className="product-colors__item">
                      <label className="product-colors__block">
                        <input
                          type="radio"
                          name="color"
                          className="product-colors__radio"
                          data-imgpath="./img/tshirts/tshirt_11.png"
                        />
                        <div className="product-colors__display">
                          <div
                            className="product-colors__display-color"
                            style="background: #d82727"
                          ></div>
                        </div>
                      </label>
                    </li>
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
                <li className="products-filter__item products-filter__item--active">
                  <Link to="#desc" className="products-filter__link">
                    Описание
                  </Link>
                </li>
                <li className="products-filter__item">
                  <Link to="#sizes" className="products-filter__link">
                    таблица размеров
                  </Link>
                </li>
                <li className="products-filter__item">
                  <Link to="#delivery" className="products-filter__link">
                    условия доставки
                  </Link>
                </li>
                <li className="products-filter__item">
                  <Link to="#about" className="products-filter__link">
                    о бренде
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="product-tabs__content">
              <li
                id="desc"
                className="product-tabs__content-item product-tabs__content-item--active"
              >
                <div className="product-tabs__view product-desc">
                  <ul className="product-desc__care-list">
                    <li className="product-desc__care-item">
                      <svg className="product-desc__icon">
                        <use xlinkHref={`${IconsSVG}#washing_01`}></use>
                      </svg>
                      <div className="product-desc__text">
                        Стирать при температуре 30<sup>o</sup>C
                      </div>
                    </li>
                    <li className="product-desc__care-item">
                      <svg className="product-desc__icon">
                        <use xlinkHref={`${IconsSVG}#washing_02`}></use>
                      </svg>
                      <div className="product-desc__text">Не отбеливать</div>
                    </li>
                    <li className="product-desc__care-item">
                      <svg className="product-desc__icon">
                        <use xlinkHref={`${IconsSVG}#washing_03`}></use>
                      </svg>
                      <div className="product-desc__text">
                        Гладить теплым утюгом с внутренней стороны
                      </div>
                    </li>
                    <li className="product-desc__care-item">
                      <svg className="product-desc__icon">
                        <use xlinkHref={`${IconsSVG}#washing_04`}></use>
                      </svg>
                      <div className="product-desc__text">
                        Не подвергать химичисткой чистке
                      </div>
                    </li>
                    <li className="product-desc__care-item">
                      <svg className="product-desc__icon">
                        <use xlinkHref={`${IconsSVG}#washing_05`}></use>
                      </svg>
                      <div className="product-desc__text">
                        Не сушить в барабане
                      </div>
                    </li>
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
                  <img
                    src="./img/tshirts/tshirt_00.png"
                    className="product-measure__pic"
                    alt=""
                  />
                  <ol className="product-measure__list">
                    <li className="product-measure__item">
                      Измерьте ширину, см. (от подмышки до подмышки)
                    </li>
                    <li className="product-measure__item">
                      Измерьте длину, см. (от верхней точки плеча до низа)
                    </li>
                    <li className="product-measure__item">
                      Сверьте данные с таблицей
                    </li>
                  </ol>
                </div>
                <div className="product-tabs__text product-tabs__text--without-paddings">
                  <table className="measures-table">
                    <thead>
                      <th>Мужские</th>
                      <th></th>
                      <th>XS</th>
                      <th>S</th>
                      <th>M</th>
                      <th>L</th>
                      <th>XL</th>
                      <th>2XL</th>
                      <th>3XL</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Размер RUS</td>
                        <td></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                      </tr>
                      <tr>
                        <td>Размер RUS</td>
                        <td></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                      </tr>
                      <tr>
                        <td>Размер RUS</td>
                        <td></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="measures-table">
                    <thead>
                      <th>Мужские</th>
                      <th></th>
                      <th>XS</th>
                      <th>S</th>
                      <th>M</th>
                      <th>L</th>
                      <th>XL</th>
                      <th>2XL</th>
                      <th>3XL</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Размер RUS</td>
                        <td></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                      </tr>
                      <tr>
                        <td>Размер RUS</td>
                        <td></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                      </tr>
                      <tr>
                        <td>Размер RUS</td>
                        <td></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li id="delivery" className="product-tabs__content-item">
                <div className="product-tabs__view">
                  <img
                    src="./img/content/logos/harley.png"
                    className="product-tabs__pic"
                    alt=""
                  />
                </div>
                <div className="product-tabs__text">
                  <p>
                    Доставка по России и странам Ближнего Зарубежья (Украина,
                    Белорусия, Молдавия, Польша, Эстония, Болгария, Румыния,
                    Чехия, Словакия, Венгрия и т.д.), всего 400 руб. Мы так же
                    доставляем в США, Японию, Австралию, Англию, Италию, Испанию
                    и т.д. , стоимость доставки около 600 руб. (Цена приведена
                    для ориентира и может отличаться в зависимости от дальности
                    и веса посылки)
                  </p>
                </div>
              </li>
              <li id="about" className="product-tabs__content-item">
                <div className="product-tabs__view">
                  <img
                    src="./img/content/logos/express.png"
                    className="product-tabs__pic"
                    alt=""
                  />
                </div>
                <div className="product-tabs__text">
                  <p>
                    Марка Hurley основана на любви к океану с его постоянством в
                    этом изменчивом мире. Она осуществляет мечты молодого
                    поколения, сочетая музыку и искусство в дизайне одежды,
                    обуви и аксессуаров. Наполненная духом пляжной культуры
                    продукция Hurley предлагает новое восприятие комфорта и
                    индивидуальности. Hurley выбирает только тот, кто страстно
                    влюблён в свободу.
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
              <li className="footer-menu__col">
                <div className="footer-menu__title">Информация</div>
                <ul className="footer-menu__list">
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      О магазине
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Адреса магазинов
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Как сделать заказ?
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Обмен и возврат
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Отзывы
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="footer-menu__col">
                <div className="footer-menu__title">Футболки</div>
                <ul className="footer-menu__list">
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Популярное
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Новинки
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Бестселлеры
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Специальные предложения
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Скоро в продаже
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="footer-menu__col">
                <div className="footer-menu__title">Коллекции</div>
                <ul className="footer-menu__list">
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Детская коллекция
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Женская коллекция
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Мужская коллекция
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Лучшие принты 2018 года
                    </Link>
                  </li>
                  <li className="footer-menu__item">
                    <Link to="#" className="footer-menu__link">
                      Лучшие принты 2019 года
                    </Link>
                  </li>
                </ul>
              </li>
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
                  <li className="socials__item">
                    <Link to="#" className="socials__link">
                      <svg className="socials__icon">
                        <use xlinkHref={`${IconsSVG}#fb`}></use>
                      </svg>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="#" className="socials__link">
                      <svg className="socials__icon">
                        <use xlinkHref={`${IconsSVG}#twitter`}></use>
                      </svg>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="#" className="socials__link">
                      <svg className="socials__icon">
                        <use xlinkHref={`${IconsSVG}#insta`}></use>
                      </svg>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="#" className="socials__link">
                      <svg className="socials__icon">
                        <use xlinkHref={`${IconsSVG}#pin`}></use>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
