import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth/context/AuthContext";
import { CartProvider } from "./Cart/context/CartContext";
import { ProductProvider } from "./Products/context/ProductContext";
import { Navbar } from "./Navbar";
import { AppRouter } from "./Router/AppRouter";

export const EcommerceApp = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
};
