import React from "react";
import burger from "../assets/images/burger.png";

function Logo() {
  return (
    <div className="flex items-baseline">
      <img src={burger} alt="hamburger logo" className="h-14" />
      <p className="text-slate-50 text-3xl tracking-tighter">recifree</p>
    </div>
  );
}

export default React.memo(Logo);
