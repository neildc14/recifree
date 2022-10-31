import React, { useState, useReducer, useEffect, useMemo } from "react";
import Recipe from "./Recipe";

function SearchResults({ results }) {
  console.log("SEARCH RESULTS------------");
  console.log(results);

  if (results === null || results === undefined) {
    return;
  }
  const hits = [];
  for (let [key, value] of Object.entries(results.data.hits)) {
    hits.push(key, value);
  }

  const recipes = [];
  hits.map((hit) => {
    if (hit.recipe !== undefined) {
      recipes.push(hit);
    }
  });

  return (
    <div className="container mt-10">
      <div className="flex flex-col flex-wrap md:flex-row lg:flex-row gap-7 md:gap-5">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe.uri} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(SearchResults);
