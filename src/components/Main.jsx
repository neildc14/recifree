import React, { useEffect, useState } from "react";
import Feeds from "./SearchResults";
import Banner from "../layouts/Banner";
import Header from "../layouts/Header";
import SearchRecipe from "./SearchRecipe";

function Main() {
  return (
    <div>
      <div className="wrapper h-5/6 max-h-min rounded-br-full transition-all bg-center bg-no-repeat bg-cover px-4 pb-4 ">
        <Header />
        <Banner />
      </div>
      <div className="mx-4 pb-4 ">
        <SearchRecipe />
      </div>
    </div>
  );
}

export default Main;
