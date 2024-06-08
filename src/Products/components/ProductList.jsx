import { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useFetchCategories } from "../hooks/useFetchCategories";
import { CategorySidebar } from "./CategorySidebar";
import { ProductContext } from "../context/ProductContext";
import { Button, Grid, Box } from '@mui/material';

export const ProductList = () => {
  const { productsApi } = useFetchProducts();
  const { searchTerm } = useContext(ProductContext);
  const { categories } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [listProduct, setListProduct] = useState(productsApi);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = listProduct.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="card-categories">
      <div className="categories-list-container">
        <CategorySidebar
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
      </div>

      <main className="card-grid">
        <Grid item xs={12} sm={10} mb={2} mt={4} container spacing={1}>
          {currentProducts.map((product) => (
              <Product {...product} />
          ))}
        </Grid>
        <Box mt={4} display="flex" justifyContent="center" className="pagination-buttons">
          <Button
            variant="contained"
            color="primary"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ marginRight: '10px' }}
          >
            Página Anterior
          </Button>
          
          <Button 
            variant="contained"
            color="primary"
            onClick={handleNextPage}
            disabled={indexOfLastProduct >= listProduct.length}
            style={{ marginLeft: '10px' }}
          >
            Siguiente Página
          </Button>
        </Box>
      </main>
    </div>
  );
};
