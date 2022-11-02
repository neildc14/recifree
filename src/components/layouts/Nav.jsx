import React, { useState, useCallback } from "react";
import HamburgerButton from "../buttons/HamburgerButton";
import ModalNav from "./ModalNav";
import UlNav from "./UlNav";

export default function Nav({ isMobileView }) {
  const [isToggled, setToggle] = useState(false);

  const toggleMenu = useCallback(() => {
    setToggle(!isToggled);
  }, [isToggled]);

  return (
    <nav className=" ">
      {isMobileView ? (
        <div>
          <HamburgerButton toggleMenu={toggleMenu} />
          {isToggled && (
            <ModalNav toggleMenu={toggleMenu} isToggled={isToggled} />
          )}
        </div>
      ) : (
        <UlNav
          ulClass="flex gap-5  text-slate-100 "
          linkClass="hover:text-green-800 ease-in-out"
        />
      )}
    </nav>
  );
}
