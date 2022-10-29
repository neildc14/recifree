import React from "react";
import RecipeImage from "./RecipeImage";

function Recipe({ recipe }) {
  console.log("RECIPE-----------------");

  return (
    <div className="relative z-10  md:w-60 m-auto card border-solid border border-neutral-300 ">
      <RecipeImage image={recipe.recipe.image} />
      <div className="px-6">
        {" "}
        <div>
          <section>
            {" "}
            <h2 className="text-2xl">{recipe.recipe.label}</h2>
            <div className="pt-2">
              <h2 className="">Ingredients:</h2>
              <ul>
                {recipe !== null &&
                  recipe.recipe.ingredients
                    .slice(0, 4)
                    .map((ingredient, index) => (
                      <li key={index + ingredient.measure + ingredient.weight}>
                        {ingredient.text}
                      </li>
                    ))}
                {recipe.recipe.ingredients.length > 4 && <li>more....</li>}
              </ul>
            </div>
          </section>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="  p-2 border rounded-md bg-emerald-500 text-white"
          >
            Full details
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Recipe);
