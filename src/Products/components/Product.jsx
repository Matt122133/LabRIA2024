import { Link } from "react-router-dom";

export const Product = ({ id, title, description, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <h2>{price}</h2>
        <Link to={`/detail/${id}`}>More info...</Link>
      </div>
    </div>
  );
};
