import React, { useReducer } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import CartContext from "./contexts/CartContext";
import { storeReducer, initialState } from "./reducers/store";
import styled from "styled-components";
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Header = styled.header`
  text-align:center;
  padding: 30px 0; 
`;

const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap:10px;
`;

const Footer = styled.footer`
  text-align:center;
  padding: 30px 0; 
`;


export default function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch: dispatch }}>
      <Header>
        <Title>ComicFlix</Title>
        <Text>Buy the best marvel comics!</Text>
      </Header>
      <ProductContainer>
        <ProductsList />
        <Cart />
      </ProductContainer>
      <Footer>
        Develop By Raphael Melo
      </Footer>
    </CartContext.Provider>
  );
}
