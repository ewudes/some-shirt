import React from "react";
import {Link} from "react-router-dom";

import "./collections.scss";

const collections = [
  {
    id: 1,
    title: `Мужская коллекция`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque.`,
    typeClass: `collections__item--type-guys`,
    link: ``,
  },
  {
    id: 2,
    title: `Женская коллекция`,
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque.`,
    typeClass: `collections__item--type-girls`,
    link: ``,
  },
];

const Collections = () => {
  return (
    <ul className="collections__list">
      {collections.map(({id, title, desc, typeClass, link}) => (
        <li key={id} className={`collections__item ${typeClass}`}>
          <Link to={link} className="collections__link">
            <div className="collections__title">{title}</div>
            <div className="collections__desc">{desc}</div>
            <div className="btn">Посмотреть</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Collections;
