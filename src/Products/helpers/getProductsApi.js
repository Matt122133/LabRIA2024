export const getProductsApi = async () => {
  
  const data = await fetch(import.meta.env.VITE_APP_FAKE_STORE_API_URL);
  const products = await data.json();
  return products;
};

export const getProductsApiById = async (productId) => {
  const data = await fetch(`${import.meta.env.VITE_APP_FAKE_STORE_API_URL}/${productId}`);
  const product = await data.json();
  return product;
}