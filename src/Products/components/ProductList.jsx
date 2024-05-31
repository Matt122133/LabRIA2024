import { Product } from "./Product";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const ProductList = () => {
  const { products, isLoading } = useFetchProducts();

  return (
    <main className="card-grid">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </main>
  );
};