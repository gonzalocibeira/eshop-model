import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = ({greeting}) => {

    let {categoryId} = useParams();
    const currentCategory = categoryId ? "/category/"+categoryId : "";

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products"+currentCategory)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error))
        .finally(() => setisLoading(false))
    }, [categoryId]);

    return(
        <>
            <h2>{greeting}</h2>
            {isLoading ? <Spinner/> : <ItemList products={products}/>}
        </>
    )
};

export default ItemListContainer;