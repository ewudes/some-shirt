import React from "react";
import { Link } from "react-router-dom";

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
  );
}

export default Extras;