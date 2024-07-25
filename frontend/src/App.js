import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddressForm from './components/Auth/AddressForm';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Navbar from './components/Layout/Navbar';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/address" 
            element={user ? <AddressForm /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/products" 
            element={user && user.address ? <ProductList /> : <Navigate to="/address" />} 
          />
          <Route 
            path="/cart" 
            element={user && user.address ? <Cart /> : <Navigate to="/address" />} 
          />
          <Route 
            path="/payment" 
            element={user && user.address ? <Payment /> : <Navigate to="/address" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;