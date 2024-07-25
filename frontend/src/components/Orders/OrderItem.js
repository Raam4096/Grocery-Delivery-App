import React from 'react';

function OrderItem({ order }) {
  return (
    <div className="order-item">
      <h3>Order #{order._id}</h3>
      <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
      <p>Status: {order.status}</p>
      <ul>
        {order.products.map(item => (
          <li key={item._id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${order.totalAmount.toFixed(2)}</p>
    </div>
  );
}

export default OrderItem;