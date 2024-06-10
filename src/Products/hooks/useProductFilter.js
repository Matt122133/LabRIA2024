import { useState, useEffect } from 'react';

export const useProductFilter = (initialProducts, searchTerm, selectedCategories) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  useEffect(() => {
    const newFilteredProducts = initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategories.length > 0
          ? selectedCategories.includes(product.category)
          : true;
      const matchesSearchTerm = searchTerm
        ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesSearchTerm;
    });

    setFilteredProducts(newFilteredProducts);
  }, [searchTerm, initialProducts, selectedCategories]);

  return filteredProducts;
};