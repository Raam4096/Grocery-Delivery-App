import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="container"><h2>Your cart is empty</h2></div>;
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} style={{width: '50px', height: '50px', objectFit: 'cover'}} />
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            min="1"
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${getTotal().toFixed(2)}</h3>
        <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;