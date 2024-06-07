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
    brand,
    description,
    price,
    images,
    raiting,
    discountPercentage,
    warrantyInformation,
  } = product;

  return (
    <main>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack />
      </IconButton>
      <h1>{title}</h1>
      <p>sku: {sku}</p>
      <p>brand: {brand}</p>
      <p>category: {category}</p>
      <img src={images} alt={title} />
      <h2>{price}</h2>
      <h2>%{discountPercentage}</h2>
      <p>{description}</p>
      <p>{raiting}</p>
      <p>{warrantyInformation}</p>
      <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
    </main>
  );
};
