import { Link } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";

export const Product = ({ id, title, description, price, image }) => {
  return (
    // <Link to={`/product/${id}`} component={ProductDetail}>
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
    </div>
    // </Link>
  );
};
