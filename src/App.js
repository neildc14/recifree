import React, { lazy, Suspense } from "react";
import Main from "./components/Main";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import PulseLoading from "./components/PulseLoading";

const RecipeDetails = lazy(() => import("./components/RecipeDetails"));
const About = lazy(() => import("./components/pages/About"));

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Header
                  label="Your culinary adventure awaits."
                  headingClass="text-5xl text-center text-slate-50 font-bold"
                  headerClass="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-orange-400 shadow-md shadow-gray-400  px-4 pb-16"
                />
              </Main>
            }
          />
          <Route
            path="recipe/:id"
            element={
              <Suspense fallback={<PulseLoading />}>
                <RecipeDetails />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PulseLoading />}>
                <About>
                  <Header
                    label="About Us"
                    headingClass="pt-10 text-center text-3xl text-slate-50"
                    headerClass="wrapper h-5/6 max-h-min rounded-bl-3xl rounded-br-3xl transition-all bg-sky-400  px-4 pb-16 shadow-md shadow-gray-400"
                  />
                </About>
              </Suspense>
            }
          />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
