import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <>
      <header>
        <div className="container--big">
          <Menu />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
