import React, { useState } from "react";
import Modal from 'react-modal';
import '../../App.css';

import {
  Container,
  CartBox,
  CartTitleBox,
  CartItems,
  CartItem,
  ItemName,
  Button,
  Close
} from "./Styled";

import '../list/List'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ShoppingCart = ({ itemsCart, setItemsCart }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const bindRemoveItemToCart = ({ target }) => {
    setItemsCart((prevItens) => {
      const items = prevItens.filter((item, index) => {
        return Number(index) !== Number(target.value);
      })

      return items;
    })
  };

  const ModalSucess = () => {
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-header">
          Thank you for your purchase. <br /> We will be in touch.
          </div>
          <div className="modal-body">
            {itemsCart.map((item, index) =>
              <CartItem key={index}>
                <ItemName>{item}</ItemName>
              </CartItem>
            )}
          </div>
          <div className="modal-footer">
            <Button onClick={() => setIsOpen(false)}>Fechar</Button>
          </div>
        </Modal>
      </div>
    )
  }

  return (
    <>
      <Container>
        {itemsCart.length > 0 ?
          <CartBox>
            <CartTitleBox>My Cart</CartTitleBox>
            <CartItems>
              {itemsCart.map((item, index) =>
                <CartItem key={index}>
                  <ItemName>{item}</ItemName>
                  <Close onClick={bindRemoveItemToCart}>X</Close>
                </CartItem>
              )}
            </CartItems>
            <Button onClick={() => setIsOpen(true)}>Finalizar compra</Button>
          </CartBox>
          : null}
      </Container>
      {modalIsOpen ? < ModalSucess /> : null}
    </>
  )
}

export default ShoppingCart