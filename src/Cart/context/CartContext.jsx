import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct && existingProduct.quantity >= product.stock) {
      setPopupMessage("No hay suficiente stock disponible");
      setShowPopup(true);
    } else {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        const existingIndex = updatedCart.findIndex((p) => p.id === product.id);
        if (existingIndex !== -1) {
          updatedCart[existingIndex].quantity += 1;
        } else {
          updatedCart.push({ ...product, quantity: 1 });
        }
        return updatedCart;
      });
    }
  };

  const subtractFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingIndex = updatedCart.findIndex((p) => p.id === productId);
      if (existingIndex !== -1 && updatedCart[existingIndex].quantity > 1) {
        updatedCart[existingIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingIndex, 1);
      }
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        subtractFromCart,
        removeFromCart,
        showPopup,
        popupMessage,
        closePopup,
        setPopupMessage,
        setShowPopup,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
