import React, { useState, useReducer, useEffect } from "react";

function SearchResults({ results }) {
  console.log("SEARCH RESULTS------------");
  console.log(results, results.count);
  return <div className="container mt-20"></div>;
}

export default React.memo(SearchResults);
