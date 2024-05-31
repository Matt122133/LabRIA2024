import { Route, Routes } from "react-router-dom";

import { ProductList } from "../components/ProductList";

export const ProductRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
};
