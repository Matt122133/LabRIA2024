import { Route, Routes } from "react-router-dom";
import { Login } from "../Auth/components/Login";
import { ProductRoutes } from "../Products/routes/ProductRoutes";
import { ProductDetailPage } from "../Products/Page/ProductDetailPage";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<ProductRoutes />} />
      </Routes>
    </>
  );
};
