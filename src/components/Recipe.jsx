import React from "react";
import RecipeImage from "./RecipeImage";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  return (
    <section className="relative z-10 w-80 md:w-60 m-auto md:mx-0 card border-solid border border-neutral-300 ">
      <RecipeImage
        image={recipe.recipe.image}
        label={recipe.recipe.label}
        classImage="z-0 h-48 mb-8 md:mb-6 rounded-b-3xl w-full overflow-hidden "
      />
      <div className="">
        <div className="h-24 md:h-28 lg:h-36 px-6">
          <h2 className="text-base font-medium tracking-wide">
            {recipe.recipe.label}
          </h2>
          <h2 className="pt-4 text-base tracking-wide">
            <span className="font-medium">Cuisine Type:</span>{" "}
            {recipe.recipe.cuisineType}
          </h2>
        </div>
        <div className="w-full  ">
          <Link
            to={`recipe/${recipe.recipe.label}`}
            state={{ from: recipe }}
            className="max-w-full m-0 p-2 block text-center  bg-emerald-500 text-white"
          >
            More details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Recipe);
