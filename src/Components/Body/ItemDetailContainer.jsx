import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    let fakeStoreURL = "https://fakestoreapi.com/products/5";

    const [item, setItem] = useState();

    useEffect(() => {
        fetch(fakeStoreURL)
        .then(res => res.json())
        .then(data => setItem(data))
    }, []);

    return (
        <ItemDetail title={item.title} desc={item.description} img={item.image} price={item.price}/>
        //<h2>Probando</h2>
    )
}
