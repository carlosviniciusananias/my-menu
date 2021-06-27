import React, { useState } from 'react';
import Header from './components/header/Header';
import Create from './components/create/Create';
import List from './components/list/List';
import Footer from './components/footer/Footer';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header />
      <Create />
      <List />
      <Footer />
    </>
  );
}

export default App;
