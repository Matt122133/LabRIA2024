import { useParams } from "react-router-dom";
import { useFetchProductById } from "../hooks/useFetchProductById";

export const ProductDetailPage = () => {
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
    </main>
  );
};
