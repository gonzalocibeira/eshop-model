import React from 'react'
import Item from "./Item"

export default function ItemList({products}) {

    return (
        <div style={styles}>
            {products.map((product) => {
                return <Item key={product.id} pid={product.id} title={product.title} picUrl={product.image} price={product.price}/>
            })}
        </div>
    )
}

const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
}
