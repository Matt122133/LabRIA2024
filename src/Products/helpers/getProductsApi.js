
export const getProductsApi = async () => {
  const data = await fetch(`${import.meta.env.VITE_APP_DUMMY_JSON_API_URL}?limit=0`);
  const products = await data.json();
  return products.products;
};

export const getProductsApiById = async (productId) => {
  const data = await fetch(`${import.meta.env.VITE_APP_DUMMY_JSON_API_URL}/${productId}`);
  const product = await data.json();
  return product;
}

export const getAllCategories = async() => {
  const data = await fetch(`${import.meta.env.VITE_APP_DUMMY_JSON_API_URL}/categories`);
  const categories = await data.json();
  return categories;
}

export const getProductsByCategory = async(category) => {
  const data = await fetch(`${import.meta.env.VITE_APP_DUMMY_JSON_API_URL}/categories/${category}`);
  const productsByCategory = await data.json();
  return productsByCategory;
}