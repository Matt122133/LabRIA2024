import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
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
          <p>{product.description}</p> <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.quantity}</p>
          <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  );
};
