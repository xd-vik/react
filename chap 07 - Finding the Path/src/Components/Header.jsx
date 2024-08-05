import React from 'react'
import { Link } from "react-router-dom";

const Header= ()=>{
    return(
        <>
        <div id="nav">
            <div className="logo">
                <img className="logoimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/c/logo_2022.jpeg" alt=""  />
            </div>
            <div className="menus">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart">Cart</Link>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header
