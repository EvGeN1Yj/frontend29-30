import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

/**
 * @param {Object} props
 * @param {import('../types/product').Product[]} props.products
 */
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-list-item">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList; 