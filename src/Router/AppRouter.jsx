import { Route, Routes } from "react-router-dom";
import { Login } from "../Auth/components/Login";
import { ProductRoutes } from "../Products/routes/ProductRoutes";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ProductRoutes />} />
      </Routes>
    </>
  );
};
