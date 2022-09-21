import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({categorias}) => {
    return(
        <nav>
            {categorias.map((categoria) =>{
                return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
            }
            )}
        </nav>
    )
};

export default Nav;