import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resturants from "./Components/Resturants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./Components/Error";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <Header />
      <Resturants />
      <Footer />
    </>
  );
};

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myRoutes} />);
