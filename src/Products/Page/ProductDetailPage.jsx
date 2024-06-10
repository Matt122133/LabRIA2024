import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { ArrowBack, StarRate } from "@mui/icons-material";
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
  const [imageSelected, setimageSelected] = useState("");
  useEffect(() => {
    setimageSelected(images?.[0]);
  }, [product]);

  const changeImage = (index) => {
    setimageSelected(images?.[index]);
  };
  return (
    <>
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          color: "#1976d2",
        }}
      >
        <ArrowBack />
      </IconButton>
      <main className="pdp-container">
        <h1>{title}</h1>
        <div className="pdp-images">
          <img src={imageSelected} alt={title} />
          {images?.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={title}
              onClick={() => {
                changeImage(index);
              }}
            />
          ))}
        </div>
        <div className="pdp-content">
          <p>sku: {sku}</p>
          <p>Stock: {stock}</p>
          <p>Brand: {brand}</p>
          <p>Category: {category}</p>
          <div className="pdp-content-price">
            <p
              className={`${discountPercentage ? "old-price" : "final-price"}`}
            >
              $ {price}
            </p>
            {discountPercentage && (
              <div className="pdp-content-discount-container">
                <p className="final-price">
                  ${" "}
                  {Number(
                    (price - (price * discountPercentage) / 100).toFixed(2)
                  )}
                </p>
                <p>{discountPercentage}% OFF</p>
              </div>
            )}
          </div>
          <p>Descripción: {description}</p>
          <p>
            <StarRate
              sx={{
                position: "relative",
                top: "5px",
                left: "-3px",
                color: "gold",
              }}
            />{" "}
            {rating}
          </p>
          <div className="pdp-content-info">
            <p>{shippingInformation}</p>
            <p>{warrantyInformation}</p>
          </div>
        </div>
        <div className="pdp-content-button">
          <Button
            onClick={() => {
              if (isAuthenticated) {
                const addSuccess = addToCart(product);
                if (addSuccess) {
                  setPopupMessage("Producto agregado con exito");
                  setShowPopup(true);
                }
              } else {
                setPopupMessage(
                  "Debe estar Logueado para agregar productos al carrito."
                );
                setShowPopup(true);
              }
            }}
            sx={{
              backgroundColor: "#007bff",
              color: "white",
              "&:active": {
                background: "#007bff",
              },
              "&:hover": {
                background: "#007bff",
              },
            }}
          >
            Agregar al carrito
          </Button>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>{popupMessage}</p>
              <Button
                onClick={closePopup}
                sx={{
                  backgroundColor: "#007bff",
                  color: "white",
                  width: "100%",
                  "&:active": {
                    background: "#007bff",
                  },
                  "&:hover": {
                    background: "#007bff",
                  },
                }}
              >
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
