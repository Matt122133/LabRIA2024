import { Route, Routes } from "react-router-dom";

import { ProductList } from "../components/ProductList";
export const ProductRoutes = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </>
  );
};
