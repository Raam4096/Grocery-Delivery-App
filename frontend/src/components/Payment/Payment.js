import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { getTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    alert('Payment processed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Payment</h2>
      <p>Total Amount: ${getTotal().toFixed(2)}</p>
      <p>Delivery Address: {user.address}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Card Number"
          required
        />
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="CVV"
          required
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;