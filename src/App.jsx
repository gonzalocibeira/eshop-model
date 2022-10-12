import React from "react";
import './App.css';
import "./Components/Body/body.css";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Body/ItemListContainer';
import ItemDetailContainer from './Components/Body/ItemDetailContainer';
import Cart from "./Components/Body/Cart";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from "./Context/CartContext";
import Footer from "./Components/Body/Footer/Footer"
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const App = () => {
  const greet = "This is a model eShop created with React JS";
  return (
    <>
      <div className="content-container">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={greet}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={greet}/>}/>          
              <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
      <div className="footer--pin">
        <Footer/>
      </div>
    </>
  )
};

export default App;