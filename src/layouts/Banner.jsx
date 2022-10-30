import React from "react";

function Banner({ props }) {
  // console.log("banner");
  return (
    <section className="container mx-auto mt-12">
      <h1 className="text-5xl text-center text-slate-50 font-bold">
        Your culinary adventure awaits.
      </h1>
    </section>
  );
}

export default React.memo(Banner);
