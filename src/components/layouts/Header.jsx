import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import Nav from "./Nav";

function Header({ label, headerClass, headingClass }) {
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

  return (
    <div className={headerClass}>
      <header className="container flex flex-row justify-between items-baseline pb-2 border-b-2 ">
        <Logo />
        <Nav isMobileView={isMobileView} />
      </header>
      <Banner label={label} headingClass={headingClass} />
    </div>
  );
}

export default React.memo(Header);
