import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "../../pages/main/main";
// import Product from "../../pages/product/product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
