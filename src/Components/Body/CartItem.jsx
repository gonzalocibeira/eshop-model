import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";

export default function CartItem({name, qty, price, id}) {

    const {removeProduct} = useContext(CartContext);
    const itemTotal = price*qty;

    return (
        <div className="cartItem">
            <span style={{fontSize:20}}>{name}</span>
            <span style={{fontSize:20}}>&nbsp;&nbsp;<strong>|&nbsp;&nbsp;{qty} x {price}€&nbsp;&nbsp;-&nbsp;&nbsp;Item total: {itemTotal.toFixed(2)}€</strong></span>
            <button className="reactBtnDel" style={{ marginLeft:10 }} onClick={() => removeProduct(id)}>X</button>
        </div>
    )
}
