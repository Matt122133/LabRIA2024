import { useEffect, useState } from "react";
import { getAllCategories } from "../helpers/getProductsApi.js";

export const useFetchCategories = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const getCategories = async () => {
      const categoriesApi = await getAllCategories();
      setCategories(categoriesApi);
      setIsLoading(false);
    }
  
    useEffect( () => {
      getCategories();
    }, []);
  
    return {
        categories,
        isLoading
    };
  
}