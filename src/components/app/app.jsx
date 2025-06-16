import React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "../../pages/main/main";

import "../../index.scss";
// import Product from "../../pages/product/product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
