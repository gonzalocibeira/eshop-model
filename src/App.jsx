import React from "react";
import './App.css';
import "./Components/Body/body.css";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Body/ItemListContainer';
import ItemDetailContainer from './Components/Body/ItemDetailContainer';

const App = () => {
  const greet = "This is an eShop for react components and CSS styles.";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greet}/>
      <ItemDetailContainer/>
    </>
  )
};

export default App;