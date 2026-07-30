import { Link } from "react-router-dom";

function PropertyCard({ listing }) {
  return (
    <Link
      to={`/listings/${listing._id}`}
      className="property-card"
    >
      {listing.image && (
        <img
          src={listing.image}
          alt={listing.title}
        />
      )}

      <div className="property-info">

        <p className="location">
          {listing.location}
        </p>

        <h3>
          {listing.title}
        </h3>

        <p className="property-details">
          👥 {listing.guests} guests • 🛏️ {listing.bedrooms} bedroom{listing.bedrooms > 1 ? "s" : ""} • 🛌 {listing.beds} bed{listing.beds > 1 ? "s" : ""} • 🚿 {listing.bathrooms} bath{listing.bathrooms > 1 ? "rooms" : ""}
        </p>

        <p>
          {listing.description}
        </p>

        <div className="property-footer">
          ⭐ 5.0

          <span>
            R{listing.price} / night
          </span>
        </div>

      </div>

    </Link>
  );
}

export default PropertyCard;