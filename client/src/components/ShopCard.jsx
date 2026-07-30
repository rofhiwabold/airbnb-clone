import { Link } from "react-router-dom";

function ShopCard({ image, title, description, category }) {
  return (
    <div className="shop-card">
      <img src={image} alt={title} />

      <div className="shop-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link to={`/shop/${category}`}>
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default ShopCard;