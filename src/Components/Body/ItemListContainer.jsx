import React from "react";
/* DESAFIO CLASE 5 import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content' */
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

/* DESAFIO CLASE 5  const MySwal = withReactContent(Swal)

    const onAdd = (itemQty) => {MySwal.fire({
        title: <strong>Product added!</strong>,
        html: <i>You've added {itemQty} product/s to your cart.</i>,
        icon: 'success'
    })};

    const alertStock = (stock) => {MySwal.fire({
        title: <strong>Not enough stock!</strong>,
        html: <i>Stock available for this product is {stock} unit/s.</i>,
        icon: 'error'
    })}; */

    return(
        <>
            <h2>{greeting}</h2>        
            {/* DESAFIO CLASE 5 <ItemCount stock={6} initial={1} onAdd={onAdd} alertStock={alertStock}/> */}
            <ItemList />
        </>
    )
};

export default ItemListContainer;