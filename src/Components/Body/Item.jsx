import React from 'react'
import { Link } from "react-router-dom";

export default function Item({pid, title, desc, price, picUrl}) {

    const itemPath = "/product/"+pid;

    return (
        <div className="itemCard">
            <img className="itemImg" src={picUrl} alt="Pic of product"/>
            <div className="itemDesc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="priceAndDesc">
                    <p>Price: {price}€</p>
                    <Link to={itemPath}>
                        <button className="itemDescBtn">See details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}