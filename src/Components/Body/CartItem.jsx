import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";

export default function CartItem({name, qty, price, id}) {

    const {removeProduct} = useContext(CartContext);
    const itemTotal = price*qty;

    return (
        <div>
            <span>{name} <strong>x {qty}</strong> - Item total: {itemTotal.toFixed(2)}€</span>
            <button style={{ marginLeft:10 }} onClick={() => removeProduct(id)}>Remove from cart</button>
        </div>
    )
}
