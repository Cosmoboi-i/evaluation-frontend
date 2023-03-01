import "./App.css";
import React from "react";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// add this in constants ////
import { ERROR_ROUTE, HOME_ROUTE } from "./constants/paths";
import { Home, Error, PageNotFound, Card } from "./Pages";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={HOME_ROUTE + "/event/:id"} element={<Card />} />
          <Route path={ERROR_ROUTE + "/:statusCode"} element={<Error />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
