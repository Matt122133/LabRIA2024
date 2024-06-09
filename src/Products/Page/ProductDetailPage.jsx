import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useFetchProductById } from "../hooks/useFetchProductById";
import { CartContext } from "../../Cart/context/CartContext";
import { useAuth } from "../../Auth/context/AuthContext";

export const ProductDetailPage = () => {
  const { isAuthenticated } = useAuth();
  const {
    addToCart,
    showPopup,
    popupMessage,
    closePopup,
    setPopupMessage,
    setShowPopup,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useFetchProductById(id);
  const {
    title,
    sku,
    category,
    stock,
    brand,
    description,
    price,
    images,
    rating,
    discountPercentage,
    shippingInformation,
    warrantyInformation,
  } = product;

  return (
    <>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
      <main className="pdp-container">
        <h1>{title}</h1>
        <img src={images} alt={title} />
        <div className="pdp-content">
          <p>sku: {sku}</p>
          <p>Stock: {stock}</p>
          <p>Brand: {brand}</p>
          <p>Category: {category}</p>
          <p>${price}</p>
          <p>%{discountPercentage}</p>
          <p>{description}</p>
          <p>{rating}</p>
          <p>{shippingInformation}</p>
          <p>{warrantyInformation}</p>
        </div>
        <Button
          onClick={() => {
            if (isAuthenticated) {
              addToCart(product);
            } else {
              setPopupMessage(
                "Debe estar Logueado para agregar productos al carrito."
              );
              setShowPopup(true);
            }
          }}
        >
          Agregar al carrito
        </Button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>{popupMessage}</p>
              <button onClick={closePopup}>Cerrar</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
