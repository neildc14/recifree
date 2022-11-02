import React from "react";
import Recipe from "./Recipe";
import Fade from "react-reveal/Fade";

function SearchResults({ results }) {
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
      <div className="flex flex-col flex-wrap md:flex-row lg:flex-row justify-center gap-5 ">
        {recipes?.map((recipe, index) => (
          <Fade bottom>
            <Recipe recipe={recipe} key={recipe.recipe.uri + index} />
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default React.memo(SearchResults);
