import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { store } from "./redux/store";

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route index path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
