import React from "react";

export default function HamburgerButton({ toggleMenu }) {

  return (
    <div>
      <button className="focus:outline focus:outline-2 focus:outline-slate-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className="fill-slate-50 "
          onClick={toggleMenu}
        >
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
      </button>
    </div>
  );
}
