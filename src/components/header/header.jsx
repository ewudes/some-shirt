import React from "react";
import {Link} from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="" className="logo">
        <img src={require(`../../static/img/content/logos/logo-main.png`)} alt="lost shirt logo" className="logo__pic"></img>
      </Link>
      <Link to="mailto:lostinspace@mail.ru" className="mail">
        <div className="mail__title">По всем вопросам пишите на:</div>
        <div className="mail__content">lostinspace@mail.ru</div>
      </Link>
    </header>
  );
};

export default Header;
