import { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { ProductContext } from "../context/ProductContext";

export const ProductList = () => {
  const { productsApi } = useFetchProducts();
  const { searchTerm } = useContext(ProductContext);
  const [listProduct, setListProduct] = useState(productsApi);

  useEffect(() => {
    setListProduct(
      searchTerm
        ? productsApi.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : productsApi
    );
  }, [searchTerm]);

  useEffect(() => {
    setListProduct(productsApi);
  }, [productsApi]);

  return (
    <main className="card-grid">
      {listProduct &&
        listProduct.map((product) => <Product key={product.id} {...product} />)}
    </main>
  );
};
