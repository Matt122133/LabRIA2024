import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Cart/context/CartContext";
import { Navbar } from "./Navbar/Navbar";
import { AppRouter } from "./Router/AppRouter";
import { ProductProvider } from "./Products/context/ProductContext";
import {AuthProvider} from "./Auth/components/context/AuthContext";

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
