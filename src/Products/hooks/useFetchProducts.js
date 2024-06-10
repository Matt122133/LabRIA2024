import { useEffect, useState } from 'react';
import { getProductsApi } from '../helpers/getProductsApi.js';

export const useFetchProducts = () => {
  const [productsApi, setProducts] = useState([]);

  const getProducts = async () => {
    const productsFromApi = await getProductsApi();
    setProducts(productsFromApi);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return {
    productsApi,
  };

}