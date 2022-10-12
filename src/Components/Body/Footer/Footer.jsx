import React from 'react'
import nika from "../../../assets/nika.png";

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={divStyle}>
                <img src={nika} alt="Sraw Hat Icon" style={imgStyle}/>
                <span>Developed by Gonzalo Cibeira - 2022</span>
            </div>
        </footer>
    )
};

const imgStyle = {
    width:50,
    marginRight:15,
};

const divStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    marginRight:100,

};

const footerStyle = {
    borderTop:"solid",
};