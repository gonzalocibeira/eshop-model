import React, {useState} from 'react'
import "./body.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ItemCount({stock, initial, onAdd}) {

    const [qty, setQty] = useState(initial);

    const SwalStock = withReactContent(Swal)

    const alertStock = () => {SwalStock.fire({
        title: <strong>No hay suficiente stock!</strong>,
        html: <i>El stock disponible para este producto es de {stock} unidad/es.</i>,
        icon: 'error'
    })};

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
