import React from "react";
import { NavLink } from "react-router-dom";

function UlNav({ ulClass, linkClass }, ref) {
  return (
    <ul className={ulClass} ref={ref}>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
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
export default React.forwardRef(UlNav);
