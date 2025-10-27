import {Link} from "react-router-dom";

import "./menu.scss";

const menuItems = [
  {label: `Детская коллекция`, to: ``},
  {label: `Мужская коллекция`, to: ``},
  {label: `Женская коллекция`, to: ``},
  {label: `Популярные принты`, to: ``},
  {label: `Новые принты`, to: ``},
  {label: `Специальные предложения`, to: ``},
  {label: `Скоро в продаже`, to: ``},
];

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems.map(({label, to}, index) => (
          <li className="menu__item" key={index}>
            <Link to={to} className="menu__link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
