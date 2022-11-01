import React from "react";
import SearchRecipe from "./SearchRecipe";


function Main({ children }) {
  return (
    <div>
      <div className="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-orange-400 shadow-md shadow-gray-400  px-4 pb-16 ">
        {children}
      </div>
      <section className="mx-4 pb-4 ">
        <SearchRecipe />
      </section>
    </div>
  );
}

export default Main;
