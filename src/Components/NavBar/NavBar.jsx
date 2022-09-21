import React from "react";
import "./NavBar.css";
import logo192 from "../../assets/logo192.png";
import Nav from "./NavComponents/Nav"
import CartWidget from "./NavComponents/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    const categorias = [
        {id:0, nombre: "Electronics", ruta: "/category/electronics"},
        {id:1, nombre: "Jewelery", ruta: "/category/jewelery"},
        {id:2, nombre: "Men's clothing", ruta: "/category/men's clothing"},
        {id:3, nombre: "Women's clothing", ruta: "/category/women's clothing"},                
    ]

    return (
        <header>
            <Link to={"/"}>
                <img src={logo192} alt="React logo" className="reactLogo"/>
            </Link>
            <Link to={"/"}>
                <h1>React eShop</h1>
            </Link>
            <Nav categorias={categorias}/>
            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </header>
    )
};

export default NavBar;