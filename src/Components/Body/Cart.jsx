import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import CartItem from "../../Components/Body/CartItem";

export default function Cart() {

  const {clearCart, viewCart, cartQty, cart, cartTotal} = useContext(CartContext);

  return (
    <div>
      {cartQty === 0 ?
        <>
          <h2>Your cart is empty, add something and come again!</h2>
          <Link to="/">
          <button className="reactBtn">Continue shopping</button>
          </Link>
        </> 
        :
        <>
          <h2>Your cart:</h2>
          <div>
            {cart.map((product) => {
                  return <CartItem key={product.id} name={product.title} qty={product.itemQty} price={product.price} id={product.id}/>
            })}
            <h3>Your total is: {cartTotal.toFixed(2)}€</h3>
          </div>
          <button onClick={clearCart} className="reactBtn">Clear cart</button>
          <button className="reactBtn">Buy cart</button>
        </>
      }
    </div>
  )
}
