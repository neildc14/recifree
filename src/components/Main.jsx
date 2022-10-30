import React, { useEffect, useState } from "react";
import Feeds from "./SearchResults";
import Banner from "../layouts/Banner";
import Header from "../layouts/Header";
import SearchRecipe from "./SearchRecipe";

function Main() {
  return (
    <div>
      <div className="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-orange-400  px-4 pb-16 ">
        <Header />
        <Banner />
      </div>
      <section className="mx-4 pb-4 ">
        <SearchRecipe />
      </section>
    </div>
  );
}

export default Main;
