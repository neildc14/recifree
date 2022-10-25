import React from "react";

function Banner({ props }) {
  // console.log("banner");
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-5xl text-center text-orange-500 font-bold">
        Your culinary adventure awaits.
      </h1>
    </div>
  );
}

export default React.memo(Banner);
