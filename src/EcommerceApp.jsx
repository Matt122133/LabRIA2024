import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Cart/context/CartContext";
import { Navbar } from "./Navbar/Navbar";
import { AppRouter } from "./Router/AppRouter";

export const EcommerceApp = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </CartProvider>
  );
};
