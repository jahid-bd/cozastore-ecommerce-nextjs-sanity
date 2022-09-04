import React from "react";
import Footer from "./footer/Footer";
import MenuBar from "./navigation/MenuBar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container-menu-desktop">
          <MenuBar />
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
