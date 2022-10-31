import React from "react";

export default function Nav({ isMobileView }) {
  return (
    <nav className=" ">
      {isMobileView ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className="fill-slate-50"
        >
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
      ) : (
        <ul className="flex gap-5 justify-center text-slate-100 x">
          <li>
            <a href="#" className="hover:text-green-800">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-800">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-800">
              Feeds
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
