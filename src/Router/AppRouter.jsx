import { Route, Routes } from "react-router-dom";
import { ProductRoutes } from "../Products/routes/ProductRoutes";
import { ProductDetailPage } from "../Products/Page/ProductDetailPage";
import { Login, Register } from "../Auth/components";
import { Cart } from "../Cart/components/Cart";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<ProductDetailPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<ProductRoutes />} />
    </Routes>
  );
};
