import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Create from './components/create/Create';
import List from './components/list/List';
import Footer from './components/footer/Footer';
import ShoppingCart from './components/shoppingCart/ShoppingCart'

function App() {
  const [itemsCart, setItemsCart] = useState([]);

  return (
    <>
      <Header />
      <Create />
      <List setItemsCart={setItemsCart} />
      <ShoppingCart itemsCart={itemsCart} setItemsCart={setItemsCart} />
      <Footer />
    </>
  );
}

export default App;
