import React from "react";
import {Link} from "react-router-dom";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./extras.scss";

const Extras = () => {
  return (
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
                  <use xlinkHref={`${IconsSVG}#fb`}></use>
                </svg>
              </Link>
            </li>
            <li className="socials__item">
              <Link to="" className="socials__link">
                <svg className="socials__icon">
                  <use xlinkHref={`${IconsSVG}#twitter`}></use>
                </svg>
              </Link>
            </li>
            <li className="socials__item">
              <Link to="" className="socials__link">
                <svg className="socials__icon">
                  <use xlinkHref={`${IconsSVG}#insta`}></use>
                </svg>
              </Link>
            </li>
            <li className="socials__item">
              <Link to="" className="socials__link">
                <svg className="socials__icon">
                  <use xlinkHref={`${IconsSVG}#pin`}></use>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Extras;
