import React from "react";
import {Link} from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="" className="header__logo">
        <img
          src={require(`../../static/img/content/logos/logo-main.png`)}
          alt="some shirt logo"
          width={100}
          height={100}
          className="header__pic"
        ></img>
      </Link>
      <Link to="mailto:lostinspace@mail.ru" className="header__mail">
        <div className="header__mail-title">По всем вопросам пишите на:</div>
        <div className="header__mail-content">someshirt@gmail.com</div>
      </Link>
    </header>
  );
};

export default Header;
