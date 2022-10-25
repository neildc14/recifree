import React, { useState, useEffect } from "react";
import hamburger_menu from "../assets/images/hamburger_menu.svg";
import logo from "../assets/images/logo.png";

function Header() {
  const [isMobileView, setMobileView] = useState(true);
  // console.log("header");
  return (
    <header className="container flex flex-row justify-between items-center pb-2 border-b-2 ">
      <div>
        <img src={logo} alt="recipe logo" />
      </div>
      <nav className=" ">
        {isMobileView ? (
          <img src={hamburger_menu} alt="main menu" />
        ) : (
          <ul className="flex justify-center ">
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Feeds</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default React.memo(Header);
