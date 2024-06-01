import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Cart/context/CartContext";
import { NavBar } from "./Navbar/NavBar";
import { AppRouter } from "./Router/AppRouter";

export const EcommerceApp = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </CartProvider>
  );
};
