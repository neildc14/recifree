import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PulseLoading from "./PulseLoading";
import SearchResults from "./SearchResults";

function SearchRecipe() {
  const [search, setSearch] = useState("");
  let pulseLoading;

  const fetchRecipe = () => {
    if (search === "") {
      return null;
    }

    return axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );
  };

  const { isLoading, isError, isFetching, refetch, data, error } = useQuery(
    ["recipes"],
    fetchRecipe,
    { enabled: false }
  );
  console.log(isLoading, isFetching);

  if (isFetching) {
    pulseLoading = true;
  }

  if (isError) {
    console.log(error.message);
  }

  console.log("SEARCH RECIPE--------------");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchRecipe = () => {
    refetch();
  };

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

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-base text-slate-500">
          <em>Search for your desired recipes..</em>
        </h2>
      </div>
      <div className="container flex justify-center mt-2">
        <input
          id="search"
          type="search"
          className="h-12 w-full md:max-w-xl p-2 border border-orange-400 focus:outline-orange-600 focus:border-none rounded-tl-2xl rounded-bl-2xl text-base bg-neutral-100 text-gray-700"
          onChange={handleChange}
        />
        <button
          onClick={searchRecipe}
          className="ml-2 rounded-tr-2xl rounded-br-2xl bg-orange-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white p-1"
            height="48"
            width="48"
          >
            <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
          </svg>
        </button>
      </div>

      {data ? (
        <h2 className="mt-12 text-center text-4xl text-gray-600 tracking-wide">
          {data.data.count !== 0 ? "Recipes" : "No Recipes"}
        </h2>
      ) : null}

      {pulseLoading ? (
        <div className="flex flex-col flex-wrap md:flex-row lg:flex-row ">
          <PulseLoading />
          <PulseLoading />
          <PulseLoading />
        </div>
      ) : (
        <div>
          {" "}
          <SearchResults results={data} />
          {data ? (
            <section>
              {data.data.count !== 0 && (
                <button className="block mx-auto mt-10 p-2 bg-stone-300 hover:bg-stone-500 hover:text-slate-50">
                  VIEW MORE
                </button>
              )}
            </section>
          ) : null}
        </div>
      )}
    </>
  );
}
export default SearchRecipe;
