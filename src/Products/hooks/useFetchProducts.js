import { useEffect, useState } from 'react';
import { getProductsApi } from '../helpers/getProductsApi.js';

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsApi = await getProductsApi();
    setProducts(productsApi);
  }

  useEffect( () => {
    getProducts();
  }, []);

  return {
    products,
    };

}