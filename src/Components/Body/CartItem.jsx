import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";

export default function CartItem({name, qty, price, id}) {

    const {removeProduct} = useContext(CartContext);

    return (
        <div>
            <span>{name} x {qty} - Item total: {price*qty}€</span>
            <button style={{ marginLeft:10 }} onClick={() => removeProduct(id)}>Remove from cart</button>
        </div>
    )
}
