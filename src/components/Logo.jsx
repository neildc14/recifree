import React from "react";
import burger from "../assets/images/burger.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-baseline">
      <img src={burger} alt="hamburger logo" className="h-14" />
      <p className="text-slate-50 text-3xl tracking-tighter">recifree</p>
    </Link>
  );
}

export default React.memo(Logo);
