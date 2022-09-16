import React from 'react'


export default function ItemDetail({title, desc, img, price} ) {
    return (
        <div className="itemDetailCard">
            <h2>{title}</h2>
            <div style={{display: "flex", flexDirection: "row", justifyContent:"flex-end", alignItems:"center", backgroundColor: "white"}}>
                <img src={img} alt={title} className="itemDetailImg"/>
                <p style={{color: "black", fontWeight:"700", marginLeft:"10px"}}>{desc}</p>
            </div>
            <p style={{fontWeight:"700", fontSize:"30px"}}>${price}</p>
        </div>
    )
}
