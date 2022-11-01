import React from "react";

function RecipeCaption({ data }) {
  return (
    <>
      {data ? (
        <h2 className="mt-12 text-center text-4xl text-gray-600 tracking-wide">
          {data.data.count !== 0 ? "Recipes" : "No Recipes"}
        </h2>
      ) : null}
    </>
  );
}

export default RecipeCaption;
