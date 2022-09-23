import React from "react";
import { Link } from "react-router-dom";
import shopCart from "../../../assets/shopCart.png";

const CartWidget = () => {
    return (
        <Link to="/">
            <img src={shopCart} alt="Shopping cart logo" className="cartLogo"/>
        </Link>
    )
};

export default CartWidget;