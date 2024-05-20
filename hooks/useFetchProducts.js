import { useEffect, useState } from 'react';
import { getProductsApi } from '../helpers/getProductsApi.js';

export const useFetchProducts = () => {

  const [ products, setProducts ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true );

  const getProducts = async () => {
    const products = await getProductsApi();
    setProducts( products );
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