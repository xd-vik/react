import React from 'react'

const Header= ()=>{
    return(
        <>
        <div id="nav">
            <div className="logo">
                <img className="logoimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/c/logo_2022.jpeg" alt=""  />
            </div>
            <div className="menus">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header