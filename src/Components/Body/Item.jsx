import React from 'react'

export default function Item({title, desc, price, picUrl}) {
    return (
        <div className="itemCard">
            <img className="itemImg" src={picUrl} alt="Pic of product"/>
            <div className="itemDesc">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="priceAndDesc">
                    <p>Price: {price}€</p>
                    <button className="itemDescBtn">See details</button>
                </div>
            </div>
        </div>
    )
}