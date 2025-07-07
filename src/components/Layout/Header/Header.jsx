import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
            <h1 href="#">Башкы бет</h1>
          <div className="header--nav">
            <a href="#">Той жөнүндө</a>
            <a href="#">Дареги</a>
            <a href="#">Байланыштар</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
