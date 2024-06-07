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