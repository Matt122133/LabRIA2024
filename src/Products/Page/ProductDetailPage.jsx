import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useFetchProductById } from "../hooks/useFetchProductById";
import { CartContext } from "../../Cart/context/CartContext";

export const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
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
        <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
      </main>
    </>
  );
};
