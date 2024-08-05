import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resturants from "./Components/Resturants";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error } from "./Components/Error";
import About from "./Components/About";
import Contact  from "./Components/Contact";
import ResturantMenu from "./Components/ResturantMenu";

const App = () => {
  return (
    <>
      <Header />
    <Outlet/>
      <Footer />
    </>
  );
};

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[{
        path :"/",
        element: <Resturants />
    },
        {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element :<Contact/>
    },
    {
        path:"/resmenu/:resid",
        element: <ResturantMenu/>
    },
],
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myRoutes} />);
