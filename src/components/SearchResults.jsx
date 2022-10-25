import React, { useState, useReducer, useEffect } from "react";

function SearchResults({ results }) {
  console.log("SEARCH RESULTS------------");

  if (results.hits === undefined || results.hits === []) {
    return;
  }

  const recipes = [];
  for (let [key, value] of Object.entries(results.hits)) {
    recipes.push(key, value);
  }

  recipes.map((recipe) => {
    console.log(recipe.recipe);
  });

  return <div className="container mt-20"></div>;
}

export default React.memo(SearchResults);
