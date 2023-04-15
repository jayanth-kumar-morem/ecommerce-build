import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item }) => {
  console.log({item});
  return (
  <CartItemContainer key={item?.id}>
    {<CartItemImage src={item?.images[0]} alt='item' />}
    <ItemDetailsContainer>
      <span>{item.item_name}</span>
      <span>
        {item.quantity} x ${item.price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)};

export default CartItem;
