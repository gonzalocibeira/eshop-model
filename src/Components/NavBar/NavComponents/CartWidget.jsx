import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shopCart from "../../../assets/shopCart.png";
import { CartContext } from "../../../Context/CartContext";

const CartWidget = () => {

    const {cartQty} = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <img src={shopCart} alt="Shopping cart logo" className="cartLogo"/>
            </Link>
            {cartQty === 0 ? "" : <span>{cartQty}</span>}
        </div>
    )
};

export default CartWidget;