import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';

export default function Cart() {

  const {clearCart} = useContext(CartContext);
  const {viewCart} = useContext(CartContext);

  return (
    <div>
      <p>Soon there will be a full cart here!</p>
      <button onClick={viewCart} className="reactBtn">View cart (on console)</button>
      <button onClick={clearCart} className="reactBtn">Clear cart</button>
    </div>
  )
}
