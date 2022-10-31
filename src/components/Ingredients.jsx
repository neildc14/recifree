import React from "react";

function Ingredients({ calories, recipeIngredients, totalWeight }) {
  return (
    <div>
      <div className="mt-6 ">
        <h2 className="text-md  font-semibold ">Ingredients:</h2>
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
  );
}

export default Ingredients;
