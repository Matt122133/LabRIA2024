export const getProductsApi = async () => {
  console.log('[egue');
  const data = await fetch(import.meta.env.VITE_APP_DUMMY_JSON_API_URL);
  const products = await data.json();
  return products.products;
};

export const getProductsApiById = async (productId) => {
  const data = await fetch(`${import.meta.env.VITE_APP_DUMMY_JSON_API_URL}/${productId}`);
  const product = await data.json();
  return product;
}

export const getProductsApiByQuery = async (query) => {
  const data = await fetch(`${import.meta.env.VITE_APP_DUMMY_JSON_API_URL}/search?q=${query}`);
  const products = await data.json();
  return products.products;
}