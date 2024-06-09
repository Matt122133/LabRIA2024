import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const {
    cart,
    addToCart,
    subtractFromCart,
    removeFromCart,
    showPopup,
    popupMessage,
    closePopup,
  } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div>
        <p>No tienes productos en el carrito.</p>
        <Button onClick={() => navigate("/")}>Ir a buscar productos</Button>
      </div>
    );
  }

  const total = cart
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
      {cart.map((product) => (
        <div className="cart-product" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
          <div className="cart-quantity">
            <button onClick={() => subtractFromCart(product.id)}>-</button>
            <p>{product.quantity}</p>
            <button onClick={() => addToCart(product)}>+</button>
          </div>
          <button onClick={() => removeFromCart(product.id)}>
            <Delete />
          </button>
        </div>
      ))}
      <p>Total: ${total}</p>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};
