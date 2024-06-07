import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Cart/context/CartContext";
import { Navbar } from "./Navbar/Navbar";
import { AppRouter } from "./Router/AppRouter";
import { ProductProvider } from "./Products/context/ProductContext";

export const EcommerceApp = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
};
