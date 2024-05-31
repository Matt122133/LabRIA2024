import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { AppRouter } from "./Router/AppRouter";

export const EcommerceApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
