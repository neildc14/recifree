import React, { useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PulseLoading from "./PulseLoading";
import SearchResults from "./SearchResults";
import useFetchRecipe from "../hooks/useFetchRecipe";
import SearchBar from "./SearchBar";
import RecipeCaption from "./RecipeCaption";
import ViewMore from "./ViewMore";

function SearchRecipe() {
  const [search, setSearch, fetchRecipe] = useFetchRecipe();
  let pulseLoading;

  const { isError, isFetching, refetch, data, error } = useQuery(
    ["recipes"],
    fetchRecipe,
    { enabled: false }
  );

  if (isFetching) {
    pulseLoading = true;
  }

  if (isError) {
    console.log(error.message);
  }

  const handleChange = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );

  const searchRecipe = useCallback(() => {
    refetch();
  }, [data]);

  useEffect(() => {
    let searchBar = document.getElementById("search");
    searchBar.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        refetch();
      }
    });

    searchBar.removeEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        refetch();
      }
    });
  }, []);

  let fallbackLoad = [];
  const LOADING_FALLBACK = 3;

  for (let i = 0; i < LOADING_FALLBACK; i++) {
    fallbackLoad.push(<PulseLoading key={i} />);
  }

  return (
    <>
      <SearchBar handleChange={handleChange} searchRecipe={searchRecipe} />
      <RecipeCaption data={data} />

      {pulseLoading ? (
        <div className="flex flex-col flex-wrap md:flex-row lg:flex-row ">
          {fallbackLoad}
        </div>
      ) : (
        <div className="w-full">
          <SearchResults results={data} />
          <ViewMore data={data} />
        </div>
      )}
    </>
  );
}

export default SearchRecipe;
