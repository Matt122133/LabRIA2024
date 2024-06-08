import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Cart/context/CartContext";
import { ProductProvider } from "./Products/context/ProductContext";
import { Navbar } from "./Navbar";
import { AppRouter } from "./Router/AppRouter";

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
