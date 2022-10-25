import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  Suspense,
  lazy,
} from "react";
import axios from "axios";
import PulseLoading from "./PulseLoading";

const SearchResults = lazy(() => import("./SearchResults"));

function SearchRecipe() {
  const [typed, setTyped] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({});
  const [isFetching, setFetching] = useState(false);

  console.log("SEARCH RECIPE--------------");
  useEffect(() => {
    let APP_ID = "c8043fcb";
    let APP_KEY = "32a19536fa36875497acba0a67af0106";
    let URL =
      process.env.REACT_APP_URL ??
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    console.log(search);
    if (search === "") {
      return;
    }

    setFetching(true);

    axios
      .get(URL)
      .then((response) => {
        setResults(response.data);
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const handleChange = (e) => {
    setTyped(e.target.value);
  };
  const searchRecipe = () => {
    setSearch(typed);
  };

  return (
    <>
      <div className="container flex justify-center mt-10">
        <input
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

      {isFetching ? (
        <div>
          <PulseLoading />
          <PulseLoading />
        </div>
      ) : (
        <SearchResults results={results} />
      )}
    </>
  );
}
export default SearchRecipe;
