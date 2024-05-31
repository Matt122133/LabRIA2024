import { Route, Routes } from "react-router-dom";
import { ProductRoutes } from "../Products/routes/ProductRoutes";
import { ProductDetailPage } from "../Products/Page/ProductDetailPage";
import Login from "../Auth/components/Login";
import Home from "../Auth/components/Home";
import Register from "../Auth/Register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<ProductDetailPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<ProductRoutes />} />
    </Routes>
  );
};
