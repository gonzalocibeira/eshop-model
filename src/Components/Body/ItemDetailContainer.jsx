import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

export default function ItemDetailContainer() {

    const pid = useParams().productId;
    const [item, setItem] = useState("");
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

        const prodsCollection = collection(db, "products");
        const refDoc = doc(prodsCollection, pid)

        getDoc(refDoc)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data()
                });
            })
            .catch(error => console.log(error))
            .finally(() => setisLoading(false))

    }, [pid]);

    return (
        <div>
            {isLoading ? <Spinner/> : <ItemDetail id={item.id} stock={item.stock} title={item.title} desc={item.description} img={item.image} price={item.price}/>}
        </div>
        
    )
}
