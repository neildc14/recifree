import React from "react";
import ReactDOM from "react-dom";
import UlNav from "./UlNav";

export default function ModalNav() {
  return ReactDOM.createPortal(
    <>
      <UlNav
        ulClass="absolute top-20 right-5 rounded-tl-3xl  rounded-bl-3xl flex flex-col gap-9 rounded-br-3xl text-right bg-emerald-500 pl-28 py-16 pr-10 "
        linkClass="ease-in-out hover:text-amber-400 text-xl text-slate-100 tracking-wider"
      />
    </>,
    document.getElementById("portal")
  );
}
