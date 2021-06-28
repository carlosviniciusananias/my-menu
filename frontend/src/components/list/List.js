import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from './Product'

import { Container } from './Styled'

const List = ({ setItemsCart }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = () => {
    axios
      .get("http://localhost:3000/menu")
      .then((response) => {
        setArray(response.data);
      })
      .catch((error) => console.log(error));
  };

  const bindAddItemToCart = ({ target }) => {
    const item = target.value;
    setItemsCart((prevItens) => [item, ...prevItens]);
  };

  const MountList = () => {
    return (
      <Container>
        {array.map((menu, index) => (
          <Product key={index} name={menu.name} ingredients={menu.ingredients} description={menu.description} sellingPrice={menu.sellingPrice} bestPrice={menu.bestPrice} bindAddItemToCart={bindAddItemToCart} />
        ))}
      </Container>
    );
  };

  return <>{array ? <MountList /> : null}</>;
};

export default List;
