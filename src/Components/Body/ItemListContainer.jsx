import React from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemListContainer = ({greeting}) => {

    const MySwal = withReactContent(Swal)

    const onAdd = (itemQty) => {MySwal.fire({
        title: <strong>Producto añadido!</strong>,
        html: <i>Has añadido {itemQty} producto/s al carrito.</i>,
        icon: 'success'
    })};

    const alertStock = (stock) => {MySwal.fire({
        title: <strong>No hay suficiente stock!</strong>,
        html: <i>El stock disponible para este producto es de {stock} unidad/es.</i>,
        icon: 'error'
    })};

    return(
        <>
            <h2>{greeting}</h2>        
            <ItemCount stock={6} initial={1} onAdd={onAdd} alertStock={alertStock}/>
        </>
    )
};

export default ItemListContainer;