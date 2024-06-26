import { Link } from "react-router-dom";
import { StarRate } from "@mui/icons-material";

export const Product = ({ id, title, price, images, rating }) => {
  return (
    <Link className="card" to={`/detail/${id}`}>
      <div className="card-image-container">
        <img src={images[0]} alt={title} />
      </div>
      <section className="card-content">
        <h3>{title}</h3>
        <div className="card-product-price">
          <p>$ {price}</p>
          <p>
            <StarRate
              sx={{
                position: "relative",
                top: "3px",
                left: "-3px",
                color: "gold",
              }}
            />
            {rating}
          </p>
        </div>
      </section>
    </Link>
  );
};
