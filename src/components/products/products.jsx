import {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";

import "./products.scss";

const filters = [
  {id: `popular`, label: `Популярное`},
  {id: `new`, label: `Новинки`},
  {id: `bestsellers`, label: `Бестселлеры`},
  {id: `specials`, label: `Специальные предложения`},
  {id: `soon`, label: `Скоро в продаже`},
];

const productData = [
  {
    id: 1,
    price: 1300,
    image: `tshirt_01.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `new bestsellers`,
    category: [`popular`, `new`, `bestsellers`, `specials`, `soon`],
  },
  {
    id: 2,
    price: 1800,
    image: `tshirt_02.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `new specials soon`,
    category: [`bestsellers`, `specials`, `soon`],
  },
  {
    id: 3,
    price: 2000,
    image: `tshirt_03.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `products__item--color-black products__item--size-double soon bestsellers`,
    category: [`popular`, `new`, `specials`, `soon`],
  },
  {
    id: 4,
    price: 1800,
    image: `tshirt_04.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `products__item--color-black products__item--size-double specials`,
    category: [`soon`],
  },
  {
    id: 5,
    price: 1800,
    image: `tshirt_05.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `specials popular bestsellers`,
    category: [`popular`, `new`, `specials`, `soon`],
  },
  {
    id: 6,
    price: 1800,
    image: `tshirt_06.png`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    className: `soon popular`,
    category: [`popular`, `bestsellers`, `soon`],
  },
];

// eslint-disable-next-line react/prop-types
const Filter = ({activeFilter, onFilterClick}) => (
  <ul className="filter">
    {filters.map(({id, label}) => (
      <li
        key={id}
        className={`filter__item${activeFilter === id ? ` filter__item--active` : ``}`}
        onClick={() => onFilterClick(id)}
      >
        <Link to="" data-filter={id} className="filter__link">
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const ProductItem = ({price, image, desc, className}) => (
  <motion.li
    className={`products__item ${className}`}
    layout
    initial={{opacity: 0, scale: 0.9}}
    animate={{opacity: 1, scale: 1}}
    exit={{opacity: 0, scale: 0.9}}
    transition={{duration: 0.3}}
  >
    <div className="products__price">
      <div className="products__price-amount">
        {price.toLocaleString(`ru-RU`)}
      </div>
    </div>
    <div className="products__content">
      <img
        src={require(`../../static/img/tshirts/${image}`)}
        alt="bo-jack tshirt"
        className="products__img"
      />
      <div className="products__desc">
        <div className="products__desc-text">{desc}</div>
        <Link to="/product" className="btn">
          Подробнее
        </Link>
      </div>
    </div>
  </motion.li>
);

const Products = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0].id);

  const filteredProducts = productData.filter((product) =>
    product.category.includes(activeFilter)
  );

  return (
    <>
      <Filter activeFilter={activeFilter} onFilterClick={setActiveFilter} />
      <ul className="products__list">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

ProductItem.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Products;
