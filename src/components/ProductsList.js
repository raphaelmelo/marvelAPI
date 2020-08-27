import React, { useState, useEffect, useContext } from "react";
import CartContext from "../contexts/CartContext";
import styled from "styled-components";
import Axios from "axios";
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

const { Meta } = Card;

const ProductsGrid = styled.div`
background: #F3F7FA;
  width:100%;
  height:auto;
  padding: 10px 0;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
`;

const ProductItem = styled.div`
  width: auto;
  height: auto;
  padding:4px;
  margin: 10px 0;
  background: #FFFFFF;
  text-align:center;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  Button {
    margin: 10px;
  }
`;

const ProductsList = props => {
  const baseUrl =
    "https://gateway.marvel.com:443/v1/public/events?apikey=37656bbc7dc959363765ce7f17a8fa15&ts=1595716133&orderBy=startDate&limit=9&hash=42785f312bb4be88f6fbcacb58f5152f";
  const [products, setProducts] = useState([]);
  const cartContext = useContext(CartContext);

  const addProductToCart = (product) => {
    cartContext.dispatch({ type: "ADD_ITEM_TO_CART", product: product })
  }

  useEffect(() => {
    Axios.get(`${baseUrl}`).then(response => {
      setProducts(response.data.data.results);
    });
  }, []);

  const content = products.map((event) => {
    return (
      <ProductItem>
        <Card hoverable style={{ width: 240 }} cover={<img alt={event.title}
          src={`${event.thumbnail.path}/portrait_incredible.jpg`} />}>
          <Meta title={event.title} />
          <Button onClick={() => addProductToCart(event)}>BUY COMIC 10$</Button>
        </Card>
      </ProductItem>
    );
  })

  return (
    <div>
      <ProductsGrid>
        {(content === undefined) ? (<p>Carregando</p>) : (<>{content}</>)}
      </ProductsGrid>
    </div>
  );
};

export default ProductsList;
