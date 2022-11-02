import React from "react";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";
import NutririonTable from "./NutririonTable";
import Ingredients from "./Ingredients";
import Header from "./layouts/Header";
import RecipeImage from "./RecipeImage";

function RecipeDetails() {
  const location = useLocation();
  const { from } = location.state;
  const { label, image, ingredients, calories, totalWeight, totalNutrients } =
    from.recipe;
  const recipeIngredients = [...new Set(ingredients)];

  const recipeNutrients = [];
  for (let [key, value] of Object.entries(totalNutrients)) {
    recipeNutrients.push(value);
  }

  return (
    <div>
      <Header
        label={label}
        headingClass="pt-10 text-center text-3xl text-slate-50 "
        headerClass="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-green-400  px-4 pb-16 shadow-md shadow-gray-400"
      />

      <section className="flex flex-col  w-80 mx-auto mt-10 ">
        <Fade>
          <RecipeImage
            image={image}
            label={label}
            classImage="w-full rounded-lg"
          />
        </Fade>
        <Fade>
          <Ingredients
            calories={calories}
            recipeIngredients={recipeIngredients}
            totalWeight={totalWeight}
          />
        </Fade>
        <Fade bottom>
          <NutririonTable recipeNutrients={recipeNutrients} />
        </Fade>
      </section>
    </div>
  );
}

export default React.memo(RecipeDetails);
