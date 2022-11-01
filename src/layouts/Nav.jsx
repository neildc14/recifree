import React, { useEffect, useState } from "react";
import ModalNav from "./ModalNav";
import UlNav from "./UlNav";

export default function Nav({ isMobileView }) {
  const [isToggled, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!isToggled);
  };
  return (
    <nav className=" ">
      {isMobileView ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            className="fill-slate-50"
            onClick={toggleMenu}
          >
            <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
          </svg>
          {isToggled && <ModalNav />}
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
