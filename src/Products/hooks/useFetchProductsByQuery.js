import { useEffect, useState } from 'react';
import { getProductsApiByQuery } from '../helpers/getProductsApi';

export const useFetchProductsByQuery = (query) => {
  const [products, setProducts] = useState([]);

  const getProductsByQuery = async () => {
    const productsApi = await getProductsApiByQuery(query);
    setProducts(productsApi);
  }

  useEffect(() => {
    getProductsByQuery();
  }, [query]);

  return { products };
};