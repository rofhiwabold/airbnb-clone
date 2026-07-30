import { Link } from "react-router-dom";

function FutureCard({ image, title, description }) {
  return (
    <div className="future-card">
      <img src={image} alt={title} />

      <div className="future-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to="/listings">
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default FutureCard;