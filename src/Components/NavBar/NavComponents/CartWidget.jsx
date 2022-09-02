import React from "react";
import shopCart from "../../../assets/shopCart.png";

const CartWidget = () => {
    return (
        <a href="">
            <img src={shopCart} alt="Shopping cart logo" className="cartLogo"/>
        </a>
    )
};

export default CartWidget;