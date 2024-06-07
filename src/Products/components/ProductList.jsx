import React, { useState } from 'react';
import { Product } from './Product';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useFetchCategories } from '../hooks/useFetchCategories';
import Sidebar from './Sidebar';

export const ProductList = () => {
  const { products, isLoading } = useFetchProducts();
  const { categories, isLoading: isLoadingCategories } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectCategory = (selected) => {
    setSelectedCategories(selected);
  };

  // Filtrar productos basados en las categorías seleccionadas
  const filteredProducts = selectedCategories.length > 0
    ? products.filter(product => selectedCategories.includes(product.category))
    : products;

  return (
    <> 
      <div className="categories-list-container">
        <Sidebar categories={categories} onSelectCategory={handleSelectCategory} />
      </div>

      <main className="card-grid">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </main>
    </>
  );
};
