import React, { useState, useReducer, useEffect, useMemo } from "react";
import Recipe from "./Recipe";

function SearchResults({ results }) {
  console.log("SEARCH RESULTS------------");

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
    <div className="container mt-20">
      <div className="flex flex-col flex-wrap gap-7">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe.uri} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(SearchResults);
