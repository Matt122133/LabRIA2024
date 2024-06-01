import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p> <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.quantity}</p>
          <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};
