import { Link } from "react-router-dom";

function ExperienceCard({ image, title, description, category }) {
  return (
    <div className="experience-card">
      <img src={image} alt={title} />

      <div className="experience-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={`/experiences/${category}`}>
          <button>
            Explore
          </button>
        </Link>

      </div>
    </div>
  );
}

export default ExperienceCard;