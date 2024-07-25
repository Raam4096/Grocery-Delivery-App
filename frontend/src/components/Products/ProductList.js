import React from 'react';
import ProductItem from './ProductItem';

const sampleProducts = [
  { id: 1, name: 'Organic Apples', price: 2.99, image: 'https://example.com/organic-apples.jpg' },
  { id: 2, name: 'Whole Grain Bread', price: 3.49, image: 'https://example.com/whole-grain-bread.jpg' },
  { id: 3, name: 'Free-Range Eggs', price: 4.99, image: 'https://example.com/free-range-eggs.jpg' },
  { id: 4, name: 'Almond Milk', price: 3.79, image: 'https://example.com/almond-milk.jpg' },
  { id: 5, name: 'Lean Ground Beef', price: 6.99, image: 'https://example.com/lean-ground-beef.jpg' },
  { id: 6, name: 'Fresh Spinach', price: 2.49, image: 'https://example.com/fresh-spinach.jpg' },
  { id: 7, name: 'Greek Yogurt', price: 3.99, image: 'https://example.com/greek-yogurt.jpg' },
  { id: 8, name: 'Quinoa', price: 5.49, image: 'https://example.com/quinoa.jpg' },
  { id: 9, name: 'Wild Caught Salmon', price: 9.99, image: 'https://example.com/wild-caught-salmon.jpg' },
  { id: 10, name: 'Organic Avocados', price: 4.99, image: 'https://example.com/organic-avocados.jpg' },
  { id: 11, name: 'Coconut Water', price: 3.29, image: 'https://example.com/coconut-water.jpg' },
  { id: 12, name: 'Chia Seeds', price: 6.99, image: 'https://example.com/chia-seeds.jpg' },
];

const ProductList = () => {
  return (
    <div className="container">
      <h2>Fresh Groceries</h2>
      <div className="product-list">
        {sampleProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;