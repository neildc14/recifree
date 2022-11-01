import React from "react";
import SearchRecipe from "./SearchRecipe";

function Main({ children }) {
  return (
    <div>
      {children}
      <section className="mx-4 pb-4 ">
        <SearchRecipe />
      </section>
    </div>
  );
}

export default Main;
