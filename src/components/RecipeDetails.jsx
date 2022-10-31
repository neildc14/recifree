import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      {" "}
      <div className="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-green-400  px-4 pb-16 ">
        {children}
        <h1 className="pt-10 text-center text-3xl text-slate-50 ">{label}</h1>
      </div>
      <section className="flex flex-col  w-80 mx-auto mt-10 ">
        <figure className="">
          <img src={image} alt={label} className="w-full rounded-lg " />
        </figure>
        <div>
          <div className="mt-6 ">
            <h2 className="text-md  font-semibold">Ingredients:</h2>
            <ul className="mt-3 px-5">
              {recipeIngredients.map((ingredient, index) => (
                <li className="mt-2 list-disc" key={index + ingredient.text}>
                  {ingredient.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex gap-5">
            <h2 className="text-md  font-semibold">Calories:</h2>
            <p>{Math.floor(calories)} cal</p>
          </div>

          <div className="mt-6 flex gap-5">
            <h2 className="text-md  font-semibold">Total Weight:</h2>
            <p>{Math.floor(totalWeight)} cal</p>
          </div>
        </div>
        <table className="table-auto w-full mt-6 border-collapse border rounded-3xl border-slate-400">
          <thead className="w-full bg-teal-600 ">
            <tr className="w-full h-10 text-left text-slate-100 font-medium text-xl ">
              <th className="px-2">Nutrients</th>
              <th className="px-2">Quantity</th>
            </tr>
          </thead>
          <tbody className="bg-green-400 text-slate-50">
            {recipeNutrients.map((nutrient) => (
              <tr>
                <td className="px-2 font-medium">{nutrient.label}</td>
                <td className="px-2">
                  {Math.floor(nutrient.quantity) + nutrient.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default React.memo(RecipeDetails);
