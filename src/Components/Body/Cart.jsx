import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import CartItem from "../../Components/Body/CartItem";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emptyCart from "../../assets/emptyCart.png";

export default function Cart() {

  const {clearCart, viewCart, cartQty, cart, cartTotal} = useContext(CartContext);

  const buyer = {
    name:"John",
    surname:"Doe",
    email:"johndoe@random.com"
  };

  const MySwal = withReactContent(Swal);

  const checkout = () => {
    const salesCollection = collection(db,"sales");
    addDoc(salesCollection, {
      buyer,
      items: cart,
      date: serverTimestamp(),
      cartTotal,
    })
    .then((res)=>{
      MySwal.fire({
        title: <strong>Thanks for your purchase</strong>,
        html: <i>Your purchase ID is <strong>{res.id}</strong>.</i>,
        icon: 'success'
      });
      clearCart();
      cart.forEach((item)=>{stockUpdate(item.id, item.itemQty)});
    });
  };

  const stockUpdate = (id, soldStock) => {
    const itemToUpdate = doc(db,"products", id);
    getDoc(itemToUpdate)
    .then(res => {
      let newStock = res.data().stock - soldStock;
      updateDoc(itemToUpdate, {stock: newStock});
      }
    )}

  return (
    <div>
      {cartQty === 0 ?
        <>
          <div className="emptyCart">
            <h2>Your cart is empty, add something and come again!</h2>
            <img src={emptyCart} alt="" />
            <Link to="/">
            <button className="reactBtn">Continue shopping</button>
            </Link>
          </div>
        </> 
        :
        <>
          <div className="checkout">
            <h2>Your cart:</h2>
            <div style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
              {cart.map((product) => {
                    return <CartItem key={product.id} name={product.title} qty={product.itemQty} price={product.price} id={product.id}/>
              })}
            </div>
            <h2 style={{marginTop:30, marginBottom:30}}>Your cart total is: {cartTotal.toFixed(2)}€</h2>
            <div style={{display:"flex", alignItems:"center"}}>
              <button onClick={clearCart} className="reactBtnNo" style={{marginRight:50}}>Clear cart</button>
              <button onClick={checkout} className="reactBtn">Buy cart</button>
            </div>
          </div>
        </>
      }
    </div>
  )
}
