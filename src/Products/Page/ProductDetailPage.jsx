import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductById } from "../hooks/useFetchProductById";
import { CartContext } from "../../Cart/context/CartContext";
import { Button } from "@mui/material";

export const ProductDetailPage = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { product } = useFetchProductById(id);
  const { title, category, description, price, images, rating } = product;

  return (
    <main>
      <h1>{title}</h1>
      <p>{category}</p>
      <img src={images} alt={title} />
      <h2>{price}</h2>
      <p>{description}</p>
      <p>
        {rating?.rate} {rating?.count}
      </p>
      <Button onClick={() => addToCart(product)}> Agregar al carrito</Button>
    </main>
  );
};
