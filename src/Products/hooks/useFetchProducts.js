import { useEffect, useState } from 'react';
import { getProductsApi } from '../helpers/getProductsApi.js';

export const useFetchProducts = () => {

  const [ products, setProducts ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true );

  const getProducts = async () => {
    const productsApi = await getProductsApi();
    setProducts(productsApi);
    setIsLoading( false );
  }

  useEffect( () => {
    getProducts();
  }, []);

  return {
      products,
      isLoading
    };

}