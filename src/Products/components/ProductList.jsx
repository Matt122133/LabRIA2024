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
import { Button } from "@mui/material";

export const ProductList = () => {
  const { productsApi } = useFetchProducts();
  const { searchTerm } = useContext(ProductContext);
  const { categories } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState(false);

  const filteredProducts = useProductFilter(
    productsApi,
    searchTerm,
    selectedCategories
  );
  const { currentPage, handleNextPage, handlePreviousPage, paginatedItems } =
    usePagination(1, 8);

  const currentProducts = paginatedItems(filteredProducts);
  const openSidebar = (e) => {

    setOpenCategories((prev => !prev))
    
  }
  const closeBackgroundSidebar = (e) => {
    if(e?.target?.className == "sidebar"){
      setOpenCategories((prev => !prev))
    }
  }
  return (
    <div className="card-categories">
      <Button
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "230px", margin: "auto"}}
          onClick={openSidebar}
          className="categories-button-responsive"
        >
          Categorias
        </Button>
      <div onClick={closeBackgroundSidebar} className={`categories-list-container ${openCategories ? "open-categories": ""}`}>
        <CategorySidebar
          categories={categories}
          onSelectCategory={setSelectedCategories}
          closeCategories={openSidebar}
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
