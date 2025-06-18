import React, {useState} from "react";
import Menu from "../menu/menu";
import IconsSVG from "../../static/img/icons-sprite.svg";
import logo from "../../static/img/content/logos/logo-main.png";

import "./sidebar.scss";

const Sidebar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => setIsShowMenu((prev) => !prev);

  return (
    <aside className={`sidebar ${isShowMenu && `sidebar--opened`}`}>
      <button className="sidebar__hamburger" onClick={toggleMenu}>
        <svg className="sidebar__hamburger-icon">
          <use xlinkHref={`${IconsSVG}#bars`} />
        </svg>
      </button>

      <div className="sidebar__header">
        <div className="sidebar__logo">
          <img
            src={logo}
            width={100}
            height={100}
            alt="Логотип"
            className="sidebar__logo-image"
          />
          <button className="sidebar__close" onClick={toggleMenu}>
            <svg className="sidebar__close-icon">
              <use xlinkHref={`${IconsSVG}#cross`} />
            </svg>
          </button>
        </div>
      </div>

      <Menu />
    </aside>
  );
};

export default Sidebar;
