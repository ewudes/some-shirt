import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './main.scss';

const Main = () => {
  return (
    <div className="wrapper">
      <section className="hero">
        <header className="header">
          <Link to="" className="logo">
            <img src="./img/content/logos/logo-main.png" alt="lost shirt logo" className="logo__pic"></img>
          </Link>
          <Link to="mailto:lostinspace@mail.ru" className="mail">
            <div className="mail__title">По всем вопросам пишите на:</div>
            <div className="mail__content">lostinspace@mail.ru</div>
          </Link>
        </header>
        <div className="hero__content">
          <ul className="fade-slider">
            <li className="fade-slider__item fade-slider__item--style-thirts fade-slider__item--visible">
              <div className="fade-slider__text">
                <h1 className="lined-text">
                  <span className="lined-text__word">три</span>
                  <span className="lined-text__word">футболки</span>
                  <span className="lined-text__word lined-text__word--color-yellow">по цене</span>
                  <span className="lined-text__word lined-text__word--color-yellow">двух</span>
                </h1>
              </div>
            </li>
            <li className="fade-slider__item fade-slider__item--style-games">
              <div className="fade-slider__text">
                <h1 className="lined-text">
                  <div className="lined-text__word">Любимые игры</div>
                  <div className="lined-text__word lined-text__word--color-yellow">на лучших футболках</div>
                </h1>
              </div>
            </li>
            <li className="fade-slider__item fade-slider__item--style-presents">
              <div className="fade-slider__text">
                <h1 className="lined-text">
                  <div className="lined-text__word">Подарки</div>
                  <div className="lined-text__word lined-text__word--color-yellow">для любимых</div>
                </h1>
              </div>
            </li>
          </ul>
        </div>
        <aside className="sidebar">
          <Link to="" className="sidebar__hamburger">
            <svg className="sidebar__hamburger-icon">
              {/* <use xlink:href="./img/icons-sprite.svg#bars"></use> */}
            </svg>
          </Link>
          <div className="sidebar__header">
            <NavLink href="#" className="logo">
              <img src="./img/content/logos/logo-main.png" alt="" className="logo__image"></img>
              <Link to="" className="sidebar__close">
                <svg className="sidebar__close-icon">
                  {/* <use xlink:href="./img/icons-sprite.svg#cross"></use> */}
                </svg>
              </Link>
            </NavLink>
          </div>
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
        </aside>
      </section>

      <section className="products">
        <div className="container">
          <ul className="filter">
            <li className="filter__item filter__item--active">
              <Link to="" data-filter="popular" className="filter__link">Популярное</Link>
            </li>
            <li className="filter__item">
              <Link to="" data-filter="new" className="filter__link">Новинки</Link>
            </li>
            <li className="filter__item">
              <Link to="" data-filter="bestsellers" className="filter__link">Бестселлеры</Link>
            </li>
            <li className="filter__item">
              <Link to="" data-filter="specials" className="filter__link">Специальные предложения</Link>
            </li>
            <li className="filter__item">
              <Link to="" data-filter="soon" className="filter__link">Скоро в продаже</Link>
            </li>
          </ul>
          <ul className="products__list">
            <li className="products__item new bestsellers">
              <div className="products__price">
                <div className="products__price-amount">1 800</div>
              </div>
              <div className="products__content">
                <img src="./img//tshirts/tshirt_01.png" alt="bo-jack tshirt" className="products__img"></img>
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
                <img src="./img//tshirts/tshirt_02.png" alt="bo-jack tshirt" className="products__img"></img>
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
                <img src="./img//tshirts/tshirt_03.png" alt="bo-jack tshirt" className="products__img"></img>
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
                <img src="./img//tshirts/tshirt_04.png" alt="bo-jack tshirt" className="products__img"></img>
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
                <img src="./img//tshirts/tshirt_05.png" alt="bo-jack tshirt" className="products__img"></img>
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
                <img src="./img//tshirts/tshirt_06.png" alt="bo-jack tshirt" className="products__img"></img>
                <div className="products__desc">
                  <div className="products__desc-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <Link to="" className="btn">Подробнее</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="collections">
        <div className="container">
          <ul className="collections__list">
            <li className="collections__item collections__item--type-guys">
              <Link to="" className="collections__link">
                <div className="collections__title">Мужская коллекция</div>
                <div className="collections__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque.
                </div>
                <div className="btn">Посмотреть</div>
              </Link>
            </li>
            <li className="collections__item collections__item--type-girls">
              <Link to="" className="collections__link">
                <div className="collections__title">Женская коллекция</div>
                <div className="collections__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque.
                </div>
                <div className="btn">Посмотреть</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__container">
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

          <section className="extras">
            <div className="extras__col">
              <div className="extras__best">Лучшие принты <br/> 2019 года</div>
            </div>
            <div className="extras__col">
              <div className="extras__col-socials">
                <ul className="socials">
                  <li className="socials__item">
                    <Link to="" className="socials__link">
                      <svg className="socials__icon">
                        {/* <use xlink:href="./img/icons-sprite.svg#fb"></use> */}
                      </svg>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="" className="socials__link">
                      <svg className="socials__icon">
                        {/* <use xlink:href="./img/icons-sprite.svg#twitter"></use> */}
                      </svg>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="" className="socials__link">
                      <svg className="socials__icon">
                        {/* <use xlink:href="./img/icons-sprite.svg#insta"></use> */}
                      </svg>
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="" className="socials__link">
                      <svg className="socials__icon">
                        {/* <use xlink:href="./img/icons-sprite.svg#pin"></use> */}
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Main;