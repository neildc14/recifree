import React from "react";
import food from "../assets/images/food.png";

function RecipeImage({ image, label, classImage }) {
  return (
    <figure>
      <img
        src={image !== null ? image : food}
        alt={label}
        className={classImage}
      />
    </figure>
  );
}

export default RecipeImage;
