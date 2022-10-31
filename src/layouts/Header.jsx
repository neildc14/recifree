import React, { useState, useEffect } from "react";
import hamburger_menu from "../assets/images/hamburger_menu.svg";
import burger from "../assets/images/burger.png";

function Header() {
  const [isMobileView, setMobileView] = useState(true);
  // console.log("header");
  return (
    <header className="container flex flex-row justify-between items-baseline pb-2 border-b-2 ">
      <div className="flex items-baseline">
        <img src={burger} alt="hamburger logo" className="h-14" />
        <p className="text-slate-50 text-3xl tracking-tighter">recifree</p>
      </div>
      <nav className=" ">
        {isMobileView ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            className="fill-slate-50"
          >
            <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
          </svg>
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
