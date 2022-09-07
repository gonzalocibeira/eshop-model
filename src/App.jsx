import React from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Body/ItemListContainer';

const App = () => {
  const greet = "This is an eShop for react components and CSS styles.";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greet}/>
    </>
  )
};

export default App;