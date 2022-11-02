import React from "react";

function ViewMore({ data }) {
  return (
    <>
      {data && (
        <section>
          {data.data.count !== 0 && (
            <button className="block mx-auto mt-10 p-2 bg-stone-300 hover:bg-stone-500 hover:text-slate-50">
              VIEW MORE
            </button>
          )}
        </section>
      )}
    </>
  );
}

export default ViewMore;
