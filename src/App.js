import React, { lazy, Suspense } from "react";
import Main from "./components/Main";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import PulseLoading from "./components/PulseLoading";

const RecipeDetails = lazy(() => import("./components/RecipeDetails"));

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
                <Header />
                <Banner />
              </Main>
            }
          />
          <Route
            path="recipe/:id"
            element={
              <Suspense fallback={<PulseLoading />}>
                <RecipeDetails>
                  <Header />
                </RecipeDetails>
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
