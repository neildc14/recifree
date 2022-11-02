import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import UlNav from "./UlNav";

function ModalNav({ toggleMenu }) {
  const modalNavRef = useRef(null);

  useEffect(() => {
    let ulNav = modalNavRef.current.parentElement;
    ulNav.addEventListener("mouseleave", () => {
      toggleMenu();
    });
  }, []);

  return ReactDOM.createPortal(
    <>
      <UlNav
        ref={modalNavRef}
        ulClass="absolute top-20 right-5 rounded-tl-3xl rounded-bl-3xl flex flex-col gap-9 rounded-br-3xl shadow-sm shadow-emerald-400 text-right bg-emerald-500 pl-28 py-16 pr-10 "
        linkClass="ease-in-out hover:text-amber-400 text-xl text-slate-100 tracking-wider"
      />
    </>,
    document.getElementById("portal")
  );
}

export default ModalNav;
