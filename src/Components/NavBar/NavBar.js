import React from "react";
import "./NavBar.css";
import logo192 from "../../assets/logo192.png";
import shopCart from "../../assets/shopCart.png";

const NavBar = () => {
    return (
        <header>
            <img src={logo192} alt="React logo" className="reactLogo"/>
            <h1>React eShop</h1>
            <nav>
                <a href="">Components</a>
                <a href="">Shadows</a>
                <a href="">Styles</a>
            </nav>
            <a href="">
                <img src={shopCart} alt="Shopping cart logo" className="cartLogo"/>
            </a>
        </header>
    )
};

export default NavBar;