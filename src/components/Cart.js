import React, { useContext } from "react";
import styled from 'styled-components';
import CartContext from "../contexts/CartContext";
import { Typography } from 'antd';

const { Title, Text } = Typography;

const CartDiv = styled.div`
  background:#F3F7FA;
  padding: 2px 6px;
`
const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`
const Cart = props => {
  const cartContext = useContext(CartContext);
  console.log(cartContext)
  let totalValue = 0;

  cartContext.cart.forEach(product => {
    totalValue = totalValue + 10 * product.quantity;
  });

  const handleRemoveItemFromCart = productId => {
    cartContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId });
  };

  return (
    <CartDiv>
      <Title level={3}>Your Cart</Title>
      {cartContext.cart.map(product => (
        <div>
          <Text strong>{product.quantity}x - {product.title} </Text>
          <DeleteButton onClick={() => handleRemoveItemFromCart(product.title)}> X </DeleteButton>
        </div>
      ))}
      <p><strong>Total</strong>: R${totalValue.toFixed(2)}</p>
    </CartDiv>
  );
};

export default Cart;
