import React from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemListContainer = ({greeting}) => {

    const SwalProdAdd = withReactContent(Swal)

    const onAdd = (itemQty) => {SwalProdAdd.fire({
        title: <strong>Producto añadido!</strong>,
        html: <i>Has añadido {itemQty} producto/s al carrito.</i>,
        icon: 'success'
    })};

    return(
        <>
            <h2>{greeting}</h2>        
            <ItemCount stock={6} initial={1} onAdd={onAdd}/>
        </>
    )
};

export default ItemListContainer;