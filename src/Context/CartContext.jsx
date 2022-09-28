import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addProduct = (id, title, desc, img, price, itemQty) => {
        if (isInCart(id)){
            let tempQty = cart.find((p) => {return p.id === id}).itemQty;
            itemQty += tempQty;
            let filteredCart = cart.filter((p)=>{
                return p.id !== id;
            });
            setCart([...filteredCart, {id, title, desc, img, price, itemQty}])
        } else {
            setCart([...cart, {id, title, desc, img, price, itemQty}]);
        }
    };

    const viewCart = () => {console.log(cart)};

    const removeProduct = (id) => {

        const filteredArray = cart.filter((p)=>{
            return p.id !== id;
        });

        setCart(filteredArray)
    };

    const isInCart = (id) => {
        return cart.some( p => {return p.id === id})
    };

    const clearCart = () => {
        console.log('Clearing Cart');
        setCart([]);
    };

    return (
    <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart, viewCart, isInCart}}>
        {children}
    </CartContext.Provider>
    )
}
