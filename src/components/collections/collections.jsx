import React from "react";
import {Link} from "react-router-dom";

import "./collections.scss";

const Collections = () => {
  return (
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
  );
};

export default Collections;
