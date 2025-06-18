import React from "react";
import {Link} from "react-router-dom";
import logoMain from "../../static/img/content/logos/logo-main.png";

import "./header.scss";

const CONTACT_EMAIL = `someshirt@gmail.com`;
const MAILTO_LINK = `mailto:lostinspace@mail.ru`;

const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo">
      <img
        src={logoMain}
        alt="SomeShirt Logo"
        width={100}
        height={100}
        className="header__pic"
      />
    </Link>
    <a href={MAILTO_LINK} className="header__mail">
      <div className="header__mail-title">По всем вопросам пишите на:</div>
      <div className="header__mail-content">{CONTACT_EMAIL}</div>
    </a>
  </header>
);

export default Header;
