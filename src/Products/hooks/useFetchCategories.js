import { useEffect, useState } from "react";
import { getAllCategories } from "../helpers/getProductsApi.js";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const categoriesApi = await getAllCategories();
    setCategories(categoriesApi);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return {
    categories,
  };
}