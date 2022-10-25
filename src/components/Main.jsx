import React, { useEffect, useState } from "react";
import Feeds from "./SearchResults";
import Banner from "../layouts/Banner";
import Header from "../layouts/Header";
import SearchRecipe from "./SearchRecipe";

function Main() {
  return (
    <div className="m-4">
      <Header />
      <Banner />
      <SearchRecipe />
    </div>
  );
}

export default Main;
