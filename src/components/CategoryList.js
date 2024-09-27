import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categoriesSlice';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { list: categories, loading, error } = useSelector((state) => state.categories);
  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  if (loading) {
    return <p className="loading">Loading categories...</p>;
  }

  if (error) {
    return <p className="error">Error loading categories: {error}</p>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar" // Add a class for styling
      />
      {categories.map((category) => (
        <CategoryItem
          key={category.id} // Use the unique id for key
          name={category.category} // Using category name for display
          products={category.products.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
          )} // Filter products based on search term
        />
      ))}
    </div>
  );
};

export default CategoryList;
