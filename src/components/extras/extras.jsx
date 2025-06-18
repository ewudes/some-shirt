import React from "react";
import {Link} from "react-router-dom";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./extras.scss";

const socialLinks = [
  {id: `fb`, label: `Facebook`, to: ``},
  {id: `twitter`, label: `Twitter`, to: ``},
  {id: `insta`, label: `Instagram`, to: ``},
  {id: `pin`, label: `Pinterest`, to: ``},
];

const Extras = () => {
  return (
    <section className="extras">
      <div className="extras__col">
        <div className="extras__best">
          Лучшие принты <br /> 2019 года
        </div>
      </div>
      <div className="extras__col">
        <div className="extras__col-socials">
          <ul className="socials">
            {socialLinks.map(({id, label, to}) => (
              <li key={id} className="socials__item">
                <Link to={to} className="socials__link" aria-label={label}>
                  <svg className="socials__icon">
                    <use xlinkHref={`${IconsSVG}#${id}`} />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Extras;
