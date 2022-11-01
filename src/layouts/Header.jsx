import React, { useState, useEffect } from "react";
import hamburger_menu from "../assets/images/hamburger_menu.svg";

import Logo from "../components/Logo";
import Nav from "./Nav";

function Header() {
  const [isMobileView, setMobileView] = useState(true);
  const LARGE_DEVICE_VIEWPORT = 826;

  const resizeListener = () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw >= LARGE_DEVICE_VIEWPORT) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  };

  window.addEventListener("resize", resizeListener);

  useEffect(() => {
    resizeListener();
  }, []);

  console.log("header");
  return (
    <header className="container flex flex-row justify-between items-baseline pb-2 border-b-2 ">
      <Logo />
      <Nav isMobileView={isMobileView} />
    </header>
  );
}

export default React.memo(Header);
