import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;