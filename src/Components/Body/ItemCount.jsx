import React, {useState} from 'react'
import "./body.css"

export default function ItemCount({stock, initial, onAdd, alertStock}) {

    const [qty, setQty] = useState(initial);

    const minusItem = () => {
        qty === initial ? setQty(1) : setQty(qty - 1);
    };

    const plusItem = () => {
        qty === stock ? alertStock(stock) : setQty(qty + 1);
    };

    return (
        <div className="product__box">
            <p>Component 1</p>
            <div>
                <button className="reactBtn" onClick={minusItem}>-</button>
                <span className="qty__span">{qty}</span>
                <button className="reactBtn" onClick={plusItem}>+</button>
            </div>
            <button className="reactBtn" onClick={() =>{onAdd(qty)}}>Add to cart</button>
        </div>
    )
}