import React from "react";
import { NavLink } from "react-router-dom";

export default function UlNav({ ulClass, linkClass }) {
  return (
    <ul className={ulClass}>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="categories" className={linkClass}>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={linkClass}>
          About Us
        </NavLink>
      </li>
    </ul>
  );
}
