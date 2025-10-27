import {useState, useEffect} from "react";
import Menu from "../menu/menu";
import IconsSVG from "../../static/img/icons-sprite.svg";

import "./sidebar.scss";

const Sidebar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => setIsShowMenu((prev) => !prev);
  const closeMenu = () => setIsShowMenu(false);

  useEffect(() => {
    if (!isShowMenu) {
      return;
    }

    const handleWheel = () => closeMenu();
    window.addEventListener(`wheel`, handleWheel, {passive: true});

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener(`wheel`, handleWheel);
    };
  }, [isShowMenu]);

  return (
    <>
      <aside className={`sidebar ${isShowMenu ? `sidebar--opened` : ``}`}>
        <button className="sidebar__hamburger" onClick={toggleMenu}>
          <svg className="sidebar__hamburger-icon">
            <use xlinkHref={`${IconsSVG}#bars`} />
          </svg>
        </button>

        <div className="sidebar__header">
          <div className="sidebar__logo">
            <button className="sidebar__close" onClick={closeMenu}>
              <svg className="sidebar__close-icon">
                <use xlinkHref={`${IconsSVG}#cross`} />
              </svg>
            </button>
          </div>
        </div>

        <Menu />
      </aside>

      {isShowMenu && (
        <div className="sidebar__overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Sidebar;
