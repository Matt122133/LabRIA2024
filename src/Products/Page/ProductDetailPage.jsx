import { useParams } from "react-router-dom";
import { useFetchProductById } from "../hooks/useFetchProductById";

export const ProductDetailPage = () => {
  const params = useParams();
  const { product } = useFetchProductById(params.id);
  const { title, category, description, price, image, rating } = product;

  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{category}</p>
        <img src={image} alt={title} />
        <h2>{price}</h2>
        <h3>{description}</h3>
        <p>
          {rating?.rate} {rating?.count}
        </p>
      </div>
    </>
  );
};
