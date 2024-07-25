import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AddressForm = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const { updateAddress } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAddress(address);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Enter Your Address</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your full address"
        required
      />
      <button type="submit">Continue to Products</button>
    </form>
  );
};

export default AddressForm;