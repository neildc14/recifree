import React from "react";

export default function About({ children }) {
  return (
    <div>
      {children}
      <section className="mt-10 mx-auto px-2 lg:w-1/2">
        <h1 className="text-center text-2xl leading-8">
          "Our Recipe Search API allows you to search through millions of web
          recipes and integrate this information into your mobile or web
          applications."
        </h1>
        <h2 className="mt-5 text-center text-base leading-8">
          <em>
            We have the most accurate automated nutrition analysis on the web
            powered by our proprietary Natural Language Processing (NLP) engine.
            Customers get detailed nutrition breakdown of each recipe with 25+
            nutrients and appropriateness for all major diets.
          </em>
        </h2>
        <div className="text-center mt-9">
          {" "}
          <a
            href="https://developer.edamam.com/"
            className="text-md text-sky-800 text-xl"
          >
            -developer.edamam.com
          </a>
        </div>
        <p className="mt-5 text-center text-slate-600">
          This app was built and developed by Neil Edward Dela Cruz.
        </p>
      </section>
    </div>
  );
}
