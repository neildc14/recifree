import React from "react";

function Banner({ label, headingClass }) {
  // console.log("banner");
  return (
    <section className="container mx-auto mt-12">
      <h1 className={headingClass}>{label}</h1>
    </section>
  );
}

export default React.memo(Banner);
