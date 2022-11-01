import React from "react";
import { NavLink } from "react-router-dom";

export default function UlNav({ ulClass, linkClass }) {
  return (
    <ul className={ulClass}>
      <li>
        <NavLink href="#" className={linkClass}>
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink href="#" className={linkClass}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink href="#" className={linkClass}>
          Feeds
        </NavLink>
      </li>
    </ul>
  );
}
