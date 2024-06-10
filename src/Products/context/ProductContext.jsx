import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsContext, setProductsContext] = useState([]);

  const updateProductsContext = (newProducts) => {
    setProductsContext(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        productsContext,
        updateProductsContext,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
