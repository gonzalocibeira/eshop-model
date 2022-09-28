import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from '../../Context/CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export default function ItemDetail({id, title, desc, img, price}) {

    const {addProduct, removeProduct} = useContext(CartContext);

    const [qty, setQty] = useState("");

    const MySwal = withReactContent(Swal);

    const onAdd = (itemQty) => {MySwal.fire({
        title: <strong>Product added!</strong>,
        html: <i>You've added {itemQty} product/s to your cart.</i>,
        icon: 'success'
    });
    setQty(itemQty);
    addProduct(id, title, desc, img, price, itemQty);
};

    const alertStock = (stock) => {MySwal.fire({
        title: <strong>Not enough stock!</strong>,
        html: <i>Stock available for this product is {stock} unit/s.</i>,
        icon: 'error'
    })};

    const onRemove = (id) => {
        setQty("");
        removeProduct(id);
    };


    return (
        <div className="itemDetailCard">
            <h2>{title}</h2>
            <div style={{display: "flex", flexDirection: "row", justifyContent:"flex-end", alignItems:"center", backgroundColor: "white"}}>
                <img src={img} alt={title} className="itemDetailImg"/>
                <p style={{color: "black", fontWeight:"700", marginLeft:"10px"}}>{desc}</p>
            </div>
            <p style={{fontWeight:"700", fontSize:"30px"}}>${price}</p>
            {qty === "" ?  
            <ItemCount stock={Math.floor(Math.random()*10)} initial={1} onAdd={onAdd} alertStock={alertStock}/>:
            <Link to="/cart">
                <button className="reactBtn">Finish purchase</button>
            </Link>}
            <button onClick={() => onRemove(id)} className="reactBtn">Remove from cart</button>
        </div>
    )
}
