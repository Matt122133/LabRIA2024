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
    .reduce((sum, product) => sum + Number((product.price - (product.price * product.discountPercentage / 100)).toFixed(2))* product.quantity, 0)
    .toFixed(2);

  return (<>
    <IconButton onClick={() => navigate(-1)}>
      <ArrowBack />
    </IconButton>
    <div className="cart">
      {cart.map((product) => {
        console.log(product)
        return (
          <div className="cart-product" key={product.id}>
            <img src={product?.images?.[0]} alt={product.name} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="cart-quantity">
                <button onClick={() => subtractFromCart(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => addToCart(product)}>+</button>
                <button onClick={() => removeFromCart(product.id)}>
                  <Delete />
                </button>
              </div>
            </div>
            <div className="cart-price-item">
              <p>$ {product.price}</p>
              {
                product.discountPercentage && (<>
                  <p className="final-price">$ {Number((product.price - (product.price * product.discountPercentage / 100)).toFixed(2))}</p>
                  <p>{product.discountPercentage}% OFF</p>
                </>
                )
              }
            <p>Total: ${(Number((product.price - (product.price * product.discountPercentage / 100))) * product.quantity).toFixed(2)}</p>
            </div>
          </div>

        )
      })}
      <p>Total: ${total}</p>
    </div>

    {showPopup && (
      <div className="popup">
        <div className="popup-content">
          <p>{popupMessage}</p>
          <button onClick={closePopup}>Cerrar</button>
        </div>
      </div>
    )}
  </>
  );
};
