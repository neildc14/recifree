import React, { useState } from "react";

import axios from "axios";

export default function useFetchRecipe() {
  const [search, setSearch] = useState("");

  const fetchRecipe = () => {
    if (search === "") {
      return null;
    }

    return axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );
  };

  return [search, setSearch, fetchRecipe];
}
