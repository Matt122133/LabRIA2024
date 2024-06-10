import { useEffect, useState } from "react";
import { getProductsByCategory } from '../helpers/getProductsApi.js';

export const useFetchProductsByCategory = (category) => {
    const [categories, setCategories] = useState([]);

    const getProductsCategory = async () => {
        const products = await getProductsByCategory(category);
        setCategories(products);
    }

    useEffect(() => {
        getProductsCategory();
    }, []);

    return {
        categories
    };
}