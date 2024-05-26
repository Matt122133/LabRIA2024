import { Route, Routes } from "react-router-dom";
import { ProductRoutes } from "../Products/routes/ProductRoutes";
import { ProductDetailPage } from "../Products/Page/ProductDetailPage";
import Login from "../Auth/components/Login";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/detail/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<ProductRoutes />} />
      </Routes>
    </>
  );
};
