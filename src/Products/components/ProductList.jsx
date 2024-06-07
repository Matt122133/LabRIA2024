import { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useFetchCategories } from "../hooks/useFetchCategories";
import { CategorySidebar } from "./CategorySidebar";
import { ProductContext } from "../context/ProductContext";

export const ProductList = () => {
  const { productsApi } = useFetchProducts();
  const { searchTerm } = useContext(ProductContext);
  const { categories } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [listProduct, setListProduct] = useState(productsApi);

  const handleSelectCategory = (selected) => {
    setSelectedCategories(selected);
  };

  useEffect(() => {
    const filteredProducts = productsApi.filter((product) => {
      const matchesCategory =
        selectedCategories.length > 0
          ? selectedCategories.includes(product.category)
          : true;
      const matchesSearchTerm = searchTerm
        ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesSearchTerm;
    });

    setListProduct(filteredProducts);
  }, [searchTerm, productsApi, selectedCategories]);

  return (
    <div className="card-categories">
      <div className="categories-list-container">
        <CategorySidebar
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      </div>

      <main className="card-grid">
        {listProduct.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </main>
    </div>
  );
};
