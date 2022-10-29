import React from "react";
import ReactDOM from "react-dom";
import food from "../assets/images/food.png";

let portal = document.getElementById("portal");

function RecipeImage({ image }) {
  return (
    <img
      src={image !== null ? image : food}
      alt="recipe image"
      className="z-0 h-48 mb-10 rounded-b-3xl w-full overflow-hidden overflow-y-hidden"
    />
  );
}

export default RecipeImage;
