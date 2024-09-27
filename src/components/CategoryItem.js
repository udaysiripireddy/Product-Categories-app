import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ name, products = [] }) => {
  return (
    <div>
      <h2>{name}</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>Rating: {product.rating}</p>
              <p>Category: {product.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

// Define prop types
CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default CategoryItem;
