import { Link } from "react-router-dom";

function ExperienceItem({ image, title, description, price, rating }) {
  return (
    <div className="experience-item">

      <img src={image} alt={title} />

      <div className="experience-item-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <p>
          ⭐ {rating}
        </p>

        <h4>
        {price}
        </h4>

        <Link to="/experience-booking">
          <button className="book-btn">
            Book Experience
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ExperienceItem;