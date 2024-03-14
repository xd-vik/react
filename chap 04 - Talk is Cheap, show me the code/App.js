import React, { createElement } from "react";
import ReactDOM from "react-dom/client";


const Test = () =>{
    return(
        <h1>Test is Done</h1>
    )
}


const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test/>)