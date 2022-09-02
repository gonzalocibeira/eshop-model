import React from "react";
import "./NavBar.css";
import logo192 from "../../assets/logo192.png";
import Nav from "./NavComponents/Nav"
import CartWidget from "./NavComponents/CartWidget";


const NavBar = () => {
    return (
        <header>
            <img src={logo192} alt="React logo" className="reactLogo"/>
            <h1>React eShop</h1>
            <Nav />
            <CartWidget />
        </header>
    )
};

export default NavBar;