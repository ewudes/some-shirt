import React from "react";
import {Link} from "react-router-dom";

import "./filter.scss";

const Filter = () => {
  return (
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
  );
};

export default Filter;

