import React from "react";
import {Link} from "react-router-dom";

import "./filter.scss";

const filters = [
  {id: `popular`, label: `Популярное`, isActive: true},
  {id: `new`, label: `Новинки`},
  {id: `bestsellers`, label: `Бестселлеры`},
  {id: `specials`, label: `Специальные предложения`},
  {id: `soon`, label: `Скоро в продаже`},
];

const Filter = () => {
  return (
    <ul className="filter">
      {filters.map(({id, label, isActive}) => (
        <li
          key={id}
          className={`filter__item${isActive && ` filter__item--active`}`}
        >
          <Link to="" data-filter={id} className="filter__link">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
