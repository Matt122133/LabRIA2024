import { useEffect, useState } from 'react';
import { getProductsApiById } from '../helpers/getProductsApi.js';

export const useFetchProductById = (productId) => {

  const [product, setProducts] = useState([]);

  const getProducts = async () => {
    const product = await getProductsApiById(productId);
    setProducts(product);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return {
    product,
  };

}