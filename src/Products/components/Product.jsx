import { Link } from "react-router-dom";

export const Product = ({ id, title, price, images }) => {
  return (
    <Link className="card" to={`/detail/${id}`}>
      <img src={images[0]} alt={title} />
      <section className="card-content">
        <h3>{title}</h3>
        <h2>{price}</h2>
      </section>
    </Link>
  );
};
