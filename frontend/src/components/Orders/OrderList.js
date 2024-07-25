import React, { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import api from '../../utils/api';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map(order => (
          <OrderItem key={order._id} order={order} />
        ))
      )}
    </div>
  );
}

export default OrderList;