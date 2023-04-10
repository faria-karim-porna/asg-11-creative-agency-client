import React from "react";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <Navigation></Navigation>
      <Banner></Banner>
    </div>
  );
};

export default Header;
