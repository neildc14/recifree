import React from "react";
import RecipeImage from "./RecipeImage";

function Recipe({ recipe }) {
  console.log("RECIPE-----------------");
  console.log(recipe);
  return (
    <section className="relative z-10 w-80 md:w-60 m-auto md:mx-0 card border-solid border border-neutral-300 ">
      <RecipeImage image={recipe.recipe.image} />
      <div className="">
        <div className="h-24 md:h-28 px-6">
          <h2 className="text-base font-medium tracking-wide">
            {recipe.recipe.label}
          </h2>
          <h2 className="pt-4 text-base tracking-wide">
            <span className="font-medium">Cuisine Type:</span>{" "}
            {recipe.recipe.cuisineType}
          </h2>
        </div>
        <div className="w-full  ">
          <a
            href="#"
            className="max-w-full m-0 p-2 block text-center  bg-emerald-500 text-white"
          >
            Full details
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Recipe);
