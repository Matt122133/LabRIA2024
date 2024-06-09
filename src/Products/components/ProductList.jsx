// ProductList.jsx
import { useContext, useState } from "react";
import {
  usePagination,
  useFetchCategories,
  useFetchProducts,
  useProductFilter,
} from "../hooks";
import { ProductContext } from "../context/ProductContext";
import { PaginationButtons, ProductGrid, CategorySidebar } from "./";

export const ProductList = () => {
  const { productsApi } = useFetchProducts();
  const { searchTerm } = useContext(ProductContext);
  const { categories } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = useProductFilter(
    productsApi,
    searchTerm,
    selectedCategories
  );
  const { currentPage, handleNextPage, handlePreviousPage, paginatedItems } =
    usePagination(1, 8);

  const currentProducts = paginatedItems(filteredProducts);

  return (
    <div className="card-categories">
      <div className="categories-list-container">
        <CategorySidebar
          categories={categories}
          onSelectCategory={setSelectedCategories}
        />
      </div>

      <main className="card-grid">
        <ProductGrid products={currentProducts} />
        <PaginationButtons
          currentPage={currentPage}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          isLastPage={currentProducts.length < 8}
        />
      </main>
    </div>
  );
};
