import React from "react";
import {Link} from "react-router-dom";
import logoMain from "../../static/img/content/logos/logo-main.png";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./header.scss";

const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo">
      <img
        src={logoMain}
        alt="SomeShirt Logo"
        width={150}
        height={150}
        className="header__pic"
      />
    </Link>
    <a href="#" className="header__basket-content">
      <svg className="header__basket-icon">
        <use xlinkHref={`${IconsSVG}#basket`} />
      </svg>
      <div className="header__basket-label">
        57
      </div>
    </a>
  </header>
);

export default Header;
