import React from "react";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";
import NutririonTable from "./NutririonTable";
import Ingredients from "./Ingredients";

function RecipeDetails({ children }) {
  const location = useLocation();
  const { from } = location.state;
  const { label, image, ingredients, calories, totalWeight, totalNutrients } =
    from.recipe;
  const recipeIngredients = [...new Set(ingredients)];

  const recipeNutrients = [];
  for (let [key, value] of Object.entries(totalNutrients)) {
    recipeNutrients.push(value);
  }
  console.log(from);
  return (
    <div>
      <div className="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-green-400  px-4 pb-16 shadow-md shadow-gray-400 ">
        {children}
        <h1 className="pt-10 text-center text-3xl text-slate-50 ">{label}</h1>
      </div>
      <section className="flex flex-col  w-80 mx-auto mt-10 ">
        <Fade>
          <ImageDetail image={image} label={label} />
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

const ImageDetail = ({ image, label }) => {
  return (
    <figure>
      <img src={image} alt={label} className="w-full rounded-lg " />
    </figure>
  );
};

export default React.memo(RecipeDetails);
