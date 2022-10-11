import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import CartItem from "../../Components/Body/CartItem";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emptyCart from "../../assets/emptyCart.png";
import BuyerInfoForm from './BuyerInfoForm';

export default function Cart() {

  const {clearCart, viewCart, cartQty, cart, cartTotal} = useContext(CartContext);

  const [usrName, setUsrName] = useState("");
  const [usrLast, setUsrLast] = useState("");
  const [usrMail, setUsrMail] = useState("");

  const MySwal = withReactContent(Swal);

  //Function that handles checkout
  const checkout = () => {

    if (validateMail(usrMail) && validateName(usrName, usrLast)){
      
      const salesCollection = collection(db,"sales");
      addDoc(salesCollection, {
        name: usrName,
        surname: usrLast,
        email: usrMail,
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

      const stockUpdate = (id, soldStock) => {
        const itemToUpdate = doc(db,"products", id);
        getDoc(itemToUpdate)
        .then(res => {
          let newStock = res.data().stock - soldStock;
          updateDoc(itemToUpdate, {stock: newStock});
          }
        )};

    } else {
        MySwal.fire({
        title: <strong>Please review your information</strong>,
        html: <i>Either you left a blank field, or your email is invalid.</i>,
        icon: 'warning'
      });
    };
  

  };

//Functions to validate user info inputed
    const validateMail = (mail) => {
      return String(mail).toLocaleLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    };

    const validateName = (name, lastName) => {
      if (String(name).length>0 && String(lastName).length>0){
        return true;
      }
    };

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
          <h2>Checkout details</h2>
          <BuyerInfoForm usrName={usrName} usrLast={usrLast} usrMail={usrMail} setUsrName={setUsrName} setUsrLast={setUsrLast} setUsrMail={setUsrMail}/>
        </div>
          <div className="checkout">
            <h2>Your cart</h2>
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
