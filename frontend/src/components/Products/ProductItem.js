import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px'}} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;