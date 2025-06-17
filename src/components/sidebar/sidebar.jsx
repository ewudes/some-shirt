import React, {useState} from "react";
import {Link} from "react-router-dom";
import Menu from "../menu/menu";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./sidebar.scss";

const Sidebar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu((current) => !current);
  };

  return (
    <aside className={`${isShowMenu && `sidebar--opened`} sidebar`}>
      <Link to="" className="sidebar__hamburger" onClick={handleShowMenu}>
        <svg className="sidebar__hamburger-icon">
          <use xlinkHref={`${IconsSVG}#bars`}></use>
        </svg>
      </Link>
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <img
            src={require(`../../static/img/content/logos/logo-main.png`)}
            width={100}
            height={100}
            alt=""
            className="sidebar__logo-image"
          ></img>
          <Link to="" className="sidebar__close" onClick={handleShowMenu}>
            <svg className="sidebar__close-icon">
              <use xlinkHref={`${IconsSVG}#cross`}></use>
            </svg>
          </Link>
        </div>
      </div>
      <Menu />
    </aside>
  );
};

export default Sidebar;
