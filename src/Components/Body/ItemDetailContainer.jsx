import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';

export default function ItemDetailContainer() {

    let pid = useParams();

    let productUrl = "https://fakestoreapi.com/products/"+pid.productId;

    const [item, setItem] = useState("");
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch(productUrl)
        .then(res => res.json())
        .then(data => setItem(data))
        .catch(error => console.log(error))
        .finally(() => setisLoading(false))
    }, [pid]);

    return (
        <div>
            {isLoading ? <Spinner/> : <ItemDetail id={item.id} title={item.title} desc={item.description} img={item.image} price={item.price}/>}
        </div>
        
    )
}
