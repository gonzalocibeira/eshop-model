import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

    let {categoryId} = useParams();

    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {

        const prodsCollection = collection(db, "products"); //This gets all Firebase products

        const activeQuery = categoryId ? query(prodsCollection, where("category","==", categoryId)) : prodsCollection;

        getDocs(activeQuery)
            .then((data)=> {
                const prodList = data.docs.map((p)=>{
                    return {
                        ...p.data(),
                        id: p.id,
                    }
                })
                setProducts(prodList)
            })
            .catch(error => console.log(error))
            .finally(() => setisLoading(false))

    }, [categoryId]);

    return(
        <>
            <div className="greeting">
                <h2>{greeting}</h2>
            </div>
            {isLoading ? <Spinner/> : <ItemList products={products}/>}
        </>
    )
};

export default ItemListContainer;