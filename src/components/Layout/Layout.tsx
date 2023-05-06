import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Menu />
        </div>
      </header>
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
