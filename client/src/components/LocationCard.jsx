function LocationCard({ image, title, distance }) {
  return (
    <div className="location-card">
      <img src={image} alt={title} />

      <div className="location-info">
        <h3>{title}</h3>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default LocationCard;