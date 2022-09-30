import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export default function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const updateCartQty = () => {
        let qtyAcc = 0;
        cart.forEach((p) => qtyAcc += p.itemQty);
        setCartQty(qtyAcc);
    };

    const updateCartTotal = () => {
        let totalAcc = 0;
        cart.forEach((p) => totalAcc += p.itemQty * p.price);
        setCartTotal(totalAcc);
    };

    useEffect(() => {
        updateCartQty();
        updateCartTotal();
    }, [cart])


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
    <CartContext.Provider value={{cart, addProduct, removeProduct, clearCart, isInCart, cartQty, cartTotal}}>
        {children}
    </CartContext.Provider>
    )
}
