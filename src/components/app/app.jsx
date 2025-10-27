import {Route, Routes} from "react-router-dom";
import Main from "../../pages/main/main";
import Product from "../../pages/product/product";

import "../../index.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
