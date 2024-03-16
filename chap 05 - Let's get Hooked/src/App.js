import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import "./App.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resturants from "./Components/Resturants";



const App = () =>{
    return(

        <>
        <Header/>
        <Resturants/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)